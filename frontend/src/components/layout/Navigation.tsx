import { useState } from "react";
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
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
            className={`fixed md:relative flex flex-col h-screen md:h-full bg-primary text-col-white p-4 md:pt-12 shadow-xl border-r border-r-primary rounded-r-md md:mt-4 transition-all duration-300 ease-in-out ${isSidebarOpen ? "md:w-17" : "w-72 midmax:w-64"} ${show ? "z-50" : "hidden md:flex"}`}
            onClick={(e) => e.stopPropagation()}
        >
            <Profile openSidebar={isSidebarOpen} onOpenSidebar={setIsSidebarOpen} />
            <Container variant="div" className={"flex flex-col justify-between flex-1"}>
                <Container variant="nav" className={"flex flex-col gap-2 flex-1"}>
                    {navItems.map((item) => (
                        <NavItems key={item.name} icon={item.icon} name={item.name} href={item.href} openSidebar={isSidebarOpen} onClick={onClick} />
                    ))}
                </Container>
                <Container variant="div" className={"mt-auto md:mb-2 pt-2 border-t border-white/10 overflow-hidden"}>
                    <Button onClick={handleLogout} className={"w-full flex items-center justify-start gap-3 hover:bg-white/20 transition-all px-2 py-2.5 rounded-md text-sm"}>
                        <TbLogout size={20} className={"shrink-0"} />
                        <Span 
                            className={`font-medium ${isSidebarOpen ? "hidden" : "block"}`}
                        >
                            Logout
                        </Span>
                    </Button>
                </Container>
            </Container>
        </Container>
    )
}

function Profile({openSidebar, onOpenSidebar}: {openSidebar: boolean, onOpenSidebar: (value: boolean) => void}) {
    return (
        <Container variant="div" className={"mb-4 pb-4 border-b border-white/10"}>
            <button 
                onClick={() => onOpenSidebar(true)}
                className={`hidden md:block cursor-context-menu ${openSidebar ? "flex items-center justify-center" : "absolute right-4"}`}
            >
                <TbLayoutSidebar size={24} />
            </button>

            <Container variant="div" className={"flex flex-row md:flex-col items-center gap-4 md:gap-0"}>
                <Container variant="div" className={`${openSidebar ? "md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2" : "md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2"}`}>
                    <img 
                        src="https://ui-avatars.com/api/?name=User&background=212427&color=fff" 
                        alt="user image" 
                        className={"w-15 h-15 md:w-15 midmax:w-20 md:h-15 midmax:h-20 rounded-full border-2 border-col-white-2 shadow-lg object-cover bg-dark"} 
                    />
                </Container>

                <Container variant="div" className={`text-center mt-1 text-white ${openSidebar ? "hidden" : "block"}`}>
                    <Paragraph className={"text-lg md:text-base font-semibold"}>Full Name</Paragraph>
                    <Paragraph variant="small" className={"leading-none"}>user@email.com</Paragraph>
                </Container>
            </Container>
        </Container>
    )
}

function NavItems({ name, icon: Icon, href, openSidebar, onClick }: { name: string, icon: IconType, href: string, openSidebar: boolean, onClick: () => void }) {
    return (
        <NavLink 
            to={href} 
            end
            onClick={onClick}   
            className={({ isActive }) =>
              `flex items-center justify-start gap-3 p-2 rounded-md transition-all duration-300 group ${
                isActive 
                  ? "bg-white text-primary shadow-lg shadow-white/10" 
                  : "text-white hover:text-white hover:bg-white/5"
              }`
            }
        >
            <Icon size={20} className={"shrink-0"} />
            <Span className={`font-medium ${openSidebar ? "hidden" : "block"}`}>{name}</Span>
        </NavLink>
    )
}