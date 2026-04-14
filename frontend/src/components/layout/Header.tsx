import { TbBell, TbSearch, TbCalendarWeek } from "react-icons/tb";

import Span from "@/components/ui/Span";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Headings from "@/components/ui/Headings";
import Paragraph from "@/components/ui/Paragraph";
import Container from "@/components/layout/Container";

import { useDateFormat } from "@/components/hooks/useDateFormat";

export default function Header() {
    const { dayInWords, day, monthInWords, year } = useDateFormat();

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
        icon: "text-col-white bg-primary p-2 rounded-md"
    }

    return (
        <Container variant="header" className={"flex items-center space-x-32 w-full h-20 bg-col-white-2 mb-6 py-4 px-16 shadow-md"}>
            <Headings variant="h1" className={"flex items-center font-semibold text-3xl"}>
                <Span className={"text-primary"}>Dash</Span>
                <Span className={"text-dark"}>board</Span>
            </Headings>

            <Container variant="div" className={"flex items-center justify-between w-full h-full space-x-16"}>
                <form className={styling["inputContainer"]}>
                    <Input 
                        type="text" 
                        defaultStyling={false} 
                        placeholder="Search your task here..." 
                        className={styling["input"]} 
                    />
                    <Button type="submit" className={styling["icon"]}>
                        <TbSearch size={25} />
                    </Button>
                </form>

                <Container variant="div" className={"flex items-center space-x-8 shrink-0"}>
                    <Container variant="div" className={"flex items-center gap-4"}>
                        <Button className={`shadow-lg shadow-primary/50 ${styling["icon"]}`}>
                            <TbBell size={25} />
                        </Button>
                        <Button className={`shadow-lg shadow-primary/50 ${styling["icon"]}`}>
                            <TbCalendarWeek size={25} />
                        </Button>
                    </Container>
                    
                    <Container variant="div" className={"flex flex-col items-center justify-center"}>
                        <Paragraph
                            variant="large"
                            className={"font-medium text-dark"}
                        >
                            {dayInWords}
                        </Paragraph>
                        <Paragraph 
                            variant="small" 
                            className={"font-medium text-blue"}
                        >
                            {day}/{monthInWords}/{year}
                        </Paragraph>
                    </Container>
                </Container>
            </Container>
        </Container>
    )
}