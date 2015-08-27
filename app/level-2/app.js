/**
  Level 2 App

  Props:

  On Level 1, we used the analogy of a component being similar to a JavaScript
  function. In real life we are able to pass dynamic arguments to functions.
  React Components are also able to receive dynamic arguments, and those arguments
  are called `props`.

  Props are similar to function arguments but they do not provide the exact same
  functionality. The main difference between function arguments and component
  props are that props are immutable. This means that the component receiving
  a certain `prop` is not able to change the value of that `prop`.
  In other words, `props` are `readonly`.

  **Step 1: Our first prop**
  It is considered best practices to pass top-level data from our root
  component down to its children (`<App />` is our root component in this app)

  1. Create array of `comments` containing comment objects
  2. Pass comments array (`commentsList`) to `<Comments />` component as a prop

  **Step 2:

  **/

import React from 'react';
import Comments from './comments'

let commentsList = [
  {
    author: 'Gregg Polack',
    date: '2 hours ago',
    body: 'This is a really clever post, I love it.',
    upvotes: 0,
    downvotes: 0
  },
  {
    author: 'Gregg Polack',
    date: '1 hour ago',
    body: 'I heard React was good',
    upvotes: 2,
    downvotes: 0
  },
  {
    author: 'Carlos Souza',
    date: '30 minutes ago',
    body: 'Too long didn\'t read, busy building my new js framework.',
    upvotes: 0,
    downvotes: 0
  }
];

export default class App extends React.Component {

  render() {
    return (
      <Comments comments={commentsList} />
    );
  }

}
