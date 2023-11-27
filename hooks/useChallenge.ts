import { create } from "zustand";

type challenge = { challenge: string; setChallenge: (title: string) => void };

const useChallenge = create<challenge>((set) => ({
  challenge: "",
  setChallenge: (title) => set(() => ({ challenge: title })),
}));

export default useChallenge;
