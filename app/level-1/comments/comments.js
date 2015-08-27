import React from 'react';
import Comment from './comment';

/**
Flow:
1. Abstract out comment to its own component (follow steps on `comment.js`)
2. Place two literal `<Comment />` elements on render return clause.
  2.1 Make repetitiveness obvious so we can segway into next section
3. Show how JSX is still JavaScript, and how js functionality is available
  2.1 Make an array called `commentComponents` with 3 `<Comment />` elements
  2.2 Place `{ commentComponents }` in render return clause after 2 literal elements.
  2.3 Point out that now we have 5 total of `<section>` elements after rendering
  2.3.1 Two elements come are the literal elements
  2.3.2 Three elements come from our `commentComponents` array
*/
export default class Comments extends React.Component {

  render() {

    let commentComponents = [
      <Comment />,
      <Comment />,
      <Comment />
    ];

    return (
      <div className="comments-app">

        <h4 className="h4">2 comments</h4>

        <Comment />
        <Comment />
        { commentComponents }

      </div>
    );
  }

}
