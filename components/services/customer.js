import React from "react";

import styles from "./styles.module.scss";

export default function CustomerService() {
  return (
    <div className={styles.body}>
      <h1>Casa Blossom Customer Service Policies</h1>
      <p>
        At Casa Blossom, we pride ourselves on providing exceptional customer
        service to ensure that our clients have a seamless and enjoyable
        experience. Our dedicated team of customer service representatives is
        available to assist you with any inquiries or concerns you may have. We
        have implemented comprehensive customer service policies to provide a
        smooth and efficient process for our clients.
      </p>

      <h2>1. Multiple Contact Channels</h2>
      <p>
        We understand that our customers have different preferences when it
        comes to communication. That's why we offer multiple contact channels to
        cater to your needs:
      </p>
      <ul>
        <li>
          <strong>Email:</strong> Feel free to drop us an email at{" "}
          <a href="mailto:blossomcasa@gmail.com">blossomcasa@gmail.com</a>, and
          we will get back to you within 24 hours.
        </li>
        <li>
          <strong>Phone:</strong> If you prefer to speak with a customer service
          representative directly, please call us at{" "}
          <a href="tel:+17884322222">+1 (788) 432 - 2222</a>. Our team is
          available from Monday to Friday, 9 AM to 6 PM EST.
        </li>
        <li>
          <strong>In-person:</strong> You can also visit our physical location
          at Calle Ocho, Miami, Florida, where our knowledgeable staff will be
          happy to assist you with your inquiries.
        </li>
      </ul>

      <h2>2. Prompt Response Time</h2>
      <p>
        At Casa Blossom, we value your time and strive to provide prompt
        assistance. Our customer service team is committed to responding to your
        inquiries within 24 hours for email and immediately for phone calls
        during business hours.
      </p>

      <h2>3. Personalized Service</h2>
      <p>
        Our customer service representatives are trained to provide personalized
        assistance to address your specific needs. We understand that each
        customer is unique, and we aim to provide tailor-made solutions to
        ensure your satisfaction.
      </p>

      <h2>4. Transparency and Accountability</h2>
      <p>
        We believe in transparency and accountability in all our interactions
        with customers. Our customer service team will provide you with clear
        and accurate information about our products and services, as well as
        address any concerns or complaints in a fair and timely manner.
      </p>

      <h2>5. Continuous Improvement</h2>
      <p>
        We value your feedback and are committed to continuously improving our
        customer service policies and procedures. If you have any suggestions or
        concerns, please feel free to share them with our team. Your input is
        essential in helping us to provide the best possible experience for all
        our customers.
      </p>

      <p>
        At Casa Blossom, your satisfaction is our priority. Our customer service
        policies are designed to ensure that you receive the highest level of
        support and assistance. If you have any questions or need further
        assistance, please don't hesitate to contact us through any of the
        channels mentioned above.
      </p>
    </div>
  );
}
