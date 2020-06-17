import React, {useDispatch} from "react";
import { Input, Layout} from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DropDown from './DropDown'

const { Header } = Layout;
function HeaderPage() {
  // const dispatch = useDispatch();
  const stateUser = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Layout>
      <Header>
        <Link to="/">
          <h1>MovieFLIX</h1>
        </Link>
        <Input placeholder="Search" />
        <div>
          {stateUser ? (
            <div className="profile-wrapper">
              <div className="profile-container">
                <h2>Hello, {stateUser.username} </h2>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="modal-view">
         <DropDown/>
        </div>
      </Header>
    </Layout>
  );
}

export default HeaderPage;
