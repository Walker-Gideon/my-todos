export default function Backdrop({ children, onClick, show }: { children: React.ReactNode, onClick: () => void, show: boolean }) {
    return (
        <div 
            className={`fixed inset-0 bg-black/50 z-40 ${show ? "block" : "hidden"}`}
            onClick={onClick}
        >
            {children}
        </div>
    )
}