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
  positionAnchor: '--first-level-entry',
  positionTryFallbacks: '--to-the-side',

  // below
  positionArea: 'bottom center',
  insetBlock: 'calc(anchor(bottom) + 1rem)',
  insetInline: 'anchor(start)',
  width: 'anchor-size(inline)',
  zIndex: 1,
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
