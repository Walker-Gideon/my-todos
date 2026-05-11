import Modal from "@/components/layout/Modal";
import Input from "@/components/layout/Input";
import Container from "@/components/layout/Container";
import ModalBackButton from "@/components/layout/ModalBackButton";
import SecondaryHeading from "@/components/layout/SecondaryHeading";
import Button from "@/components/ui/Button";

export default function DashboardInviteModal({ show, onCloseModal }: { show: boolean, onCloseModal: () => void }) {
    return (
        <Modal show={show} center={true}>
            <form className={"p-6 md:py-6 md:px-10 bg-white h-[85vh] md:h-auto w-[95vw] md:w-full md:min-w-xl rounded-md flex flex-col gap-4 overflow-y-auto md:overflow-visible"}>
                <Container variant="div" className={"w-full flex items-center justify-between"}>
                    <SecondaryHeading fristWord="Send an invi" secondWord="te to a new member" />
                    <ModalBackButton onClick={onCloseModal} />
                </Container>

                <Container 
                    variant="div" 
                    className={"w-full flex flex-col md:flex-row gap-4 border border-gray-300 p-4"}
                >
                    <Container variant="div" className={"flex items-center gap-2 w-full"}>
                        <Input 
                            id="invite-email"
                            type="email"
                            label="Email"
                            name="inviteEmail"
                            value=""
                            onChange={() => {}}
                        />
                        <Button
                            type="submit"
                            ariaLabel="Send Invite"
                            className={"px-8 bg-btn-col hover:text-white text-col-white px-4 py-3 rounded-md"}
                        >
                            Send Invite
                        </Button>
                    </Container>
                </Container>
            </form>
        </Modal>
    )
}