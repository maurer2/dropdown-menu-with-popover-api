import { css } from '#styled-system/css';

export const wrapper = css({
  width: '100%',
  padding: '1rem',
  maxWidth: '1280px',
  marginInline: 'auto',
});

export const pageTitle = css({
  marginBottom: '1rem',
});

export const menu = css({
  '--transition-duration': '0.25s',
  '--link-base-background-color': 'white',
  '--link-hover-focus-background-color': 'red',

  _motionReduce: {
    '--transition-duration': 0,
  },
});

export const listFirstLevel = css({
  display: 'grid',
  gap: '1rem',
  gridAutoFlow: 'column',
  gridAutoColumns: 'minmax(0, 1fr)',
});

export const listFirstLevelEntry = css({
  position: 'relative',
});

export const listFirstLevelEntryLink = css({
  display: 'block',
  padding: '1rem',
  height: '100%',
  alignContent: 'center', // works on block level elements
  border: '1px solid black',
  backgroundColor: 'var(--link-base-background-color)',
  overflow: 'hidden',
  anchorName: '--first-level-entry',

  '&:is(:hover, :focus)': {
    backgroundColor: 'var(--link-hover-focus-background-color)',
  },
});

export const listSecondLevel = css({
  position: 'absolute',
  display: 'flex',
  gap: '1rem',
  flexDirection: 'column',
  backgroundColor: 'blue',
  positionAnchor: '--first-level-entry',
  positionArea: 'bottom right',
  // top: 'anchor(--first-level-entry 100%)',
  // top: 'calc(1rem + anchor(top))',
  insetBlock: 'anchor(top)',
  insetInline: 'calc(anchor(end) + 1rem)',
  // justifySelf: 'anchor-center',
  // justifySelf: 'stretch',
  zIndex: 5,
  // width: 'anchor-size(--first-level-entry inline-size)',
  width: 'anchor-size(inline)',
});

export const listSecondLevelEntry = css({
  position: 'relative',
  minWidth: 'max-content',
  maxWidth: '100%',
});

export const listSecondLevelEntryLink = css({
  display: 'block',
  padding: '1rem',
  border: '1px solid black',
  overflow: 'hidden',
  backgroundColor: 'var(--link-base-background-color)',

  '&:is(:hover, :focus)': {
    backgroundColor: 'var(--link-hover-focus-background-color)',
  },
});
