import { useEffect, useState } from "react";
import { SkillIdentifier } from "./components/SkillIdentifier/SkillIdentifier";
import sanityClient from "./client";
import styled from "styled-components";
import skillIdentifierImage from "../src/images/skill-identifier.svg";
import Footer from "./components/Footer";


export default function Tools() {
  const [allPostsData, setAllPosts] = useState([]);

  return (
  <div className="container">
      

      <Footer/>
  </div>
  )
}
