import { useRef, useState, type ToggleEvent, type CSSProperties } from 'react';
import type { MenuStructure } from '#src/types';
import './styles.css';

type PopoverMenuProps = {
  menuEntries: MenuStructure;
};

function PopoverMenu({ menuEntries }: PopoverMenuProps) {
  const popoverTargetRef = useRef<HTMLUListElement>(null);
  // only used for aria-stuff
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = (event: ToggleEvent<HTMLUListElement>) => {
    console.log(event.oldState, '->', event.newState);

    setIsExpanded(event.newState === 'open');
  };

  return (
    <section className="popover-wrapper">
      <h2 className="page-title" id="popover-page-title">
        Popover menu with anchor positioning and position-try fallback
      </h2>

      <nav className="menu" aria-labelledby="popover-page-title">
        <ul className="list-first-level">
          {/* {menuEntries.toSpliced(1).map((entryFirstLevel) => ( */}
          {menuEntries.toSpliced(3).map((entryFirstLevel) => {
            const hasSecondLevelNav = Boolean(entryFirstLevel.children?.length);
            const subMenuId = `${entryFirstLevel.label.toLocaleLowerCase()}-submenu`;
            const anchorName = `--anchor-${entryFirstLevel.label.toLocaleLowerCase()}`;

            return (
              <li
                className="list-first-level-entry"
                style={{ anchorName: anchorName } as CSSProperties}
              >
                <a
                  key={entryFirstLevel.label}
                  href={entryFirstLevel.href ? entryFirstLevel.href : '#'}
                  className="list-first-level-entry-link"
                >
                  {entryFirstLevel.label}
                </a>
                {hasSecondLevelNav ? (
                  <>
                    <button
                      className="list-first-level-entry-toggle-button"
                      popoverTarget={subMenuId}
                      popoverTargetAction="toggle"
                      type="button"
                      aria-haspopup="menu"
                      aria-controls={subMenuId}
                      aria-expanded={isExpanded}
                      aria-label={isExpanded ? 'Collapse submenu' : 'Expand submenu'}
                    >
                      {isExpanded ? '-' : '+'}
                    </button>

                    <ul
                      id={subMenuId}
                      className="list-second-level"
                      popover="auto"
                      ref={popoverTargetRef}
                      onToggle={handleToggle}
                      style={{ positionAnchor: anchorName } as CSSProperties}
                    >
                      {entryFirstLevel.children.map((entrySecondLevel) => (
                        <li className="list-second-level-entry">
                          <a
                            key={entrySecondLevel.label}
                            href={entrySecondLevel.href}
                            className="list-second-level-entry-link"
                          >
                            {entrySecondLevel.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* <code>
        <pre>{JSON.stringify(menuEntries, null, 4)}</pre>
      </code> */}
    </section>
  );
}

export default PopoverMenu;
