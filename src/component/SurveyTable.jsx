import { useSelector, useDispatch } from "react-redux";
import { removeData } from "./redux/surveySlice";

function SurveyTable() {
  const data = useSelector((state) => state.survey);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-3">Tabel Hasil Survey Perokok</h2>
      <table className="table-auto border-collapse border w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2">No</th>
            <th className="border px-2">Nama</th>
            <th className="border px-2">Umur</th>
            <th className="border px-2">Jenis Kelamin</th>
            <th className="border px-2">Perokok</th>
            <th className="border px-2">Brand Rokok</th>
            <th className="border px-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td className="border px-2 py-3">{index + 1}</td>
              <td className="border px-2 py-3">{entry.nama}</td>
              <td className="border px-2 py-3">{entry.umur}</td>
              <td className="border px-2 py-3">{entry.gender}</td>
              <td className="border px-2 py-3">{entry.perokok}</td>
              <td className="border px-2 py-3">{entry.brands.join(", ")}</td>
              <td className="border px-2 py-3">
                <button
                  onClick={() => dispatch(removeData(index))}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SurveyTable;
