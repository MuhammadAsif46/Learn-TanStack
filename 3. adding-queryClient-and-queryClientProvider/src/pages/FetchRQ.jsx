import React from "react";
import { fetchPosts } from "../api";

import {useQuery} from "@tanstack/react-query"

const FetchRQ = () => {
  // 1st ways
  // const getData = async () => {
  //   const res = await fetchPosts();
  //   console.log("res-->", res);
  //   return res;
  // };

// only React query user
  const {data} = useQuery({
    queryKey: [ 'posts'], // work in useState
    queryFn: fetchPosts,     // work in useEffect
  })


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
