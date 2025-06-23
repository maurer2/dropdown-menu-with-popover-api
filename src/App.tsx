import { useState } from 'react';

import menuJSON from '#src/assets/menu.json' with { type: 'json' };
import ClassicMenu from '#src/features/classic-menu';
import PopoverMenu from '#src/features/popover-menu';

import { css } from '#styled-system/css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1 className={css({ fontSize: '2xl', fontWeight: 'bold' })}>Menus</h1>
      <hr />

      <ClassicMenu menuEntries={menuJSON} />
      <hr />

      <PopoverMenu menuEntries={menuJSON} />
    </main>
  );
}

export default App;
