import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api";

const FetchOld = () => {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const data = async () => {
    const res = await fetchPosts();
    if (res.status === 200) {
      setPosts(res);      // set the fetched posts data
      setLoader(false);   // turn off loading state
    }else {
      setError(true); // set error state
      setLoader(false); // turn off loading state
    }
    console.log("res-->", res);
  };

  useEffect(() => {
    data();
  }, []);

  if(loader) return <p>Loadin.....</p>
  if(error) return <p>Something went Wrong!</p>

  return (
    <div>
      <h1>Fetch Data Old Version</h1>
      <ul className="section-accordion">
        {posts?.length > 0 ? (
          posts?.map((post) => (
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

export default FetchOld;
