import CardContent from "@/components/layout/CardContent";

interface DashboardCardContentProps {
  contentId: string;
  onContentOpen: (open: boolean) => void;
}

export default function DashboardCardContent({
  contentId,
  onContentOpen,
}: DashboardCardContentProps) {
  return (
    <>
      <CardContent
        board={true}
        contentId={contentId}
        onContentOpen={onContentOpen}
      />
    </>
  );
}
