import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getProfile } from "../redux/actions";

const Profile = () => {
  const { isAuth, user, loading } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  return loading ? (
    <h1>loading...</h1>
  ) : !isAuth ? (
    <Redirect to="/login" />
  ) : (
    <div>
      <h1> welcome {user.name} </h1>
      <h1> contact info </h1>
      <h3> {user.email} </h3>
      <h3> {user.phoneNumber} </h3>
    </div>
  );
};

export default Profile;
