import { NavLink } from "react-router-dom";

import Container from "./Container";

export default function Navigation() {
    /*
    List of elements in the navigation:
    - Dashboard
    - Vital Task
    - Tasks
    - Categories
    - Settings
    */

    const navItems = [
        { name: "Dashboard", href: "/dashboard" },
        { name: "Vital Task", href: "/vital-tasks" },
        { name: "Tasks", href: "/tasks" },
        { name: "Categories", href: "/categories" },
        { name: "Settings", href: "/settings" },
    ]

    return (
        <Container variant="aside" className={"w-1/5 h-full bg-primary"}>
            <p>User Profile</p>

            <Container variant="nav" className={"w-full h-full bg-primary"}>
                {navItems.map((item) => (
                    <NavItems key={item.name} name={item.name} href={item.href} />
                ))}
            </Container>

            <p>Logout</p>
        </Container>
    )
}

function NavItems({ name, href }: { name: string, href: string }) {
    return (
        <NavLink to={href} end
            // onClick={handleToggle}
            className={({ isActive }) =>
              `${isActive ? "bg-white text-primary" : "text-white flex items-center"}`
            }>{name}</NavLink>
    )
}