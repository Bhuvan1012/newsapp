import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "newsmonkey-12b86.firebaseapp.com",
  projectId: "newsmonkey-12b86",
  storageBucket: "newsmonkey-12b86.appspot.com",
  messagingSenderId: "424405168776",
  appId: "1:424405168776:web:99c93221fc6c86d43fa53d",
  measurementId: "G-WRKFYZP489",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function App() {
  const pageSize = 100;
  const apiKey = process.env.REACT_APP_NEWS_API_S;
  const [progress, setProgress] = useState(0);

  // handleMode = () => {
  //   let body = document.body;
  //   if (mode === "light") {
  //     body.style.backgroundColor = "#11052C";
  //     body.style.color = "white";
  //     setMode("dark")
  //   } else {
  //     body.style.backgroundColor = "white";
  //     body.style.color = "black";
  //     setMode("light")
  //   }
  // };

  return (
    <>
      <Router>
        <Navbar
        // handleMode={() => handleMode()} mode={mode}
        />
        <LoadingBar height={3} color="#f11946" progress={progress} />

        <Switch>
          <Route exact path="/business">
            <News
              // mode={mode}
              setProgress={setProgress}
              apiKey={apiKey}
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              // mode={mode}
              setProgress={setProgress}
              apiKey={apiKey}
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
            />
          </Route>
          <Route exact path="/general">
            <News
              // mode={mode}
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          </Route>
          <Route exact path="/health">
            <News
              // mode={mode}
              setProgress={setProgress}
              apiKey={apiKey}
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
            />
          </Route>
          <Route exact path="/science">
            <News
              // mode={mode}
              setProgress={setProgress}
              apiKey={apiKey}
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
            />
          </Route>
          <Route exact path="/technology">
            <News
              // mode={  mode}
              setProgress={setProgress}
              apiKey={apiKey}
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
            />
          </Route>
          <Route exact path="/sports">
            <News
              // mode={  mode}
              setProgress={setProgress}
              apiKey={apiKey}
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
            />
          </Route>
          <Route exact path="/">
            <News
              // mode={  mode}
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
