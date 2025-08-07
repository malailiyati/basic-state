import { useState } from "react";
import SurveyForm from "./SurveyForm";
import SurveyTable from "./SurveyTable";
import ModalTodo from "./ModalTodo";

function SurveyPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gray-400 text-white px-4 py-2 rounded mb-4"
      >
        + Tambah Data Survey
      </button>

      <SurveyTable />

      <ModalTodo isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <SurveyForm onClose={() => setIsOpen(false)} />
      </ModalTodo>
    </div>
  );
}

export default SurveyPage;
