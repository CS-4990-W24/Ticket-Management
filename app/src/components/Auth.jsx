import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
    Box,
    InputLabel,
    TextField,
    OutlinedInput,
    InputAdornment,
    IconButton,
    Button,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

function Auth({ userInfo, setUserInfo, login, handleUserInfo }) {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    return (
        <Box id="login" maxWidth="sm">
            <h1 id="header">{login ? "Login" : "Sign Up"}</h1>
            <InputLabel htmlFor="email">Email</InputLabel>
            <TextField
                id="email"
                variant="outlined"
                placeholder="email@cpp.edu"
                required
                type="email"
                onChange={(e) =>
                    setUserInfo({ ...userInfo, email: e.target.value })
                }
            />
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
                id="password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                placeholder="Password"
                required
                onChange={(e) =>
                    setUserInfo({ ...userInfo, password: e.target.value })
                }
            />
            <br />
            <Button variant="contained" size="medium" id="submit" onClick={handleUserInfo}>
                {login ? "Login" : "Create Account"}
            </Button>
            <br />
            {login && (
                <Typography variant="h6" gutterBottom>
                    Create an account <Link to="/signup">here</Link>
                </Typography>
            )}
        </Box>
    );
}

export default Auth;
