import Box from "@mui/material/Box";

export default function Inicio() {
    return(
        <Box
            component="main"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                width: "calc(100% - 32px)",
                maxWidth: 1120,
                minHeight: { xs: "auto", md: "min(58vh, 560px)" },
                mx: "auto",
                py: { xs: 5, sm: 8 },
                boxSizing: "border-box"
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    p: { xs: 3, sm: 5, md: 7 },
                    bgcolor: "background.paper",
                    border: 1,
                    borderColor: "divider",
                    borderRadius: { xs: 2.5, sm: 4 },
                    boxShadow: "0 16px 40px rgba(30, 45, 60, 0.07)"
                }}
            >
                <Box
                    component="span"
                    sx={{
                        display: "inline-flex",
                        mb: 2,
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 10,
                        bgcolor: "action.hover",
                        color: "primary.main",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase"
                    }}
                >
                    SGA · Gestión académica
                </Box>
                <Box
                    component="h1"
                    sx={{
                        m: 0,
                        maxWidth: 760,
                        color: "text.primary",
                        fontSize: { xs: "2.1rem", sm: "3rem", md: "3.75rem" },
                        fontWeight: 750,
                        letterSpacing: "-0.045em",
                        lineHeight: 1.08
                    }}
                >
                    Sistema de Gestión Académica
                </Box>
                <Box
                    component="p"
                    sx={{
                        mt: 2.5,
                        mb: 0,
                        maxWidth: 650,
                        color: "text.secondary",
                        fontSize: { xs: "1rem", sm: "1.15rem" },
                        lineHeight: 1.7
                    }}
                >
                    Bienvenido/a al sistema. Desde el menú podes acceder
                    a las secciones disponibles
                </Box>
            </Box>
        </Box>
    )
}