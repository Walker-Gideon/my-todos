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
        { name: "Vital Task", href: "/vital-task" },
        { name: "Tasks", href: "/tasks" },
        { name: "Categories", href: "/categories" },
        { name: "Settings", href: "/settings" },
    ]

    return (
        <Container variant="aside" className={"w-1/5 h-full bg-primary"}>
            <p>User Profile</p>

            <Container variant="nav" className={"w-full h-full bg-primary"}>
                {navItems.map((item) => (
                    <p key={item.name}>{item.name}</p>
                ))}
            </Container>

            <p>Logout</p>
        </Container>
    )
}