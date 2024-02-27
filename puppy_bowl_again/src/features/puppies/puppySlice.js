import api from "../../store/api";

const puppiesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPuppies: builder.query({
      query: () => "/players",
      providesTags: ["Puppies"],
    }),
    getPuppy: builder.query({
      query: (id) => "/players/" + id,
      providesTags: ["Puppies"],
    }),
    addPuppy: builder.mutation({
      query: (puppy) => ({
        url: "/players",
        method: "POST",
        body: puppy,
      }),
      invalidatesTags: ["Puppies"],
    }),
    deletePuppy: builder.mutation({
      query: (id) => ({
        url: "/players/" + id,
        method: "DELETE",
      }),
      invalidatesTags: ["Puppies"],
    }),
  }),
});

export const {
  useGetPuppiesQuery,
  useGetPuppyQuery,
  useAddPuppyMutation,
  useDeletePuppyMutation,
} = puppiesApi;
