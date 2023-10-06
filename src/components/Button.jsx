function Button({handleSetMove, win}) {
  return (
    <div className="flex flex-col justify-center items-center mt-[10%]">
      <h1 className="text-5xl uppercase text-white font-bold">
        {win ? "you win" : "you lose"}
      </h1>
      <button
        className="w-44 h-10 rounded-md uppercase tracking-widest bg-white text-sm mt-4"
        onClick={handleSetMove}
      >
        play again
      </button>
    </div>
  );
}

export default Button;
