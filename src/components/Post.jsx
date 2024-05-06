import React from "react";

export default class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="top-story-post">
        <h3 className="title">{this.props.title}</h3>
        <a className="link" href={this.props.link} target="_blank">
          Read More
        </a>
        <h5 className="author">{this.props.author}</h5>
      </div>
    );
  }
}
