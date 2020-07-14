import { Base } from 'src/game/interface/base';

export abstract class BaseModel implements Base.RoleInfo, Base.RoleStat {
  abstract description: string = '';
  abstract imageUrl: string = '';
  abstract name: string = '';
  abstract point: number = 0;
  totalLife: number = 1;
}
