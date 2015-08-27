import React from 'react';
import Comments from './comments'

let comments = [
  {
    id: 1,
    author: 'Sergio Cruz',
    date: '2 hours ago',
    body: 'This is a really clever post, I love it.',
    upvotes: 0,
    downvotes: 0
  },
  {
    id: 2,
    author: 'Ayrton Senna',
    date: '10 years ago',
    body: 'I heard React was good',
    upvotes: 0,
    downvotes: 0
  },
  {
    id: 3,
    author: 'Lillie Cruz',
    date: '5 minutes ago',
    body: 'Commenting engines can be so confusing to understand sometimes',
    upvotes: 0,
    downvotes: 0
  },
  {
    id: 4,
    author: 'Diana Sinisterra',
    date: '2 hours ago',
    body: 'This is a really clever post, I love it!',
    upvotes: 0,
    downvotes: 0
  },
  {
    id: 5,
    author: 'Sergio Cruz',
    date: '2 hours ago',
    body: 'This is a really clever post, I love it!',
    upvotes: 0,
    downvotes: 0
  },
  {
    id: 6,
    author: 'Sergio Cruz',
    date: '2 hours ago',
    body: 'This is a really clever post, I love it!',
    upvotes: 0,
    downvotes: 0
  }
];

export default class App extends React.Component {

  constructor() {
    super();

    // Initial state
    this.state = {
      comments: comments
    };

    // Function binding
    this._updateComments = this._updateComments.bind(this);
  }

  render() {
    return (
      <Comments
        comments={this.state.comments}
        updateComments={this._updateComments} />
    );
  }

  /**
   * Updates comments state
   * @param  {Array} comments
   * @return {Void}
   */
  _updateComments(comments) {
    this.setState({
      comments: comments
    });
  }
}
