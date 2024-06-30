import React from "react";

interface Props {
  joke: string;
  onClick: () => void;
}

const Card = (props: Props) => {
  return (
    <div className="card bg-white text-black w-full md:w-80 shadow-xl">
      <div className="card-body p-5">
        <h3 className="card-title border-b border-gray-300">Fact!</h3>
        <p>{props.joke}</p>
        <div className="card-actions justify-end">
          <button
            className="btn bg-red-800 border-none"
            onClick={props.onClick}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
