// > :dragon_face: Para as classe que herdam de Race:
// - A classe `Dwarf` existe;
// - A classe `Dwarf` herda de `Race`;
// - O atributo `name` da classe `Dwarf` pode ser lido;
// - O atributo `dexterity` da classe `Dwarf` pode ser lido;
// - O método `createdRacesInstances` retorna o número correto de instâncias criadas da classe `Dwarf`;
// - O atributo `maxLifePoints` da classe `Dwarf` existe e é igual a 80;

import Race from './Race';

class Dwarf extends Race {
  private static _dwarfInstances = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._dwarfInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf._dwarfInstances;
  }
}

export default Dwarf;