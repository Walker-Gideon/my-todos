import { TbCircle, TbDots } from "react-icons/tb";

export default function Card() {
    return (
        <div className="flex flex-col gap-4 border border-gray-400 rounded-2xl px-4 py-2">
            {/* Card Header */}
            <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 w-full max-w-[75%] md:max-w-[80%] min-w-0">
                    <TbCircle className="text-primary shrink-0" />
                    <p className="truncate min-w-0 text-xl font-bold text-dark">Title of the first todo in my dashboard that is completed</p>
                </div>
                <button aria-label="More options" className="cursor-pointer shrink-0">
                    <TbDots />
                </button>
            </div>

            {/* Card Content */}
            <div className="flex flex-row gap-2 text-sm">
                <p className="line-clamp-3 w-2/3 h-[60px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum eius earum consequuntur. Pariatur dolorum ut, sed deleniti, placeat at voluptas sequi sed deleniti, placeat at voluptas sequi sed deleniti, placeat at voluptas sequi sed deleniti, placeat at voluptas sequi</p>
                <div className="w-1/3 h-[60px] border border-gray-400 rounded-xl" />
            </div>

            {/* Card footer */}
            <div className="w-full rounded-md text-xs flex flex-row flex-wrap items-center justify-between gap-2">
                <p>Priority: Moderate</p>
                <p>Status: Completed</p>
                <p>Created on: 05/05/2026</p>
            </div> 
        </div>
    )
}