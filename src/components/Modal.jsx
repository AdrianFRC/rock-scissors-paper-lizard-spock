
import { close, rulespenta, rulestria } from "../assets/icons";

function Modal({ open, toogleRules }) {
  return (
    <div
      className={`${open} absolute z-10 bg-white h-full w-full flex-col justify-evenly items-center`}
    >
      <h1 className="uppercase text-darkText text-4xl font-bold">rules</h1>
      <img className="w-80 auto" src={rulespenta} alt="rules" />
      <img className="h-8 w-8" src={close} alt="close" onClick={toogleRules} />
    </div>
  );
}

export default Modal;
