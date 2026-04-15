import { PiGearFill } from "react-icons/pi";
import { RxExclamationMark } from "react-icons/rx";
import { 
    TbList,
    TbClipboardCheck,
    TbLayoutDashboardFilled
} from "react-icons/tb";

export const navItems = [
    { 
        name: "Dashboard", 
        href: "/dashboard",
        icon: TbLayoutDashboardFilled, 
    },
    { 
        name: "Vital Task", 
        href: "/vital-task",
        icon: RxExclamationMark, 
    },
    { 
        name: "Tasks", 
        href: "/tasks",
        icon: TbClipboardCheck, 
    },
    { 
        name: "Categories", 
        href: "/categories",
        icon: TbList, 
    },
    { 
        name: "Settings", 
        href: "/settings",
        icon: PiGearFill, 
    },
]