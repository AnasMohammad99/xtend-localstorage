import * as React from 'react';
import Modal from '@mui/material/Modal';
import CheckoutComponent from './form/checkout';
import { Box } from '@mui/material';

export default function ModalComponent({open, handleClose, setEStates, setOpen}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={{height:'100%', overflowY:'scroll'}}>
            <CheckoutComponent setEStates={setEStates} setOpen={setOpen} />
        </Box>
      </Modal>
    </div>
  );
}
