import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  constructor(protected player1: Fighter, protected player2: Fighter) {
    super(player1);
  }

  fight(): number {
    while (this.player1.lifePoints !== -1 && this.player2.lifePoints !== -1) {
      this.player1.attack(this.player2);
      this.player2.attack(this.player1);
    }
    return super.fight();
  }
}

export default PVP;