import { useState } from "react";
import AnimatedBg from "@/components/litstake/AnimatedBg";
import Header from "@/components/litstake/Header";
import NetworkBanner from "@/components/litstake/NetworkBanner";
import Hero from "@/components/litstake/Hero";
import StatsBar from "@/components/litstake/StatsBar";
import StakeCard from "@/components/litstake/StakeCard";
import HowItWorks from "@/components/litstake/HowItWorks";
import Footer from "@/components/litstake/Footer";
import { toast } from "sonner";

const Index = () => {
  const [address, setAddress] = useState<string | null>(null);
  const [wrongNetwork, setWrongNetwork] = useState(true);

  const connect = () => {
    setAddress("0x9F4ac3D2c9E18b7a8F1D6c2e5B7a9D3eF1c4A8B2");
    setWrongNetwork(false);
    toast.success("Wallet connected", { description: "LitVM LiteForge · Chain 4441" });
  };

  return (
    <div className="relative min-h-screen">
      <AnimatedBg />
      <NetworkBanner wrong={wrongNetwork && !address} />
      <Header address={address} onConnect={connect} />

      <main>
        <Hero />
        <StatsBar />

        <section className="container mx-auto grid gap-8 px-4 py-14 lg:grid-cols-[1.1fr_1fr]">
          <div className="glass rounded-3xl p-8 animate-fade-up">
            <div className="pill">Liquid Staking</div>
            <h2 className="font-display mt-4 text-3xl md:text-4xl font-bold leading-tight">
              Capital efficient.<br/>Self-custodial. Composable.
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              stLTC is a yield-bearing receipt token. Trade it, lend it, or use it as collateral while your zkLTC keeps earning a simulated <span className="text-success font-semibold">5.00% APY</span> on the LiteForge testnet.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              {[
                ["TVL", "$24.8M"],
                ["Validators", "128"],
                ["Avg. block", "2.1s"],
              ].map(([k,v]) => (
                <div key={k} className="rounded-xl border border-border/60 bg-background/40 p-3">
                  <div className="font-mono text-lg text-primary">{v}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{k}</div>
                </div>
              ))}
            </div>
          </div>

          <StakeCard />
        </section>

        <HowItWorks />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
