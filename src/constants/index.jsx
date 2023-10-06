import { paper, scissors, rock, lizard, spock } from "../assets/icons";

export const moves = [
  {
    id: "0",
    name: "paper",
    icon: paper,
    color: 'border-paper drop-shadow-[0_6px_0px_rgba(86,113,245,0.50)]',
    position: 'absolute left-2/4 translate-y-24 translate-x-12'
  },
  {
    id: "1",
    name: "scissors",
    icon: scissors,
    color: 'border-scissors drop-shadow-[0_6px_0px_rgba(236,169,34,0.50)]',
    position: 'absolute left-2/4 -translate-x-[4.7rem]'
  },
  {
    id: "2",
    name: "rock",
    icon: rock,
    color: 'border-rock drop-shadow-[0_6px_0px_rgba(221,64,93,0.50)]',
    position: 'absolute left-2/4 translate-y-60'
  },
  {
    id: "3",
    name: "lizard",
    icon: lizard,
    color: 'border-lizard drop-shadow-[0_6px_0px_rgba(140,93,229,0.50)]',
    position: 'absolute right-2/4 translate-y-60'
  },
  {
    id: "4",
    name: "spock",
    icon: spock,
    color: 'border-cyan drop-shadow-[0_6px_0px_rgba(82,190,209,0.50)]',
    position: 'absolute right-2/4 translate-y-24 -translate-x-12'
  },
];
