import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Paper from '@mui/material/Paper';

function FAQ() {

    const id = React.useId();

    return (
        <div>
            <Paper elevation={2}
                sx={{padding: "3", border: "2", borderColor: "divider", borderRadius: "3"}}
            >
                <Typography variant='h5' xs={{mb:1}}> Preguntas Frecuentes</Typography>
                <Typography variant='body2' color="text.secondary" sx={{mb:2}}>
                    Ayuda para utilizar correctamente el Sistema de Gestión Académica
                </Typography>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls={`${id}-panel1-content`}
                        id={`${id}-panel1-header`}
                    >
                        <Typography component="span">
                            como guardar alumnos ?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            apretá agregar alumno
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls={`${id}-panel2-content`}
                        id={`${id}-panel2-header`}
                    >
                        <Typography component="span">
                            cómo me registro como profesor
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            no podes
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls={`${id}-panel2-content`}
                        id={`${id}-panel2-header`}
                    >
                        <Typography component="span">
                            se puede eliminar a un alumno
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            si, pero tenes que ocultar bien el cuerpo
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Paper>
        </div>
    )
}
export default FAQ