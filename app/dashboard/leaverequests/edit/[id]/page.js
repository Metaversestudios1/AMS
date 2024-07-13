"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IoIosArrowRoundBack } from "react-icons/io";


const Page = () => {
  const selectOptions = [
    { value: "approve", label: "Approve", key: 1 },
    { value: "reject", label: "Reject", key: 2 },
  ];

  const [status, setStatus] = useState("");
  const router = useRouter()
  const goBack= ()=>{
    router.back()
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "status") {
      setStatus(value);
    }
  };
  return (
    <>
      <IoIosArrowRoundBack className="text-5xl cursor-pointer mt-5 ml-5" onClick={goBack}/>
    <div className="w-[70%] m-auto my-5">

      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="full_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full_name"
              className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black block w-full p-2.5 "
              placeholder="John"
              required
            />
          </div>

          <div>
            <label
              htmlFor="leavetype"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Leave Type
            </label>
            <input
              type="text"
              id="leavetype"
              className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black block w-full p-2.5 "
              placeholder="123-45-678"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="leavefrom"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Leave From
          </label>
          <input
            type="date"
            id="leavefrom"
            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black block w-full p-2.5 "
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="leaveto"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Leave To
          </label>
          <input
            type="date"
            id="leaveto"
            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="days"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            No. of Days
          </label>
          <input
            type="text"
            id="days"
            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black block w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">Status</label>
          <select
            name="status"
            value={status}
            onChange={handleChange}
            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
          >
            <option value="">Select status</option>
            {selectOptions.map((option) => {
              return (
                <option key={option.key} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="reason"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Reason
          </label>
          <textarea
          rows={3}
            id="reason"
            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black block w-full p-2.5 "
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Save
        </button>
      </form>
    </div>
    </>
  );
};

export default Page;
