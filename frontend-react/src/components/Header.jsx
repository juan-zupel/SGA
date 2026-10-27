import Box from "@mui/material/Box";
import MuiLink from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import SelectorTema from "./SelectorTema";

const enlaces = [
    { to: "/", label: "Inicio" },
    { to: "/alumnos", label: "Alumnos" },
    { to: "/ayuda", label: "Ayuda" },
    { to: "/docentes", label: "Docentes" }
];

export default function Header() {
    return (
        <Box
            component="header"
            sx={{
                bgcolor: "background.paper",
                borderBottom: 1,
                borderColor: "divider",
                boxShadow: "0 8px 26px rgba(30, 45, 60, 0.06)"
            }}
        >
            <Box
                sx={{
                    width: "min(1120px, 100%)",
                    mx: "auto",
                    px: { xs: 2, sm: 3, md: 4 },
                    py: 1.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                    flexWrap: "wrap"
                }}
            >
                <Box
                    component={RouterLink}
                    to="/"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        color: "text.primary",
                        textDecoration: "none",
                        minWidth: 0
                    }}
                >
                    <Box
                        component="img"
                        src="/sga-logo.svg"
                        alt="SGA"
                        sx={{ display: "block", width: 184, height: 48, objectFit: "contain" }}
                    />
                    <Box
                        component="span"
                        sx={{
                            display: { xs: "none", sm: "block" },
                            pl: 1.5,
                            borderLeft: 1,
                            borderColor: "divider",
                            color: "text.secondary",
                            fontSize: "0.85rem",
                            lineHeight: 1.35,
                            maxWidth: 145
                        }}
                    >
                        Sistema de Gestión Académica
                    </Box>
                </Box>

                <Box
                    component="nav"
                    aria-label="Navegación principal"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: { xs: "center", sm: "flex-end" },
                        flexWrap: "wrap",
                        gap: { xs: 0.5, sm: 1 },
                        width: { xs: "100%", sm: "auto" }
                    }}
                >
                    {enlaces.map(({ to, label }) => (
                        <MuiLink
                            key={to}
                            component={RouterLink}
                            to={to}
                            underline="none"
                            color="text.secondary"
                            sx={{
                                px: { xs: 1.25, sm: 1.75 },
                                py: 1,
                                borderRadius: 2,
                                fontWeight: 600,
                                transition: "background-color 160ms ease, color 160ms ease",
                                "&:hover": {
                                    color: "primary.main",
                                    bgcolor: "action.hover"
                                },
                                "&:focus-visible": {
                                    outline: "2px solid",
                                    outlineColor: "primary.main",
                                    outlineOffset: 2
                                }
                            }}
                        >
                            {label}
                        </MuiLink>
                    ))}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.75,
                            pl: { xs: 0.75, sm: 1.5 },
                            ml: { sm: 0.5 },
                            borderLeft: { sm: 1 },
                            borderColor: "divider"
                        }}
                    >
                        <Box
                            component="span"
                            sx={{ color: "text.secondary", fontSize: "0.8rem", fontWeight: 600 }}
                        >
                            Tema
                        </Box>
                        <SelectorTema />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
