import React from "react";
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
  console.log(bgicon);
  return (
    <div className="flex items-center justify-center m-20">
      <div className="section-A ">
        <Userprofile image={userimage} username={"Jeremy Robson"} />
      </div>
      <div className="section-B grid grid-cols-3 p-4 gap-4">

        <FieldCard
        bgcolor={'bg-Lightorange'}
        bgicons={bgicon}
        fieldname ={"Work"}
        hours={"32hrs"}
        fullhours={"36hrs"}
        icon={icon}
        />

        <FieldCard
        bgcolor={'bg-Softblue'}
        bgicons={bgiconplay}
        fieldname ={"Work"}
        hours={"32hrs"}
        fullhours={"36hrs"}
        icon={icon}
        />

        <FieldCard
        bgcolor={'bg-Lightred'}
        bgicons={bgiconstudy}
        fieldname ={"Work"}
        hours={"32hrs"}
        fullhours={"36hrs"}
        icon={icon}
        />

        <FieldCard
        bgcolor={'bg-Limegreen'}
        bgicons={bgiconexercise}
        fieldname ={"Work"}
        hours={"32hrs"}
        fullhours={"36hrs"}
        icon={icon}
        />

        <FieldCard
        bgcolor={'bg-Violet'}
        bgicons={bgiconsocial}
        fieldname ={"Work"}
        hours={"32hrs"}
        fullhours={"36hrs"}
        icon={icon}
        />

        <FieldCard
        bgcolor={'bg-Softorange'}
        bgicons={bgiconselfcare}
        fieldname ={"Work"}
        hours={"32hrs"}
        fullhours={"36hrs"}
        icon={icon}
        />
      </div>
    </div>
  );
};

export default App;

// Report for
// Jeremy Robson

// Daily
// Weekly
// Monthly

// Work
// 5hrs <!-- daily -->
// Previous - 7hrs <!-- daily -->
// 32hrs <!-- weekly -->
// Previous - 36hrs <!-- weekly -->
// 103hrs <!-- monthly -->
// Previous - 128hrs <!-- monthly -->

// Play
// 1hr <!-- daily -->
// Previous - 2hrs <!-- daily -->
// 10hrs <!-- weekly -->
// Previous - 8hrs <!-- weekly -->
// 23hrs <!-- monthly -->
// Previous - 29hrs <!-- monthly -->

// Study
// 0hrs <!-- daily -->
// Previous - 1hr <!-- daily -->
// 4hrs <!-- weekly -->
// Previous - 7hrs <!-- weekly -->
// 13hrs <!-- monthly -->
// Previous - 19hrs <!-- monthly -->

// Exercise
// 1hr <!-- daily -->
// Previous - 1hr <!-- daily -->
// 4hrs <!-- weekly -->
// Previous - 5hrs <!-- weekly -->
// 11hrs <!-- monthly -->
// Previous - 18hrs <!-- monthly -->

// Social
// 1hr <!-- daily -->
// Previous - 3hrs <!-- daily -->
// 5hrs <!-- weekly -->
// Previous - 10hrs <!-- weekly -->
// 21hrs <!-- monthly -->
// Previous - 23hrs <!-- monthly -->

// Self Care
// 0hrs <!-- daily -->
// Previous - 1hr <!-- daily -->
// 2hrs <!-- weekly -->
// Previous - 2hrs <!-- weekly -->
// 7hrs <!-- monthly -->
// Previous - 11hrs <!-- monthly -->
