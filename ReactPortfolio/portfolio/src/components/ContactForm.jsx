import React, { useState } from "react";
import styles from "./ContactForm.module.css";

const API_URL = import.meta.env.VITE_API_URL || "/api/contact/";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim() || form.message.trim().length < 8) e.message = "Message too short";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (ev) => setForm(s => ({ ...s, [ev.target.name]: ev.target.value }));

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error("Network error");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} aria-label="Contact form">
      <div className={styles.row}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} aria-invalid={!!errors.name} />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} aria-invalid={!!errors.email} />
      </div>
      {errors.name && <div className={styles.error}>{errors.name}</div>}
      {errors.email && <div className={styles.error}>{errors.email}</div>}

      <textarea name="message" rows="5" placeholder="Tell us more..." value={form.message} onChange={handleChange} aria-invalid={!!errors.message}></textarea>
      {errors.message && <div className={styles.error}>{errors.message}</div>}

      <div className={styles.actions}>
        <button type="submit" className={styles.btn} aria-live="polite">
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        {status === "success" && <span className={styles.success}>Message sent</span>}
        {status === "error" && <span className={styles.err}>Send failed</span>}
      </div>

      <p className={styles.hint}>This will POST JSON to: <code>{API_URL}</code></p>
    </form>
  );
}
