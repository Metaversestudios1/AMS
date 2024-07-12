import React from "react";
import Link from "next/link";
import { FiShield } from "react-icons/fi";
import { MdInfoOutline } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
const Page = () => {
  return (
    <div>
    <div className="flex items-center">
        <div className="bg-yellow-500 rounded-[5px] ml-5 h-[30px] w-[10px]"></div>
        <div className="text-xl font-bold mx-2 my-8">Alerts</div>
      </div>
    <div className="mx-5"><Link href="/dashboard/alerts/add"><button className="text-white flex items-center  bg-blue-800 rounded-lg px-2 py-2"><MdInfoOutline  className="text-lg mx-2  text-white  rounded-full" />Add Alert</button></Link></div>
      <div className="m-3 text-sm">
        <div className="flex items-center border-[1px] border-gray-300 rounded-lg p-4 mb-2">
          <div>
            <MdInfoOutline  className="text-4xl  text-white p-2 mr-3 bg-purple-700 rounded-full" />
          </div>
          <div>
            <div>Info Alert</div>
            <div>This is the first alert message</div>
          </div>
        </div>
        <div className="flex items-center border-[1px] border-gray-300 rounded-lg p-4 mb-2">
          <div>
            <IoWarningOutline  className="text-4xl  text-white p-2 mr-3 bg-yellow-400 rounded-full" />
          </div>
          <div>
            <div>Warning Alert</div>
            <div>This is the Second alert message</div>
          </div>
        </div>
        <div className="flex items-center border-[1px] border-gray-300 rounded-lg p-4 mb-2">
          <div>
          <FiShield className='text-4xl  mr-3 text-white p-2 bg-green-500 rounded-full'/>
          </div>
          <div>
            <div>Success Alert</div>
            <div>This is the Third alert message</div>
          </div>
        </div>
        <div className="flex items-center border-[1px] border-gray-300 rounded-lg p-4 mb-2">
          <div>
          <RxCross2 className='text-4xl  mr-3 text-white p-2 bg-red-500 rounded-full'/>
          </div>
          <div>
            <div>Danger Alert</div>
            <div>This is the Forth alert message</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
