import { useAuth } from "@/context/AuthContext";

export const useUserProfile = () => {
    const { user } = useAuth();

    const { email, firstName, lastName, profileImageUrl, _id } = user ?? {};
    const name = `${firstName} ${lastName}`;

    const capitalizeName = (name?: string) => {
        if (!name) return "";
        return name.split(" ").map((word) => word.charAt(0).toUpperCase())[0];
    };

    return { 
        id: _id,
        name,
        email,
        firstName,
        lastName,
        profileImageUrl,
        capName: `${capitalizeName(firstName)}${capitalizeName(lastName)}`
    };
}