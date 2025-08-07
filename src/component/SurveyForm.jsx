import { useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "./redux/surveySlice";

function SurveyForm({ onClose }) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    nama: "",
    umur: "",
    gender: "",
    perokok: "",
    brands: [],
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      brands: checked
        ? [...prev.brands, value]
        : prev.brands.filter((item) => item !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addData(form));
    onClose(); // tutup modal
    setForm({
      nama: "",
      umur: "",
      gender: "",
      perokok: "",
      brands: [],
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <h2 className="text-xl font-bold">Form Survey</h2>

      <input
        type="text"
        name="nama"
        placeholder="Nama"
        value={form.nama}
        onChange={handleChange}
        className="border p-2"
      />

      <input
        type="number"
        name="umur"
        placeholder="Umur"
        value={form.umur}
        onChange={handleChange}
        className="border p-2"
      />

      <div>
        <label>Jenis Kelamin:</label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Laki-laki"
            onChange={handleChange}
            checked={form.gender === "Laki-laki"}
          />{" "}
          Laki-laki
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Perempuan"
            onChange={handleChange}
            checked={form.gender === "Perempuan"}
          />{" "}
          Perempuan
        </label>
      </div>

      <div>
        <label>Apakah Anda Merokok?</label>
        <select
          name="perokok"
          value={form.perokok}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option value="">Pilih</option>
          <option value="Iya">Iya</option>
          <option value="Tidak">Tidak</option>
        </select>
      </div>

      <div>
        <label>Brand Rokok yang Digunakan:</label>
        <br />
        {[
          "Marlboro",
          "Sampoerna",
          "Djarum",
          "Gudang Garam",
          "Esse",
          "Tidak Mengonsumsi",
        ].map((brand) => (
          <label key={brand} className="mr-2">
            <input
              type="checkbox"
              value={brand}
              checked={form.brands.includes(brand)}
              onChange={handleCheckbox}
            />{" "}
            {brand}
          </label>
        ))}
      </div>

      <button type="submit" className="bg-blue-600 text-white py-2 rounded">
        Kirim
      </button>
    </form>
  );
}

export default SurveyForm;
