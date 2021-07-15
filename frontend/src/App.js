import { Switch, Route } from "react-router";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { restoreLogin } from "./store/session";

import LoginFormPage from "./components/LoginFormPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(async () => {
    try {
      await dispatch(restoreLogin());
      setIsLoaded(true);
    } catch (e) {
      console.log("Something went wrong with the login.");
    }
  })

  return (
    <Switch>
      <Route path="/login">
        <LoginFormPage/>
      </Route>
    </Switch>
  );
}

export default App;
