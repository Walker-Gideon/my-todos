import Container from "./Container";

interface ShadowBoxProps {
  border?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function ShadowBox({ border, children, className }: ShadowBoxProps) {
  return (
    <Container
      variant="div"
      className={`w-full bg-white rounded-xl p-4 ${border && "primary-border shadow-lg"} ${className}`}
    >
      {children}
    </Container>
  );
}