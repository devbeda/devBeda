import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/devbeda")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  });

  return (
    <>
      <div className="w-screen h-screen flex  items-center justify-center ">
        <div className="w-[50%] h-auto flex gap-14 items-center flex-col md:flex-row">
          <img
            src={data.avatar_url}
            alt="Git picture"
            className=" w-[400px] rounded-full"
          />
          <div>
            <div className="text-xl md:text-3xl  text-white">
              Username: {data.login}
            </div>
            <div className="text-xl md:text-3xl text-white mb-5">
              Followers: {data.followers}
            </div>
            <Link
              className="flex items-center justify-center"
              to={data.html_url}
            >
              <button className="bg-blue-500 px-4 py-2 md:text-lg text-[1rem]  text-center rounded-3xl">
                Github
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Github;
