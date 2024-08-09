import React from "react";
import styles from "./styles.module.css";

export default function Privacy() {
  return (
    <>
      <div className={styles.Privacy}>
        <h2 className="text-center">Privacy and policy</h2>
        <div className={styles.privacyContent}>
          <div className={styles.pEdit}>
            <p>
              We value the privacy and security of our customers' information.
              This privacy policy outlines how we collect, use, and protect the
              personal data of our clients and website visitors.
            </p>
            <h4>Data Collection</h4>
            <p>
              We collect information that you provide directly to us, such as
              when you make a purchase, sign up for our newsletter, or contact
              us for support. This may include your name, email address, postal
              address, and payment information.
            </p>
            <h4>Use of Information</h4>
            <p>
              The information we collect is used to process transactions,
              improve our website and customer service, and, with your
              permission, to send periodic emails about new products, special
              offers, or other information we think you may find interesting.
            </p>
            <h4>Data Protection</h4>
            <p>
              We implement a variety of security measures to maintain the safety
              of your personal information. Your personal data is stored behind
              secured networks and is only accessible by a limited number of
              persons who have special access rights and are required to keep
              the information confidential.
            </p>
            <h4>Cookies</h4>
            <p>
              Our website uses cookies to enhance user experience. Cookies are
              small files that a site or its service provider transfers to your
              computer's hard drive through your web browser that enables the
              sites or service providers systems to recognize your browser and
              capture and remember certain information.
            </p>
            <h4>Third-Party Disclosure</h4>
            <p>
              We do not sell, trade, or otherwise transfer your personally
              identifiable information to outside parties except when we believe
              release is appropriate to comply with the law, enforce our site
              policies, or protect ours or others' rights, property, or safety.
            </p>
            <h4>Consent</h4>
            <p>By using our site, you consent to our privacy policy.</p>
            <h4>Changes to our Privacy Policy</h4>
            <p>
              We reserve the right to update or change our privacy policy at any
              time. We will post those changes on this page, and/or update the
              Privacy Policy modification date below.
            </p>
            <h4>Contact Us</h4>
            <p>
              If there are any questions regarding this privacy policy, you may
              contact us using the information provided on our website.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
