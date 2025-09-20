import CharityABI from "./Charity.full.json";

declare module "*.json" {
  const value: any;
  export default value;
}