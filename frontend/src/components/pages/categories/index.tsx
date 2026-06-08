import Button from "@/components/ui/Button";
import ShadowBox from "@/components/layout/ShadowBox";
import Container from "@/components/layout/Container";
import CategoryStatus from "./components/CategoryStatus";
import CategoryPriority from "./components/CategoryPriority";
import SecondaryHeading from "@/components/layout/SecondaryHeading";

export default function Categories() {
    return (
        <ShadowBox border={true} className={"px-4 md:px-6 flex flex-col min-h-120 max-h-160 md:min-h-120 md:max-h-none md:h-full mb-4 md:mb-0"}>
            <Container variant="div">
                <SecondaryHeading fristWord={"Task"} secondWord={"Categories"} />
                <Button 
                    ariaLabel="Add Category" 
                    onClick={() => { }}
                    className={"mt-4 button-secondary-styling"}
                >
                    Add Category
                </Button>
            </Container>
            <Container variant="div" className={"mt-8 flex flex-col gap-4"}>
                <CategoryStatus />
                <CategoryPriority />
            </Container>
        </ShadowBox>
    )
}