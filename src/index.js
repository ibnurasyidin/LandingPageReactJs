
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
//import "assets/css/now-ui-kit.css";
// pages for this kit
import Index from "views/Index.js";
import SinglePost from "./components/SinglePost";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import WebPage from "views/examples/WebPage.js";
import MobilePage from "./views/examples/MobilePage";
import MeetingPage from "./views/examples/MeetingPage";
import Portofolio from "./views/examples/Portofolio";
import Blog from "./views/examples/Blog";
import './style.css';
import Blogv1 from "./views/examples/Blogv1";
import Homeo from "./components/Homeo";
import Login from "./components/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Pages from "./components/dashboard/pages/Pages";
import CreatePost from "./components/dashboard/posts/CreatePost";
import Posts from "./components/Posts";
import Blogs from "./components/Blogs";


function Page(props) {
  return null;
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route
            path="/landing-page"
            render={props => <LandingPage {...props} />}
        />
        <Route
          path="/profile-page"
          render={props => <ProfilePage {...props} />}
        />
        <Route
          path="/web-page"
          render={props => <WebPage {...props}/>}
          />
        <Route
            path="/mobile-page"
            render={props => <MobilePage {...props}/>}
        />
        <Route
            path="/meeting-page"
            render={props => <MeetingPage {...props}/>}
        />
        <Route
            path="/portofolio"
            render={props => <Portofolio {...props}/>}
        />
        <Route
            path="/blog"
            render={props => <Blog {...props}/>}
        />
        <Route
            path="/blogv1"
            render={props => <Blogv1 {...props}/>}
        />
        <Route
            path="/post/:id"
            render={props => <SinglePost {...props}/>}
        />
        {/*<SinglePost path="/post/:id"/>*/}
        <Login path="/login"/>
        <Dashboard path="/dashboard"/>
        <Posts path="/dashboard/posts"/>
        <CreatePost path="/dashboard/create-post"/>
        <Pages path="/dashboard/pages" />
        <Page path="/page/:id"/>
        <Blogs path="/blogs/"/>
        <Route
            path="/home"
            render={props => <Homeo {...props}/>}
        />
        <Route path="/login-page" render={props => <LoginPage {...props} />} />
       {/* <SinglePost path="/post/:id"/>*/}
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
