import "./index.css";
import "./styles/newsfeed.css";
import "./styles/navbar.css";
import Navbar from "./components/Navbar";
import NewsPost from "./components/NewsFeed";

function App() {
  return (
    <>
      <Navbar />
      <section className="main-section">
        <NewsPost />
      </section>
    </>
  );
}

export default App;
