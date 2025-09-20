// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ImpactToken is ERC20, Ownable {
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {}

    /// @notice Mint tokens to `to`. Only owner can mint.
    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }
}
