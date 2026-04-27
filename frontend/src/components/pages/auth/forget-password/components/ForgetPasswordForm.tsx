import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function ForgetPasswordForm() {
    return (
        <form>
            <Input type="email" placeholder="Email" />
            <Button type="submit">Send Reset Link</Button>
        </form>
    )
}