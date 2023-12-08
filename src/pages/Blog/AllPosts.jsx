import React from "react";
import "./allPosts.css";
import allPostsData from "../../data/allPosts/allPosts";
import PostCard from "../../components/postCard/PostCard";

const AllPosts = () => {
  return (
    <section className="all-posts">
      <div className="container">
        <h1>All Posts</h1>

        <div className="posts-wrapper">
          {allPostsData.map((post) => {
            return (
              <PostCard
                key={post.id}
                img={post.img}
                title={post.title}
                desk={post.desk}
                link={post.link}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AllPosts;
