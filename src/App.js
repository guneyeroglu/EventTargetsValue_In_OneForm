import React, { useState } from "react";
import "./styles.css";

function App() {
  const [form, setForm] = useState({ name: "", city: "", bio: "" });
  const handleChange = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value });

  console.log(form); //Console kısmından kontrol amaçlı.

  return (
    <div className="App">
      <br />
      <h1>*Verileri Tek Form Üzerinde Tutma*</h1>
      <br />
      <form>
        <input
          value={form.name}
          onChange={handleChange}
          placeholder="Adınız"
          name="name"
        />
        <select
          className="pointer"
          value={form.city}
          onChange={handleChange}
          name="city"
        >
          <option value="" disabled>
            Lütfen şehir seçiniz...
          </option>
          <option value="London">Londra</option>
          <option value="Birmingham">Birmingham</option>
          <option value="Brighton">Brighton</option>
          <option value="Manchester">Manchester</option>
          <option value="Oxford">Oxford</option>
        </select>
        <textarea
          value={form.bio}
          onChange={handleChange}
          rows="7"
          placeholder="Biyografiniz"
          name="bio"
        />
        <button className="pointer">Gönder</button>
      </form>
    </div>
  );
}

export default App;
