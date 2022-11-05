import React from 'react';
import ReactDom from 'react-dom';
import Experience from './components/Experience';
import Name from './components/Name';
import Educator from "./components/Educator";
import Skill from "./components/Skill";
import Hobbies from "./components/Hobbies";
import "./index.css";

ReactDom.render(
  <>
    <Name/>
    <hr />
    <Experience/>
    <hr />
    <Educator/>
    <hr />
    <Skill/>
    <hr />
    <Hobbies/>
  </>,
  document.getElementById("root")
);
