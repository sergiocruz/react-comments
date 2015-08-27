import React from 'react';
import Comment from './comment';

/**
Flow:
1. Show how to access received props (`this.props`)
2. Temporarily remove Comment components from return clause
  2.1 Remove commentsList array and its reference in the return clause
  2.2 Remove literal `<Comment />` elements
3. Show how to map received props to array of divs
  3.1 Point out that `this.props.comments` is where our passed array is stored
  3.2 Create new `comments` array, call `this.props.comments.map()`
  3.3 Map received props to `<div>` elements, only display comment body
4. Pass `comment` to `<Comment />` component and refactor it
  4.1 Point out that we're only displaying list of `comment.body`
  4.2 In our array map, replace `<div>` with `<Comment />`
  4.3 Pass `comment` prop to `<Comment />` component
5. Refactor `<Comment />` to use props to display data
  5.1 head to `comment.js` for new Flow
6. Fix header that contains number of comments
  6.1 Replace "2 comments" with `comments.length`
*/
export default class Comments extends React.Component {


  render() {

    let comments = this.props.comments.map(function(comment) {
      return (
        // <div>{comment.body}</div>
        <Comment comment={comment} />
      );
    });

    return (
      <div className="comments-app">

        <h4 className="h4">{comments.length} comments</h4>

        {comments}

      </div>
    );
  }

}
