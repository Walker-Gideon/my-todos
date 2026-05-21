import { MdDelete } from "react-icons/md";
import { LiaEdit } from "react-icons/lia";

import Container from "./Container";
import ShadowBox from "./ShadowBox";
import Conditional from "./Conditional";
import Span from "@/components/ui/Span";
import Button from "@/components/ui/Button";
import ModalBackButton from "./ModalBackButton";
import Paragraph from "@/components/ui/Paragraph";

import type { Task } from "@/api/todos";
import { useGetTodosTask } from "../hooks/useGetTodosTask";

interface CardContentProps {
  board?: boolean;
  className?: string;
  contentId?: string | null;
  onContentOpen?: (open: boolean) => void;
}

interface CardContentStyling {
  icon: string;
  iconSize: string;
}

export default function CardContent({
  board,
  className,
  contentId,
  onContentOpen,
}: CardContentProps) {
  const { todos, isLoading, error } = useGetTodosTask();

  //   const task = todos?.find((t: Task) => t._id === contentId) || null;
  const task = todos?.find((t: Task) => t._id === contentId) || null;

  console.log(contentId === task?._id);
  console.log("🚀 ~ file: CardContent.tsx:49 ~ CardContent ~ task:", task);

  const styling: CardContentStyling = {
    icon: "text-col-white bg-primary p-1.5 rounded-md",
    iconSize: "w-5 h-5 group-hover:scale-80 transition-all duration-300",
  };

  return (
    <ShadowBox
      className={`px-4 md:px-6 flex flex-col w-full  min-h-0 max-h-120 md:max-h-none mb-4 md:mb-0 space-y-4 ${board ? "" : "md:w-3/5"} ${className}`}
    >
      {/* header content */}
      <Container variant="header" className={"w-full flex flex-row gap-4"}>
        <Container
          variant="div"
          className={`flex flex-row items-center gap-2 ${board ? "w-1/3" : "w-1/2"}`}
        >
          <img
            src=""
            alt=""
            className={`w-full border border-gray-400 rounded-xl ${board ? "h-40" : "h-30"}`}
          />
        </Container>
        <Container
          variant="div"
          className={`w-full space-y-2 text-base flex flex-col ${board ? "" : "items-start justify-end"}`}
        >
          <Container
            variant="div"
            className={`${board ? "w-full flex items-center justify-between" : ""}`}
          >
            <Paragraph className={"text-dark font-semibold"}>
              Vital Task
            </Paragraph>
            <Conditional condition={board}>
              <ModalBackButton
                onClick={() => onContentOpen && onContentOpen(false)}
              />
            </Conditional>
          </Container>
          <Paragraph variant="small" className={"flex flex-row gap-1"}>
            <Span>Priority:</Span>
            <Span className={"text-red"}>Extreme</Span>
          </Paragraph>
          <Paragraph variant="small" className={"flex flex-row gap-1"}>
            <Span>Status:</Span>
            <Span className={"text-red"}>Not Started</Span>
          </Paragraph>
          <Paragraph className={"text-xs text-gray"}>
            Created on: 05/05/2026
          </Paragraph>
        </Container>
      </Container>

      {/* main content */}
      <Container variant="main" className={"w-full flex-1 overflow-y-auto p-2"}>
        <Paragraph
          className={"w-full text-justify text-base text-dark leading-relaxed"}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta soluta
          veritatis, ratione iste corrupti fugit architecto ipsa nobis ab
          placeat sint delectus beatae cum asperiores. Sint ratione
          exercitationem porro corporis? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Earum cumque explicabo corrupti numquam. Nostrum,
          consequatur. Ab repellendus quibusdam eaque, fuga minima voluptates in
          quos debitis unde velit, perferendis eveniet obcaecati? Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Quidem temporibus
          excepturi reiciendis quam beatae iusto ab nostrum laudantium eligendi.
          Necessitatibus iure itaque pariatur rem corrupti velit adipisci
          suscipit quibusdam veritatis. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Consequatur aliquid quod quia, iste velit sint a,
          possimus voluptas tenetur fugit doloremque modi dolores, quidem
          ratione. Harum at corporis accusamus ex! Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Dolore voluptates quia minus rem
          voluptas deserunt, expedita doloribus nemo in! Quisquam corporis saepe
          tempora, maiores vero officiis culpa ratione itaque impedit. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Sunt temporibus
          dignissimos consequuntur! Reprehenderit vitae laboriosam vel accusamus
          cumque velit impedit eveniet. Necessitatibus doloribus aperiam
          provident itaque quaerat hic modi consequuntur.
        </Paragraph>

        {/* Will have to add a text editing here so that when the user click on the edit you can just edit the content here and then save it. */}
      </Container>

      <Container
        variant="footer"
        className={"w-full flex flex-row items-end justify-end gap-3"}
      >
        <Button
          ariaLabel="Delete Task"
          className={`shadow-lg shadow-primary/50 group ${styling["icon"]}`}
        >
          <MdDelete className={styling["iconSize"]} />
        </Button>
        <Button
          ariaLabel="Edit Task"
          className={`shadow-lg shadow-primary/50 group ${styling["icon"]}`}
        >
          <LiaEdit className={styling["iconSize"]} />
        </Button>
      </Container>
    </ShadowBox>
  );
}
