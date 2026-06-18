import { MdOutlineManageAccounts } from "react-icons/md";
import { TbLogout, TbUserCircle, TbChevronRight } from "react-icons/tb";

import Profile from "./Profile";
import Span from "@/components/ui/Span";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import SecondaryHeading from "@/components/layout/SecondaryHeading";

import { useLogout } from "@/components/hooks/useLogout";

export default function SettingsMain({
  onOpenSetting,
}: {
  onOpenSetting: (value: "profile" | "password" | null) => void;
}) {
  const { logout } = useLogout();

  const styling = "group flex items-center justify-between transition-primary";

  return (
    <>
      <Container variant="div" className={"w-full mb-8 hidden md:flex"}>
        <SecondaryHeading className={""} fristWord={"Settings"} />
      </Container>
      <Profile />
      <Container variant="div" className={"flex flex-col gap-4"}>
        <Button
          ariaLabel="View profile"
          onClick={() => onOpenSetting("profile")}
          className={`${styling} button-secondary-styling`}
        >
          <Span className={`${styling} gap-2`}>
            <TbUserCircle className={"w-4 h-4"} />
            Profile
          </Span>
          <Span>
            <TbChevronRight
              className={
                "group-hover:translate-x-1 transition-primary w-4 h-4 transition-transform"
              }
            />
          </Span>
        </Button>
        <Button
          ariaLabel="View Account"
          onClick={() => onOpenSetting("password")}
          className={`${styling} button-secondary-styling`}
        >
          <Span className={`${styling} gap-2`}>
            <MdOutlineManageAccounts className={"w-4 h-4"} />
            Account
          </Span>
          <Span>
            <TbChevronRight
              className={
                "group-hover:translate-x-1 transition-primary w-4 h-4 transition-transform"
              }
            />
          </Span>
        </Button>
        <Button
          ariaLabel="Log out"
          onClick={() => logout()}
          className={
            "flex items-center justify-center gap-2 py-2 rounded-md bg-red-300 text-red-600 hover:bg-red-400 hover:text-red-200"
          }
        >
          <TbLogout className={"w-4 h-4"} />
          Log out
        </Button>
      </Container>
    </>
  );
}
