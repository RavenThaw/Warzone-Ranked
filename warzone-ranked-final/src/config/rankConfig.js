
import bronze from "@/assets/ranks/bronze.png";
import silver from "@/assets/ranks/silver.png";
import gold from "@/assets/ranks/gold.png";
import platinum from "@/assets/ranks/platinum.png";
import diamond from "@/assets/ranks/diamond.png";
import crimson from "@/assets/ranks/crimson.png";
import iridescent from "@/assets/ranks/iridescent.png";
import top250 from "@/assets/ranks/top250.png";

export const ranks = [
  { name: "Bronze I", min: 0, max: 299, icon: bronze },
  { name: "Bronze II", min: 300, max: 599, icon: bronze },
  { name: "Bronze III", min: 600, max: 899, icon: bronze },
  { name: "Silver I", min: 900, max: 1299, icon: silver },
  { name: "Silver II", min: 1300, max: 1699, icon: silver },
  { name: "Silver III", min: 1700, max: 2099, icon: silver },
  { name: "Gold I", min: 2100, max: 2599, icon: gold },
  { name: "Gold II", min: 2600, max: 3099, icon: gold },
  { name: "Gold III", min: 3100, max: 3599, icon: gold },
  { name: "Platinum I", min: 3600, max: 4199, icon: platinum },
  { name: "Platinum II", min: 4200, max: 4799, icon: platinum },
  { name: "Platinum III", min: 4800, max: 5399, icon: platinum },
  { name: "Diamond I", min: 5400, max: 6099, icon: diamond },
  { name: "Diamond II", min: 6100, max: 6799, icon: diamond },
  { name: "Diamond III", min: 6800, max: 7499, icon: diamond },
  { name: "Crimson I", min: 7500, max: 8333, icon: crimson },
  { name: "Crimson II", min: 8334, max: 9166, icon: crimson },
  { name: "Crimson III", min: 9167, max: 9999, icon: crimson },
  { name: "Iridescent", min: 10000, max: 10000, icon: iridescent },
  { name: "Top 250", min: 10001, max: Infinity, icon: top250 },
];

export const getRank = (sr) => ranks.find(r => sr >= r.min && sr <= r.max);
