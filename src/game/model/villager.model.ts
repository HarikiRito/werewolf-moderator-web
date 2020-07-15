import { BaseModel, Role } from 'src/game/model/base.model';

class Villager extends BaseModel {
  point = 1;
  constructor() {
    super(Role.VILLAGER);
  }
}

export { Villager };
