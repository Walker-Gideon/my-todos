import Button from "@/components/ui/Button";

export default function ModalBackButton({ onClick }: { onClick: () => void }) {
    return (
        <Button 
            variant="text" 
            ariaLabel="Go Back" 
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
            className={"whitespace-nowrap text-sm underline-offset-4 underline decoration-dark decoration-2"}
        >
            Go Back
        </Button>
    )
}