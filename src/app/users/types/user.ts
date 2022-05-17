import { Access, Group } from './role';

export interface User {
  _id: string;
  name: string;
  lastName: string;
  fullName?: string;
  role: Role;
  view: View;
  localisation?: string;
  number?: Array<number>;
  old?: number;
  picture?: string;
}
export interface Role {
  _id: string;
  name: string;
  access: Array<Access>;
}

export interface View {
  _id: string;
  group: Array<Group>;
}
