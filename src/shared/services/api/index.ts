import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Contatos } from "../../models/Contato_model";

const api = createApi({
  reducerPath: "api_agenda_telefonica",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5050",
  }),
  tagTypes: ["Contatos"],
  endpoints: (builder) => ({
    getContatos: builder.query<Contatos[], void>({
      query: () => "/contato",
      providesTags: ["Contatos"],
    }),
    getCategoria: builder.query<Contatos[], void>({
      query: () => "/categoria",
      providesTags: ["Contatos"],
    }),
    getContatosById: builder.query<Contatos, number>({
      query: (id) => `/contato/${id}`,
    }),
    postContato: builder.mutation<void, Contatos>({
      query: (novoContato) => ({
        url: `/contato`,
        method: "POST",
        body: novoContato,
      }),
      invalidatesTags: ["Contatos"],
    }),
    updadeContato: builder.mutation<void, Contatos>({
      query: ({ id, ...contato }) => ({
        url: `/contato/${id}`,
        method: "PATCH",
        body: contato,
      }),
      invalidatesTags: ["Contatos"],
    }),
    deleteContato: builder.mutation<void, string | number>({
      query: (id) => ({
        url: `/contato/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contatos"],
    }),
  }),
});

export const {
  useGetContatosQuery,
  useGetCategoriaQuery,
  useGetContatosByIdQuery,
  usePostContatoMutation,
  useUpdadeContatoMutation,
  useDeleteContatoMutation,
} = api;
export default api;
