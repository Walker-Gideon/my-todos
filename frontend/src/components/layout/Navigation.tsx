import { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 768 && width <= 900) {
        setIsSidebarOpen(true);
      } else if (width > 900) {
        setIsSidebarOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container
      variant="aside"
      as={show ? motion.aside : "aside"}
      {...(show
        ? {
            initial: { x: "-100%" },
            animate: { x: 0 },
            exit: { x: "-100%" },
            transition: { type: "spring", damping: 25, stiffness: 200 },
          }
        : {})}
      className={`fixed md:relative flex flex-col h-screen md:h-full bg-primary text-col-white ${isSidebarOpen ? "md:w-15 p-2" : "w-64 p-3 medium:p-4"} shadow-sidebar border-r border-r-primary rounded-r-md md:transition-all md:duration-300 md:ease-in-out ${show ? "z-50" : "hidden md:flex"}`}
      onClick={(e) => e.stopPropagation()}
    >
      <Profile openSidebar={isSidebarOpen} onOpenSidebar={setIsSidebarOpen} />
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
              openSidebar={isSidebarOpen}
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
            className={`w-full flex items-center gap-3 hover:bg-white/20 transition-all px-2 py-2.5 rounded-md text-sm group relative ${isSidebarOpen ? "justify-center" : "justify-start"}`}
          >
            <TbLogout size={20} className={"shrink-0"} />
            <Span
              className={`font-medium ${isSidebarOpen ? "hidden" : "block"}`}
            >
              Logout
            </Span>

            {isSidebarOpen && (
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
        className={`hidden midmax:block transition-all duration-300 ${openSidebar ? "w-full flex items-center justify-center px-2 mt-1 mb-3" : "absolute right-4"}`}
      >
        <TbLayoutSidebar
          size={24}
          className={openSidebar ? "" : "opacity-70 hover:opacity-100"}
        />
      </Button>

      <Container
        variant="div"
        className={`flex items-center gap-2 ${openSidebar ? "flex-col justify-center" : "flex-row"}`}
      >
        <Container variant="div" className={"flex shrink-0"}>
          {profileImageUrl ? (
            <img
              src={profileImageUrl}
              alt="user image"
              className={`rounded-full border-2 border-col-white-2 object-cover bg-dark transition-all duration-300 aspect-square ${openSidebar ? "w-9.5 h-9.5" : "w-13 h-13 md:w-15 md:h-15"}`}
            />
          ) : (
            <Span
              className={`rounded-full bg-dark flex items-center justify-center text-white font-bold ${openSidebar ? "w-9.5 h-9.5 text-sm" : "w-13 h-13 md:w-15 md:h-15 text-lg"}`}
            >
              {capName}
            </Span>
          )}
        </Container>

        <Container
          variant="div"
          className={`text-start mt-1 text-white overflow-hidden ${openSidebar ? "hidden" : "block"}`}
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
        `flex items-center gap-3 p-2 rounded-md transition-all duration-300 group relative ${openSidebar ? "justify-center" : "justify-start"} ${
          isActive
            ? "bg-white text-primary shadow-lg shadow-white/10"
            : "text-white hover:text-white hover:bg-white/5"
        }`
      }
    >
      <Icon size={20} className={`shrink-0`} />
      <Span className={`font-medium ${openSidebar ? "hidden" : "block"}`}>
        {name}
      </Span>

      {openSidebar && (
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
