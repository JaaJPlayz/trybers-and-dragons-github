// - A classe `Orc` existe;
// - A classe `Orc` herda de `Race`;
// - O atributo `name` da classe `Orc` pode ser lido;
// - O atributo `dexterity` da classe `Orc` pode ser lido;
// - O método `createdRacesInstances` retorna o número correto de instâncias criadas da classe `Orc`;
// - O atributo `maxLifePoints` da classe `Orc` existe e é igual a 74;

import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _orcInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._orcInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc._orcInstances;
  }
}

export default Orc;