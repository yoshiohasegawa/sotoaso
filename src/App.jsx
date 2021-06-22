import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import FeedPage from "./pages/FeedPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import CreatePostPage from "./pages/CreatePostPage";
import LogoutPage from "./pages/LogoutPage";
import PostDetailPage from "./pages/PostDetailPage";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Switch>
          <Route path="/" exact component={FeedPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={SignUpPage} />
          <ProtectedRoute path="/create-post" exact component={CreatePostPage} />
          <Route path="/logout" exact component={LogoutPage} />
          <Route path="/post/:id" exact component={PostDetailPage} />
          <Route path="*" component={() => (<h1 className="404">404 NOT FOUND</h1>)}/>
        </Switch>
      </div>
    </Router>
  );
}
