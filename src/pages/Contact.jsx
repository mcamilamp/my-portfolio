import React, { useState, useContext } from "react";
import "../assets/styles/Contact.css";
import { LanguageContext } from "../context/LanguageContext";
import { translate } from "../utils/translate";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const { language } = useContext(LanguageContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(""); // 'sending', 'success', 'error'

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = translate(language, "contact.validation.nameRequired");
    }

    if (!formData.email.trim()) {
      newErrors.email = translate(language, "contact.validation.emailRequired");
    } else if (!validateEmail(formData.email)) {
      newErrors.email = translate(language, "contact.validation.emailInvalid");
    }

    if (!formData.subject.trim()) {
      newErrors.subject = translate(
        language,
        "contact.validation.subjectRequired"
      );
    }

    if (!formData.message.trim()) {
      newErrors.message = translate(
        language,
        "contact.validation.messageRequired"
      );
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("sending");

    try {
      // Import emailjs dynamically
      const emailjs = await import('@emailjs/browser');
      
      // Send email using EmailJS
      await emailjs.default.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'camimerpa@gmail.com',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setStatus("");
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
      
      setTimeout(() => {
        setStatus("");
      }, 5000);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1>{translate(language, "contact.title")}</h1>
          <p className="contact-subtitle">
            {translate(language, "contact.subtitle")}
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-section">
            <p className="alternative-contact-message">
              {translate(language, "contact.alternativeMessage")}{" "}
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=camimerpa@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="email-link"
              >
                camimerpa@gmail.com
              </a>
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">
                  {translate(language, "contact.form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "error" : ""}
                />
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  {translate(language, "contact.form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "error" : ""}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  {translate(language, "contact.form.subject")}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={errors.subject ? "error" : ""}
                />
                {errors.subject && (
                  <span className="error-message">{errors.subject}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  {translate(language, "contact.form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? "error" : ""}
                ></textarea>
                {errors.message && (
                  <span className="error-message">{errors.message}</span>
                )}
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={status === "sending"}
              >
                {status === "sending"
                  ? translate(language, "contact.form.sending")
                  : translate(language, "contact.form.send")}
              </button>

              {status === "success" && (
                <div className="success-message">
                  {translate(language, "contact.form.success")}
                </div>
              )}
              {status === "error" && (
                <div className="error-message">
                  {translate(language, "contact.form.error")}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-section">
            <h2>{translate(language, "contact.info.title")}</h2>

            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <h3>{translate(language, "contact.info.email")}</h3>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=camimerpa@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  camimerpa@gmail.com
                </a>
              </div>
            </div>

            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h3>{translate(language, "contact.info.location")}</h3>
                <p>Colombia</p>
              </div>
            </div>

            <div className="social-links">
              <h3>{translate(language, "contact.info.social")}</h3>
              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/in/maria-camila-mercado-payares-1a2383289/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon linkedin"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/mcamilamp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
