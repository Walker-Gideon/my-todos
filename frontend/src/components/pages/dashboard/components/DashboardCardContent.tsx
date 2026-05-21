import CardContent from "@/components/layout/CardContent";

export default function DashboardCardContent({
  onContentOpen,
}: {
  onContentOpen: (open: boolean) => void;
}) {
  return (
    <>
      <CardContent board={true} onContentOpen={onContentOpen} />
    </>
  );
}
