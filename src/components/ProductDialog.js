import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';



const ProductDialog = ({ open, onClose, selectedProduct }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <div className="p-6">
        <DialogTitle className="text-2xl font-bold">{selectedProduct?.name}</DialogTitle>
        <DialogContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                src={selectedProduct?.image} 
                alt={selectedProduct?.name}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">{selectedProduct?.name}</h2>
              <p className="mb-4">{selectedProduct?.description}</p>
              <p className="text-2xl font-bold text-green-600 mb-4">${selectedProduct?.price}</p>
              <p className="text-sm text-gray-500 mb-4">Rating: {selectedProduct?.rating} stars</p>
              <div className="flex items-center justify-end">
              
                <Button onClick={onClose}>
                  Buy
                </Button>
                <Button onClick={onClose} >
                  Add To cart
                </Button>
                <Button onClick={onClose} >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default ProductDialog;
