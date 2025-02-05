### Infinite Scrolling with React Query

Infinite scrolling is a technique that loads more data automatically as the user scrolls down the page. In this example, we implement infinite scrolling using `useInfiniteQuery` from TanStack Query.

### How It Works

- **Fetching Data**: The `useInfiniteQuery` hook is used to fetch paginated data from an API.
- **Pagination Handling**: The `getNextPageParam` function determines whether there are more  pages to   load based on the number of items returned.
- **Detecting Scroll Position**: An event listener on the `window` object detects when the user reaches the bottom of the page and triggers the next data fetch.


### Key Features

- **Efficient Pagination**: Loads more data only when needed.
- **Automatic Fetching**: Fetches new data when the user reaches the bottom of the page.
- **Optimized Performance**: Uses getNextPageParam to determine if more data is available.
- **Seamless User Experience**: Avoids unnecessary page reloads while providing continuous data flow.

### Conclusion

This approach ensures smooth infinite scrolling, improving user experience while reducing API calls. 🚀