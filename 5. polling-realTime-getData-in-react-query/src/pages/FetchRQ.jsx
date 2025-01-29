import React from "react";
import { fetchPosts } from "../api";

import { useQuery } from "@tanstack/react-query";

const FetchRQ = () => {
  // 1st ways
  // const getData = async () => {
  //   const res = await fetchPosts();
  //   console.log("res-->", res);
  //   return res;
  // };

  // only React query user
  const { data, isLoading, isPending, isError, error } = useQuery({
    queryKey: ["posts"], // work in useState
    queryFn: fetchPosts, // work in useEffect
    // gcTime: 1000,
    // staleTime: 5000, // work
    refetchInterval: 1000,
    refetchIntervalInBackground: true,
  });

  // react query version 4 define loading and isLoading but version 5 change
  // isLoading name to isPending and loading name to pending

  // if (isLoading) return <p>Loadin.....</p>;
  if (isPending) return <p>Loadin.....</p>;
  if (isError) return <p>Error: {error.message || "Something went Wrong!"}</p>;

  return (
    <div>
      <h1>Fetch Data New Version</h1>
      <ul className="section-accordion">
        {data?.length > 0 ? (
          data?.map((post) => (
            <li key={post.id}>
              <p>{post.title}</p>
              <p>{post.body}</p>
            </li>
          ))
        ) : (
          <h1>Loading....</h1>
        )}
      </ul>
    </div>
  );
};

export default FetchRQ;
