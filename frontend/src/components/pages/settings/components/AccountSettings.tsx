import Container from "@/components/layout/Container";
import SecondaryHeading from "@/components/layout/SecondaryHeading";
import ModalBackButton from "@/components/layout/ModalBackButton";
import Profile from "./Profile";
import ShadowBox from "@/components/layout/ShadowBox";

export default function AccountSettings({ onClose }: { onClose: () => void }) {
  return (
    <>
      <Container
        variant="div"
        className={"w-full flex items-center justify-between mb-4"}
      >
        <SecondaryHeading fristWord={"Account"} secondWord={"Information"} />
        <ModalBackButton onClick={onClose} />
      </Container>
      <Profile primary={false} />
      <ShadowBox className={""}>
        <form action=""></form>
      </ShadowBox>
    </>
  );
}
