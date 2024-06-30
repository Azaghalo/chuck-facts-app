import React from "react";

interface Props {
  joke: string;
  onClick: () => void;
}

const TextBubble = (props: Props) => {
  return (
    <div className="flex flex-col bg-white rounded-md p-5 flex-1 min-w-80">
      <h2 className="font-bold text-2xl text-black border-b border-gray-300">
        Fact!
      </h2>
      <div className="p-3 min-h-5">
        <p className="text-black">{props.joke}</p>
      </div>
      <div className="mt-auto self-end">
        <button
          className="btn bg-primary border-none text-white disabled:text-gray-700"
          onClick={props.onClick}
          disabled={props.joke === ""}
        >
          Like
        </button>
      </div>
    </div>
  );
};

export default TextBubble;
