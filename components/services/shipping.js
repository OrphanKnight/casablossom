import React from "react";

import styles from "./styles.module.scss";

export default function ShippingService() {
  return (
    <div className={styles.body}>
      <h1>Casa Blossom Shipping and Delivery Policy</h1>
      <p>
        At Casa Blossom, we are committed to ensuring that our customers receive
        their orders promptly and in perfect condition. As a leading florist
        e-commerce platform, we have implemented a comprehensive shipping and
        delivery policy to provide a seamless and efficient experience for our
        clients.
      </p>

      <h2>1. Order Processing Time</h2>
      <p>
        Our team at Casa Blossom works diligently to process and ship your
        orders as quickly as possible. Orders placed before 2 PM local time,
        Monday through Friday, will be processed and shipped the same day.
        Orders placed after 2 PM local time, or on weekends and holidays, will
        be processed and shipped the following business day.
      </p>

      <h2>2. Shipping Methods</h2>
      <p>
        Casa Blossom offers multiple shipping options to cater to the diverse
        needs of our customers:
      </p>
      <ul>
        <li>
          <strong>Standard Delivery:</strong> Orders shipped via Standard
          Delivery typically arrive within 3-5 business days. This shipping
          method is available for a flat fee of $10.
        </li>
        <li>
          <strong>Express Delivery:</strong> For customers who need their orders
          sooner, we offer Express Delivery, which ensures delivery within 1-2
          business days. This service is available for a flat fee of $20.
        </li>
        <li>
          <strong>Local Delivery:</strong> For customers located within a
          15-mile radius of our physical store, we provide Local Delivery.
          Orders placed before 2 PM local time will be delivered the same day,
          while orders placed after 2 PM local time will be delivered the
          following day. The cost for Local Delivery is $15.
        </li>
      </ul>

      <h2>3. Order Tracking</h2>
      <p>
        Once your order has been shipped, you will receive an email containing
        your tracking information. You can use this information to track the
        progress of your shipment and estimate its arrival date.
      </p>

      <h2>4. Delivery Conditions</h2>
      <p>
        To ensure that your flowers arrive in optimal condition, Casa Blossom
        takes the necessary precautions during packaging and transportation. We
        use insulated packaging materials and secure the flowers to prevent any
        damage during transit.
      </p>

      <h2>5. Delivery Issues</h2>
      <p>
        In the event of any delivery issues, such as incorrect addresses,
        recipient unavailability, or other unforeseen circumstances, our
        customer service team will contact you to resolve the issue as quickly
        as possible. If the flowers are returned to us due to a failed delivery
        attempt, we will contact you to schedule a redelivery or provide a
        refund, minus the shipping fees.
      </p>

      <h2>6. International Shipping</h2>
      <p>
        Currently, Casa Blossom only ships within the United States. We are
        working towards expanding our shipping options to include international
        destinations and will update our policy accordingly.
      </p>

      <p>
        At Casa Blossom, your satisfaction is our top priority. Our shipping and
        delivery policyis designed to ensure that you receive your order quickly
        and in excellent condition. If you have any questions or concerns
        regarding shipping and delivery, please don't hesitate to contact our
        customer service team through email at{" "}
        <a href="mailto:blossomcasa@gmail.com">blossomcasa@gmail.com</a> or by
        phone at <a href="tel:+17884322222">+1 (788) 432 - 2222</a>.
      </p>
    </div>
  );
}
