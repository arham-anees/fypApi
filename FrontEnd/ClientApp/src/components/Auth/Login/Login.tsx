import * as React from "react";
import TextFeild from "@material-ui/core/TextField";
import {
  Input,
  InputAdornment,
  IconButton,
  Button,
  Icon,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import ExitToAppSharpIcon from "@material-ui/icons/ExitToAppSharp";
import "./login.scss";

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

  handleChange = (prop: keyof LoginState) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({ password: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  render() {
    return (
      <div className="container">
        <div className="login-container">
          <form>
            <TextFeild id="username" label="Username" />
            <Input
              id="standard-adornment-password"
              type={this.state.showPassword ? "text" : "password"}
              value={this.state.password}
              onChange={this.handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={this.handleClickShowPassword}
                    onMouseDown={this.handleMouseDownPassword}
                  >
                    {this.state.showPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
            <Button variant="contained" color="primary" className="mt-3">
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
