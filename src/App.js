import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
// import Admin from './Components/NewAdmin/Admin';
import CheckOut from './Components/CheckOut/CheckOut';
import Order from './Components/Order/Order';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/Private/PrivateRoute';
// import AdminSideBar from './Components/NewAdmin/AdminSideBar';
// import AddBook from './Components/NewAdmin/AddBook';
// import Manager from './Components/NewAdmin/Manager';
import MainAdmin from './Components/Admin/SidebarWithManager';
import Sidebar from './Components/Admin/Sidebar';
import SidebarWithAddBooking from './Components/Admin/SidebarWithAddBooking';
import SidebarWithManager from './Components/Admin/SidebarWithManager';

export const  userContext = createContext()

function App() {

  const [logedInUser, setLogedInUser] = useState({})

  return (
    <userContext.Provider value={[logedInUser, setLogedInUser]}>
      
      <Router>
      <Header />
        <Switch>
          
          <Route path='/home'>
            <Home />
          </Route>

          <Route exact path='/'>
            <Home />
          </Route>

          {/* <PrivateRoute path='/admin'>
            <Admin />
          </PrivateRoute>

          <PrivateRoute path='/admin/addBook'>
            <AddBook />
          </PrivateRoute>

          <PrivateRoute path='/admin/manager'>
            <Manager />
          </PrivateRoute> */}


          <PrivateRoute path='/admin/manager'>
            <SidebarWithManager />
          </PrivateRoute>

          <PrivateRoute path='/admin/addBook'>
            <SidebarWithAddBooking />
          </PrivateRoute>

          <PrivateRoute path='/admin'>
            <Sidebar />
          </PrivateRoute>


          <PrivateRoute path='/checkout/:id'>
            <CheckOut />
          </PrivateRoute>

          <PrivateRoute path='/order'>
            <Order />
          </PrivateRoute>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='*'>
            <NotFound />
          </Route>

        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
