**useMutation in React Query**
   - The `useMutation` hook in React Query is used for handling non-GET requests such as creating, updating, and deleting data.
   - Unlike `useQuery`, mutations do not run automatically. Instead, they are triggered manually when needed.
   
   ### Key Features:
   - Handles API requests for POST, PUT, PATCH, and DELETE operations.
   - Provides `onSuccess` and `onError` callbacks for handling success or failure cases.
   - Automatically updates the cache when mutations occur.
   
   **Example Usage:**
   ```jsx
   import { useMutation, useQueryClient } from "@tanstack/react-query";

   const createPost = async (newPost) => {
     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(newPost),
     });
     return response.json();
   };

   const PostComponent = () => {
     const queryClient = useQueryClient();
     const mutation = useMutation(createPost, {
       onSuccess: () => {
         queryClient.invalidateQueries("posts"); // Refreshes post data after a mutation
       },
     });

     return (
       <button onClick={() => mutation.mutate({ title: "New Post" })}>
         Create Post
       </button>
     );
   };
   ```
   
   ### Explanation:
   - `useMutation(createPost)`: Calls the function `createPost` when triggered.
   - `onSuccess`: Ensures that after a mutation, the posts list is refreshed.
   - `.mutate({ title: "New Post" })`: Triggers the mutation when the button is clicked.

   **Use Cases for `useMutation`**
   - Submitting forms (e.g., login, signup, creating a post, updating user profile).
   - Performing API calls to update or delete existing data.
   - Handling optimistic updates by modifying UI before waiting for a response from the server.

---

## Mutate():

The `mutate() function` is used to execute the mutation in React Query.
The process is the same whether you're:

- `Deleting data`
- `Updating data`
- `Creating new data`

When you call`.mutate()`, it tells React Query to run the mutation function defined
inside the useMutation hook. This is needed because the `mutation is an action
that changes data`, unlike queries, which are used to fetch data and are often
auto-executed.