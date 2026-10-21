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
                            ¿Por que Joa tiene down?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Si...
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
                            ¿Tiene algo que ver perder pelo con mear negro?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            No, pero me apiado de vos.....
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
                            ¿Cómo podria deshacerme de un pollo de 178cm y 73kg?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Ni idea.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Paper>
        </div>
    )
}
export default FAQ