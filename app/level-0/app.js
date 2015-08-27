/**
  #Level 0 App

  In this phase of our app, we're returning the equivalent of
  static html. Although this syntax looks a lot like html, it's
  actually called JSX.

  JSX gets transpiled to JavaScript. Even though we write
  "html looking code", the resulting code looks something
  like this:

  ```js
  return React.createElement("div", { className: "comments-app" }, ...);
  ```

  **JSX gotchas:**
  1. Our render method must return exacly one top level JSX element.
  1.1 If more elements are needed, wrap all elements in a `<div>` tag or similar.

  2. JavaScript reserved words are not allowed for attributes: ie. `class`, `for`, etc.
  2.1 JSX offers alternatives for these, such as `className`, `htmlFor`, etc.

  **Possible ideas to explain JSX:**
  1. Compare JSX with CSS prepocessors that need a build step between
  editing code and browser reading code.

 */

import React from 'react';

export default class Level0App extends React.Component {

  render() {
    return (
      <div className="comments-app">

        <h4 className="h4">2 comments</h4>

        <section className="comment">
          <header className="comment-header">
            <span className="comment-header-author">Sergio Cruz</span>
            <span className="comment-header-date">2 hours ago</span>
          </header>
          <p className="comment-body">This is a really clever post, I love it.</p>
          <footer className="comment-footer">
            <a href="#" className="comment-footer-upvote">0 upvotes</a>
            <a href="#" className="comment-footer-downvote">0 downvotes</a>
            <a href="#" className="comment-footer-delete">Delte</a>
          </footer>
        </section>


        <section className="comment">
          <header className="comment-header">
            <span className="comment-header-author">Sergio Cruz</span>
            <span className="comment-header-date">2 hours ago</span>
          </header>
          <p className="comment-body">This is a really clever post, I love it.</p>
          <footer className="comment-footer">
            <a href="#" className="comment-footer-upvote">0 upvotes</a>
            <a href="#" className="comment-footer-downvote">0 downvotes</a>
            <a href="#" className="comment-footer-delete">Delete</a>
          </footer>
        </section>


      </div>
    );
  }

}
