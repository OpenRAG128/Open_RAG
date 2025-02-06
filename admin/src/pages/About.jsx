import React, { useRef,useState } from "react";
import { Link } from "react-router-dom"; // Corrected import
import "../styles/style.css";
import axios from "axios";
import VariableProximity from "../components/reactBits/VariableProximity";
import { useEffect } from "react";
const About = () => {
  const containerRef = useRef(null);
  const [users, setUsers] = useState(null);
  const backendBaseUrl = 'https://open-rag-c32i.onrender.com';
  // const backendBaseUrl = "http://localhost:8081";
  useEffect(()=>{
    axios.get(`${backendBaseUrl}/exports/users`)
     .then((response) => {
        setUsers(response.data.TotalUsers);
      })
      .catch((error) => {
        console.error(error);
      });
  },[])
  const handleDownloadCSV = async () => {
    
    try {
      
      const response = await axios.get(`${backendBaseUrl}/export`, {
        responseType: "blob", // To handle the binary data
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "users.csv"); // Filename for download
      document.body.appendChild(link);
      link.click();
      link.remove();
      console.log(response);

    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div
      ref={containerRef}
      className="w-[100vw] h-[100vh] bg-black flex items-start justify-start flex-col gap-10 pl-10"
    >
      <VariableProximity
        label={"Dashboard"}
        className={
          "variable-proximity-demo text-white text-[12vw] md:text-[8vw] cursor-pointer"
        }
        fromFontVariationSettings="'wght' 500, 'opsz' 9"
        toFontVariationSettings="'wght' 1000, 'opsz' 40"
        containerRef={containerRef}
        radius={100}
        falloff="linear"
      />
      <div className="w-max h-28 bg-emerald-500 rounded-lg flex flex-col gap-5 p-5">
        <p className=" font-bold text-2xl text-white">{users}</p>
        <p className=" font-bold text-xl">Total People reached you</p>
      </div>
      <p className="text-gray-500 font-semibold">Download the list of user contacted you</p>
      <button
        onClick={handleDownloadCSV}
        className="buttonFade bg-white px-4 py-2 rounded-md text-[#10a37f] font-bold text-md w-max h-max z-20 cursor-pointer"
      >
        Download
      </button>
    </div>
  );
};

export default About;
