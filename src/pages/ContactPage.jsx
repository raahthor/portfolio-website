import clsx from "clsx";
import styles from "./contactpage.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

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
      <motion.div
        className={clsx(styles["contact-title"], "lm-contact-title")}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Get in Touch
      </motion.div>
      <motion.p
        className={clsx(styles["contact-p"])}
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Have a question or want to work together? I'd love to connect!
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className={clsx(styles["contactform"])}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        viewport={{ once: true }}
      >
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
          className={clsx(["hover-effect"], styles["contact-sec-button"])}
          disabled={isSending}
        >
          Send
        </button>
      </motion.form>
      <motion.div
        className={clsx(styles["mycontactinfo"], "lm-mycontactinfo")}
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className={clsx(styles["contact-border"])}></div>

        <a
          className={clsx("hover-effect")}
          href="https://github.com/raahthor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github.png" alt="GitHub" />
          GitHub
        </a>

        <a
          className={clsx("hover-effect")}
          href="https://x.com/raahthor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/x.png" alt="x (twitter)" />X
        </a>

        <a
          className={clsx("hover-effect")}
          href="https://linkedin.com/in/raahthor/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkedin-1.png" alt="LinkedIn" />
          LinkedIn
        </a>
        <a
          className={clsx("hover-effect")}
          href="mailto:prashantrathore1435@gmail.com?subject=Hello!&body=I%20would%20like%20to%20discuss..."
        >
          <img src="/mailme.png" alt="Email" />
          Mail Me
        </a>
        <a
          className={clsx("hover-effect")}
          href="/resume/MyResume.pdf"
          target="_blank"
        >
          <img src="/file.png" alt="Resume" />
          Resume
        </a>
      </motion.div>
    </>
  );
}
