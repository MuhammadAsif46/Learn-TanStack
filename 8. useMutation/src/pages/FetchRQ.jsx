import React from "react";
import { deletePost, fetchPosts } from "../api";
import { NavLink } from "react-router-dom";
import { keepPreviousData, useQuery, useMutation } from "@tanstack/react-query";
import { useState } from "react";

const FetchRQ = () => {
  const [pageNumber, setPageNumber] = useState(0);
  // 1st ways
  // const getData = async () => {
  //   const res = await fetchPosts();
  //   console.log("res-->", res);
  //   return res;
  // };

  // only React query user
  const { data, isLoading, isPending, isError, error } = useQuery({
    queryKey: ["posts", pageNumber], // "posts" work in useState, & pageNumber work in dependency value like useeffect
    queryFn: () => fetchPosts(pageNumber), // work in useEffect page load function call
    placeholderData: keepPreviousData, // not show loading state use then placeholderData
  });

  const deteleMutation = useMutation({
    mutationFn: (id) => deletePost(id),
  });

  if (isPending) return <p>Loadin.....</p>;
  if (isError) return <p>Error: {error.message || "Something went Wrong!"}</p>;

  return (
    <div>
      <h1>Fetch Data New Version</h1>
      <ul className="section-accordion">
        {data?.length > 0 ? (
          data?.map((post) => (
            <li key={post.id}>
              <NavLink to={`/new/${post.id}`}>
                <p>{post.id}</p>
                <p>{post.title}</p>
                <p>{post.body}</p>
              </NavLink>
              <button onClick={() => deteleMutation.mutate(post.id)}>Delete</button>
            </li>
          ))
        ) : (
          <h1>Loading....</h1>
        )}
      </ul>

      <div className="pagination-section contanier">
        <button
          disabled={pageNumber === 0 ? true : false}
          onClick={() => setPageNumber((prev) => prev - 3)}
        >
          Prev
        </button>
        <p>{pageNumber / 3 + 1}</p>
        <button onClick={() => setPageNumber((prev) => prev + 3)}>Next</button>
      </div>
    </div>
  );
};

export default FetchRQ;
