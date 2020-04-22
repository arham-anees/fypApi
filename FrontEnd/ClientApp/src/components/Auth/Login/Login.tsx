import * as React from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import ExitToAppSharpIcon from "@material-ui/icons/ExitToAppSharp";
import "./login.scss";
import "../style.scss";
import PasswordField from "../../PasswordField";

export interface LoginProps {}

export interface LoginState {
  username: string;
  password: string;
  showPassword: boolean;
}

class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      username: "",
      password: "",
      showPassword: false,
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("calling api");
    const result = fetch(
      "https://localhost:44336/api/auth/authenticate?username=" +
        this.state.username +
        "&password=" +
        this.state.password
    )
      .then((response) => response.json())
      .then(
        (result) => console.log(result),
        (error) => console.log(error)
      )
      .catch((error) => console.log(error));

    console.log(result);
    event.preventDefault();
  };
  render() {
    return (
      <div className="container">
        <div className="login-container">
          <h4>Welcome Back</h4>
          <form className="w-100">
            <TextField id="username" label="Username" className="w-100" />
            <PasswordField
              label="Password"
              name="Password"
              value={this.state.password}
              HandleChange={this.handleChange}
            />

            <Button
              variant="contained"
              color="primary"
              className="mt-3"
              onClick={this.handleClick}
            >
              Login
              <ExitToAppSharpIcon />
            </Button>
            <br />
            <a href="/auth/signup" className="mt-5">
              New here? Sign up first
            </a>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
