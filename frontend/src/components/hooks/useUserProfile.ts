import { useQuery } from "@tanstack/react-query";

import { getUserProfile } from "@/api/auth";

export const useUserProfile = () => {
  const token = localStorage.getItem("token");

  const { data: user } = useQuery({
    queryKey: ["profile"],
    queryFn: getUserProfile,
    enabled: !!token,
    select: (response) => response?.data ?? null,
  });

  const { email, firstName, lastName, profileImageUrl, _id } = user ?? {};
  const name = `${firstName || ""} ${lastName || ""}`.trim();

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
    capName: `${capitalizeName(firstName)}${capitalizeName(lastName)}`,
  };
};
