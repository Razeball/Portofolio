import profile from "../routes/assets/Profile.jpg";
import sb from "../routes/assets/SB.png";
import logo from "../routes/assets/Logo.svg";
import code from "../routes/assets/code.png";
import prodoku from "../routes/assets/ProDoku.png";
import teacherGrader from "../routes/assets/teachergrader.png";
import github from "../routes/assets/github.svg";
import linkedin from "../routes/assets/linkedin.svg";
import angular from "../routes/assets/angular.svg";
import react from "../routes/assets/react.svg";
import svelte from "../routes/assets/svelte.svg";
import websocket from "../routes/assets/websocket.svg";
import redux from "../routes/assets/redux.svg";
import zustand from "../routes/assets/zustand.svg";
import dotnet from "../routes/assets/dotnet.svg";
import docker from "../routes/assets/docker.svg";
import nodejs from "../routes/assets/nodejs.svg";
import mcp from "../routes/assets/mcp.png";
import machinelearning from "../routes/assets/machinelearning.svg";

export const assets = {
  profile,
  sb,
  logo,
  code,
  prodoku,
  teacherGrader,
  github,
  linkedin,
  angular,
  react,
  svelte,
  websocket,
  redux,
  zustand,
  dotnet,
  docker,
  nodejs,
  mcp,
  machinelearning
} as const;

export type AssetKey = keyof typeof assets;
