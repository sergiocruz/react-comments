import React from 'react/addons';
import Comment from './comment';

export default class Comments extends React.Component {
  render() {

    let comments = this.props.comments.map((comment, i) => {
      return (
        <Comment
          key={comment.id}
          comment={comment}
          upvote={this._upvoteComment.bind(this, i)}
          downvote={this._downvoteComment.bind(this, i)}
          delete={this._deleteComment.bind(this, i)} />
      );
    });

    return (
      <div className="comments-app">

        <h4 className="h4">
          {this.props.comments.length} comments
        </h4>

        {comments}

      </div>
    );
  }

  /**
   * Upvotes comment
   * @param  {Number} commentIndex
   * @return {Void}
   */
  _upvoteComment(commentIndex) {

    // Current number of upvotes
    let upvotes = this.props.comments[commentIndex].upvotes;

    // Increases upvotes by one
    upvotes++;

    // New array of comments
    let comments = React.addons.update(this.props.comments, {
      [commentIndex]: {
        'upvotes': { $set: upvotes }
      }
    });

    // Updates comments
    this.props.updateComments(comments);

  }

  /**
   * Downvotes comment
   * @param  {Number} commentIndex
   * @return {Void}
   */
  _downvoteComment(commentIndex) {

    // Current number of downvotes
    let downvotes = this.props.comments[commentIndex].downvotes;

    // Increases downvotes by one
    downvotes++;

    // New array of comments
    let comments = React.addons.update(this.props.comments, {
      [commentIndex]: {
        'downvotes': { $set: downvotes }
      }
    });

    // Updates comments
    this.props.updateComments(comments);

  }

  /**
   * Deletes comment from comments array
   * @param  {Number} commentIndex
   * @return {Void}
   */
  _deleteComment(commentIndex) {

    // Removes element at `commentIndex` position
    let comments = React.addons.update(this.props.comments, {
      $splice: [[commentIndex, 1]]
    });

    // Updates comments
    this.props.updateComments(comments);

  }


}

Comments.propTypes = {
  comments: React.PropTypes.array.isRequired,
  updateComments: React.PropTypes.func.isRequired
};
