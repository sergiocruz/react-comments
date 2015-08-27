// import React from 'react';
let React = require('react')

/**
 * Level 0 App:
 *
 * In this phase of our app, we're returning the equivalent of
 * static html. Although this syntax looks a lot like html, it's
 * actually called JSX.
 *
 * JSX gets transpiled to JavaScript. Even though we write
 * "html looking code", the resulting code looks something
 * like this:
 *
 * return React.createElement("div", { className: "comments-app" }, ...);
 *
 */
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
            <a href="#" className="comment-footer-delete">Delte</a>
          </footer>
        </section>


      </div>
    );
  }

}
