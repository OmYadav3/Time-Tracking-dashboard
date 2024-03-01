import React from 'react'

const Userprofile = (props) => {
  return (
    <div>
      <div className="main my-8 w-52 h-[28.5rem] flex flex-col bg-Darkblue">
        <div className="sec-A border-w h-[70%] flex flex-col bg-Blue rounded-2xl p-8">
            <div className='flex justify-start '>
                <img className="img min-w-16 max-w-16 border-4 rounded-[50%] " src={props.image} alt="not found" />
            </div>
            <div className='report text-sm pt-10 opacity-80 text-white '>
                Report for
            </div>
            <div className='user text-4xl pt-2 text-white '>
                {props.username}
            </div>
        </div>
        <div className="sec-B w-full rounded-2xl flex flex-col pl-8 py-4  text-sm gap-6 bg-Darkblue  cursor-pointer">
            <div className='hover:text-white text-Violet'>Daily</div>
            <div className='hover:text-white text-Violet'>Weekly</div>
            <div className='hover:text-white text-Violet'>Monthly</div>
        </div>
      </div>
    </div>
  )
}

export default Userprofile
