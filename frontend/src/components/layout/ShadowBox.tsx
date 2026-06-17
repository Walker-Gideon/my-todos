import Container from "./Container";

interface ShadowBoxProps {
  border?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function ShadowBox({
  border,
  children,
  className,
}: ShadowBoxProps) {
  // rounded-xl bg-white p-4
  return (
    <Container
      variant="div"
      className={`w-full ${border && "primary-border shadow-lg rounded-xl"} ${className}`}
    >
      {children}
    </Container>
  );
}
