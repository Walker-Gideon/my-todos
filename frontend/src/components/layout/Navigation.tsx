import { motion } from "motion/react";
import { NavLink } from "react-router-dom";
import type { IconType } from "react-icons";

import { navItems } from "@/components/data/navLinks";
import { TbLogout, TbLayoutSidebar } from "react-icons/tb";

import Container from "./Container";
import Span from "@/components/ui/Span";
import Button from "@/components/ui/Button";
import Paragraph from "@/components/ui/Paragraph";



export default function Navigation({ show, onClick }: { show?: boolean, onClick?: () => void }) {
    function handleLogout() {}

    return (
        <Container 
            variant="aside" 
            as={show ? motion.aside : "aside"}
            {...(show ? {
                initial: { x: "-100%" },
                animate: { x: 0 },
                exit: { x: "-100%" },
                transition: { type: "spring", damping: 25, stiffness: 200 }
            } : {})}
            // md:w-18 midmax:w-64
            className={`fixed md:relative flex flex-col w-72 h-screen md:h-full bg-primary text-col-white p-4 md:pt-12 shadow-xl border-r border-r-primary rounded-r-md md:mt-4 transition-all duration-300 ease-in-out ${show ? "z-50" : "hidden md:flex"}`}
            onClick={(e) => e.stopPropagation()}
        >
            <Profile />
            <Container variant="div" className={"flex flex-col justify-between flex-1"}>
                <Container variant="nav" className={"flex flex-col gap-2 flex-1"}>
                    {navItems.map((item) => (
                        <NavItems key={item.name} icon={item.icon} name={item.name} href={item.href} onClick={onClick} />
                    ))}
                </Container>
                <Container variant="div" className={"mt-auto md:mb-2 pt-2 border-t border-white/10 overflow-hidden"}>
                {/* justify-center midmax:justify-start */}
                    <Button onClick={handleLogout} className={"w-full flex items-center justify-start gap-3 hover:bg-white/20 transition-all px-2 py-2.5 rounded-md text-sm"}>
                        <TbLogout size={20} className={"shrink-0"} />
                        {/* hidden midmax:block */}
                        <Span className={"font-medium"}>Logout</Span>
                    </Button>
                </Container>
            </Container>
        </Container>
    )
}

function Profile() {
    return (
        <Container variant="div" className={"mb-4 pb-4 border-b border-white/10"}>
            {/* flex flex-row  */}
            <Container variant="div" className={"flex flex-row md:flex-col items-center gap-4 md:gap-0"}>
                <Container variant="div" className={"md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2"}>
                    <img 
                        src="https://ui-avatars.com/api/?name=User&background=212427&color=fff" 
                        alt="user image" 
                        className={"w-15 h-15 md:w-15 midmax:w-20 md:h-15 midmax:h-20 rounded-full border-2 border-col-white-2 shadow-lg object-cover bg-dark"} 
                    />
                </Container>

                {/* hidden md:block */}
                <Container variant="div" className={"text-center mt-1 text-white"}>
                    <Paragraph className={"text-lg md:text-base font-semibold"}>Full Name</Paragraph>
                    <Paragraph variant="small" className={"leading-none"}>user@email.com</Paragraph>
                </Container>
            </Container>

            <Button className={"hidden md:block"}>
                <TbLayoutSidebar size={20} />
            </Button>
        </Container>
    )
}

function NavItems({ name, icon: Icon, href, onClick }: { name: string, icon: IconType, href: string, onClick: () => void }) {
    return (
        <NavLink 
            to={href} 
            end
            onClick={onClick}   
            // justify-center midmax:justify-start
            className={({ isActive }) =>
              `flex items-center justify-start gap-3 p-2 rounded-md transition-all duration-300 group ${
                isActive 
                  ? "bg-white text-primary shadow-lg shadow-white/10" 
                  : "text-white hover:text-white hover:bg-white/5"
              }`
            }
        >
            <Icon size={20} className={"shrink-0"} />
            {/* hidden midmax:block truncate */}
            <Span className={"font-medium"}>{name}</Span>
        </NavLink>
    )
}