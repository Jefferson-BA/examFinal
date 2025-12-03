import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSuccess(true);
  };

  return (
    <>
      <h2 className="fw-bold mb-4">Contacto</h2>

      {success && (
        <div className="alert alert-success">Mensaje enviado correctamente</div>
      )}

      <form onSubmit={handleSubmit} className="col-md-6 mx-auto">
        <input
          type="text"
          placeholder="Nombre"
          className="form-control mb-3"
          required
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Correo"
          className="form-control mb-3"
          required
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <textarea
          placeholder="Mensaje"
          className="form-control mb-3"
          rows={5}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <button className="btn btn-primary w-100">Enviar</button>
      </form>
    </>
  );
};

export default Contact;
