import { NavLink } from "react-router-dom";
import type { IconType } from "react-icons";

import { PiGearFill } from "react-icons/pi";
import { RxExclamationMark } from "react-icons/rx";
import { 
    TbList,
    TbLogout,
    TbClipboardCheck,
    TbLayoutDashboardFilled
} from "react-icons/tb";

import Container from "./Container";
import Span from "@/components/ui/Span";
import Button from "@/components/ui/Button";
import Paragraph from "@/components/ui/Paragraph";

const navItems = [
    { name: "Dashboard", icon: TbLayoutDashboardFilled, href: "/dashboard" },
    { name: "Vital Task", icon: RxExclamationMark, href: "/vital-task" },
    { name: "Tasks", icon: TbClipboardCheck, href: "/tasks" },
    { name: "Categories", icon: TbList, href: "/categories" },
    { name: "Settings", icon: PiGearFill, href: "/settings" },
]

export default function Navigation() {
    function handleLogout() {}

    return (
        <Container variant="aside" className={"relative hidden md:flex flex-col w-64 h-full bg-primary text-col-white p-4 pt-12 shadow-xl border-r border-r-primary rounded-r-md mt-4"}>
            <Container variant="div" className={"flex flex-col items-center mb-4"}>
                <Container variant="div" className={"absolute -top-8 left-1/2 -translate-x-1/2"}>
                    <img 
                        src="https://ui-avatars.com/api/?name=User&background=212427&color=fff" 
                        alt="user image" 
                        className={"w-20 h-20 rounded-full border-2 border-col-white-2 shadow-lg object-cover bg-dark"} 
                    />
                </Container>

                <Container variant="div" className={"text-center mt-1 text-white"}>
                    <Paragraph className={"font-semibold"}>Full Name</Paragraph>
                    <Paragraph variant="small" className={"leading-none"}>user@email.com</Paragraph>
                </Container>
            </Container>
            <Container variant="nav" className={"flex flex-col gap-2 flex-1"}>
                {navItems.map((item) => (
                    <NavItems key={item.name} icon={item.icon} name={item.name} href={item.href} />
                ))}
            </Container>
            <Container variant="div" className={"mt-auto mb-2 pt-2 border-t border-white/10"}>
                <Button onClick={handleLogout} className={"w-full flex items-center justify-start gap-3 hover:bg-white/20 transition-all px-2 py-2.5 rounded-md text-sm"}>
                    <TbLogout size={20} />
                    <Span className={"font-medium"}>Logout</Span>
                </Button>
            </Container>
        </Container>
    )
}

function NavItems({ name, icon: Icon, href }: { name: string, icon: IconType, href: string }) {
    return (
        <NavLink 
            to={href} 
            end
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded-md transition-all duration-300 group ${
                isActive 
                  ? "bg-white text-primary shadow-lg shadow-white/10" 
                  : "text-white hover:text-white hover:bg-white/5"
              }`
            }
        >
            <Icon size={20} />
            <Span className={"font-medium"}>{name}</Span>
        </NavLink>
    )
}