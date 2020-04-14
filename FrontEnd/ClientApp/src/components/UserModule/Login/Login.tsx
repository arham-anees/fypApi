import * as React from "react";
import { Component } from "react";
import TextFeild from "@material-ui/core/TextField";
import { Input, InputAdornment, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { POINT_CONVERSION_UNCOMPRESSED } from "constants";

export interface LoginProps {}

export interface LoginState {
  username: string;
  password: string;
  showPassword: boolean;
}

class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.setState({
      username: "",
      password: "",
      showPassword: false,
    });
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
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
