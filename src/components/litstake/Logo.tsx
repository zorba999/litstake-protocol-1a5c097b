interface Props {
  className?: string;
  showWordmark?: boolean;
}

const Logo = ({ className, showWordmark = false }: Props) => (
  <div className={`flex flex-col items-center ${className ?? ""}`}>
    <svg
      viewBox="0 0 64 64"
      className="h-10 w-10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="LitStake logo"
    >
      {/* Fluid S — single continuous teal stroke */}
      <path
        d="M48 16 C48 10, 38 8, 30 12 C20 17, 14 24, 18 32 C22 40, 38 40, 44 46 C49 51, 42 56, 32 54 C24 52.5, 18 50, 16 46"
        stroke="#64BFD3"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      {/* End droplets */}
      <circle cx="49.2" cy="15.2" r="2.6" fill="#64BFD3" />
      <circle cx="15.2" cy="46.6" r="2.6" fill="#64BFD3" />
      {/* Tiny trailing micro-droplets for liquid feel */}
      <circle cx="53" cy="13" r="1" fill="#64BFD3" />
      <circle cx="12" cy="49" r="1" fill="#64BFD3" />
    </svg>
    {showWordmark && (
      <div className="mt-1 text-[10px] uppercase tracking-[0.4em] text-primary">
        LitStake
      </div>
    )}
  </div>
);

export default Logo;
