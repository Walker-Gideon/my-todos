import ShadowBox from "@/components/layout/ShadowBox";

export default function VitalTaskContent() {
    // w-full md:w-3/5 mb-2 hidden md:flex md:bg-blue-200
    return (
        <ShadowBox className={"px-4 md:px-6 flex flex-col w-full md:w-3/5 min-h-0 max-h-[500px] md:max-h-none md:flex-1 hidden md:flex mb-4 md:mb-0"}>
            <p>Vital Task display</p>
        </ShadowBox>
    )
}