import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateUserProfile, type UpdateProfileData } from "@/api/auth";

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  const { mutate: profile, isPending } = useMutation({
    mutationFn: (data: UpdateProfileData) => updateUserProfile(data),
    onSuccess: () => {
      toast.success("Profile updated successfully");
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { profile, isPending };
};
