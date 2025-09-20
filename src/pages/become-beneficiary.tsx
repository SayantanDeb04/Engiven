import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BecomeBeneficiary = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    wallet: "",
    campaign: "",
  });

  const campaigns = ["Education Fund", "Clean Water Project", "Healthcare Aid", "Animal Welfare"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your request to become a beneficiary for "${formData.campaign}" has been submitted.`);
    // Here you can send the data to your backend or smart contract
    setFormData({ name: "", email: "", wallet: "", campaign: "" });
  };

  return (
    <div>
      <Navbar />
      <div className="h-[50px]"></div>
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-4">Become a Beneficiary</h1>
        <p className="text-center max-w-xl mb-6">
          Receive donations from people around the globe. No bank account is required. You can accept donations in ETH or MATIC.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg flex flex-col space-y-6"
        >
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Wallet Address (ETH/MATIC)</label>
            <input
              type="text"
              name="wallet"
              value={formData.wallet}
              onChange={handleChange}
              placeholder="0x..."
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Select Campaign</label>
            <select
              name="campaign"
              value={formData.campaign}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            >
              <option value="" disabled>
                -- Choose a campaign --
              </option>
              {campaigns.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-black px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Register as Beneficiary
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default BecomeBeneficiary;
