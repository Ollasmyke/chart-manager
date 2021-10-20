import {useState} from "react";
import {useHistory} from "react-router-dom";

const Login = () => {

  const history = useHistory();
  const [username, updateUsername] = useState("");
  const [password, updatePassword] = useState("");

  const login = () => {
    if (username !== "admin@admin.com" || password !== "password123") alert("Username or Password is invalid");
    else {
      localStorage.setItem("username", username);
      history.push("/");
    }
  }

  return (
    <>
      <div className="sidenav">
        <div className="login-main-text">
          <h2>Chart Manager</h2>
          <p>Login or register from here to access the application.</p>
        </div>
      </div>
      <div className="main">
        <div className="col-md-6 col-sm-12">
          <div className="login-form">
            <form>
              <div className="form-group mb-3">
                <label>Username or Email</label>
                <input type="text" className="form-control" placeholder="Enter Username or Email" value={username}
                       onChange={event => updateUsername(event.target.value)}/>
              </div>
              <div className="form-group mb-5">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter Password" value={password}
                       onChange={event => updatePassword(event.target.value)}/>
              </div>
              <button onClick={login} type="button" className="btn btn-black">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
