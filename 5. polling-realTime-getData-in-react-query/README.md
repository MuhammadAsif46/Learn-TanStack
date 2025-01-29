 **Polling**
   - In React Query, polling refers to the technique of fetching data from an API at regular intervals to keep the UI up-to-date with the latest information. 
   - This is especially useful for scenarios where data changes frequently and you want to display real-time updates without requiring the user to manually refresh the page.
   
   **Using `refetchInterval`**
   - The simplest way to enable polling is to pass the `refetchInterval` option to the `useQuery` hook. 
   - This option specifies the interval (in milliseconds) at which React Query should automatically refetch the data.
   
   **Using `refetchIntervalInBackground`**
   - If you want to continue polling even when the component is not mounted or the user is in another tab, use the `refetchIntervalInBackground` option.
   
   ```jsx
   // React Query Polling Example
   const { data, isLoading, isPending, isError, error } = useQuery({
     queryKey: ["posts"], // Similar to useState
     queryFn: fetchPosts, // Similar to useEffect
     refetchInterval: 1000, // Polling every second
     refetchIntervalInBackground: true, // Keeps polling even in background
   });