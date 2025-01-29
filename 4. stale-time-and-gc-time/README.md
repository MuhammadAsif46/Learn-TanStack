# Simple React Setup with Routing and React Query

This project demonstrates a basic React setup including:

1. **Hello World Example**

   - A simple React component displaying "Hello World" as a starting point.

2. **Installing Dependencies**

   - Steps to install React and React Router DOM for navigation between pages.

3. **Basic Routing with React Router DOM**

   - Implemented navigation between multiple pages using React Router DOM.
   - Shows how to define routes and link them for smooth transitions between pages.

4. **React Query Overview**

   - **useQuery**: Fetches and reads data (GET requests) from an API and automatically caches the result.
   - **useMutation**: Used for creating, updating, or deleting data (POST, PUT, DELETE requests) and allows triggering manual side effects.

5. **Garbage Collection Time (gcTime)**

   - In React Query v5, the `cacheTime` option has been renamed to `gcTime`.
   - React Query caches API response data locally, avoiding redundant API requests and improving performance.
   - If data changes, the cache updates automatically to ensure the latest information is displayed.

   **Use Case:**

   - Imagine fetching a list of users. If you revisit the page, React Query will use the cached list instead of fetching from the server again, enhancing speed.
   - If a new user is added, React Query will update the list automatically.

   - By default, inactive queries are garbage collected after 5 minutes, meaning if a query is unused for 5 minutes, its cache will be cleared.

6. **Stale Time (staleTime)**

   - In React Query, `staleTime` is a configuration option that determines how long fetched data is considered fresh before needing a refetch.

   ### Here's how it works:

   **Fresh Data:**
   When data is initially fetched or updated, it's considered fresh.

   **Stale Data:**
   After the `staleTime` duration (specified in milliseconds) elapses, the data is considered stale.

   **Default Value:**
   The default `staleTime` is `0`, meaning data becomes stale immediately after being fetched. This ensures data is always up-to-date but can lead to frequent refetching.

   ```jsx
   // React Query Example
   const { data, isLoading, isPending, isError, error } = useQuery({
     queryKey: ["posts"], // Similar to useState
     queryFn: fetchPosts, // Similar to useEffect
     gcTime: 1000,
     staleTime: 5000, // Data stays fresh for 5 seconds
   });
   ```
