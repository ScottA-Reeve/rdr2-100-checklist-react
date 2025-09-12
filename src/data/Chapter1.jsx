import React from "react";
import ChapterChecklist from "./ChapterChecklist";
import chapter1Activities from "../data/chapter1Data";

export default function Chapter1() {
  return <ChapterChecklist title="Chapter 1" activities={chapter1Activities} />;
}
