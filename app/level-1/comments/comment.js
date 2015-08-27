/**
Flow:
1. Copy `<section>` element into `render()` function
2. Identify and replace current static data with new dynamic data
  2.1 Make local variable called `comment`, holding an object with comment data
  2.2 Replace JSX with dynamic data from our local variable
    2.2.1 Introduce to JSX curly braces syntax for dynamic content
*/

import React from 'react';

let comment = {
  author: 'Sergio Cruz',
  date: '2 hours ago',
  body: 'This is a really clever post, I love it.',
  upvotes: 0,
  downvotes: 0
};

export default class Comment extends React.Component {

  render() {
    return (
      <section className="comment">
        <header className="comment-header">
          <span className="comment-header-author">{comment.author}</span>
          <span className="comment-header-date">{comment.date}</span>
        </header>
        <p className="comment-body">{comment.body}</p>
        <footer className="comment-footer">
          <a href="#" className="comment-footer-upvote">{comment.upvotes} upvotes</a>
          <a href="#" className="comment-footer-downvote">{comment.downvotes} downvotes</a>
          <a href="#" className="comment-footer-delete">Delete</a>
        </footer>
      </section>
    );
  }

}
