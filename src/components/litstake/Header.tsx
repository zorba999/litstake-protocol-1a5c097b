import { useState } from "react";
import { Wallet, Compass, Droplet, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const truncate = (a: string) => `${a.slice(0, 6)}...${a.slice(-4)}`;

interface Props { address: string | null; onConnect: () => void; }

const Header = ({ address, onConnect }: Props) => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/60 border-b border-primary/15">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="relative grid h-10 w-10 place-items-center rounded-xl font-display text-lg font-black text-primary-foreground"
               style={{ background: 'var(--gradient-primary)', boxShadow: 'var(--glow-soft)' }}>
            LS
          </div>
          <div className="leading-tight">
            <div className="font-display text-base font-bold tracking-widest text-foreground">LitStake</div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Protocol</div>
          </div>
          <span className="pill ml-2"><span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-dot" />Testnet</span>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {[
            { icon: Compass, label: "Explorer" },
            { icon: Droplet, label: "Faucet" },
            { icon: BookOpen, label: "Docs" },
          ].map(({ icon: Icon, label }) => (
            <a key={label} href="#" className="group flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:text-primary hover:bg-primary/5">
              <Icon className="h-4 w-4 transition group-hover:drop-shadow-[0_0_6px_hsl(var(--primary))]" />
              {label}
            </a>
          ))}
        </nav>

        <Button onClick={onConnect} className="btn-glow text-primary-foreground font-semibold">
          <Wallet className="mr-2 h-4 w-4" />
          {address ? truncate(address) : "Connect Wallet"}
        </Button>
      </div>
    </header>
  );
};
export default Header;
