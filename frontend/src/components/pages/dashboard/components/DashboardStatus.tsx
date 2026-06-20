import { TbClipboardData } from "react-icons/tb";

import ShadowBox from "@/components/layout/ShadowBox";
import SubHeading from "@/components/layout/SubHeading";

export default function DashboardStatus() {
  return (
    <ShadowBox border={true} className={"p-4"}>
      <SubHeading
        icon={<TbClipboardData size={24} />}
        subheading={"Task Status"}
      />

      <div className="flex items-center justify-between gap-2 text-sm font-semibold mt-4">
        <div className="flex flex-col items-center justify-between gap-2">
          <div className="w-20 h-20 rounded-full bg-primary" />
          <p>Completed</p>
        </div>
        <div className="flex flex-col items-center justify-between gap-2">
          <div className="w-20 h-20 rounded-full bg-primary" />
          <p>In progress</p>
        </div>
        <div className="flex flex-col items-center justify-between gap-2">
          <div className="w-20 h-20 rounded-full bg-primary" />
          <p>Not Started</p>
        </div>
      </div>
    </ShadowBox>
  );
}
