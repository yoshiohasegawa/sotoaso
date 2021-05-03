import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Feed from "./views/Feed/Feed";
import Login from "./views/Login/Login";
import SignUp from "./views/SignUp/SignUp";
import CreatePost from "./views/CreatePost/CreatePost";
import PostDetail from "./views/PostDetail/PostDetail";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Switch>
          <Route path="/" exact component={Feed} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create-post" component={CreatePost} />
          <Route path="/post/:id" component={PostDetail} />
        </Switch>
      </div>
    </Router>
  );
}
