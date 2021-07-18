import { Switch, Route } from "react-router";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { restoreLogin } from "./store/session";

import SignupFormPage from "./components/SignupForm";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import LoginModal from "./components/LoginFormPage/Modal";

function App() {
  const dispatch = useDispatch();

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(async () => {
    try {
      await dispatch(restoreLogin());
      setIsLoaded(true);
    } catch (e) {

    }
  })

  return (
    <>
      <Navigation/>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route path="/login">
          <LoginModal/>
        </Route>
        <Route path="/signup">
          <SignupFormPage/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
