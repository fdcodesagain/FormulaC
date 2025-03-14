import { create } from "zustand";
import { InputToken } from "../types/types";

interface InputState {
  tokens: InputToken[];
  addTextToken: (text: string) => void;
  addPillToken: (item: any) => void;
  removeLastToken: () => void;
  removeTokenAtIndex: (index: number) => void;
  getDisplayValue: () => string;
}

export const useInputStore = create<InputState>((set, get) => ({
  tokens: [],

  addTextToken: (text) =>
    set((state) => ({
      tokens: [
        ...state.tokens,
        {
          id: `text-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          type: "text",
          value: text,
        },
      ],
    })),

  addPillToken: (item) =>
    set((state) => ({
      tokens: [
        ...state.tokens,
        {
          id: `pill-${item.id}-${Date.now()}`,
          type: "pill",
          value: item.name,
          item,
        },
      ],
    })),

  removeLastToken: () =>
    set((state) => ({
      tokens: state.tokens.slice(0, -1),
    })),

  removeTokenAtIndex: (index) =>
    set((state) => ({
      tokens: state.tokens.filter((_, i) => i !== index),
    })),

  getDisplayValue: () => {
    return get()
      .tokens.map((token) => (token.type === "text" ? token.value : `${token.value}`))
      .join("");
  },
}));
