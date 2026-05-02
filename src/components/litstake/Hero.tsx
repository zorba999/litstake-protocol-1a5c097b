import { Activity } from "lucide-react";

const Hero = () => (
  <section className="container mx-auto px-4 pt-16 pb-10 text-center animate-fade-up">
    <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-primary">
      <Activity className="h-3.5 w-3.5 animate-pulse" /> LitVM LiteForge · Chain 4441
    </div>
    <h1 className="font-display mt-6 text-5xl md:text-7xl font-black leading-[1.05] shimmer-text">
      Liquid Staking,<br/>Rebuilt for Litecoin.
    </h1>
    <p className="mx-auto mt-6 max-w-xl text-lg md:text-xl text-muted-foreground">
      Stake <span className="text-primary font-semibold">zkLTC</span>. Earn yield. Stay liquid.
    </p>
    <div className="mt-8 flex justify-center gap-3 text-xs font-mono text-muted-foreground">
      <span className="rounded-md border border-border px-2 py-1">block #1,284,901</span>
      <span className="rounded-md border border-border px-2 py-1 text-success">● live</span>
      <span className="rounded-md border border-border px-2 py-1">gas 0.00012 LTC</span>
    </div>
  </section>
);
export default Hero;
