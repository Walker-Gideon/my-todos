import Button from "@/components/ui/Button";
import Modal from "@/components/layout/Modal";
import Input from "@/components/layout/Input";
import Paragraph from "@/components/ui/Paragraph";
import Container from "@/components/layout/Container";
import ModalBackButton from "@/components/layout/ModalBackButton";
import SecondaryHeading from "@/components/layout/SecondaryHeading";

const MEMBERS = [
    { id: "1", label: "Owner", imageUrl: "", alt: "user image", name: "Gideon Walker", email: "[EMAIL_ADDRESS]" },
    { id: "2", label: "Member", imageUrl: "", alt: "user image", name: "Rachel Walker", email: "[EMAIL_ADDRESS]" },
    { id: "3", label: "Member", imageUrl: "", alt: "user image", name: "Jenny Walker", email: "[EMAIL_ADDRESS]" },
    { id: "4", label: "Member", imageUrl: "", alt: "user image", name: "David Walker", email: "[EMAIL_ADDRESS]" },
];

export default function DashboardInviteModal({ show, onCloseModal }: { show: boolean, onCloseModal: () => void }) {
    return (
        <Modal show={show} center={true}>
            <form className={"p-6 md:py-6 md:px-10 bg-white h-auto max-h-[90vh] md:max-h-none w-[95vw] md:w-full md:min-w-xl rounded-md flex flex-col gap-4 overflow-y-auto md:overflow-visible shadow-2xl"}>
                <Container variant="div" className={"w-full flex items-center justify-between"}>
                    <SecondaryHeading fristWord="Send an invi" secondWord="te to a new member" />
                    <ModalBackButton onClick={onCloseModal} />
                </Container>

                <Container 
                    variant="div" 
                    className={"w-full border border-gray-300 p-4 space-y-4"}
                >
                    <Container variant="div" className={"flex flex-wrap medium:flex-nowrap gap-2 w-full"}>
                        <div className={"w-full"}>
                            <Input 
                                id="invite-email"
                                type="email"
                                label="Email"
                                name="inviteEmail"
                                placeholder="example@gmail.com"
                                value=""
                                onChange={() => {}}
                            />
                        </div>
                        <div className={"w-full medium:w-auto medium:flex medium:items-end medium:justify-end"}>
                            <Button
                                type="submit"
                                ariaLabel="Send Invite"
                                className={"w-full px-7 bg-btn-col hover:text-white text-col-white px-4 py-2 rounded-md whitespace-nowrap "}
                            >
                                Send Invite
                            </Button>
                        </div>
                    </Container>

                    <Container variant="div" className={"w-full"}>
                        <Paragraph 
                            variant="small" 
                            className={"text-dark font-semibold mb-1"}
                        >
                            Members
                        </Paragraph>

                        <Container variant="div" className={"flex flex-col w-full gap-3"}>
                            {MEMBERS.map(member => (
                                <Container key={member.id} variant="div" className={"flex items-center gap-2"}>
                                    <img src={member.imageUrl} alt={member.alt} className={"w-10 h-10 rounded-full bg-gray-300"} />

                                    <div className={"w-full space-y-1"}>
                                        <Paragraph variant="small" className={"text-dark"}>{member.name}</Paragraph>
                                        <Paragraph className={"text-dark text-xs"}>{member.email}</Paragraph>
                                    </div>
                                </Container>
                            ))}
                        </Container>
                    </Container>

                    <Container variant="div" className={"flex flex-wrap medium:flex-nowrap gap-2 w-full"}>
                        <div className={"w-full"}>
                            <Input 
                                id="project-link"
                                type="text"
                                label="Project Link"
                                name="projectLink"
                                placeholder="https://example.com/123123"
                                value=""
                                onChange={() => {}}
                            />
                        </div>
                        <div className={"w-full medium:w-auto medium:flex medium:items-end medium:justify-end"}>
                            <Button
                                ariaLabel="Copy Link"
                                onClick={() => {}}
                                className={"w-full px-8 bg-btn-col hover:text-white text-col-white px-4 py-2 rounded-md whitespace-nowrap "}
                            >
                                Copy Link
                            </Button>
                        </div>
                    </Container>
                </Container>
            </form>
        </Modal>
    )
}