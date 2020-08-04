import { Role } from '../model/base.model';

export declare namespace Base {
  interface RoleInfo {
    point: number;
    name: string;
    description: string;
    imageUrl?: string;
  }

  interface RoleStat {
    totalLife: number;
  }
}
