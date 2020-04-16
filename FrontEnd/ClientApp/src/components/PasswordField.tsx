import * as React from "react";
import {
  Input,
  InputAdornment,
  IconButton,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

export interface PasswordFieldProps {
  label: string;
  name: string;
  // onBlur: React.FocusEvent;
}

export interface PasswordFieldState {
  password: string;
  showPassword: boolean;
}

class PasswordField extends React.Component<
  PasswordFieldProps,
  PasswordFieldState
> {
  constructor(props: PasswordFieldProps) {
    super(props);
    this.state = {
      password: "",
      showPassword: false,
    };
  }

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: event.target.value });
  };

  style = {
    width: "100%",
  };

  iconStyle = {
    width: "20%",
  };
  render() {
    return (
      <React.Fragment>
        <FormControl>
          <InputLabel htmlFor="passwordField">{this.props.label}</InputLabel>
          <Input
            id="passwordField"
            type={this.state.showPassword ? "text" : "password"}
            value={this.state.password}
            style={this.style}
            onChange={this.handleChange}
            // onBlur={this.props.onBlur}
            required
            aria-describedby="passwordFieldError"
            endAdornment={
              <InputAdornment position="end" style={this.iconStyle}>
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          {/* <FormHelperText id="passwordFieldError">
            Password is required.
          </FormHelperText> */}
        </FormControl>
      </React.Fragment>
    );
  }
}

export default PasswordField;
