// - A classe `Necromancer` existe;
// - A classe `Necromancer` herda de `Archetype`;
// - O atributo `name` da classe `Necromancer` pode ser lido;
// - O atributo `energyType` da classe `Necromancer` pode ser lido;
// - O método `createdArchetypeInstances` deve retornar o número correto de instâncias criadas da classe `Necromancer`;

import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._createdArchetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._createdArchetypeInstances;
  }

  override get name(): string {
    return this.name;
  }
}

export default Necromancer;
