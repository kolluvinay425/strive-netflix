import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CommentList from "./components/CommentList";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./components/search";
import ShowDetails from "./components/ShowDetail";
import LeaveComment from "./components/LeaveComment";
import MyApiMovies from "./components/myApiMovies";
function App() {
  return (
    <Router>
      <div
        style={{ backgroundColor: "#313438", height: "auto" }}
        className="App"
      >
        <Route component={Navigation} path="/" />
        <Route component={LeaveComment} path="/Comments/:ID" />
        <Route component={ShowDetails} path="/details/:ID" />

        <Route path="/" exact render={() => <MyApiMovies />} />
        <Route path="/" exact render={() => <Search title="Resident evil" />} />
        <Route
          path="/"
          exact
          render={() => <Search title="The Lord of the Rings" />}
        />
        <Route component={Footer} path="/" />
        {/* <Search title="fast" />
        <Search title="evil" />
        <Search title="the lord of the rings" /> */}

        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
