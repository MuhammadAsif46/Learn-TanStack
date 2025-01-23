import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api";

const FetchOld = () => {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const data = async () => {
    const res = await fetchPosts();
    setPosts(res);
    console.log("res-->", res);
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div>
      <ul className="section-accordion">
        {posts?.length > 0 ? (
          posts?.map((post) => (
            <li key={post.id}>
              <p>{post.title}</p>
              <p>{post.body}</p>
            </li>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </ul>
    </div>
  );
};

export default FetchOld;
