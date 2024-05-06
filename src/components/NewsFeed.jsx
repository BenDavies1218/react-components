import React from "react";
import Post from "./Post";

export default class NewsPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }
  async componentDidMount() {
    try {
      let response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=au&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      let data = await response.json();
      console.log(data);

      this.setState({ news: data.articles });
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  }

  render() {
    return (
      <div className="top-stories">
        <h1 className="top-story-heading">Top Stories</h1>
        {this.state.news &&
          this.state.news.map((article, index) => (
            <Post
              key={index}
              author={article.author}
              title={article.title}
              link={article.url}
            />
          ))}
      </div>
    );
  }
}
