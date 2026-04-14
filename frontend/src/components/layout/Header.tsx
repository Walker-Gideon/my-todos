import { TbBell, TbSearch, TbCalendarWeek } from "react-icons/tb";

import Input from "@/components/ui/Input";
import Headings from "@/components/ui/Headings";
import Container from "@/components/layout/Container";

export default function Header() {
    /*
    List of elements in the header:
    - Navigation (Title)
    - Search bar
    - Notifications
    - Calendar
    - Date
    */

    const styling = {
        inputContainer: "w-full flex items-center border border-white rounded-md text-sm hover:border-primary focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 shadow-lg shadow-primary/50 transition-all",
        input: "w-full focus:outline-none p-2 bg-transparent",
        icon: "text-col-white bg-primary h-9 w-9 p-2 rounded-md"
    }

    return (
        <Container variant="header" className={"flex gap-4 w-full h-full bg-col-white-2 mb-6 h-15 p-4 shadow-md"}>
            <Headings variant="h1">Navigation</Headings>

            <Container variant="div" className={"flex items-center justify-between w-full h-full gap-4"}>
                <form className={styling["inputContainer"]}>
                    <Input 
                        type="text" 
                        defaultStyling={false} 
                        placeholder="Search your task here..." 
                        className={styling["input"]} 
                    />
                    <button type="submit">
                        <TbSearch size={30} className={styling["icon"]} />
                    </button>
                </form>

                <Container variant="div" className={"flex items-center gap-4"}>
                    <p>Notifications</p>
                    <p>Calendar</p>
                    <p>Date</p>
                </Container>
            </Container>
        </Container>
    )
}