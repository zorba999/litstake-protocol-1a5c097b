import { useState } from "react";
import { ArrowDownUp, Loader2, ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const RATE = 1.024817;
const fmt = (n: number) => n.toLocaleString("en-US", { minimumFractionDigits: 6, maximumFractionDigits: 6 });

const StakeCard = () => {
  const [tab, setTab] = useState<"stake" | "unstake">("stake");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const balance = tab === "stake" ? 248.124501 : 122.481033;
  const inputSym = tab === "stake" ? "zkLTC" : "stLTC";
  const outSym   = tab === "stake" ? "stLTC" : "zkLTC";
  const num = parseFloat(amount) || 0;
  const out = tab === "stake" ? num / RATE : num * RATE;

  const submit = () => {
    if (!num) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAmount("");
      toast.success(`${tab === "stake" ? "Staked" : "Unstaked"} ${fmt(num)} ${inputSym}`, {
        description: "Transaction confirmed on LitVM",
        action: { label: "View ↗", onClick: () => window.open("#", "_blank") },
      });
    }, 1600);
  };

  return (
    <div className="glass glass-hover rounded-3xl p-6 md:p-8 animate-fade-up">
      {/* Tabs */}
      <div className="grid grid-cols-2 gap-1 rounded-xl bg-muted/40 p-1">
        {(["stake", "unstake"] as const).map((t) => (
          <button
            key={t}
            onClick={() => { setTab(t); setAmount(""); }}
            className={`rounded-lg py-2.5 font-display text-sm font-bold uppercase tracking-widest transition ${
              tab === t ? "bg-primary/15 text-primary text-glow" : "text-muted-foreground hover:text-foreground"
            }`}
          >{t}</button>
        ))}
      </div>

      {/* Input */}
      <div className="mt-6 rounded-2xl border border-border/70 bg-background/40 p-4">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>You {tab === "stake" ? "deposit" : "burn"}</span>
          <span>Balance: <span className="font-mono text-foreground/80">{fmt(balance)}</span></span>
        </div>
        <div className="mt-2 flex items-center gap-3">
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ""))}
            placeholder="0.000000"
            inputMode="decimal"
            className="w-full bg-transparent font-mono text-3xl font-semibold text-foreground placeholder:text-muted-foreground/40 focus:outline-none"
          />
          <button onClick={() => setAmount(String(balance))} className="rounded-md border border-primary/40 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-primary hover:bg-primary/10">MAX</button>
          <div className="flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-2 font-display text-sm font-bold text-primary">{inputSym}</div>
        </div>
      </div>

      {/* Arrow */}
      <div className="my-2 flex justify-center">
        <div className="rounded-full border border-primary/30 bg-background p-2 text-primary">
          <ArrowDownUp className="h-4 w-4" />
        </div>
      </div>

      {/* Preview */}
      <div className="rounded-2xl border border-border/70 bg-background/40 p-4">
        <div className="text-xs text-muted-foreground">You receive (est.)</div>
        <div className="mt-1 flex items-baseline justify-between">
          <span className="font-mono text-2xl text-primary text-glow">{fmt(out)}</span>
          <span className="font-display text-sm font-bold text-primary">{outSym}</span>
        </div>
        <div className="mt-3 flex justify-between border-t border-border/60 pt-3 text-xs font-mono text-muted-foreground">
          <span>Exchange rate</span>
          <span>1 stLTC = {fmt(RATE)} zkLTC</span>
        </div>
      </div>

      <Button onClick={submit} disabled={!num || loading} className="btn-glow mt-5 h-14 w-full font-display text-base font-bold uppercase tracking-widest text-primary-foreground disabled:opacity-50">
        {loading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processing</> :
          <><Sparkles className="mr-2 h-5 w-5" /> {tab === "stake" ? "Stake zkLTC" : "Unstake stLTC"}</>}
      </Button>

      {/* Position */}
      <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-primary">Your Position</span>
          <a href="#" className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary">explorer <ExternalLink className="h-3 w-3" /></a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-xs text-muted-foreground">stLTC Balance</div>
            <div className="font-mono text-lg text-foreground">{fmt(122.481033)}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">zkLTC Value</div>
            <div className="font-mono text-lg text-success">{fmt(122.481033 * RATE)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StakeCard;
