import React from "react";

import styles from "./styles.module.scss";

export default function ReturnService() {
  return (
    <div className={styles.body}>
      {" "}
      <h1>Casa Blossom Return Policy</h1>
      <p>
        At Casa Blossom, we are committed to providing our customers with
        high-quality products and exceptional customer service. We understand
        that sometimes you may need to return a product due to various reasons.
        To ensure a smooth and hassle-free return process, we have designed the
        following return policy for our florist e-commerce platform:
      </p>
      <h2>1. Return Eligibility</h2>
      <p>
        You may return eligible items within 7 days from the date of delivery.
        To be eligible for a return, your item must meet the following criteria:
      </p>
      <ul>
        <li>
          &#x2022; The item must be unused and in the same condition that you
          received it.
        </li>
        <li>
          &#x2022; The item must be in the original packaging, including any
          tags or labels.
        </li>
        <li>
          &#x2022; The item must not be damaged, altered, or show any signs of
          wear.
        </li>
      </ul>
      <p>
        Please note that due to the perishable nature of our products, we are
        unable to accept returns for flowers that have wilted, dried out, or
        otherwise degraded in quality after delivery.
      </p>
      <h2>2. Return Process</h2>
      <p>To initiate a return, please follow these steps:</p>
      <ol>
        <li>
          Contact our customer service team by email at{" "}
          <a href="mailto:blossomcasa@gmail.com">blossomcasa@gmail.com</a> or by
          phone at <a href="tel:+17884322222">+1 (788) 432 - 2222</a> within 7
          days of receiving your order.
        </li>
        <li>
          Provide your order number, item details, and a brief explanation for
          the return request.
        </li>
        <li>
          Our customer service team will evaluate your return request and
          provide further instructions, including a return authorization number
          and return shipping address, if applicable.
        </li>
      </ol>
      <p>
        Please do not send your item back without first obtaining a return
        authorization number, as this may result in a delayed or rejected
        return.
      </p>
      <h2>3. Return Shipping</h2>
      <p>
        Customers are responsible for covering the cost of return shipping. We
        recommend using a trackable shipping service or purchasing shipping
        insurance to ensure that your return arrives safely.
      </p>
      <p>
        Casa Blossom is not responsible for items that are lost or damaged
        during the return shipping process.
      </p>
      <h2>4. Refunds</h2>
      <p>
        Once your return is received and inspected, our customer service team
        will notify you of the approval or rejection of your refund. If your
        return is approved, a refund will be processed, and a credit will be
        applied to your original method of payment within 7 business days.
      </p>
      <p>
        Please note that shipping costs are non-refundable. If you receive a
        refund, the cost of the original shipping will be deducted from the
        refunded amount.
      </p>
      <h2>5. Exchanges</h2>
      <p>
        We strive to provide our customers with the best possible shopping
        experience at Casa Blossom. If you have any questions or concerns about
        our return policy, please do not hesitate to contact our customer
        service team by email at{" "}
        <a href="mailto:blossomcasa@gmail.com">blossomcasa@gmail.com</a> or by
        phone at <a href="tel:+17884322222">+1 (788) 432 - 2222</a>.
      </p>
    </div>
  );
}
