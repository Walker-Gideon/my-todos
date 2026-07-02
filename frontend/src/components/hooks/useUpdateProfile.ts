import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useAuth } from "@/context/useAuthContex";
import { updateUserProfile, type UpdateProfileData } from "@/api/auth";

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  const { login, checkAuth } = useAuth();

  const { mutate: profile, isPending } = useMutation({
    mutationFn: (data: UpdateProfileData) => updateUserProfile(data),
    onSuccess: (data) => {
      toast.success("Profile updated successfully");
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      if (data?.user) {
        login(data.user);
      }
      checkAuth(true);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { profile, isPending };
};
