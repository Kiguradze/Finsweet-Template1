import React from "react";
import "./blog.css";
import Header from "../../components/header/Header";
import blogHeroImage from "../../assets/blogHeroImage.png";
import FeaturePosts from "./FeaturePosts";
import AllPosts from "./AllPosts";
import Footer from "../../components/footer/Footer";

const Blog = () => {
  const date = "29 May 2021";
  return (
    <>
      <Header
        date={date}
        title={"Brand Positioning that you can’t ignore in 2021"}
        desk={
          "Lorem ipsum dolor sit amet, consectetur dipiscing elit. Vestibulum vitae nunc vitae neque ."
        }
        link={"#"}
        image={blogHeroImage}
      />
      <FeaturePosts />
      <AllPosts />
      <Footer />
    </>
  );
};

export default Blog;
