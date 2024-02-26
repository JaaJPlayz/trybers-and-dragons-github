// - A classe `Halfling` herda de `Race`;
// - O atributo `name` da classe `Halfling` pode ser lido;
// - O atributo `dexterity` da classe `Halfling` pode ser lido;
// - O método `createdRacesInstances` retorna o número correto de instâncias criadas da classe `Halfling`;
// - O atributo `maxLifePoints` da classe `Halfling` existe e é igual a 60;

import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;

  private static _halflingInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._halflingInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling._halflingInstances;
  }
}

export default Halfling;