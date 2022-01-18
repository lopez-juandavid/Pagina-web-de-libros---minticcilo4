import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AddBook from "../views/AddBook";
import Adminpage from "../views/Adminpage";
import Homepage from "../views/Homepage";
import UpdateBook from "../views/UpdateBook";
import InfoBook from "../views/InfoBook";
import Pedidos from "../views/Pedidos";
import MisCompras from "../views/MisCompras";
import Login from "../views/Login";
import AddUsuario from "../views/AddUsuario";


const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/admin" component={Adminpage} />
        <Route exact path="/addBook" component={AddBook} />
        <Route exact path="/infoBook/:id" component={InfoBook} />
        <Route exact path="/pedidos" component={Pedidos} />
        <Route exact path="/updateBook/:id" component={UpdateBook} />
        <Route exact path="/miscompras" component={MisCompras} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/AddUsuario" component={AddUsuario} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
