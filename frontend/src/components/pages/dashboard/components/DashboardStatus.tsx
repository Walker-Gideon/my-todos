import { TbClipboardData } from "react-icons/tb";

import ShadowBox from "@/components/layout/ShadowBox";
import SubHeading from "@/components/layout/SubHeading";

import { usePercentages } from "@/components/hooks/usePercentages";

/*
 ** The circumference of a circle is (2 * π * r) where r is the radius
 *** Using SVG
 ** Setting the storkeDasharray to the circumference will give you a full circle
 ** The the strokeDashoffset will control how much of that stroke is hidden
 */

const radius = 36;
const circumference = 2 * Math.PI * radius;

function CircleProgress({
  percentage,
  color,
  label,
}: {
  percentage: number;
  color: string;
  label: string;
}) {
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className={"flex flex-col items-center gap-2"}>
      <div className={"relative w-20 h-20"}>
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          className={"-rotate-90"}
        >
          <circle
            cx="40"
            cy="40"
            r={radius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="8"
          />
          <circle
            cx="40"
            cy="40"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <span
          className={
            "absolute inset-0 flex items-center justify-center text-sm font-semibold"
          }
        >
          {percentage}%
        </span>
      </div>
      <div className={"flex items-center gap-1"}>
        <div style={{ background: color }} className={`h-2 w-2 rounded-full`} />
        <p className={"text-sm font-semibold"}>{label}</p>
      </div>
    </div>
  );
}

export default function DashboardStatus() {
  const { completedPercentage, inProgressPercentage, notStartedPercentage } =
    usePercentages();

  return (
    <ShadowBox border={true} className={"p-4"}>
      <SubHeading
        icon={<TbClipboardData size={24} />}
        subheading={"Task Status"}
      />
      <div className={"flex items-center justify-between gap-2 mt-4"}>
        <CircleProgress
          percentage={completedPercentage}
          color="#22c55e"
          label="Completed"
        />
        <CircleProgress
          percentage={inProgressPercentage}
          color="#3b82f6"
          label="In Progress"
        />
        <CircleProgress
          percentage={notStartedPercentage}
          color="#ef4444"
          label="Not Started"
        />
      </div>
    </ShadowBox>
  );
}
