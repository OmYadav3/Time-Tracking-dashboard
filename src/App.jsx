import React, { useEffect, useState } from "react";
import Userprofile from "./components/Userprofile";
import userimage from "/userimage.png";
import icon from "/icon-ellipsis.svg";
import bgicon from "/icon-work.svg";
import bgiconplay from "/icon-play.svg";
import bgiconstudy from "/icon-study.svg";
import bgiconexercise from "/icon-exercise.svg";
import bgiconsocial from "/icon-social.svg";
import bgiconselfcare from "/icon-self-care.svg";
import FieldCard from "./components/FieldCard";

const App = () => {
  const [data, setData] = useState([]);
  const [selectedInterval, setSelectedInterval] = useState("daily");

  console.log(bgicon);

  const fetchData = async () => {
    try {
      const response = await fetch("/data.json"); // Assuming the file is in the public directory
      const jsonData = await response.json();
      if (jsonData) {
        setData(jsonData);
      }
      console.log(response, jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleIntervalChange = (interval) => {
    setSelectedInterval(interval);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center m-20">
      <div className="section-A ">
        <Userprofile
          image={userimage}
          username={"Jeremy Robson"}
          handleIntervalChange={handleIntervalChange}
          selectedInterval={selectedInterval}
        />
      </div>
      <div className="section-B grid grid-cols-3 p-4 gap-4">
        {data &&
          data.length > 0 &&
          data.map((item, index) => (
            <FieldCard
              key={index}
              title={item.title}
              data={item.timeframes[selectedInterval]}
              selectedInterval={selectedInterval}
              icon={icon}
              handleIntervalChange={handleIntervalChange}
              bgcolor={"bg-Lightorange"}
              bgicons={bgicon}
            />
          ))}

        
      </div>
    </div>
  );
};

export default App;


