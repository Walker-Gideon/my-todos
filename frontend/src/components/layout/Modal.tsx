import Backdrop from "./Backdrop";

export default function Modal({ children, onClick, show, center }: { children: React.ReactNode, onClick?: () => void, show: boolean, center?: boolean }) {
    return (
        <Backdrop onClick={onClick} show={show} center={center}>
            {children}
        </Backdrop>
    )
}