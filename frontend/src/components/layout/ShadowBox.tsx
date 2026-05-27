import Container from "./Container";

interface ShadowBoxProps {
  border?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function ShadowBox({ border, children, className }: ShadowBoxProps) {
  // rounded-xl
  return (
    <Container
      variant="div"
      className={`w-full bg-white p-4 ${border && "primary-border shadow-lg rounded-xl"} ${className}`}
    >
      {children}
    </Container>
  );
}