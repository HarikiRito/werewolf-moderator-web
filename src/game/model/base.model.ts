import { Base } from 'src/game/interface/base';

export enum Role {
  VILLAGER = 'VILLAGER',
}
export enum VoteAction {
  NO,
  YES,
}
export abstract class BaseModel implements Base.RoleInfo, Base.RoleStat {
  role: Role;
  description: string = '';
  imageUrl: string = '';
  name: string = '';
  point: number = 0;
  totalLife: number = 1;
  isDeath = false;
  previousTarget?: BaseModel;

  protected constructor(role: Role) {
    this.name = `card.${role}.name`;
    this.description = `card.${role}.description`;
    this.role = role;
  }

  public onDeath() {
    this.totalLife--;
  }
  public onLynched() {
    this.totalLife--;
  }
  public vote(player: BaseModel, action: VoteAction) {}
  public selectPlayer(player: BaseModel) {}
}
