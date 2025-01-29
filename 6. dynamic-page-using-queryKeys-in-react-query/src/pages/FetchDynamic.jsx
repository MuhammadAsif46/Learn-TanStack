import React from "react";
import { fetchPostById } from "../api";
import { NavLink, useParams, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const FetchDynamic = () => {
  const { id } = useParams();
  console.log("queryParams==>", id);

  const { data, isLoading, isPending, isError, error } = useQuery({
    queryKey: ["post"], // work in useState
    queryFn: () => fetchPostById(id), // work in useEffect
  });

  console.log("data-->", data);
  

  // if (isLoading) return <p>Loadin.....</p>;
  if (isPending) return <p>Loadin.....</p>;
  if (isError) return <p>Error: {error.message || "Something went Wrong!"}</p>;

  return (
    <div className="section-accordion">
      <h1>Post ID Number - {id}</h1>
      <div>
        <p>ID: {data.id}</p>
        <p>Title: {data.title}</p>
        <p>Body: {data.body}</p>
      </div>
      <NavLink to={"/new"}>
            <button>Go Back</button>
      </NavLink>
    </div>
  );
};

export default FetchDynamic;
