import { css } from '#styled-system/css';

export const wrapper = css({
  // width: min('100%', '1280px'),
  width: '100%',
  padding: '1rem',
  maxWidth: '1000px',
  marginInline: 'auto',
});

export const pageTitle = css({
  marginBottom: '1rem',
});

export const listFirstLevel = css({
  display: 'flex',
  gap: '1rem',
});

export const listFirstLevelEntry = css({
  position: 'relative',
  border: '1px solid black',
  flexBasis: '100%',

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
