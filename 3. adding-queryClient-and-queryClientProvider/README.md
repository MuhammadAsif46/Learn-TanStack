# QueryClient:

QueryClient: It is the core part of the react-query library. It manages the caching,
background fetching, data synchronization, and other query-related logic. It provides a
centralized store for managing and caching asynchronous data in your application.

new QueryClient(): This creates a new QueryClient instance with default settings. You
can configure it with options if needed (e.g., setting cache time, stale time, etc.).

QueryClientProvider: This component is part of react-query and is used to provide the
QueryClient instance to your entire React app (or a portion of it). This makes the qu
client available via React's context API so that all the components in the tree can
the useQuery, use Mutation, and other hooks provided by react-query.