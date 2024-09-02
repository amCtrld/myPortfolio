import { useState } from "react";
import emailjs from "emailjs-com";
import styles from "../styles/EmailForm.module.css";

export default function EmailForm({ closeForm }) {
  const [formData, setFormData] = useState({
    name: "",
    user_email: "",
    title: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.user_email ||
      !formData.title ||
      !formData.message
    ) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(formData.user_email)) {
      setError("Invalid email address.");
      return;
    }

    setError("");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSuccess("Email sent successfully!");
          setFormData({
            name: "",
            user_email: "",
            title: "",
            message: "",
          });
          closeForm();
        },
        (error) => {
          setError("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div className={styles.emailFormContainer}>
      <div className={styles.emailForm}>
        <button className={styles.closeButton} onClick={closeForm}>
          &times;
        </button>
        <h2>Send an Email</h2>
        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="name">
              Name:
            </label>
            <input
              className={styles.input}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">
              Email:
            </label>
            <input
              className={styles.input}
              type="email"
              id="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="title">
              Title:
            </label>
            <input
              className={styles.input}
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="message">
              Message:
            </label>
            <textarea
              className={styles.textarea}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button className={styles.button} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
