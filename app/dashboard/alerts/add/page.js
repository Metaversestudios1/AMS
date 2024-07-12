import React from "react";

const Page = () => {
  return (
    <div className="w-[70%] m-auto my-10">
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2"></div>

        <div className="mb-6">
          <label for="alerttype" class="block mb-2 text-sm font-medium">
            Select an option
          </label>
          <select
            id="alerttype"
            class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          >
            <option selected>Choose alert type</option>
            <option value="Success">Success</option>
            <option value="Warning">Warning</option>
            <option value="Issue">Issue</option>
            <option value="Danger">Danger</option>
          </select>
        </div>

        <div className="mb-6">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Title
          </label>
          <input
            type="title"
            id="title"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black block w-full p-2.5 "
            placeholder="Type title here...."
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Confirm password
          </label>
          <textarea
            rows="4"
            type="message"
            id="message"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
            placeholder="Type your message here...."
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Page;
