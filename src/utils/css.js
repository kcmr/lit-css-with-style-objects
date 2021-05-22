import { css as litCSS, unsafeCSS } from 'lit';
import styleToCss from 'style-object-to-css-string';
import { theme, styles } from '../theme';

/**
 * @param {string} selector
 * @param {import("csstype").Properties} styles
 */
export const css = (selector, styles) => litCSS`
  ${unsafeCSS(selector)} {
    ${unsafeCSS(styleToCss(styles))}
  }
`;

/**
 * @param {string} prefix CSS var prefix
 * @returns {object}
 */
export const prop = (prefix) => {
  const varMap = new Map();

  return {
    /**
     * Creates a CSS var
     * @param {string} value CSS var to create
     * @returns {string} prefixed variable
     */
    set(value) {
      const full = `${prefix}-${value}`;
      varMap.set(value, full);
      return full;
    },

    /**
     * Returns a CSS var() declaration with the prefixed var name
     * @param {string} value CSS var to retrieve
     * @returns {string} var() declaration with the queried CSS var
     */
    get(value) {
      return `var(${varMap.get(value)})`;
    },
  };
};

export { theme, styles };
