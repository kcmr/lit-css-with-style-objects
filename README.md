# Lit CSS with style objects

An example component with three variants using style objects with Lit styles (`css`) instead of tagged template literals for a better developer experience when working with theme objects ([System UI Theme Specification](https://system-ui.com/theme)).

**Example**

```js
export const style = [
  css(':host', {
    [set('bg')]: theme.colors.bgCard,
    [set('fg')]: theme.colors.textColorBase,
    paddingTop: theme.space[4],
    paddingBottom: theme.space[4],
    color: get('fg'),
    backgroundColor: get('bg'),
  }),

  css(':host([variant="wine"])', {
    [set('bg')]: theme.colors.bgCard2,
    [set('fg')]: theme.colors.textColorBase2,
  }),  
]
```

`csstype` is used to provide _in editor_ autocompletion (types) for the CSS properties used in an object. 

`style-object-to-css-string` is used to convert the CSS object to a string.