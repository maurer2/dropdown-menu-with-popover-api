import { css } from '#styled-system/css';

export const wrapper = css({
  // width: min('100%', '1280px'), // doesn't work
  width: '100%',
  padding: '1rem',
  maxWidth: '1000px',
  marginInline: 'auto',
});

export const pageTitle = css({
  marginBottom: '1rem',
});

export const listFirstLevel = css({
  display: 'grid',
  gap: '1rem',
  gridAutoFlow: 'column',
  gridAutoColumns: '1fr',
});

export const listFirstLevelEntry = css({
  position: 'relative',
  border: '1px solid black',

  '&:is(:hover, :focus-within)': {
    backgroundColor: 'green',
  },

  '&:is(:hover, :focus-within) > ul': {
    display: 'flex',
  },
});

export const listFirstLevelEntryLink = css({
  display: 'block',
  padding: '1rem',
  height: '100%',
  alignContent: 'center', // works on block level elements

  '&:is(:hover, :focus)': {
    backgroundColor: 'red',
  },
});

export const listSecondLevel = css({
  display: 'none',
  position: 'absolute',
  flexDirection: 'column',
  gap: '1rem',
  top: '100%',
  paddingTop: '1rem',
  insetInline: '-1px',
});

export const listSecondLevelEntry = css({
  position: 'relative',
  border: '1px solid black',
});

export const listSecondLevelEntryLink = css({
  display: 'block',
  padding: '1rem',
  flexBasis: '100%',

  '&:is(:hover, :focus)': {
    backgroundColor: 'red',
  },
});
