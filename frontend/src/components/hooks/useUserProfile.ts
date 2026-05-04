import { useAuth } from "@/context/AuthContext";

export const useUserProfile = () => {
    const { user } = useAuth();

    const { email, firstName, lastName, username, _id } = user ?? {};
    const name = `${firstName} ${lastName}`;

    const capitalizeName = (name: string) => {
        return name.split(" ").map((word) => word.charAt(0).toUpperCase())[0];
    };

    return { 
        id: _id,
        name,
        email,
        firstName,
        lastName,
        username,
        capName: `${capitalizeName(firstName)}${capitalizeName(lastName)}`
    };
}