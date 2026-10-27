import Box from "@mui/material/Box";

function Footer() {
    return(
        <Box
            component="footer"
            sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 1,
                px: { xs: 2, sm: 4 },
                py: 2,
                mt: "auto",
                borderTop: 1,
                borderColor: "divider",
                bgcolor: "background.paper",
                color: "text.secondary",
                fontSize: "0.85rem"
            }}
        >
            <Box component="p" sx={{ m: 0 }}>Sistema de Gestión Académica</Box>
            <Box component="p" sx={{ m: 0 }}>Proyecto de Programación 4</Box>
        </Box>
    )
}
export default Footer