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
  },
  {
    name: "Vital Task",
    href: "/vital-task",
    icon: RxExclamationMark,
  },
  {
    name: "My Task",
    href: "/my-task",
    icon: TbClipboardCheck,
  },
  {
    name: "Categories",
    href: "/categories",
    icon: TbList,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: TbUser,
  },
];
