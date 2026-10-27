import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function LayoutPrincipal() {
    return(
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                bgcolor: "background.default",
                color: "text.primary"
            }}
        >
            <Header />
            <Box sx={{ display: "flex", flex: 1, flexDirection: "column" }}>
                <Outlet />
            </Box>
            <Footer />
        </Box>
    )
}