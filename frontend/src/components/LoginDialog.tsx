import { Dialog } from "@material-ui/core";
import { useState } from "react";
import { DialogTitle, IconButton } from "@mui/material";

const LoginDialog = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(true);
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Login</DialogTitle>
            <IconButton sx={{position: "absolute", right: 8, top: 8}}>
            </IconButton>
        </Dialog>
    )

}

export default LoginDialog;
