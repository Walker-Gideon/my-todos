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
        <Container variant="header" className={"w-full h-full bg-primary mb-4"}>
            <p>Header</p>
        </Container>
    )
}