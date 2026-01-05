
import { useState } from "react";
import RankProgressBar from "./RankProgressBar";

export default function SRTracker() {
  const [sr, setSR] = useState(0);
  const [input, setInput] = useState(0);
  return (
    <div className="p-6 text-center">
      <div className="text-4xl font-bold">{sr} SR</div>
      <RankProgressBar sr={sr} />
      <div className="flex gap-3 justify-center mt-4">
        <input type="number" onChange={e=>setInput(+e.target.value)} className="w-24 bg-zinc-900 p-2 rounded"/>
        <button onClick={()=>setSR(sr+input)} className="bg-emerald-500 px-4 rounded">+</button>
        <button onClick={()=>setSR(Math.max(0,sr-input))} className="bg-red-600 px-4 rounded">-</button>
      </div>
    </div>
  );
}
