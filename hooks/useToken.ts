import { create } from "zustand";

type token = { token: boolean; setToken: (type: boolean) => void };

const useToken = create<token>((set) => ({
  token: false,
  setToken: (type) => set(() => ({ token: type })),
}));

export default useToken;
