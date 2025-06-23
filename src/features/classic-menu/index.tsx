import type { MenuStructure } from '#src/types';

type ClassicMenuProps = {
  menuEntries: MenuStructure;
};

function ClassicMenu({ menuEntries }: ClassicMenuProps) {
  return (
    <main>
      <h2>Classic menu</h2>
      <code>
        <pre>{JSON.stringify(menuEntries, null, 4)}</pre>
      </code>
    </main>
  );
}

export default ClassicMenu;
