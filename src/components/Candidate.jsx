import React from "react";

const Candidate = () => {
  return (
    <div className="flex px-12 py-5 flex-col m-5 bg-white w-[95%] shadow-lg h-5/6">
      <h1 className="text-4xl text-green-500 font-bold py-4 border-b-2 border-gray-200 ">
        Candidate
      </h1>
      <div className="flex flex-col px-4 py-10 items-center border-b-2 border-gray-200 w-full">
        <div className="flex justify-center items-center">
          <h1 className="text-xl mr-2">Vote Count: </h1>
          <div className="border-2 border-gray-200 rounded-lg">
            <input className="p-2" placeholder="Input Text" />
            <button className="bg-green-500 text-white   rounded-md py-2 px-4">
              Query
            </button>
          </div>
        </div>
        <h1 className="text-lg mt-2 text-gray-500">Result: 52</h1>
      </div>
      <div className="flex flex-col px-4 py-10 items-center border-b-2 border-gray-200 w-full">
        <div className="flex justify-center items-center">
          <h1 className="text-xl mr-2">Add Candidate: </h1>
          <div className="border-2 border-gray-200 rounded-lg">
            <input className="p-2" placeholder="Input Text" />
            <button className="bg-green-500 text-white   rounded-md py-2 px-4">
              Add
            </button>
          </div>
        </div>
        <h1 className="text-lg mt-2 text-gray-500">Candidate Added</h1>
      </div>
      <div className="flex flex-col px-4 py-10 items-center border-b-2 border-gray-200 w-full">
        <div className="flex justify-center items-center">
          <h1 className="text-xl mr-2">Change Symbol: </h1>
          <div className="border-2 border-gray-200 rounded-lg">
            <input className="p-2" placeholder="Addr1, Addr2" />
            <button className="bg-green-500 text-white   rounded-md py-2 px-4">
              Change
            </button>
          </div>
        </div>
        <h1 className="text-lg mt-2 text-gray-500">Symbol Changed</h1>
      </div>
    </div>
  );
};

export default Candidate;
