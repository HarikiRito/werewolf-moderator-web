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
  totalLynchVote: number = 0;

  protected constructor(role: Role) {
    this.name = `card.${role}.name`;
    this.description = `card.${role}.description`;
    this.role = role;
  }

  onDeath() {
    this.totalLife--;
  }
  onLynched() {
    this.totalLife--;
  }

  onNightFall() {
    this.resetVote();
  }

  resetVote() {
    this.totalLynchVote = 0;
  }

  increaseLynchVote(voteCount = 1) {
    this.totalLynchVote += voteCount;
  }
  vote(player: BaseModel, action: VoteAction) {
    if (action === VoteAction.YES) {
      player.increaseLynchVote();
    }
  }
  selectPlayer(player: BaseModel) {}
  setRole(role: Role) {
    this.role = role;
  }
}
