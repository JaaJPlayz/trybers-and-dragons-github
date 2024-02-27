// - A classe `Warrior` existe;
// - A classe `Warrior` herda de `Archetype`;
// - O atributo `name` da classe `Warrior` pode ser lido;
// - O atributo `energyType` da classe `Warrior` pode ser lido;
// - O método `createdArchetypeInstances` deve retornar o número correto de instâncias criadas da classe `Warrior`;

import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._createdArchetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior._createdArchetypeInstances;
  }

  override get name(): string {
    return this.name;
  }
}

export default Warrior;