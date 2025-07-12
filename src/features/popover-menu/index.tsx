import type { MenuStructure } from '#src/types';

import {
  wrapper,
  pageTitle,
  menu,
  listFirstLevel,
  listFirstLevelEntry,
  listFirstLevelEntryLink,
  listSecondLevel,
  listSecondLevelEntry,
  listSecondLevelEntryLink,
} from './styles';

type PopoverMenuProps = {
  menuEntries: MenuStructure;
};

function PopoverMenu({ menuEntries }: PopoverMenuProps) {
  return (
    <article className={wrapper}>
      <h2 className={pageTitle}>Popover menu</h2>

      <nav className={menu} aria-labelledby="Popover menu">
        <ul className={listFirstLevel}>
          {menuEntries.map((entryFirstLevel) => (
            <li className={listFirstLevelEntry}>
              <a
                key={entryFirstLevel.label}
                href={entryFirstLevel.href ? entryFirstLevel.href : '#'}
                className={listFirstLevelEntryLink}
                // tabIndex={0}
              >
                {entryFirstLevel.label}
              </a>
              {entryFirstLevel.children?.length ? (
                <ul className={listSecondLevel}>
                  {entryFirstLevel.children.map((entrySecondLevel) => (
                    <li className={listSecondLevelEntry}>
                      <a
                        key={entrySecondLevel.label}
                        href={entrySecondLevel.href}
                        className={listSecondLevelEntryLink}
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
    </article>
  );
}

export default PopoverMenu;
