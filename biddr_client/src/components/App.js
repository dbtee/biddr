import React from "react";

import { AuctionIndexPage } from "./AuctionIndexPage";
import AuctionShowPage from "./AuctionShowPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import { User, Session } from "../requests";
import SignInPage from "./SignInPage";
import AuctionNewPage from "./AuctionNewPage";
import AuthRoute from "./AuthRoute";
import { SignUpPage } from "./SignUpPage";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      loading: true
    };
  }

  signOut = () => {
    Session.destroy().then(() => {
      this.setState({ currentUser: null });
    });
  };

  getUser = () => {
    User.current()
      .then(data => {
        if (typeof data.id !== "number") {
          this.setState({ loading: false });
        } else {
          this.setState({ loading: false, currentUser: data });
        }
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  };
  componentDidMount() {
    this.getUser();
  }
  render() {
    const { loading, currentUser } = this.state;
    if (loading) {
      return <div />;
    }
    return (

      <BrowserRouter>
        <div className="ui container App">
          <NavBar currentUser={currentUser} onSignOut={this.signOut} />

          <Switch>
            <Route path="/auctions" exact component={AuctionIndexPage} />
            <AuthRoute
              isAuthenticated={currentUser}
              path="/auctions/new"
              component={AuctionNewPage}
            />
            <Route
              exact
              path="/sign_up"
              render={routeProps => (
                <SignUpPage {...routeProps} onSignUp={this.getUser} />
              )}
            />
            <Route path="/auctions/:id" component={AuctionShowPage} />
            <Route
              path="/sign_in"
              render={routeProps => (
                <SignInPage {...routeProps} onSignIn={this.getUser} />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
