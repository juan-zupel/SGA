import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';

function EjemploMUI() {

    return (
        <>
            <Stack direction="row" spacing={2}>
                <Button variant="outlined" startIcon={<DeleteIcon />} sx={{color: "#fa4141", bgcolor: "white"}}>
                    Delete
                </Button>
                <Button variant="contained" endIcon={<SendIcon />} sx={{color: "#3b8633", bgcolor: "white"}}>
                    Send
                </Button>
            </Stack>
            <br /><br /><br /><br /><br />
            <Stack direction="row" spacing={1}>
                <IconButton aria-label="fingerprint" sx={{color:"#fa4141"}}>
                    <Fingerprint />
                </IconButton>
                <IconButton aria-label="fingerprint" color="success">
                    <Fingerprint />
                </IconButton>
            </Stack>
        </>
    )

}
export default EjemploMUI