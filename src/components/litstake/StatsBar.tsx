import { Coins, TrendingUp, Repeat, Layers } from "lucide-react";

const stats = [
  { icon: Coins, label: "Total Staked", value: "1,248,902.482910", unit: "zkLTC", accent: "text-primary" },
  { icon: TrendingUp, label: "Simulated APY", value: "5.000000", unit: "%", accent: "text-success" },
  { icon: Repeat, label: "Exchange Rate", value: "1.024817", unit: "zkLTC / stLTC", accent: "text-foreground" },
  { icon: Layers, label: "stLTC Supply", value: "1,218,447.105622", unit: "stLTC", accent: "text-foreground" },
];

const StatsBar = () => (
  <section className="container mx-auto px-4">
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s, i) => (
        <div key={s.label} className="glass glass-hover rounded-2xl p-5 animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{s.label}</span>
            <s.icon className="h-4 w-4 text-primary" />
          </div>
          <div className={`mt-3 font-mono text-2xl font-semibold ${s.accent}`}>{s.value}</div>
          <div className="mt-1 text-xs text-muted-foreground">{s.unit}</div>
        </div>
      ))}
    </div>
  </section>
);
export default StatsBar;
