import type { Simplify } from 'type-fest';

// import type MenuStructure from '#src/assets/menu.json' with { type: 'json' }; // error https://github.com/microsoft/TypeScript/issues/60724
import MenuStructureJSON from '#src/assets/menu.json';

export type MenuStructure = Simplify<typeof MenuStructureJSON>;
