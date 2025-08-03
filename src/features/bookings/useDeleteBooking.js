import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBookingApi } from "../../services/apiBookings";

export function useDeleteBooking(bookingId) {
  // get access from App.jsx
  const queryClient = useQueryClient();

  const { isLoading: isDeletingBooking, mutate: deleteBooking } = useMutation({
    mutationFn: (bookingId) => deleteBookingApi(bookingId),
    onSuccess: () => {
      toast.success("Cabin sucessfully deleted");

      // after doing mutationFn it invalidate the data of the query
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeletingBooking, deleteBooking };
}
