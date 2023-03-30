import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState, useMemo } from 'react'
import axios from 'axios'
 
function App() {

  const MONTHS = useMemo( () => [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ], [])

  const [userStats, setUserStats] = useState([])
    
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get('/users/stats', {
          headers: {
            token : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MThlMzJjM2RlYzI2M2IwNzMwZjU4ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDIxMzQwNiwiZXhwIjoxNjgwNjQ1NDA2fQ.j5LZ0EiRbp2nKdJF918IQVjTF07a4DKHEF0S6FlJkzs"
          }
        })
        res.data.map(item => setUserStats(prev => [...prev, {name: MONTHS[item._id - 1], 'New User' : item.total }]))
      } catch (err) {
        console.log(err)
      }
    }
    getStats()
  }, [MONTHS])
  console.log(userStats)

  return (
    <Router>
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
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
