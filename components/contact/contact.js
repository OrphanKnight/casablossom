import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./../../styles/signin.module.scss";
import styled from "styled-components";
import Link from "next/link";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        <div className={styles.login__header}>
          <span>
            We&apos;d be happy to join us ! <Link href="/">Go Store</Link>
          </span>
        </div>
        <div className={styles.login__form}>
          <h1>Contact Us</h1>
          <p>For customized items, events or further queries</p>
          <div className={styles.input}>
            <StyledContactForm>
              <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
              </form>
            </StyledContactForm>
          </div>
        </div>
      </div>
    </div>
  );
};

const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 55px;
      padding: 7px;
      outline: none;
      border-radius: 20px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 20px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #2f82ff;
      color: white;
      border: none;
      font-size: 19px;
      font-weight: 700;
    }
  }
`;
