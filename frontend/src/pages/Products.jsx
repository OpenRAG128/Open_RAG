import React, { useEffect, useRef, useState } from "react";
import VariableProximity from "../components/reactBits/VariableProximity";
import SpotlightCard from "../components/reactBits/SpotlightCard";
import "./styles/Products.css";
import { Link } from "react-router-dom";

const Products = () => {
  const containerRef = useRef(null);
  return (
    <div className="w-full h-[300vh] md:h-[200vh] bg-black pt-36 ">
      <div className="w-[90%] h-full bg-black m-auto flex flex-col gap-2">
        <div
          ref={containerRef}
          style={{ position: "relative" }}
          className="w-max h-max"
        >
          <VariableProximity
            label={"Products"}
            className={
              "variable-proximity-demo text-white text-[12vw] md:text-[8vw] cursor-pointer"
            }
            fromFontVariationSettings="'wght' 500, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </div>
        <div className="w-full  bg-black pt-10 pb-10 md:flex md:items-center md:justify-between md:flex-row flex flex-col gap-4">
          <div className="leftContent w-full md:w-96 h-full  flex-1">
            {/* md and its above screen view */}
            <h1 className="hidden md:block text-white font-bold text-2xl font-sans">
              DocDynamo
            </h1>
            <p className="hidden md:block text-white text-lg pt-5 ">
              <ul className=" list-disc text-gray-300 px-6">
                <li className="font-sans">
                  DocDynamo (Android application), transforms static files and websites into interactive knowledge systems. Users can upload PDFs, research papers, or URLs and query them with minimal prompting, eliminating the complexity that keeps most non-technical users away from AI. What makes DocDynamo unique is its persona-driven responses, a student gets simplified explanations, a researcher gets depth, and a professional gets concise summaries, all from the same system. Beyond Q&A, we offer a one-click generation suite that creates key questions, concept notes, turning passive reading into active learning. To extend value further, our platform includes YouTube intelligence, recommending videos directly relevant to user queries. Together, these features make DocDynamo more than a chatbot — it's a dynamic learning and knowledge companion.
                </li>
              </ul>
            </p>
            {/* sm screen view (mobile view)*/}
            <SpotlightCard
              className="md:hidden w-[90vw] h-max flex flex-col gap-5 cursor-pointer rounded-md"
              spotlightColor="rgba(255, 255, 255, 0.25)"
            >
              <h1 className="text-xl font-bold">DocDynamo</h1>
              <ul className="">
                <li>
                  DocDynamo (Android application), transforms static files and websites into interactive knowledge systems. Users can upload PDFs, research papers, or URLs and query them with minimal prompting, eliminating the complexity that keeps most non-technical users away from AI. What makes DocDynamo unique is its persona-driven responses, a student gets simplified explanations, a researcher gets depth, and a professional gets concise summaries, all from the same system. Beyond Q&A, we offer a one-click generation suite that creates key questions, concept notes, turning passive reading into active learning. To extend value further, our platform includes YouTube intelligence, recommending videos directly relevant to user queries. Together, these features make DocDynamo more than a chatbot — it's a dynamic learning and knowledge companion.
                </li>
              </ul>
              <Link
                to="https://play.google.com/store/apps/details?id=com.openrag.docdynamo"
                target="_blank"
                className="buttonFade bg-white px-4 py-2 rounded-md text-[#10a37f] font-bold text-md w-max h-max z-20 "
              >
                DocDynamo
              </Link>
            </SpotlightCard>
          </div>
          <div className="hidden md:flex w-10 h-full  pt-10 pb-10 relative  md:flex-col">
            <div className="line absolute left-[50%] w-1 h-16  bg-white m-auto transition-all duration-700 ease-linear"></div>
            <Link
              to="https://play.google.com/store/apps/details?id=com.openrag.docdynamo"
              target="_blank"
              className="buttonFade absolute left-[-110%] top-[30%] bg-white px-2 py-2 rounded-md text-[#10a37f] font-bold text-xl w-max h-max z-20 "
            >
              DocDynamo
            </Link>
            <Link
              to="https://langvault-web-1.onrender.com/"
              target="_blank"
              className="button2Fade absolute left-[-90%] top-[75%] bg-white px-2 py-2 rounded-md text-[#10a37f] font-bold text-xl w-max h-max z-20 "
            >
              LangVault
            </Link>
          </div>
          <div className="rightContent w-full md:w-96  h-full  flex-1 md:pt-56 pt-0">
            {/* md and above screen view */}
            <h1 className="hidden md:block text-white font-bold text-2xl font-sans">
              Langvault:
            </h1>
            <p className="hidden md:block text-white text-lg pt-5 ">
              <ul className=" list-disc text-gray-300 px-6">
                <li className="font-sans">
                  Transform your PDFs and resumes effortlessly between national
                  and international languages with just two clicks! OpenRAG's
                  LangVault ensures your documents are instantly accessible in
                  your preferred local language, breaking language barriers in
                  seconds. Whether you're preparing for a global opportunity or
                  simplifying communication, LangVault's lightning-fast,
                  accurate translations make your documents ready to read,
                  share, and impress—anywhere, anytime.
                </li>
              </ul>
            </p>
            {/* sm screen view */}
            <SpotlightCard
              className="md:hidden w-[90vw] h-max flex flex-col gap-5 cursor-pointer rounded-md"
              spotlightColor="rgba(255, 255, 255, 0.25)"
            >
              <h1 className="text-xl font-bold">Langvault:</h1>
              <ul className="">
                <li>
                  Transform your PDFs and resumes effortlessly between national
                  and international languages with just two clicks! OpenRAG's
                  LangVault ensures your documents are instantly accessible in
                  your preferred local language, breaking language barriers in
                  seconds. Whether you're preparing for a global opportunity or
                  simplifying communication, LangVault's lightning-fast,
                  accurate translations make your documents ready to read,
                  share, and impress—anywhere, anytime.
                </li>
              </ul>
              <Link
                to="https://langvault-web-1.onrender.com/"
                target="_blank"
                className="buttonFade bg-white px-4 py-2 rounded-md text-[#10a37f] font-bold text-md w-max h-max z-20 "
              >
                LangVault
              </Link>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
