import type { MenuStructure } from '#src/types';

type PopoverMenuProps = {
  menuEntries: MenuStructure;
};

function PopoverMenu({ menuEntries }: PopoverMenuProps) {
  return (
    <main>
      <h2>Popover menu</h2>
      <code>
        <pre>{JSON.stringify(menuEntries, null, 4)}</pre>
      </code>
    </main>
  );
}

export default PopoverMenu;
