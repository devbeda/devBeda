import React from "react";
import ppimage from "../../assets/images/pp.jpg"
import BPgameimage from "../../assets/images/BPgame.jpg"

function Projects() {
  return (
    <div class="w-100 h-auto py-20 md:h-screen flex  flex-col bg-[#111827] items-center justify-center">
      <div class="w-full h-auto flex flex-wrap flex-col text-center items-center">
        <h3 class="text-white text-2xl font-bold">Projects</h3>
        <div class="w-44 h-1 border-b-4 border-blue-500 mb-9"></div>
      </div>
      <div class=" flex flex-col md:flex-row gap-12">
        <a
          href="https://premiumplanner.vercel.app/"
          class="w-64 h-80 shadow-card-shadow hover:scale-105 duration-200 bg-white rounded-xl"
        >
          <img class="bg-slate-800 w-full h-60 rounded-t-lg" src={ppimage} alt="" />
          <p class="text-lg font-bold text-center">Premium Planner</p>
          <p class="text-sm font-semibold text-center px-2">
            Where a agent can create plan for clients
          </p>
        </a>
        <a
          href="https://devbeda.github.io/Book-page-game/"
          class="w-64 h-80 bg-white rounded-xl shadow-card-shadow hover:scale-105 duration-200"
        >
          <img class="bg-slate-800 w-full object-cover h-60 rounded-t-lg" src={BPgameimage} alt="" />
          <p class="text-lg font-bold text-center">Book Page Game</p>
          <p class="text-sm font-semibold text-center px-2">
            A game featuring a computer that generates autonomusly it's score
          </p>
        </a>
      </div>
    </div>
  );
}

export default Projects;
