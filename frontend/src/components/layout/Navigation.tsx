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

import { useLogout } from "@/components/hooks/useLogout";
import { useGeneral } from "@/context/useGeneralContext";
import { useUserProfile } from "@/components/hooks/useUserProfile";

export default function Navigation({
  show,
  onClick,
}: {
  show?: boolean;
  onClick?: () => void;
}) {
  const { logout } = useLogout();
  const { setHeading } = useGeneral();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isExpanded = show || isSidebarOpen;

  return (
    <Container
      variant="aside"
      as={show !== undefined ? motion.aside : "aside"}
      {...(show !== undefined
        ? {
            initial: { x: "-100%" },
            animate: { x: 0 },
            exit: { x: "-100%" },
            transition: { type: "spring", damping: 25, stiffness: 200 },
          }
        : {})}
      className={`fixed md:relative flex flex-col h-screen md:h-full bg-primary text-col-white ${isExpanded ? "w-64 p-3 medium:p-4" : "md:w-15 p-2 pt-4 md:pt-2"} shadow-sidebar border-r border-r-primary rounded-r-md md:transition-all md:duration-300 md:ease-in-out ${show !== undefined ? "z-50" : "hidden md:flex"}`}
      onClick={(e) => e.stopPropagation()}
    >
      <Profile openSidebar={isExpanded} onOpenSidebar={setIsSidebarOpen} />
      <Container
        variant="div"
        className={"flex flex-col justify-between flex-1"}
      >
        <Container variant="nav" className={"flex flex-col gap-2 flex-1"}>
          {navItems.map((item) => (
            <NavItems
              key={item.name}
              icon={item.icon}
              name={item.name}
              href={item.href}
              heading={item.heading}
              setHeading={setHeading}
              openSidebar={isExpanded}
              onClick={onClick}
            />
          ))}
        </Container>
        <Container
          variant="div"
          className={"mt-auto pt-2 border-t border-white/10"}
        >
          <Button
            ariaLabel="Logout"
            onClick={() => logout()}
            className={`w-full flex items-center gap-3 hover:bg-white/20 transition-all px-2 py-2.5 rounded-md text-sm group relative ${isExpanded ? "justify-start" : "md:justify-center"}`}
          >
            <TbLogout size={20} className={"shrink-0"} />
            <Span
              className={`font-medium ${isExpanded ? "block" : "md:hidden"}`}
            >
              Logout
            </Span>

            {!isExpanded && (
              <div
                className={
                  "absolute left-full ml-4 px-3 py-1.5 bg-dark text-white text-xs font-semibold rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-x-1 pointer-events-none transition-all duration-200 whitespace-nowrap z-[60] shadow-xl border border-white/10 after:content-[''] after:absolute after:right-full after:top-1/2 after:-translate-y-1/2 after:border-8 after:border-y-transparent after:border-l-transparent after:border-r-dark"
                }
              >
                Logout
              </div>
            )}
          </Button>
        </Container>
      </Container>
    </Container>
  );
}

function Profile({
  openSidebar,
  onOpenSidebar,
}: {
  openSidebar: boolean;
  onOpenSidebar: (value: boolean) => void;
}) {
  const { name, capName, email, profileImageUrl } = useUserProfile();

  return (
    <Container variant="div" className={"mb-3 pb-3 border-b border-white/10"}>
      <Button
        ariaLabel={openSidebar ? "Close Sidebar" : "Open Sidebar"}
        onClick={() => onOpenSidebar(!openSidebar)}
        className={`hidden lg:block items-center justify-center transition-all duration-300 ${openSidebar ? "absolute right-2 top-1" : "w-full px-2.5 mt-1 mb-3"}`}
      >
        <TbLayoutSidebar
          size={24}
          className={openSidebar ? "" : "opacity-70 hover:opacity-100"}
        />
      </Button>

      <Container
        variant="div"
        className={`flex items-center gap-2 md:justify-center`}
      >
        <Container variant="div" className={"flex shrink-0"}>
          {profileImageUrl ? (
            <img
              src={profileImageUrl}
              alt="user image"
              className={`rounded-full border-2 border-col-white-2 object-cover bg-dark transition-all duration-300 aspect-square ${openSidebar ? "w-13 h-13 md:w-15 md:h-15" : "w-9.5 h-9.5"}`}
            />
          ) : (
            <Span
              className={`rounded-full bg-dark flex items-center justify-center text-white font-bold ${openSidebar ? "w-13 h-13 md:w-15 md:h-15 text-lg" : "w-9.5 h-9.5 text-sm"}`}
            >
              {capName}
            </Span>
          )}
        </Container>

        <Container
          variant="div"
          className={`flex flex-col text-white overflow-hidden ${openSidebar ? "block" : "md:hidden"}`}
        >
          <Paragraph className={"text-lg font-semibold leading-none truncate"}>
            {name}
          </Paragraph>
          <Paragraph variant="small" className={"leading-none truncate"}>
            {email}
          </Paragraph>
        </Container>
      </Container>
    </Container>
  );
}

function NavItems({
  name,
  icon: Icon,
  href,
  openSidebar,
  onClick,
  heading,
  setHeading,
}: {
  name: string;
  icon: IconType;
  href: string;
  openSidebar: boolean;
  onClick?: () => void;
  heading: string;
  setHeading?: (h: string) => void;
}) {
  return (
    <NavLink
      to={href}
      aria-label={name}
      end
      onClick={() => {
        if (onClick) {
          onClick();
        }
        setHeading?.(heading);
      }}
      className={({ isActive }) =>
        `flex items-center gap-3 p-2 rounded-md transition-all duration-300 group relative ${openSidebar ? "justify-start" : "md:justify-center"} ${
          isActive
            ? "bg-white text-primary shadow-lg shadow-white/10"
            : "text-white hover:text-white hover:bg-white/5"
        }`
      }
    >
      <Icon size={20} className={`shrink-0`} />
      <Span className={`font-medium ${openSidebar ? "block" : "md:hidden"}`}>
        {name}
      </Span>

      {!openSidebar && (
        <div
          className={
            "absolute left-full ml-4 px-3 py-1.5 bg-dark text-white text-xs font-semibold rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-x-1 pointer-events-none transition-all duration-200 whitespace-nowrap z-[60] shadow-xl border border-white/10 after:content-[''] after:absolute after:right-full after:top-1/2 after:-translate-y-1/2 after:border-8 after:border-y-transparent after:border-l-transparent after:border-r-dark"
          }
        >
          {name}
        </div>
      )}
    </NavLink>
  );
}
