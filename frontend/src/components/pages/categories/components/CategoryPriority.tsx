import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import ShadowBox from "@/components/layout/ShadowBox";
import CategoryHeaders from "@/components/pages/categories/components/CategoryHeaders";

export default function CategoryPriority() {
    //min-h-120 max-h-160 md:min-h-120 md:max-h-none md:h-full mb-4 md:mb-0
    return (
        <Container variant="div">
            <CategoryHeaders heading="Priority" onOpenModal={() => {}} />
            <ShadowBox border={true} className={"px-4 md:px-6 flex flex-col"}>
                <p>Tesk Priority here</p>
            </ShadowBox>
        </Container>
    )
}