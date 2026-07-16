import { RxExclamationMark } from "react-icons/rx";
import {
  TbUser,
  TbList,
  TbClipboardCheck,
  TbLayoutDashboardFilled,
} from "react-icons/tb";

export const navItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: TbLayoutDashboardFilled,
    heading: "Dashboard",
  },
  {
    name: "Vital Task",
    href: "/vital-task",
    icon: RxExclamationMark,
    heading: "To-Do",
  },
  {
    name: "My Task",
    href: "/my-task",
    icon: TbClipboardCheck,
    heading: "To-Do",
  },
  {
    name: "Categories",
    href: "/categories",
    icon: TbList,
    heading: "Categories",
  },
  {
    name: "Profile",
    href: "/profile",
    icon: TbUser,
    heading: "Profile",
  },
];
