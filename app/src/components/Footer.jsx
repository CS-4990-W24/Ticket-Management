import Typography from "@mui/material/Typography";
import "@/styles/footer.css";

function Footer() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © CS4990 Group 10 | '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
    );
}
export default Footer;