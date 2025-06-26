import { css } from '#styled-system/css';

export const wrapper = css({
  // width: "min('100%', '1280px')", // doesn't work
  width: '100%',
  padding: '1rem',
  maxWidth: '1280px',
  marginInline: 'auto',
});

export const pageTitle = css({
  marginBottom: '1rem',
});

export const listFirstLevel = css({
  display: 'grid',
  gap: '1rem',
  gridAutoFlow: 'column',
  gridAutoColumns: 'minmax(0, 1fr)',
});

export const menu = css({
  '--transition-duration': '0.25s',
  '--link-base-background-color': 'white',
  '--link-hover-focus-background-color': 'red',

  _motionReduce: {
    '--transition-duration': '0',
  },

  interpolateSize: 'allow-keywords',
});

export const listFirstLevelEntry = css({
  position: 'relative',
  containerName: 'first-level-entry',
  containerType: 'normal',

  '&:has(> ul):is(:hover, :focus-within) > ul': {
    display: 'flex',
    // height: ['auto', 'calc-size(auto, size)'], // only works if another transition is is progress
    height: 'auto',
    // contentVisibility: 'visible',

    _starting: {
      height: 0,
    },
  },
});

export const listFirstLevelEntryLink = css({
  display: 'block',
  padding: '1rem',
  height: '100%',
  alignContent: 'center', // works on block level elements
  border: '1px solid black',
  backgroundColor: 'var(--link-base-background-color)',
  overflow: 'hidden',

  '&:is(:hover, :focus)': {
    backgroundColor: 'var(--link-hover-focus-background-color)',
  },

  // keep highlighted when submenu is hovered or focused
  ':is(:hover, :focus-within) > &': {
    backgroundColor: 'var(--link-hover-focus-background-color)',
  },

  // +/- icon logic
  '@container style(--has-children: true)': {
    paddingRight: '2.5rem',

    _before: {
      content: 'none',
      display: 'block',
      position: 'absolute',
      inset: 0,
      right: '1rem',
      justifySelf: 'end',
      alignSelf: 'center',
    },

    // submenu is not expanded
    ':not(:is(:hover, :focus-within)) > &': {
      _before: {
        content: '"+"',
      },
    },

    // submenu is expanded
    ':is(:hover, :focus-within) > &': {
      _before: {
        content: '"-"',
      },
    },
  },
});

export const listSecondLevel = css({
  display: 'none',
  position: 'absolute',
  flexDirection: 'column',
  gap: '1rem',
  top: '100%',
  paddingTop: '1rem',
  insetInline: 0,
  height: 0,
  overflow: 'clip',
  transition:
    'display var(--transition-duration) allow-discrete, height var(--transition-duration)',
});

export const listSecondLevelEntry = css({
  position: 'relative',
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
