import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api";
import { useEffect } from "react";

const InfiniteScroll = () => {
  const { data } = useInfiniteQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    getNextPageParam: (lastPage, allPages) => {
      console.log("lastPage:-->", lastPage, allPages);
      return lastPage.length === 10 ? allPages.length + 1 : undefined;
    },
  });

  console.log("data-->", data);



  return (
    <div>
      <h1>Infinite Scroll with React Query</h1>
      {data?.pages?.map((page, idx) => (
        <ul key={idx}>
          {page.map((user) => (
            <li
              key={user.id}
              style={{ padding: "10px", border: "1px solid #ccc" }}
            >
              <p>{user.login}</p>
              <img
                src={user.avatar_url}
                alt={user.login}
                width={50}
                height={50}
              />
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default InfiniteScroll;
