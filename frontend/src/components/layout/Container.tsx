export default function Container({ props, children }: { props: any, children: React.ReactNode }) {
    return (
        <div className={`w-full min-h-screen ${props.className}`}>
            {children}
        </div>
    )
}