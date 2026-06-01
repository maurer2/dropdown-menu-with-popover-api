import { useState, type ToggleEvent } from 'react';
import type { MenuStructure } from '#src/types';
import './styles.css';

type PopoverMenuProps = {
  menuEntries: MenuStructure;
};

function PopoverMenu({ menuEntries }: PopoverMenuProps) {
  const [idOpenMenu, setIdOpenMenu] = useState<string | null>(null);

  const handleToggle = (id: string) => (event: ToggleEvent<HTMLUListElement>) => {
    if (event.newState === 'open') {
      return setIdOpenMenu(id);
    }

    setIdOpenMenu(null);
  };

  return (
    <section className="popover-wrapper" aria-labelledby="popover-page-title">
      <header>
        <h2 className="page-title" id="popover-page-title">
          Popover menu
        </h2>
        <p className="page-description">
          Anchor positioning with position-try fallback. Submenus open to the right or below
          depending on available space.
        </p>
      </header>
      <nav className="menu" aria-label="Main navigation with popover API">
        <ul className="list-first-level">
          {/* {menuEntries.toSpliced(1).map((entryFirstLevel) => ( */}
          {menuEntries.toSpliced(3).map((entryFirstLevel) => {
            const hasLink = Boolean(entryFirstLevel.href);
            const hasSecondLevelNav = Boolean(entryFirstLevel.children?.length);
            const subMenuId = `${entryFirstLevel.label.toLocaleLowerCase()}-submenu`;
            const isExpanded = idOpenMenu === subMenuId;

            return (
              <li className="list-first-level-entry" key={entryFirstLevel.label}>
                <a
                  className="list-first-level-entry-link"
                  href={hasLink ? entryFirstLevel.href : undefined}
                  aria-disabled={hasLink ? undefined : true}
                  role={hasLink ? undefined : 'link'}
                >
                  {entryFirstLevel.label}
                </a>
                {hasSecondLevelNav ? (
                  <>
                    <button
                      type="button"
                      className="list-first-level-entry-toggle-button" // actually a disclosure button -> aria-expanded
                      popoverTarget={subMenuId}
                      popoverTargetAction="toggle"
                      aria-controls={subMenuId}
                      aria-expanded={isExpanded}
                      aria-label={`${entryFirstLevel.label} submenu`} // disclosure buttons shouldn't change their label depending on the state of the submenu they control
                    >
                      {isExpanded ? '-' : '+'}
                    </button>
                    <ul
                      id={subMenuId}
                      className="list-second-level"
                      popover="auto"
                      onToggle={handleToggle(subMenuId)}
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
