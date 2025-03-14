export interface AutocompleteItem {
  name: string;
  category: string;
  value: number;
  id: string;
  inputs?: string;
}

export interface InputToken {
  id: string; // Unique ID for each token
  type: "text" | "pill";
  value: string;
  item?: AutocompleteItem;
}
