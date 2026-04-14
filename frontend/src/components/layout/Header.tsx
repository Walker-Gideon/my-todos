import Container from "./Container";

export default function Header() {
    /*
    List of elements in the header:
    - Navigation
    - Search bar
    - Notifications
    - Calendar
    - Date
    */

    return (
        <Container variant="header" className={"flex gap-4 w-full h-full bg-primary mb-4"}>
            <p>Navigation</p>

            <Container variant="div" className={"flex items-center justify-between w-full h-full bg-primary gap-4"}>
                <p>Search bar</p>
                <p>Notifications</p>
                <p>Calendar</p>
                <p>Date</p>
            </Container>
        </Container>
    )
}