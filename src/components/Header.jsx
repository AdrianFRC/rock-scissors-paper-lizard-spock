import { logo, logobonus} from "../assets/icons"

function Header({ score }) {
  return (
    <header className="p-10 pb-0">
      <div className="h-24 max-w-2xl m-auto flex justify-between p-2 border-[3px] border-headerOutline rounded-lg">
        <img
          className="h-14 m-[10px]"
          src={logobonus}
          alt="logo game"
        />
        <div className="flex justify-center text-center flex-col w-[75px] h-[72px] rounded-md bg-white">
          <p className="uppercase text-scoreText tracking-wider text-xs">
            score
          </p>
          <p className="text-darkText text-4xl leading-9 font-bold">{score}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
