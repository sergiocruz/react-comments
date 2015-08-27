import React from 'react';

export default class Comment extends React.Component {

  constructor() {
    super();

    // Initial state
    this.state = {
      confirmDelete: false
    };

    // Function bindings
    this._upvote = this._upvote.bind(this);
    this._downvote = this._downvote.bind(this);
    this._delete = this._delete.bind(this);
    this._cancelDelete = this._cancelDelete.bind(this);
    this._confirmDelete = this._confirmDelete.bind(this);

  }

  render() {

    let deleteButton;

    if (this.state.confirmDelete) {

      deleteButton = (
        <span className="comment-delete">
          <span>Are you sure? </span>
          <a href="" onClick={this._delete}>Yes</a>
          <span> - </span>
          <a href="" onClick={this._cancelDelete}>No</a>
        </span>

      );

    } else {
      deleteButton = (
        <a href="" className="comment-delete" onClick={this._confirmDelete}>
          Delete
        </a>
      );
    }


    return (
      <section className="comment">

        <header className="comment-header">
          <span className="comment-author">{this.props.comment.author}</span>
          <span className="comment-date">{this.props.comment.date}</span>
        </header>

        <div className="comment-body">{this.props.comment.body}</div>

        <footer className="comment-footer">

          <a href="" className="comment-upvote" onClick={this._upvote}>
            {this.props.comment.upvotes} upvotes
          </a>

          <a href="" className="comment-downvote" onClick={this._downvote}>
            {this.props.comment.downvotes} downvotes
          </a>

          {deleteButton}

        </footer>


      </section>
    );
  }

  _upvote(e) {
    e.preventDefault();

    console.log('upvote!');
    this.props.upvote();
  }

  _downvote(e) {
    e.preventDefault();

    console.log('downvote!');
    this.props.downvote();
  }

  _delete(e) {
    e.preventDefault();

    console.log('delete!');
    this.props.delete();
  }

  _confirmDelete(e) {
    e.preventDefault();

    this.setState({
      confirmDelete: true
    });

  }

  _cancelDelete(e) {
    e.preventDefault();

    this.setState({
      confirmDelete: false
    })

  }

}

/**
 * Comment prop types
 * @type {Object}
 */
Comment.propTypes = {
  comment: React.PropTypes.object.isRequired,
  upvote: React.PropTypes.func.isRequired,
  downvote: React.PropTypes.func.isRequired,
  delete: React.PropTypes.func.isRequired
}
