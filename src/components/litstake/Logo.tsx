import logoImg from "@/assets/litstake-logo.png";

interface Props {
  className?: string;
  showWordmark?: boolean;
  size?: number;
}

const Logo = ({ className, showWordmark = false, size = 40 }: Props) => (
  <div className={`flex flex-col items-center ${className ?? ""}`}>
    <img
      src={logoImg}
      alt="LitStake logo"
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className="object-contain"
    />
    {showWordmark && (
      <div className="mt-1.5 text-[10px] uppercase tracking-[0.4em] text-primary">
        LitStake
      </div>
    )}
  </div>
);

export default Logo;
