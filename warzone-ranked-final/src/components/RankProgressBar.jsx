
import { motion } from "framer-motion";
import { getRank, ranks } from "@/config/rankConfig";

export default function RankProgressBar({ sr }) {
  const current = getRank(sr);
  const idx = ranks.indexOf(current);
  const prev = ranks[idx-1];
  const next = ranks[idx+1];
  const progress = (sr-current.min)/(current.max-current.min||1);
  return (
    <div className="mt-4">
      <img src={current.icon} className="w-32 mx-auto"/>
      <motion.div className="h-3 bg-zinc-800 rounded overflow-hidden">
        <motion.div className="h-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500"
          animate={{width:`${Math.min(progress*100,100)}%`}}/>
      </motion.div>
      <div className="flex justify-between text-xs mt-1 text-zinc-400">
        <span>{prev?.name}</span>
        <span className="text-white">{current.name}</span>
        <span>{next?.name}</span>
      </div>
    </div>
  );
}
