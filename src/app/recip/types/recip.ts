export interface Food {
  _id: string;
  name: string;
  mark: number;
  time: Time;
  difficulty: string;
  cost: string;
  ingredient: Array<Ingredient>;
  ustensile: Array<Ustensile>;
  recipe: Array<Recipe>;
  comment?: Array<Comment>;
  files: Files[];
  categorie: Array<string>;
  calorie?: number;
}
export interface Ingredient {
  _id: string;
  name: string;
  quantity: string;
}
export interface Ustensile {
  _id: string;
  name: string;
  amount: number;
  description?: string[];
  label?: string;
}
export interface Recipe {
  _id: string;
  cook: Time;
  standby: Time;
  step: Array<string>;
  keyWord: Array<string>;
}
export interface Files {}
export interface Time {
  _id: any;
  hour: number;
  minute: number;
}
export interface Comment {
  _id: string;
  client: string;
  score: number;
  comment: string;
}
