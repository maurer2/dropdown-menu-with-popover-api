import type { MenuStructure } from '#src/types';
import './styles.css';

type PopoverMenuProps = {
  menuEntries: MenuStructure;
};

function PopoverMenu({ menuEntries }: PopoverMenuProps) {
  return (
    <section className="popover-wrapper">
      <h2 className="page-title" id="popover-page-title">
        Popover menu
      </h2>

      <nav className="menu" aria-labelledby="popover-page-title">
        <ul className="list-first-level">
          {menuEntries.map((entryFirstLevel) => (
            <li className="list-first-level-entry">
              <a
                key={entryFirstLevel.label}
                href={entryFirstLevel.href ? entryFirstLevel.href : '#'}
                className="list-first-level-entry-link"
                // tabIndex={0}
              >
                {entryFirstLevel.label}
              </a>
              {entryFirstLevel.children?.length ? (
                <ul className="list-second-level">
                  {entryFirstLevel.children.map((entrySecondLevel) => (
                    <li className="list-second-level-entry">
                      <a
                        key={entrySecondLevel.label}
                        href={entrySecondLevel.href}
                        className="list-second-level-entry-link"
                        // tabIndex={0}
                      >
                        {entrySecondLevel.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>

      {/* <code>
        <pre>{JSON.stringify(menuEntries, null, 4)}</pre>
      </code> */}
    </section>
  );
}

export default PopoverMenu;
