export default function Conditional({
  children,
  condition,
}: {
  children: React.ReactNode;
  condition: unknown;
}) {
  if (!condition) return null;
  return <>{children}</>;
}
