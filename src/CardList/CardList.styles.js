import { css, theme as t, prop, styles } from '../utils/css.js';

const { get, set } = prop('--card-list');

export const style = [
  css(':host', {
    [set('bg')]: t.colors.bgCard,
    [set('fg')]: t.colors.textColorBase,

    display: 'block',
    borderRadius: '1rem',
    paddingTop: t.space[4],
    paddingBottom: t.space[4],
    color: get('fg'),
    backgroundColor: get('bg'),
    fontWeight: 500,
    boxShadow: t.shadows[1],
  }),

  css('.heading', {
    margin: 0,
    marginBottom: t.space[1],
    paddingLeft: t.space[4],
    paddingRight: t.space[4],
  }),

  css('ul, li', {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  }),

  css('li', {
    padding: `${t.space[2]} ${t.space[4]}`,
    display: 'flex',
    alignItems: 'center',
    ...styles.textBase,
  }),

  css('li:hover', {
    [set('list-hover')]: t.colors.bgListItemHover,
    backgroundColor: get('list-hover'),
  }),

  css('img', {
    flex: 'none',
    marginRight: t.space[2],
  }),

  css('.faded', {
    [set('faded')]: t.colors.textColorFaded,
    color: get('faded'),
  }),

  css('.heading', {
    ...styles.textMedium,
    textTransform: 'uppercase',
  }),

  css('.small', {
    marginTop: t.space.half,
    ...styles.textSmall,
  }),

  css('.negative', {
    [set('negative')]: t.colors.textColorAlert,
    color: get('negative'),
  }),

  css('.left', {
    flex: 1,
  }),

  css('.right', {
    textAlign: 'right',
  }),

  // variant wine
  css(':host([variant="wine"])', {
    [set('bg')]: t.colors.bgCard2,
    [set('fg')]: t.colors.textColorBase2,
  }),

  css(':host([variant="wine"]) .faded', {
    [set('faded')]: t.colors.textColorFaded2,
  }),

  css(':host([variant="wine"]) .negative', {
    [set('negative')]: t.colors.textColorAlert2,
  }),

  css(':host([variant="wine"]) li:hover', {
    [set('list-hover')]: t.colors.bgListItemHover2,
  }),

  // variant gold
  css(':host([variant="gold"])', {
    [set('bg')]: t.colors.bgCard3,
    [set('fg')]: t.colors.textColorBase3,
  }),

  css(':host([variant="gold"]) .faded', {
    [set('faded')]: t.colors.textColorFaded3,
  }),

  css(':host([variant="gold"]) .negative', {
    [set('negative')]: t.colors.textColorAlert3,
  }),

  css(':host([variant="gold"]) li:hover', {
    [set('list-hover')]: t.colors.bgListItemHover3,
  }),
];
