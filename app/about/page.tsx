import React from "react";
import chuckImage from "../../public/chuckImage.jpg";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="flex min-h-screen flex-col py-10 px-8 lg:px-2">
      <h1 className="text-2xl font-bold">About Chuck Norris Jokes App</h1>
      <div className="p-5">
        <p>
          Welcome to the Chuck Norris Jokes App! This application is designed to
          bring a smile to your face with a collection of random and hilarious
          Chuck Norris jokes.
        </p>
      </div>
      <h2 className="text-xl font-bold mt-5">
        The main features of the app include:
      </h2>
      <div className="px-9 py-5">
        <ul className="list-disc">
          <li>Fetching random Chuck Norris jokes with a click of a button.</li>
          <li>Liking your favorite jokes to save them in a list.</li>
          <li>Removing jokes from your liked list if you change your mind.</li>
          <li>Paginating through your liked jokes for easy browsing.</li>
        </ul>
      </div>
      <p>This application is built using modern web technologies including:</p>
      <div className="px-9 py-5">
        <ul className="list-disc">
          <li>
            <strong>Next.js:</strong> A React framework that enables server-side
            rendering and static site generation for optimized performance.
          </li>
          <li>
            <strong>TypeScript:</strong> A statically typed superset of
            JavaScript that helps in writing more robust and maintainable code.
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center p-5">
        <Image
          src={chuckImage}
          alt="chuckThumbsUp"
          height="300"
          width="300"
          className="rounded-md"
        />

        <p className="py-5 px-0 md:px-20">
          I hope you enjoy using the Chuck Norris Jokes App as much as we
          enjoyed building it!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
