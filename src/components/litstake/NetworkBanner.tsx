import { AlertTriangle, X } from "lucide-react";
import { useState } from "react";

const NetworkBanner = ({ wrong }: { wrong: boolean }) => {
  const [hide, setHide] = useState(false);
  if (!wrong || hide) return null;
  return (
    <div className="border-b border-warning/40 bg-warning/10 text-warning">
      <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-2 text-sm">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4" />
          <span><strong className="font-display tracking-wide">Wrong network.</strong> Switch to LitVM LiteForge (Chain ID 4441) to interact.</span>
        </div>
        <button onClick={() => setHide(true)} className="rounded p-1 hover:bg-warning/20"><X className="h-4 w-4"/></button>
      </div>
    </div>
  );
};
export default NetworkBanner;
