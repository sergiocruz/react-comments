/**
  Level 1 App

  Components:

  On Level 0, we saw how our app looks when using static data.

  On Level 1, we will introduce the concept of components.
  Components are what makes React awesome. Components allows
  us to solve problems using the divide and conquer strategy,
  by breaking the complexity of our app into smaller chunks.

  **Step 1: our first component**
  We will encapsulate all the functionality related to cmments into
  a shiny new component and call it `Comments`. It makes sense that
  a component called `Comments` should handle actions related to
  our commenting engine.

  **Step 2: remove redundancies**
  If we look at the two `<section>` elements within our jsx markup,
  we will notice that they contain the exact same data and
  functionality. Another reason why components are great, is
  because much like programming functions, compoents are able to
  execute repetitive tasks. So let's make our second component
  and call it `Comment`, which will eventually display each individual
  comment we have on the screen.

  By looking at our JSX markup, we can identify that both
  `<section>` elements have the exact same data and functionality.
  Thus, we can conclude that those `<section>` elements should
  become our first component. We'll call it `Comment`.
  Let's make our first component

  **/

import React from 'react';
import Comments from './comments'

export default class App extends React.Component {

  render() {
    return (
      <Comments />
    );
  }

}
