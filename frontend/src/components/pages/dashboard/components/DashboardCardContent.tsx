import CardContent from "@/components/layout/CardContent";

import type { Task } from "@/api/todos";

interface DashboardCardContentProps {
  contentId: string;
  onEditTask: (task: Task) => void;
  onContentOpen: (open: boolean) => void;
}

export default function DashboardCardContent({
  contentId,
  onEditTask,
  onContentOpen,
}: DashboardCardContentProps) {
  return (
    <>
      <CardContent
        board={true}
        contentId={contentId}
        onEditTask={onEditTask}
        onContentOpen={onContentOpen}
      />
    </>
  );
}
