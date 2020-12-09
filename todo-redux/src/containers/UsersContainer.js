import { useEffect } from "react";
import { usersSelector } from '../store/selectors'
import { useDispatch, useSelector } from "react-redux";
import { usersFetch } from "../store/actions";
import Users from "../components/Users";

function UsersContainer() {
  const users = useSelector(usersSelector);
  const dispatch = useDispatch();

  // equivalent de componentDidMount
  useEffect(() => {
    dispatch(usersFetch())
  }, [dispatch]);

  return <Users data={users.data} loading={users.loading} />
}

export default UsersContainer;
