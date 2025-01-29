**Dynamic Pages Using QueryKeys in React Query**
   - `queryKeys` in React Query help in dynamically managing data fetching for different pages.
   - This is useful when fetching data based on parameters like `id` in a URL.

   **Example: Fetching user details dynamically**
   ```jsx
   import { useQuery } from "@tanstack/react-query";
   import { useParams } from "react-router-dom";

   const fetchUser = async (id) => {
     const response = await fetch(`https://api.example.com/users/${id}`);
     return response.json();
   };

   const UserProfile = () => {
     const { id } = useParams();
     const { data, isLoading, isError } = useQuery(["user", id], () => fetchUser(id));

     if (isLoading) return <p>Loading...</p>;
     if (isError) return <p>Error loading user data.</p>;

     return (
       <div>
         <h2>{data.name}</h2>
         <p>Email: {data.email}</p>
       </div>
     );
   };

   export default UserProfile;
   ```

   **How it works:**
   - `useParams()` gets the `id` from the URL.
   - `queryKey` dynamically changes based on `id`, ensuring unique caching for each user.
   - React Query automatically refetches data when `id` changes.

   **Benefits:**
   - Caches user data efficiently.
   - Reduces unnecessary API calls.
   - Ensures up-to-date data when navigating between pages.
