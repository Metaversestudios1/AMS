"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const { id } = params;
  const [loader, setLoader] = useState(false)
  const router = useRouter()
  const initialState = {
    name: "",
    email: "",
    contact: "",
    designation: "",
    password: "",
  };
  const [oldData, setOldData] = useState(initialState);
  useEffect(() => {
    const fetchOldData = async () => {
      try {
        const response = await fetch("/api/getuserwithempid", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        });
        const result = await response.json();
        if (result.data[0]) {
          setOldData({
            name: result?.data[0]?.name,
            email: result?.data[0]?.email,
            contact: result?.data[0]?.contact,
            designation: result?.data[0]?.designation,
          });
        } else {
          console.error("No data found for the given parameter.");
        }
      } catch (error) {
        console.error("Failed to fetch old data:", error);
      }
    };

    fetchOldData();
  }, [id]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOldData({
      ...oldData,
      [name]: value,
    });
  };
  const handleSubmit = async(e)=>{
    e.preventDefault()
    setLoader(true)
    const response = await fetch("/api/updateuser",{
      method: "PUT",
      headers:{"Content-Type":"application/json "},
      body: JSON.stringify({oldData, emp_id :id})
    }) 
    const res = await response.json()
    console.log(res)
    if(res.success) {
      setLoader(false)
      router.push("/dashboard/users");
    }
    console.log("hello")
  }
  return (
    <>
    {loader ? (<div
          aria-label="Loading..."
          role="status"
          class="flex items-center justify-center space-x-2 mx-5"
        >
          <svg
            class="h-12 w-12 animate-spin stroke-gray-500"
            viewBox="0 0 256 256"
          >
            <line
              x1="128"
              y1="32"
              x2="128"
              y2="64"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="195.9"
              y1="60.1"
              x2="173.3"
              y2="82.7"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="224"
              y1="128"
              x2="192"
              y2="128"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="195.9"
              y1="195.9"
              x2="173.3"
              y2="173.3"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="128"
              y1="224"
              x2="128"
              y2="192"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="60.1"
              y1="195.9"
              x2="82.7"
              y2="173.3"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="32"
              y1="128"
              x2="64"
              y2="128"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="60.1"
              y1="60.1"
              x2="82.7"
              y2="82.7"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
          </svg>
        </div>):
    (<div className="w-[70%] m-auto my-10">
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Full Name
            </label>
            <input
            onChange={handleChange}
              type="text"
              name="name"
              value={oldData?.name}
              id="name"
              className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black block w-full p-2.5 "
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Phone number
            </label>
            <input
            onChange={handleChange}
              type="tel"
              name="contact"
              value={oldData?.contact}
              id="phone"
              className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black block w-full p-2.5 "
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Email address
          </label>
          <input
          onChange={handleChange}
            type="email"
            id="email"
            name="email"
            value={oldData?.email}
            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black block w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="designation"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Designation
          </label>
          <input
          onChange={handleChange}
            type="text"
            id="designation"
            name="designation"
            value={oldData?.designation}
            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Password
          </label>
          <input
          onChange={handleChange}
            type="password"
            id="password"
            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black block w-full p-2.5 "
            placeholder="•••••••••"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirm_password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Confirm password
          </label>
          <input
          onChange={handleChange}
            type="password"
            id="confirm_password"
            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black block w-full p-2.5 "
            placeholder="•••••••••"
          />
        </div>
        <button
        onClick={handleSubmit}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          ADD
        </button>
      </form>
    </div>)}
    </>
  );
};

export default Page;
