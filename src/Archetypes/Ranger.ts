// - A classe `Ranger` existe;
// - A classe `Ranger` herda de `Archetype`;
// - O atributo `name` da classe `Ranger` pode ser lido;
// - O atributo `energyType` da classe `Ranger` pode ser lido;
// - O método `createdArchetypeInstances` deve retornar o número correto de instâncias criadas da classe `Ranger`;

import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._createdArchetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger._createdArchetypeInstances;
  }

  override get name(): string {
    return this.name;
  }
}

export default Ranger;