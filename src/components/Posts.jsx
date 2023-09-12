import React from 'react';

const Posts = ({ posts, loading }) => {
    // console.log(posts)
  return (
    <>
      {loading ? <h2>Loading ...</h2> : null}
      {posts.map((post, index) => (
        <div className="img" key={index}>
          <img 
            src={post}
            width={250}
            height={250}
            // alt={`Post ${index}`}
          />
        </div>
      ))}
    </>
  );
};

export default Posts;
