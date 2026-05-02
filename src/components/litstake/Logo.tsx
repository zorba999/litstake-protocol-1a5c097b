import logoImg from "@/assets/litstake-logo.png";

interface Props {
  className?: string;
  size?: number;
}

const Logo = ({ className, size = 40 }: Props) => (
  <img
    src={logoImg}
    alt="LitStake logo"
    width={size}
    height={size}
    style={{ width: size, height: size }}
    className={`object-contain rounded-lg ${className ?? ""}`}
  />
);

export default Logo;
