
import dragon from "@/assets/dragonicon.png";
import SRTracker from "@/components/SRTracker";
import StatsTracker from "@/components/StatsTracker";
import TeamCreation from "@/components/TeamCreation";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white">
      <img src={dragon} className="w-64 mx-auto mt-6"/>
      <SRTracker />
      <StatsTracker />
      <TeamCreation />
    </div>
  );
}
