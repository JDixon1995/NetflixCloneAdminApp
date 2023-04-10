import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import Movie from "./pages/movie/Movie";
import MovieList from './pages/movieList/MovieList';
import List from "./pages/list/List";
import ListList from "./pages/listList/ListList"
import NewUser from "./pages/newUser/NewUser";
import NewList from './pages/newList/NewList'
import Login from "./pages/login/login";
import { AuthContext } from "./context/authContext/AuthContext";
import { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
 
function App() {

  const { user } = useContext(AuthContext)
  
  return (
    <Router>
      <Route path='/login'>{ user ? <Redirect to='/' /> : <Login />}</Route>
      {user &&
      <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/movies">
            <MovieList />
          </Route>
          <Route path="/movie/:movieId">
            <Movie />
          </Route>
          <Route path="/lists">
            <ListList />
          </Route>
          <Route path="/list/:listId">
            <List />
          </Route>
          <Route path="/newList">
            <NewList />
          </Route>
        </Switch>
      </div>
      </>}
    </Router>
  );
}

export default App;
