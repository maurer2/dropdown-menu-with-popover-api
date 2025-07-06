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
  padding: '1rem',
  border: '1px solid black',
  backgroundColor: 'var(--link-base-background-color)',
  positionAnchor: '--first-level-entry',
  positionArea: 'bottom right',
  // top: 'anchor(--first-level-entry 100%)',
  top: 'calc(1rem + anchor(bottom))',
  // left: 'anchor(center)',
  justifySelf: 'anchor-center',
});
