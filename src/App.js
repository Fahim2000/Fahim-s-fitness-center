import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import FAQ from "./components/FAQ/FAQ";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Register from "./components/Register/Register";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";
import Footer from "./components/shared/Footer/Footer";
import Navbar from "./components/shared/Navbar/Navbar";
import AuthProvider from "./context/AuthProvider";
function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route exact path="/faq">
              <FAQ></FAQ>
            </Route>
            <PrivateRoute path="/service/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
