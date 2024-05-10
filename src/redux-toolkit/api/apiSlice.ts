import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:65065' }),
  tagTypes: ['Lessons'],
  endpoints: (builder) => ({
    getLessons: builder.query({
      query: () => '/lessons',
      providesTags: ['Lessons'],
    }),
    addNote: builder.mutation({
      query: (lesson) => ({
        url: `/lessons/${lesson.id}`,
        method: 'PATCH',
        body: lesson,
      }),
      invalidatesTags: ['Lessons'],
    }),
    setCompletedStatus: builder.mutation({
      query: (lesson) => ({
        url: `/lessons/${lesson.id}`,
        method: 'PATCH',
        body: lesson,
      }),
      invalidatesTags: ['Lessons'],
    }),
  }),
});

export const { useGetLessonsQuery, useAddNoteMutation, useSetCompletedStatusMutation } = apiSlice;

// type Api = {
//   // Redux integration
//   reducerPath: string;
//   reducer: Reducer;
//   middleware: Middleware;

//   // Endpoint interactions
//   endpoints: Record<string, EndpointDefinition>;

//   // Code splitting and generation
//   injectEndpoints: (options: InjectEndpointsOptions) => UpdatedApi;
//   enhanceEndpoints: (options: EnhanceEndpointsOptions) => UpdatedApi;

//   // Utilities
//   utils: {
//     updateQueryData: UpdateQueryDataThunk;
//     patchQueryData: PatchQueryDataThunk;
//     prefetch: PrefetchThunk;
//     invalidateTags: ActionCreatorWithPayload<Array<TagTypes | FullTagDescription<TagTypes>>, string>;
//     selectInvalidatedBy: (
//       state: FullState,
//       tags: Array<TagTypes | FullTagDescription<TagTypes>>
//     ) => Array<{
//       endpointName: string;
//       originalArgs: any;
//       queryCacheKey: string;
//     }>;
//     selectCachedArgsForQuery: (state: FullState, endpointName: EndpointName) => Array<QueryArg>;
//     resetApiState: ActionCreator<ResetAction>;
//     getRunningQueryThunk(
//       endpointName: EndpointName,
//       args: QueryArg
//     ): ThunkWithReturnValue<QueryActionCreatorResult | undefined>;
//     getRunningMutationThunk(
//       endpointName: EndpointName,
//       fixedCacheKeyOrRequestId: string
//     ): ThunkWithReturnValue<MutationActionCreatorResult | undefined>;
//     getRunningQueriesThunk(): ThunkWithReturnValue<Array<QueryActionCreatorResult<any>>>;
//     getRunningMutationsThunk(): ThunkWithReturnValue<Array<MutationActionCreatorResult<any>>>;
//   };

//   // Internal actions
//   internalActions: InternalActions;

//   // React hooks (if applicable)
//   [key in GeneratedReactHooks]: GeneratedReactHooks[key];
// };
