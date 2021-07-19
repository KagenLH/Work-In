import { Switch, Route } from "react-router";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { restoreLogin } from "./store/session";

import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import Modal from "./components/AuthModal";
import ListingPage from "./components/ListingPage";

function App() {
  const dispatch = useDispatch();
  const loginModal = useSelector(state => state.loginModal.showModal);
  const signupModal = useSelector(state => state.signupModal.showModal);

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    async function tryRestoreLogin() {
      try {
        await dispatch(restoreLogin());
        setIsLoaded(true);
      } catch (e) {
  
      }
    }
    tryRestoreLogin();
  })

  return (
    <>
      <Navigation/>
      <Modal show={loginModal} authType='login'/>
      <Modal show={signupModal} authType="signup"/>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route path="/listings/:id">
          <ListingPage/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
