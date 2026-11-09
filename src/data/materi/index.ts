
import type { ModuleId, ModuleData } from '../types';

import { modul1Data } from './modul1';
import { modul2Data } from './modul2';
import { modul3Data } from './modul3';

export { modul1Data, modul2Data, modul3Data };

export const materiList: ModuleData[] = [
  modul1Data,
  modul2Data,
  modul3Data,
];

export function getModuleById(
  id: ModuleId
): ModuleData | undefined {
  return materiList.find((module) => module.id === id);
}
