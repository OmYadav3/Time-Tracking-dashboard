import React from "react";

const FieldCard = (props) => {
  return (
    <div>
      <div
        className={`w-52  ${props.bgcolor}  bg-no-repeat bg-right-top rounded-xl pt-12 `}
        style={{ backgroundImage: `url('${props.bgicons}')` }}
      >
        <div className="main text-white  p-6 rounded-xl bg-Darkblue hover:bg-Desaturatedblue">
          <div className="flex justify-between items-center ">
            <div className="text-2xl">{props.fieldname}</div>
            <div className="">
              <img
                className="h-1 cursor-pointer"
                src={props.icon}
                alt="not found"
              />
            </div>
          </div>
          <div className="flex flex-col  justify-between">
            <div className=" py-4 text-4xl">{props.hours}</div>
            <div className="text-sm text-PaleBlue">
              lastweek-{props.fullhours}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldCard;
