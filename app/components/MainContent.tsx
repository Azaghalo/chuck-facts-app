"use client";
import React, { useState } from "react";
import TextBubble from "./TextBubble";

const MainContent = () => {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    try {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const jokeRes = await response.json();
      setJoke(jokeRes.value);
    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke("Failed to fetch joke.");
    }
  };

  return (
    <div className="flex gap-8 flex-wrap">
      <div className="flex flex-col space-y-8 md:flex-1">
        <h1 className="text-3xl font-bold md:text-4xl">
          Discover Fascinating Chuck Norris Facts
        </h1>
        <p>
          Explore a vast collection of interesting and humorous facts about the
          legendary Chuck Norris.
        </p>
        <button
          className="btn w-full rounded-md text-black bg-white hover:bg-gray-300"
          onClick={fetchJoke}
        >
          Get a new fact!
        </button>
      </div>

      <TextBubble joke={joke} />
    </div>
  );
};

export default MainContent;
