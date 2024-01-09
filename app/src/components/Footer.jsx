import Typography from "@mui/material/Typography";

function Footer() {
    return (
        <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        position="absolute"
        bottom="5px"
        width="100%"
        height="20px">
        Copyright © CS4990 Group 10 | {new Date().getFullYear()}.
    </Typography>
    );
}
export default Footer;