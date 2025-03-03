import clsx from "clsx";
import styles from "./contactpage.module.css";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevVal) => ({ ...prevVal, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSending(true);
    try {
      const response = await fetch("https://formspree.io/f/xeoqobjy", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message, Please try again!");
      }
    } catch (error) {
      alert("Error : ", error.message);
    } finally {
      setIsSending(false);
    }
  }
  return (
    <>
      <div className={clsx(styles["contact-title"], "lm-contact-title")}>
        Get in Touch
      </div>
      <p className={clsx(styles["contact-p"])}>
        Have a question or want to work together? I'd love to connect!
      </p>

      <form onSubmit={handleSubmit} className={clsx(styles["contactform"])}>
        <input
          onChange={handleChange}
          value={formData.name}
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          onChange={handleChange}
          value={formData.email}
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          onChange={handleChange}
          value={formData.message}
          name="message"
          id="message"
          placeholder="Message..."
          required
        ></textarea>
        <button
          type="submit"
          className={clsx("hover-effect")}
          disabled={isSending}
        >
          Send
        </button>
      </form>
      <div className={clsx(styles["mycontactinfo"], "lm-mycontactinfo")}>
        <div className={clsx(styles["contact-border"])}></div>

        <a
          className={clsx("hover-effect")}
          href="mailto:prashantrathore1435@gmail.com?subject=Hello!&body=I%20would%20like%20to%20discuss..."
        >
          <img src="/mailme.png" alt="Email" />
          Email Me
        </a>

        <a
          className={clsx("hover-effect")}
          href="https://linkedin.com/in/raahthor/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkedin-1.png" alt="LinkedIn" />
          My LinkedIn
        </a>

        <a
          className={clsx("hover-effect")}
          href="https://github.com/raahthor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github.png" alt="GitHub" />
          My GitHub
        </a>
      </div>
    </>
  );
}
