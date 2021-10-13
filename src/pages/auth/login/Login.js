import {useState} from "react";

const Login = () => {

  const [username, updateUsername] = useState("");
  const [password, updatePassword] = useState("");

  const login = () => {
    console.log("username = ", username);
    console.log("password = ", password);
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
                <label>User Name</label>
                <input type="text" className="form-control" placeholder="User Name" value={username}
                       onChange={event => updateUsername(event.target.value)}/>
              </div>
              <div className="form-group mb-5">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" value={password}
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
