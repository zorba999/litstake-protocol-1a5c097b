interface Props {
  className?: string;
  showWordmark?: boolean;
  size?: number;
}

const Logo = ({ className, showWordmark = false, size = 40 }: Props) => (
  <div className={`flex flex-col items-center ${className ?? ""}`}>
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="LitStake logo"
    >
      {/*
        Fluid "S" — single continuous stroke that loops like liquid.
        Top end starts as a droplet on the upper-right, flows left,
        curves through the middle, then exits bottom-left as a droplet.
      */}
      <path
        d="M50 18
           C50 10, 38 8, 28 12
           C16 17, 14 28, 24 32
           C34 36, 44 36, 46 44
           C48 52, 36 56, 24 52
           C18 50, 14 46, 14 42"
        stroke="#64BFD3"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Liquid droplet terminals */}
      <circle cx="50" cy="18" r="3.5" fill="#64BFD3" />
      <circle cx="14" cy="42" r="3.5" fill="#64BFD3" />
      {/* Tiny trailing micro-droplets */}
      <circle cx="55" cy="14" r="1.4" fill="#64BFD3" />
      <circle cx="9" cy="46" r="1.4" fill="#64BFD3" />
    </svg>
    {showWordmark && (
      <div className="mt-1.5 text-[10px] uppercase tracking-[0.4em] text-primary">
        LitStake
      </div>
    )}
  </div>
);

export default Logo;
