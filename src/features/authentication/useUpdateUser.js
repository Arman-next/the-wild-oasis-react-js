import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    // in REACT QUERY we can only pass one element in this function
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success("User Updated successfully");
      // directly get user from cache
      queryClient.setQueryData(["user"], user);
      //   queryClient.invalidateQueries({
      //     queryKey: ["user"],
      //   });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}
