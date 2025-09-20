// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface IImpactToken {
    function mint(address to, uint256 amount) external;
}

contract Charity is ReentrancyGuard, Ownable {
    struct Milestone {
        string description;
        uint256 percentage; // percent of current contract balance (0-100)
        bool released;
        uint256 approvals;
    }

    address public ngo;
    uint256 public target;
    uint256 public deadline; // unix timestamp
    uint256 public totalDonated;
    address[] public approvers;
    uint256 public approvalsRequired;
    Milestone[] public milestones;

    IImpactToken public token;
    uint256 public tokensPerWei;

    mapping(address => uint256) public contributions;
    mapping(uint256 => mapping(address => bool)) public milestoneApprovals;
    mapping(address => bool) public isApprover;
    address[] public donors;

    event DonationReceived(address indexed donor, uint256 amount);
    event RefundClaimed(address indexed donor, uint256 amount);
    event MilestoneApproved(address indexed approver, uint256 indexed milestoneIndex);
    event MilestoneReleased(uint256 indexed milestoneIndex, uint256 amount);
    event TokensRewarded(address indexed donor, uint256 amount);

    constructor(
        address _ngo,
        uint256 _target,
        uint256 _deadline,
        address[] memory _approvers,
        uint256 _approvalsRequired,
        address _token,
        uint256 _tokensPerWei
    ) {
        require(_ngo != address(0), "invalid ngo");
        ngo = _ngo;
        target = _target;
        deadline = _deadline;
        approvers = _approvers;
        approvalsRequired = _approvalsRequired;
        token = IImpactToken(_token);
        tokensPerWei = _tokensPerWei;
        for (uint i = 0; i < _approvers.length; i++) {
            isApprover[_approvers[i]] = true;
        }
        transferOwnership(msg.sender);
    }

    modifier onlyApprover() {
        require(isApprover[msg.sender], "not an approver");
        _;
    }

    function donate() external payable nonReentrant {
        require(msg.value > 0, "donation must be > 0");
        require(block.timestamp <= deadline, "campaign ended");

        if (contributions[msg.sender] == 0) {
            donors.push(msg.sender);
        }
        contributions[msg.sender] += msg.value;
        totalDonated += msg.value;

        // reward tokens (token contract must allow Charity contract to mint = token owner)
        if (address(token) != address(0) && tokensPerWei > 0) {
            uint256 toMint = tokensPerWei * msg.value;
            try token.mint(msg.sender, toMint) {
                emit TokensRewarded(msg.sender, toMint);
            } catch {
                // Do not revert if token mint fails
            }
        }

        emit DonationReceived(msg.sender, msg.value);
    }

    function addMilestone(string calldata description, uint256 percentage) external onlyOwner {
        require(percentage > 0 && percentage <= 100, "invalid percentage");
        uint256 totalPerc;
        for (uint i = 0; i < milestones.length; i++) {
            totalPerc += milestones[i].percentage;
        }
        require(totalPerc + percentage <= 100, "total >100");
        milestones.push(Milestone(description, percentage, false, 0));
    }

    function approveMilestone(uint256 index) external onlyApprover {
        require(index < milestones.length, "invalid index");
        require(!milestoneApprovals[index][msg.sender], "already approved");
        milestoneApprovals[index][msg.sender] = true;
        milestones[index].approvals += 1;
        emit MilestoneApproved(msg.sender, index);
    }

    function releaseMilestone(uint256 index) external nonReentrant {
        require(index < milestones.length, "invalid index");
        Milestone storage m = milestones[index];
        require(!m.released, "already released");
        require(m.approvals >= approvalsRequired, "not enough approvals");
        uint256 amount = (address(this).balance * m.percentage) / 100;
        m.released = true;
        (bool ok, ) = ngo.call{ value: amount }("");
        require(ok, "transfer failed");
        emit MilestoneReleased(index, amount);
    }

    function claimRefund() external nonReentrant {
        require(block.timestamp > deadline, "deadline not reached");
        require(totalDonated < target, "target met");
        uint256 contributed = contributions[msg.sender];
        require(contributed > 0, "no contributions");
        contributions[msg.sender] = 0;
        totalDonated -= contributed;
        (bool ok, ) = payable(msg.sender).call{ value: contributed }("");
        require(ok, "refund failed");
        emit RefundClaimed(msg.sender, contributed);
    }

    // helpers
    function getDonors() external view returns (address[] memory) {
        return donors;
    }

    function getMilestonesCount() external view returns (uint256) {
        return milestones.length;
    }

    function getMilestone(uint256 index) external view returns (string memory description, uint256 percentage, bool released, uint256 approvals) {
        Milestone storage m = milestones[index];
        return (m.description, m.percentage, m.released, m.approvals);
    }
}
