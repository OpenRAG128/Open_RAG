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

        <div className="w-max h-max flex flex-col items-center gap-5 md:w-full md:flex-col md:flex md:items-start md:gap-5 md:flex-wrap">
          <SpotlightCard
            className="w-[90vw] md:w-[80vw] md:h-max cursor-pointer rounded-md flex flex-col gap-2"
            spotlightColor="rgba(255, 255, 255, 0.25)"
          >
            <h1 className="text-emerald-300 font-bold">How It Started</h1>
            <div className="flex flex-col gap-2">
              <p className="font-sans">
                OpenRAG Innovations Pvt. Ltd. is a technology company dedicated
                to engineering precision in Generative AI through our proprietary
                Corrective Context Engine (CCE). We focus on building intelligent
                systems that eliminate hallucinations, deliver role-specific
                insights, and ensure efficiency across academia, research, and
                enterprise knowledge work.
              </p>

              <p className="font-sans">
                The founders aim to position OpenRAG as a global leader in
                 and generative AI agent development, with a mission committed to building AI solutions that are trustworthy, 
                scalable, and transformative for the future of knowledge systems.
              </p>

              {/* Incorporation Details */}
              <div className="mt-6 rounded-lg border border-gray-700 bg-gray-900 p-5">
                <h3 className="text-emerald-300 font-semibold mb-3">
                  Incorporation Details
                </h3>
                <ul className="list-none space-y-2 text-sm text-gray-200">
                  <li>
                    <span className="font-semibold">Registered Name:</span>{" "}
                    OpenRAG Innovations Private Limited
                  </li>
                  <li>
                    <span className="font-semibold">Corporate Identity Number (CIN):</span>{" "}
                    U58201OD2025PTC050816
                  </li>
                  <li>
                    <span className="font-semibold">Date of Incorporation:</span>{" "}
                    22nd September 2025
                  </li>
                  <li>
                    <span className="font-semibold">Registered Office:</span>{" "}
                    Plot No. 97/F, Near PH7, S.S. Vihar, KIIT, Bhubaneswar –
                    751024, Odisha, India
                  </li>
                </ul>
                <p className="mt-4 text-xs text-gray-500">
                  As per the Certificate of Incorporation issued by the Ministry
                  of Corporate Affairs, Government of India.
                </p>
              </div>
            </div>

            {/* People Section */}
            <div className="pt-5 flex overflow-y-auto flex-col gap-2 items-start">
              <h1 className="font-medium text-sm md:text-xl lg:text-xl">
                People Who Make It Happen:
              </h1>

              <div className="m-auto text-black font-bold text-lg w-full flex flex-col gap-2">
                <h1 className="text-[.69rem] lg:text-[.79rem] xl:text-sm font-sans">
                  <span className="text-emerald-300 font-bold">
                    Nisharg Bhargav Nargund
                  </span>
                </h1>
              </div>

              <div className="m-auto text-black font-bold text-lg w-full flex flex-col gap-2">
                <h1 className="text-[.69rem] lg:text-[.79rem] xl:text-sm font-sans">
                  <span className="text-emerald-300 font-bold">
                    Dr. Suresh Chandra Satapathy
                  </span>
                </h1>
              </div>

              <div className="m-auto text-black font-bold text-lg w-full flex flex-col gap-2">
                <h1 className="text-[.69rem] lg:text-[.79rem] xl:text-sm font-sans">
                  <span className="text-emerald-300 font-bold">
                    Miten N Mehta
                  </span>
                </h1>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard
            className="w-[90vw] md:w-[80vw] md:h-max cursor-pointer rounded-md flex flex-col gap-2"
            spotlightColor="rgba(255, 255, 255, 0.25)"
          >
            <h1 className="text-emerald-300 font-bold">What We Provide</h1>
            <div className="flex flex-col gap-2">
              <p className="font-sans">
                Generative AI applications are often generic, resource-intensive,
                and poorly aligned with the specific needs of various industries,
                making them ineffective as true domain experts.
              </p>
              <p className="font-sans">
                OpenRAG addresses these challenges by developing{" "}
                <span className="text-emerald-300 font-bold px-2">
                  context-aware and a multi-layer hallucination removal
                </span>{" "}
                Contextual Corrective Engine (CCE), generative AI
                agents, and tools that bring precision and reliability to
                high-stakes domains.
              </p>
            </div>
          </SpotlightCard>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
