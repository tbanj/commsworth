import React, { Component, Fragment, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import FullPageSpinner from './components/loader/FullPageSpinner';
import Home from './components/home/Home';
import NoMatch from './components/notfound/NotFound';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import "react-toastify/dist/ReactToastify.css";
import './App.css';



class App extends Component {
  render() {
    return (
      <Fragment>
        <ToastContainer />
        <Router>
          <ErrorBoundary>
            <Suspense fallback={FullPageSpinner}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route component={NoMatch} />
              </Switch>
            </Suspense>
          </ErrorBoundary>
        </Router>
      </Fragment>
    );
  }
}

export default App;
