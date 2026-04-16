import { 
    TbBell, 
    TbMenu2, 
    TbSearch, 
    TbCalendarWeek 
} from "react-icons/tb";

import Span from "@/components/ui/Span";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Headings from "@/components/ui/Headings";
import Paragraph from "@/components/ui/Paragraph";
import Container from "@/components/layout/Container";

import { useDateFormat } from "@/components/hooks/useDateFormat";

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
    const { dayInWords, day, monthInWords, year } = useDateFormat();

    const styling = {
        inputContainer: "w-full flex items-center border border-white rounded-md text-sm hover:border-primary focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 shadow-md shadow-primary/50 transition-all",
        input: "w-full focus:outline-none p-1.5 px-3 bg-transparent",
        icon: "text-col-white bg-primary p-1.5 rounded-md",
        iconSize: "w-5 h-5"
    }

    return (
        <Container variant="header" className={"w-full md:h-20 bg-col-white-2 mb-6 md:mb-7 py-4 px-4 md:px-8 max-w-screen-2xl mx-auto shadow-md shadow-primary/50"}>
            <Container variant="div" className={"w-full flex items-center justify-between gap-4 lg:space-x-32"}>
                <Container variant="div" className={"flex items-center gap-4"}>
                    <Button onClick={onMenuClick} className={`${styling["icon"]} md:hidden`}>
                        <TbMenu2 size={20} />
                    </Button>
                    <Headings variant="h1" className={"flex items-center font-semibold text-xl md:text-[1.7rem] lg:text-3xl"}>
                        {/* The words will come from the nav button that is either Dashboard pr To-do and they are split into two */}
                        <Span className={"text-primary"}>Dash</Span>
                        <Span className={"text-dark"}>board</Span>
                    </Headings>
                </Container>

                <Container variant="div" className={"flex items-center justify-between md:w-full h-full gap-4 lg:space-x-16"}>
                    <Container variant="div" className={"w-full hidden md:block"}>
                        <SearchBar styling={styling} />
                    </Container>

                    <Container variant="div" className={"flex items-center gap-4 md:space-x-8 shrink-0"}>
                        <NotificationAndDate styling={styling} />
                    
                        <Container variant="div" className={"hidden medium:flex flex-col items-center justify-center"}>
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

            <Container variant="div" className={"md:hidden mt-6"}>
                <SearchBar styling={styling} />
            </Container>
        </Container>
    )
}

function SearchBar({ styling }: { styling: any }) {
    return (
        <form className={styling["inputContainer"]}>
            <Input 
                type="text" 
                defaultStyling={false} 
                placeholder="Search your task here..." 
                className={styling["input"]} 
            />
            <Button type="submit" className={styling["icon"]}>
                <TbSearch className={styling["iconSize"]} />
            </Button>
        </form>
    )
}

function NotificationAndDate({ styling }: { styling: any }) {
    return (
        <Container variant="div" className={"flex items-center gap-4"}>
            <Button className={`shadow-lg shadow-primary/50 ${styling["icon"]}`}>
                <TbBell className={styling["iconSize"]} />
            </Button>
            <Button className={`shadow-lg shadow-primary/50 ${styling["icon"]}`}>
                <TbCalendarWeek className={styling["iconSize"]} />
            </Button>
        </Container>
    )
}