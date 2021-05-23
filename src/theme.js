/** @typedef {import('csstype').Properties} CSSProperties */

export const theme = {
  colors: {
    bgBody: 'var(--bgBody)',

    bgCard: 'var(--colorLight)',
    bgCard2: 'var(--colorWineDark)',
    bgCard3: 'var(--colorGoldMedium)',

    bgListItemHover: 'var(--colorGreyAlpha20)',
    bgListItemHover2: 'var(--colorWineAlpha60)',
    bgListItemHover3: 'var(--colorGreyAlpha10)',

    textColorBase: 'var(--colorGrey700)',
    textColorFaded: 'var(--colorGrey500)',
    textColorAlert: 'var(--colorRedMedium)',

    textColorBase2: 'var(--colorLight)',
    textColorFaded2: 'var(--colorGrey100)',
    textColorAlert2: 'var(--colorRedLight)',

    textColorBase3: 'var(--colorGrey900)',
    textColorFaded3: 'var(--colorGrey500)',
    textColorAlert3: 'var(--colorRedDark)',
  },
  shadows: {
    1: '0 8px 38px -18px rgba(0,0,0,0.37)',
  },
  space: {
    half: 'calc(var(--gridUnit) * 0.5)', // 4
    1: 'var(--gridUnit)', // 8
    2: 'calc(var(--gridUnit) * 2)', // 16
    3: 'calc(var(--gridUnit) * 3)', // 24
    4: 'calc(var(--gridUnit) * 4)', // 32
  },
  lineHeights: {
    base: 1.5,
    small: 1.3333,
    medium: 1.7142,
  },
  fontSizes: {
    base: 'var(--textSizeBase)',
    small: 'var(--textSizeSmall)',
    medium: 'var(--textSizeMedium)',
  },
};

/** @type {CSSProperties} */
const textMedium = {
  fontSize: theme.fontSizes.medium,
  lineHeight: theme.lineHeights.medium,
};

/** @type {CSSProperties} */
const textBase = {
  fontSize: theme.fontSizes.base,
  lineHeight: theme.lineHeights.base,
};

/** @type {CSSProperties} */
const textSmall = {
  fontSize: theme.fontSizes.small,
  lineHeight: theme.lineHeights.small,
};

export const styles = {
  textBase,
  textMedium,
  textSmall,
};
