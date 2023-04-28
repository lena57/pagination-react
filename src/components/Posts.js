import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div>
      <ul className="list-group mb-4">
        {posts.map((post) => (
          <li className="list-group-item" key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
