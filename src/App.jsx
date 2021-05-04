import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Feed from "./views/Feed/Feed";
import Login from "./views/Login/Login";
import SignUp from "./views/SignUp/SignUp";
import CreatePost from "./views/CreatePost/CreatePost";
import Logout from "./views/Logout/Logout";
import PostDetail from "./views/PostDetail/PostDetail";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Switch>
          <Route path="/" exact component={Feed} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <ProtectedRoute path="/create-post" exact component={CreatePost} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/post/:id" exact component={PostDetail} />
          <Route path="*" component={() => (<h1 className="404">404 NOT FOUND</h1>)}/>
        </Switch>
      </div>
    </Router>
  );
}
