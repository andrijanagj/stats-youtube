import React from "react";

function Feed({ setSearch, fetchYoutuberData }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-col max-w-[600px] px-3 py-5">
          <h1 className="text-xl text-center mb-3 font-bold text-gray-800 md:text-4xl ">
            Youtuber Stats
          </h1>
          <h2 className="text-xl text-center text-gray-500 md:text-2xl">
            Search any youtuber by his channel name and find out his stats and
            most recent videos.
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <div className="flex flex-col border-2 border-sky-100 rounded ">
            <input
              placeholder="Search youtuber"
              className="px-4 py-2 w-[400px] outline-none rounded-md focus:shadow-sm focus:shadow-sky-200"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              onClick={fetchYoutuberData}
              className="ease-in duration-300 bg-sky-500 font-semibold   hover:bg-blue-500  text-white rounded py-2 px-4"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;
