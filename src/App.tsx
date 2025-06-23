import { useState } from 'react';
import { css } from '../styled-system/css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1 className={css({ fontSize: '2xl', fontWeight: 'bold' })}>Test</h1>
    </main>
  );
}

export default App;
