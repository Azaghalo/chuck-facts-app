"use client";
import React, { useState } from "react";
import TextBubble from "./TextBubble";
import Card from "./Card";

const MainContent = () => {
  const [joke, setJoke] = useState("");
  const [likes, setLikes] = useState<string[]>([]);

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

  const handleLike = () => {
    if (!likes.includes(joke)) {
      setLikes([...likes, joke]);
    }
  };

  const handleRemoveLike = (jokeToRemove: string) => {
    setLikes(likes.filter((likedJoke) => likedJoke !== jokeToRemove));
  };

  return (
    <main className="flex min-h-screen flex-col py-10 px-8 lg:px-2">
      <div className="flex gap-8 flex-wrap">
        <div className="flex flex-col space-y-8 md:flex-1">
          <h1 className="text-3xl font-bold md:text-4xl">
            Discover Fascinating Chuck Norris Facts
          </h1>
          <p>
            Explore a vast collection of interesting and humorous facts about
            the legendary Chuck Norris.
          </p>
          <button
            className="btn w-full rounded-md text-black bg-white hover:bg-gray-300"
            onClick={fetchJoke}
          >
            Get a new fact!
          </button>
        </div>

        <TextBubble joke={joke} onClick={handleLike} />
      </div>

      <div className="flex justify-center border-b border-white mt-8">
        <h3 className="text-xl">Likes</h3>
      </div>

      <div className="grid gap-6 justify-items-center md:grid-cols-2 lg:grid-cols-3 p-5">
        {likes.map((likedJoke, index) => (
          <Card
            key={index}
            joke={likedJoke}
            onClick={() => handleRemoveLike(likedJoke)}
          />
        ))}
      </div>
    </main>
  );
};

export default MainContent;
