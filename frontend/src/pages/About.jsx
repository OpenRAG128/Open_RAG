import { useRef } from "react";
import VariableProximity from "../components/reactBits/VariableProximity";
import SpotlightCard from "../components/reactBits/SpotlightCard";
// import founder from "../assets/images/image1.png";
// import cofounder from "../assets/images/image2.jpg";
// import advisor from "../assets/images/advisor.jpg";
import Footer from "../components/Footer";

const About = () => {
  const containerRef = useRef(null);
  return (
    <div className="w-full h-[300vh] md:h-max bg-black pt-36">
      <div className="w-[90%] h-full bg-black pb-12 m-auto flex flex-col gap-2">
        <div
          ref={containerRef}
          style={{ position: "relative" }}
          className="w-max h-max"
        >
          <VariableProximity
            label={"About us"}
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
        <div className=" w-max h-max flex flex-col items-center gap-5 md:w-full md:flex-col md:flex md:items-start md:gap-5 md:flex-wrap">
          <SpotlightCard
            className="w-[90vw] md:w-[80vw] md:h-max cursor-pointer rounded-md flex flex-col gap-2 "
            spotlightColor="rgba(255, 255, 255, 0.25)"
          >
            <h1 className="text-emerald-300 font-bold">How It Started</h1>
            <p className="flex flex-col gap-2">
              <p className="font-sans">
                OpenRAG , is a Generative AI startup founded in April 2024 by{" "}
                <span className="text-emerald-300  font-bold px-2">
                  Suresh Chandra Satapathy ,
                </span>{" "}
                <span className="text-emerald-300  font-bold px-2">
                  Nisharg Nargund
                </span>{" "}
                and{" "}
                <span className="text-emerald-300  font-bold px-2">
                  Mitul Goswami.
                </span>{" "}
                
              </p>
              <p className="font-sans">
                Focused on developing domain-specific RAGbots, generative AI
                tools, agents, and applications, OpenRAG is establishing itself
                as a key player in the chatbot-building industry.{" "}
              </p>
              <p className="font-sans">
                The founders aim to position OpenRAG as a global leader in
                RAGbot and generative AI agent development, with a mission to
                democratize AI and make it accessible worldwide.{" "}
              </p>
            </p>
            <div className="pt-5  flex overflow-y-auto flex-col gap-2 items-start ">
              <h1 className="font-medium text-sm md:text-xl lg:text-xl">People Who Make It Happen : </h1>
              <div className=" m-auto text-black font-bold text-lg   w-full flex flex-col gap-2 ">
                {/* <div className="w-52 h-56 md:w-40 md:h-44 lg:w-52 lg:h-56 xl:w-60 xl:h-80 border-4 border-white rounded-xl">
                  <img
                    src={advisor}
                    alt=""
                    className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0"
                  />
                </div> */}
                <h1 className="text-[.69rem] lg:text-[.79rem] xl:text-sm font-sans">
                  {/* ADVISOR : <br className="hidden md:block"/> */}
                  <span className="text-emerald-300 font-bold">
                    {" "}
                    Suresh Chandra Satpathy
                  </span>
                </h1>
              </div>

              <div className=" m-auto text-black font-bold text-lg w-full flex flex-col gap-2">
                {/* <div className="w-52 h-56 md:w-40 md:h-44 lg:w-52 lg:h-56 xl:w-60 xl:h-80 border-4 border-white rounded-xl">
                  <img
                    src={founder}
                    alt=""
                    className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0"
                  />
                </div> */}
                <h1 className="text-[.69rem] lg:text-[.79rem] xl:text-sm font-sans">
                  {/* FOUNDER : <br className="hidden md:block"/> */}
                  <span className="text-emerald-300 font-bold">
                    {" "}
                    Nisharg Nargund
                  </span>
                </h1>
              </div>
              <div className=" m-auto text-black font-bold text-lg w-full flex flex-col gap-2">
                {/* <div className="w-52 h-56 md:w-40 md:h-44 lg:w-52 lg:h-56 xl:w-60 xl:h-80 border-4 border-white rounded-xl">
                  <img
                    src={cofounder}
                    alt=""
                    className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0"
                  />
                </div> */}
                <h1 className="text-[.69rem] lg:text-[.79rem] xl:text-sm font-sans">
                  {/* CO-FOUNDER : <br className="hidden md:block"/> */}
                  <span className="text-emerald-300 font-bold">
                    Mitul Goswami
                  </span>
                </h1>
              </div>
            </div>
          </SpotlightCard>
          <SpotlightCard
            className="w-[90vw] md:w-[80vw] md:h-max cursor-pointer rounded-md flex flex-col gap-2"
            spotlightColor="rgba(255, 255, 255, 0.25)"
          >
            <h1 className="text-emerald-300 font-bold">What we Provide</h1>
            <p className="flex flex-col gap-2 ">
              <p className="font-sans">
                Generative AI applications are often generic, money & resource
                intensive, and poorly aligned with the specific needs of various
                industries, not really niche domain experts.{" "}
              </p>
              <p className="font-sans">
                OpenRAG addresses these challenges by developing RAGbots—{" "}
                <span className="text-emerald-300 font-bold px-2">
                  industry-specific
                </span>{" "}
                Retrieval-Augmented Generation chatbots—and generative AI agents
                and tools.
              </p>
            </p>
          </SpotlightCard>

        </div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
