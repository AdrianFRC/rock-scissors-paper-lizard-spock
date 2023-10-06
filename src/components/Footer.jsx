import React from "react";

function Footer({ toogleRules }) {
  return (
    <footer className="w-full absolute bottom-10 flex justify-center">
      <button
        onClick={toogleRules}
        className="text-white relative transition-all duration-300 ease-out w-32 h-10 border-2 border-white rounded-lg uppercase tracking-widest font-medium hover:text-radial hover:bg-white"
      >
        rules
      </button>
    </footer>
  );
}

export default Footer;
