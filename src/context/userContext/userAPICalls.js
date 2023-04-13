import axios from 'axios'
import {
    getUsersStart,
    getUsersSuccess,
    getUsersFailure,
    createUserStart,
    createUserSuccess,
    createUserFailure,
    updateUserStart,
    updateUserSuccess,
    updateUserFailure,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailure,
 } from './UserActions'

 export const getUsers = async (dispatch) => {
    dispatch(getUsersStart());
    try {
      const res = await axios.get("/users", {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatch(getUsersSuccess(res.data));
    } catch (err) {
      dispatch(getUsersFailure());
    }
  };
  
  //create
  export const createUser = async (user, dispatch) => {
    dispatch(createUserStart());
    try {
      const res = await axios.post("/user", user, {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatch(createUserSuccess(res.data));
    } catch (err) {
      dispatch(createUserFailure());
    }
  };
  
  //update
  export const updateUser = async (user, dispatch) => {
    dispatch(updateUserStart());
    try {
        const res = await axios.post("/user", user, {
            headers: {
              token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
          });
          dispatch(updateUserSuccess(res.data));
    } catch (err) {
        dispatch(updateUserFailure());
    }
  }

  //delete
  export const deleteUser = async (id, dispatch) => {
    dispatch(deleteUserStart());
    try {
      await axios.delete("/user/" + id, {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatch(deleteUserSuccess(id));
    } catch (err) {
      dispatch(deleteUserFailure());
    }
  }