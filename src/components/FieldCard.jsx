import React, { useEffect, useState } from "react";

const FieldCard = ({ title, data, selectedInterval, icon, handleIntervalChange, bgicons , bgcolor }) => {
  
  const [currentHours, setCurrentHours] = useState();
  const [previousHours, setPreviousHours] = useState();


  useEffect(() => {

    setCurrentHours(data.current);
    setPreviousHours(data.previous);
    console.log(data.currentHours, "sir");

  }, [data])
  

  
  console.log(data, "omyadav");

  return (
    <div>
      <div
        className={`w-52  ${bgcolor}  bg-no-repeat bg-right-top rounded-xl pt-12 `}
        style={{ backgroundImage: `url('${bgicons}')` }}
      >
        <div className="main text-white  p-6 rounded-xl bg-Darkblue hover:bg-Desaturatedblue">
          <div className="flex justify-between items-center ">
            <div className="text-2xl">{title}</div>
            <div className="">
              <img
                className="h-1 cursor-pointer"
                src={icon}
                alt="not found"
                onClick={() => handleIntervalChange(selectedInterval)}
              />
            </div>
          </div>
          <div className="flex flex-col  justify-between">
          <div className="py-4 text-4xl">{currentHours}hrs</div>
            <div className="text-sm text-PaleBlue">
              Previous - {previousHours}hrs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldCard;
