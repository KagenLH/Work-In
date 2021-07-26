import { Switch, Route } from "react-router";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { restoreLogin } from "./store/session";
import { fetchUserBookings } from "./store/userBookings";

import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import Modal from "./components/AuthModal";
import ListingPage from "./components/ListingPage";
import ListingSearch from "./components/ListingSearch";
import ListingPost from "./components/ListingPost";
import ListingEdit from "./components/ListingEdit";
import SearchOverlay from "./components/SearchOverlay";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  const loginModal = useSelector(state => state.loginModal.showModal);
  const signupModal = useSelector(state => state.signupModal.showModal);

  const [isLoaded, setIsLoaded] = useState(false);

  const location = useLocation()

  useEffect(() => {
    async function tryRestoreSession() {
      async function tryRestoreLogin() {
        try {
          await dispatch(restoreLogin());
          setIsLoaded(true);
        } catch (e) {
          
        }
      }
      await tryRestoreLogin();

      if(isLoaded) {
        try {
          await dispatch(fetchUserBookings());
        } catch(err) {
        }
      }
    }

    tryRestoreSession();
  })

  return (
    <>
      <Navigation/>
      <SearchOverlay/>
      <Modal show={loginModal} authType='login'/>
      <Modal show={signupModal} authType="signup"/>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route path="/listings/:id(\d+)">
          <ListingPage/>
        </Route>
        <Route exact path="/listings">
          <ListingSearch/>
        </Route>
        <Route path="/listings/create">
          <ListingPost/>
        </Route>
        <Route path="/listings/edit/:id(\d+)">
          <ListingEdit/>
        </Route>
      </Switch>
      <Footer show={location.pathname !== "/"}/>
    </>
  );
}

export default App;
