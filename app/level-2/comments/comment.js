/**
Flow:
1. Get rid of `comment` variable
2. Replace usages of previous `comment` variable with `this.props.comment`
*/

import React from 'react';

// let comment = {
//   author: 'Sergio Cruz',
//   date: '2 hours ago',
//   body: 'This is a really clever post, I love it.',
//   upvotes: 0,
//   downvotes: 0
// };

export default class Comment extends React.Component {

  render() {
    return (
      <section className="comment">
        <header className="comment-header">
          <span className="comment-header-author">{this.props.comment.author}</span>
          <span className="comment-header-date">{this.props.comment.date}</span>
        </header>
        <p className="comment-body">{this.props.comment.body}</p>
        <footer className="comment-footer">
          <a href="#" className="comment-footer-upvote">{this.props.comment.upvotes} upvotes</a>
          <a href="#" className="comment-footer-downvote">{this.props.comment.downvotes} downvotes</a>
          <a href="#" className="comment-footer-delete">Delete</a>
        </footer>
      </section>
    );
  }

}
