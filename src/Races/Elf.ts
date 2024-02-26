// - A classe `Elf` existe;
// - A classe `Elf` herda de `Race`;
// - O atributo `name` da classe `Elf` pode ser lido;
// - O atributo `dexterity` da classe `Elf` pode ser lido;
// - O método `createdRacesInstances` retorna o número correto de instâncias criadas da classe `Elf`;
// - O atributo `maxLifePoints` da classe `Elf` existe e é igual a 99;

import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static _elfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._elfInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf._elfInstances;
  }
}

export default Elf;