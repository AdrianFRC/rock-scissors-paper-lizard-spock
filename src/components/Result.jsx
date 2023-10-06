import Token from "./Token";

function Result({ moveSel, housePickMove, moves }) {
  return (
    <div className="flex justify-evenly h-auto m-auto mt-12 max-w-[390px]">
      <div className="flex flex-col justify-center items-center">
        <Token
          move={moves[moveSel.id]}
          display={"relative translate-x-0 translate-y-0 left-0 right-0"}
        />
        <p className="uppercase tracking-widest text-white">you picked</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Token
          move={moves[housePickMove]}
          display={"relative translate-x-0 translate-y-0 left-0 right-0"}
        />
        <p className="uppercase tracking-widest text-white">the house picked</p>
      </div>
    </div>
  );
}

export default Result;
