function Token({ move, handleMove, display, isSelected }) {
  let position;

  isSelected ? (position = move.position) : (position = display);

  return (
    <div
      className={`${position} h-36 w-36 m-auto flex justify-center items-center`}
      key={move.id}
    >
      {/* <label className="absolute w-36 h-36 focus:bg-white/[0.06] rounded-full"></label>
      <label className="absolute w-48 h-48 bg-white/[0.04] rounded-full"></label>
      <label className="absolute w-64 h-64 bg-white/[0.02] rounded-full"></label> */}
      <button
        className={`${move.color} h-28 w-28 rounded-full border-[14px] bg-white flex justify-center items-center hover:h-[140px] hover:w-[140px] transition-all duration-300`}
        onClick={handleMove}
        id={move.id}
      >
        <img
          className="w-11 pointer-events-none"
          src={move.icon}
          alt={move.name}
        />
      </button>
    </div>
  );
}

export default Token;
