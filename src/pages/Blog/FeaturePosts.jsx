import React from "react";
import "./featurePosts.css";
import featurePostsData from "../../data/featurePosts/featurePostsData";
import PostCard from "../../components/postCard/PostCard";

const FeaturePosts = () => {
  return (
    <section className="feature-posts">
      <div className="container">
        <h1>Feature Posts</h1>

        <div className="posts-wrapper">
          {featurePostsData.map((post) => {
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

export default FeaturePosts;
