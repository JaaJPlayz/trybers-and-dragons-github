// > :dragon_face: Para as classes que herdam de Archetype:
// - A classe `Mage` existe;
// - A classe `Mage` herda de `Archetype`;
// - O atributo `name` da classe `Mage` pode ser lido;
// - O método `energyType` da Classe `Mage` existe e retorna um `EnergyType`;
// - O método `createdArchetypeInstances` deve retornar o número correto de instâncias criadas da classe `Mage`;

import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _energyType: EnergyType;
  static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._createdArchetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage._createdArchetypeInstances;
  }

  override get name(): string {
    return this.name;
  }
}

export default Mage;