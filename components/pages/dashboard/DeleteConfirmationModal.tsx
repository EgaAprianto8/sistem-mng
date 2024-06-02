import React from 'react';
import { Dialog } from '@headlessui/react';

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black opacity-30" />
        <div className="relative bg-white rounded max-w-md mx-auto p-4 shadow-lg">
          <Dialog.Title className="text-xl font-bold">Konfirmasi Hapus</Dialog.Title>
          <div className="mt-4">
            <p>Apakah Anda yakin ingin menghapus buku ini?</p>
          </div>
          <div className="flex justify-end mt-4">
            <button 
              type="button" 
              onClick={onClose}
              className="px-4 py-2 mr-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Batal
            </button>
            <button 
              type="button" 
              onClick={() => { onConfirm(); onClose(); }}
              className="px-4 py-2 bg-meta-1 text-white rounded-md hover:bg-[#552127]"
            >
              Hapus
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default DeleteConfirmationModal;
