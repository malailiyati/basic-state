function ModalTodo({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-5 max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 px-2 py-1 rounded"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}

export default ModalTodo;
