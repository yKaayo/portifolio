import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

// Icons
import {} from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button
        className="hover:border-primary-green relative mx-2 cursor-pointer border-b-2 border-transparent text-xl font-semibold text-white duration-500"
        onClick={handleOpen}
      >
        Me contrate
      </button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="rounded-xl bg-black p-5">
              <div className="mb-3 flex w-full justify-end">
                <button onClick={handleClose} className="cursor-pointer">
                  <FaX color="#ffffff" />
                </button>
              </div>
              <div className="rounded-2xl text-white">
                <h2 className="w-max text-4xl font-semibold">
                  ENTRE EM CONTATO COMIGO
                </h2>
                <p>abc</p>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
