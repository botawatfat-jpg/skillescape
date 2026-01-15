import React from "react";
import styles from "../../legal.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Skillescape",
  description:
    "Learn how Skillescape collects, uses, and protects your personal data when you use our services.",
};

export default function PrivacyPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.mainTitle}>PRIVACY POLICY</h1>

        <div className={styles.text}>
          <strong>IMPORTANT PRIVACY INFORMATION</strong>
        </div>

        <p className={styles.text}>
          To use the service on the website, we may ask you to enter information
          about your age, gender, email address, current financial situation and
          ask other onboarding questions. We also automatically collect from your
          device: language settings, IP address, time zone, type and model of a
          device, device settings, operating system. We need this data to provide
          our services, analyze how our customers use the service and to measure
          ads.
        </p>

        <p className={styles.text}>
          For improving our service and serving ads, we use third party
          solutions. As a result, we may process data using solutions developed
          by Meta, Google, Mixpanel, Microsoft Clarity, Amplitude, Apple, PayPal,
          SendPulse, Solidgate, Intercom, Checkout, Adyen, TikTok, Hotjar.
          Therefore, some of the data is stored and processed on servers of such
          third parties. This enables us to: (1) analyze different interactions
          (how often users make subscriptions, what is the most popular users&apos;
          financial goal, what is the average time spent by users on the service,
          etc.); (2) serve ads (and are able to show them only to a particular
          group users, for example, to subscribers). Consequently, we, in
          particular, better understand in what of our features and content you
          see the most value and are able to focus on them to enhance your
          experience and increase the quality of our products.
        </p>

        <p className={styles.text}>
          Please read our Privacy Policy below to know more about what we do with
          data (Section 3), what data privacy rights are available to you
          (Section 6) and who will be the data controller (Section 1). If any
          questions remain unanswered, please contact us at
          privacy@skillescape.co
        </p>

        <p className={styles.text}>
          This Privacy Policy explains what personal data is collected when you
          use the Skillescape website located at https://skillescape.co/ (the
          &quot;Website&quot;) and the Skillescape mobile app (iOS and / or Android) and
          the services and Digital products provided through it (the &quot;Service&quot;),
          how such personal data will be processed. To avoid doubt, any reference
          to the Website also includes cases where you access or receive the
          Services through the Skillescape mobile app.
        </p>

        <p className={styles.text}>
          BY USING THE SERVICE, YOU PROMISE US THAT (I) YOU HAVE READ, UNDERSTAND
          AND AGREE TO THIS PRIVACY POLICY, AND (II) YOU ARE OVER 18 YEARS OF
          AGE. If you do not agree, or are unable to make this promise, you must
          not use the Service. In such case, you must (a) contact us and request
          deletion of your data; and (b) cancel any subscriptions using the
          functionality provided by instructions on the Website; (c) leave the
          Website and not access or use it.
        </p>

        <p className={styles.text}>
          &quot;GDPR&quot; means the General Data Protection Regulation (EU) 2016/679 of
          the European Parliament and of the Council of 27 April 2016 on the
          protection of natural persons with regard to the processing of personal
          data and on the free movement of such data.
        </p>

        <p className={styles.text}>
          &quot;EEA&quot; includes all current member states of the European Union and the
          European Economic Area. For the purpose of this policy EEA shall
          include the United Kingdom of Great Britain and Northern Ireland.
          &quot;Process&quot;, in respect of personal data, includes to collect, store, and
          disclose to others.
        </p>

        <div className={styles.divider}></div>

        <h2 className={styles.title}>TABLE OF CONTENTS</h2>
        <ul className={styles.list}>
          <li>PERSONAL DATA CONTROLLER</li>
          <li>CATEGORIES OF PERSONAL DATA WE COLLECT</li>
          <li>FOR WHAT PURPOSES WE PROCESS PERSONAL DATA</li>
          <li>
            UNDER WHAT LEGAL BASES WE PROCESS YOUR PERSONAL DATA (Applies only to
            EEA-based users)
          </li>
          <li>WITH WHOM WE SHARE YOUR PERSONAL DATA</li>
          <li>HOW YOU CAN EXERCISE YOUR PRIVACY RIGHTS</li>
          <li>AGE LIMITATION</li>
          <li>INTERNATIONAL DATA TRANSFERS</li>
          <li>CHANGES TO THIS PRIVACY POLICY</li>
          <li>SECURITY MEASURES</li>
          <li>DATA RETENTION</li>
          <li>HOW &quot;DO NOT TRACK&quot; REQUESTS ARE HANDLED</li>
          <li>CONTACT US</li>
        </ul>

        <div className={styles.divider}></div>

        <h2 className={styles.title}>1. PERSONAL DATA CONTROLLER</h2>
        <p className={styles.text}>
          <strong>SKILLESCAPE LIMITED</strong>, a company operating under the
          laws of England and Wales, having its registered address at{" "}
          <strong>
            71–75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom
          </strong>
          , will be the controller of your personal data.
        </p>

        <div className={styles.divider}></div>

        <h2 className={styles.title}>2. CATEGORIES OF PERSONAL DATA WE COLLECT</h2>
        <p className={styles.text}>
          We collect data you give us voluntarily (for example, when you enter
          your gender, financial status or email). We also collect data
          automatically (for example, your IP address) and use third-party
          service providers for such collection.
        </p>

        <h3 className={styles.subtitle}>Data you give us:</h3>
        <p className={styles.text}>
          You provide us information about yourself when you register for and/or
          use the Service. For example: age, gender, data on financial status
          (including your questions regarding financial mindset), email address.
          We do not intentionally collect sensitive personal data within the
          meaning of Article 9 GDPR. Information you provide about your financial
          situation is used strictly for the purpose of tailoring our Service to
          your needs. We will only process such data with your explicit consent.
        </p>

        <h3 className={styles.subtitle}>Data we collect automatically:</h3>

        <h4 className={styles.subtitle}>2.1. Data about how you found us</h4>
        <p className={styles.text}>
          We collect data about your referring URL (that is, the place on the Web
          where you were when you tapped on our ad).
        </p>

        <h4 className={styles.subtitle}>2.2. Device and Location data</h4>
        <p className={styles.text}>
          We collect information about the device you use to access our Services,
          including hardware model, operating system and version, unique device
          identifiers, browser type, and mobile network information. We may also
          collect approximate location information derived from your IP address
          or, where you allow, precise geolocation data provided by your device.
          This helps us ensure service functionality, improve security, and
          provide you with location-based features.
        </p>

        <h4 className={styles.subtitle}>2.3. Usage data</h4>
        <p className={styles.text}>
          We record how you interact with our Service. For example, we log your
          taps/clicks on certain areas of the interface, the features, and
          content you interact with, how often you use the Service, how long you
          are in the Service, and your subscription orders. We also record the
          ads in our Website with which you interact (and the Internet links to
          which those ads lead).
        </p>

        <h4 className={styles.subtitle}>2.4. Transaction data</h4>
        <p className={styles.text}>
          When you make payments through the Service, you need to provide
          financial account data, such as your credit card number, to our
          third-party service providers. We do not collect or store full credit
          card number data, though we may receive credit card-related data, data
          about the transaction, including: date, time and amount of the
          transaction, the type of payment method used.
        </p>

        <h4 className={styles.subtitle}>2.5. Cookies</h4>
        <p className={styles.text}>
          A cookie is a small text file that is stored on a user&apos;s computer for
          record-keeping purposes. Cookies can be either session cookies or
          persistent cookies. A session cookie expires when you close your
          browser and is used to make it easier for you to navigate our Service.
          A persistent cookie remains on your hard drive for an extended period
          of time. We also use tracking pixels that set cookies to assist with
          delivering online advertising. Cookies are used, in particular, to
          automatically recognize you the next time you visit our website. As a
          result, the information, which you have earlier entered in certain
          fields on the website may automatically appear the next time when you
          use our Service. Cookie data will be stored on your device and most of
          the time only for a limited time period.
        </p>

        <div className={styles.divider}></div>

        <h2 className={styles.title}>
          3. FOR WHAT PURPOSES WE PROCESS YOUR PERSONAL DATA
        </h2>
        <p className={styles.text}>We process your personal data:</p>

        <h3 className={styles.subtitle}>1. To provide our Service</h3>
        <p className={styles.text}>
          This includes enabling you to use the Service in a seamless manner and
          preventing or addressing Service errors or technical issues. To host
          personal data and enable our Website to operate and be distributed we
          use Google Cloud as our hosting and backend service provider.
        </p>

        <h3 className={styles.subtitle}>
          2. To communicate with you regarding your use of our Service
        </h3>
        <p className={styles.text}>
          We communicate with you, for example, by email. These may include
          information about the Service, some critical changes, special offers.
          To opt-out of receiving emails, you should click the unsubscribe link
          in the footer of our email. The services that we use for these purposes
          may collect data concerning the date and time when the message was
          viewed by our users, as well as when they interacted with it, such as
          by clicking on links included in the message.
        </p>

        <h3 className={styles.subtitle}>
          3. To research and analyze your use of the Service
        </h3>
        <p className={styles.text}>
          This helps us to better understand our business, analyze our
          operations, maintain, improve, innovate, plan, design, and develop the
          Service and our new products. We also use such data for statistical
          analysis purposes, to test and improve our offers. This enables us to
          better understand what features and learning plans of the Services our
          users like more, what categories of users use our Services. As a
          consequence, we often decide how to improve the Service based on the
          results obtained from this processing.
        </p>

        <h3 className={styles.subtitle}>4. To send you marketing communications</h3>
        <p className={styles.text}>
          We process your personal data for our marketing campaigns. We may add
          your email address to our marketing list, provided we receive consent
          or otherwise establish a legal basis for sending you marketing
          communications. As a result, you will receive information about our
          products, such as, for example, special offers. If you do not want to
          receive marketing emails from us, you can unsubscribe following
          instructions in the footer of the marketing emails.
        </p>

        <h3 className={styles.subtitle}>5. To personalize our ads</h3>
        <p className={styles.text}>
          We and our partners, including Meta and Google, use your personal data
          to tailor ads and possibly even show them to you at the relevant time.
        </p>

        <h3 className={styles.subtitle}>6. To process your payments</h3>
        <p className={styles.text}>
          We provide paid features and/or services within the Service. As a
          result of this processing, you will be able to make a payment for our
          Service and we will be notified that the payment has been made and will
          provide you with access. We will not store or collect your payment card
          details ourselves. This information will be provided directly to
          third-party payment processors.
        </p>

        <h3 className={styles.subtitle}>
          7. To enforce our Terms and Conditions and to prevent and combat fraud
        </h3>
        <p className={styles.text}>
          We use personal data to enforce our agreements and contractual
          commitments, to detect, prevent, and combat fraud. As a result of such
          processing, we may share your information with others, including law
          enforcement agencies (in particular, if a dispute arises in connection
          with our Terms and Conditions).
        </p>

        <h3 className={styles.subtitle}>8. To comply with legal obligations</h3>
        <p className={styles.text}>
          We may process, use, or share your data when the law requires it, in
          particular, if a law enforcement agency requests your data by available
          legal means.
        </p>

        <div className={styles.divider}></div>

        <h2 className={styles.title}>
          4. UNDER WHAT LEGAL BASES WE PROCESS YOUR PERSONAL DATA (Applies only
          to EEA-based users)
        </h2>
        <p className={styles.text}>
          In this section, we are letting you know what legal basis we use for
          each particular purpose of processing. For more information on a
          particular purpose, please refer to Section 3. This section applies
          only to EEA-based users. We process your personal data under the
          following legal bases:
        </p>

        <h3 className={styles.subtitle}>Your consent</h3>
        <p className={styles.text}>
          Under this legal basis we will send you marketing emails. You have the
          right to withdraw your consent at any time by clicking on unsubscribe
          link in the footer of our marketing emails.
        </p>

        <h3 className={styles.subtitle}>To perform our contract with you</h3>
        <p className={styles.text}>Under this legal basis we:</p>
        <ul className={styles.list}>
          <li>Provide our Service in accordance with our Terms and Conditions</li>
          <li>Customize your experience</li>
          <li>Manage your account and provide you with customer support</li>
          <li>Communicate with you regarding your use of our Service</li>
          <li>Process your payments</li>
        </ul>

        <div className={styles.divider}></div>

        <h2 className={styles.title}>5. WITH WHOM WE SHARE YOUR PERSONAL DATA</h2>
        <p className={styles.text}>
          We share information with third parties that help us operate, provide,
          improve, integrate, customize, support, and market our Service. We may
          share some sets of personal data, in particular, for purposes indicated
          in Section 3 of this Privacy Policy. The types of third parties we
          share information with include, in particular:
        </p>

        <h3 className={styles.subtitle}>SERVICE PROVIDERS</h3>
        <p className={styles.text}>
          We share personal data with third parties that we hire to provide
          services or perform business functions on our behalf, based on our
          instructions. We share your personal information with the following
          types of service providers:
        </p>
        <ul className={styles.list}>
          <li>cloud storage providers (Google Cloud)</li>
          <li>data analytics providers (Meta, Google, Amplitude, Mixpanel)</li>
          <li>
            marketing partners (in particular, social media networks, marketing
            agencies, email delivery services, Meta, Google, SendPulse)
          </li>
          <li>payment processing providers</li>
          <li>communication services providers (Intercom)</li>
        </ul>

        <h3 className={styles.subtitle}>
          LAW ENFORCEMENT AGENCIES AND OTHER PUBLIC AUTHORITIES
        </h3>
        <p className={styles.text}>
          We may use and disclose personal data to enforce our Terms and
          Conditions, to protect our rights, privacy, safety, or property, and/or
          that of our affiliates, you or others, and to respond to requests from
          courts, law enforcement agencies, regulatory agencies, and other public
          and government authorities, or in other cases provided for by law.
        </p>

        <h3 className={styles.subtitle}>
          THIRD PARTIES AS PART OF A MERGER OR ACQUISITION
        </h3>
        <p className={styles.text}>
          As we develop our business, we may buy or sell assets or business
          offerings. Customers&apos; information is generally one of the transferred
          business assets in these types of transactions. We may also share such
          information with any affiliated entity (e.g. parent company or
          subsidiary) and may transfer such information in the course of a
          corporate transaction, such as the sale of our business, a divestiture,
          merger, consolidation, or asset sale, or in the unlikely event of
          bankruptcy.
        </p>

        <div className={styles.divider}></div>

        <h2 className={styles.title}>
          6. HOW YOU CAN EXERCISE YOUR PRIVACY RIGHTS
        </h2>
        <p className={styles.text}>
          To be in control of your personal data, you have the following rights:
        </p>
        <ul className={styles.list}>
          <li>
            <strong>
              Accessing / reviewing / updating / correcting your personal data.
            </strong>{" "}
            You may request a copy of your personal data and request us to
            update/correct your personal data collected during your use of the
            Service at privacy@skillescape.co
          </li>
          <li>
            <strong>Deleting your personal data.</strong> You can request erasure
            of your personal data by sending us an email at
            privacy@skillescape.co. When you request deletion of your personal
            data, we will use reasonable efforts to honor your request. In some
            cases we may be legally required to keep some of the data for a
            certain time; in such an event, we will fulfill your request after we
            have complied with our obligations.
          </li>
          <li>
            <strong>
              Objecting to or restricting the use of your personal data.
            </strong>{" "}
            You can ask us to stop using all or some of your personal data or
            limit our use thereof by sending requests to privacy@skillescape.co.
            If you are based in the EEA, you have the right to lodge a complaint
            with supervisory authority.
          </li>
          <li>
            <strong>The right to data portability.</strong> If you wish to
            receive your personal data in a machine-readable format, you can send
            respective request to privacy@skillescape.co.
          </li>
        </ul>
        <p className={styles.text}>
          To exercise any of the available to you privacy rights, please send a
          request to privacy@skillescape.co.
        </p>

        <div className={styles.divider}></div>

        <h2 className={styles.title}>7. AGE LIMITATION</h2>
        <p className={styles.text}>
          We do not knowingly process personal data from persons under 18 years
          of age. If you learn that anyone younger than 18 has provided us with
          personal data, please contact us at privacy@skillescape.co.
        </p>

        <div className={styles.divider}></div>

        <h2 className={styles.title}>8. INTERNATIONAL DATA TRANSFERS</h2>
        <p className={styles.text}>
          We may transfer personal data to countries other than the country in
          which the data was originally collected in order to provide the Service
          set forth in the Terms and Conditions and for purposes indicated in
          this Privacy Policy. If these countries do not have the same data
          protection laws as the country in which you initially provided the
          information, we deploy special safeguards.
        </p>
        <p className={styles.text}>
          In particular, if we transfer personal data originating from the EEA to
          countries with not adequate level of data protection, we use one of the
          following legal bases: (i) Standard Contractual Clauses approved by the
          European Commission, or (ii) the European Commission adequacy decisions
          about certain countries.
        </p>

        <div className={styles.divider}></div>

        <h2 className={styles.title}>9. CHANGES TO THIS PRIVACY POLICY</h2>
        <p className={styles.text}>
          We may modify this Privacy Policy from time to time. If we decide to
          make material changes to this Privacy Policy, you may be notified
          through our Service or by other available means and will have an
          opportunity to review the revised Privacy Policy. By continuing to
          access or use the Service after those changes become effective, you
          agree to be bound by the revised Privacy Policy.
        </p>

        <div className={styles.divider}></div>

        <h2 className={styles.title}>10. SECURITY MEASURES</h2>
        <p className={styles.text}>
          We implement appropriate technical and organizational measures to
          protect your personal data against unauthorized access, loss, misuse,
          alteration, or destruction. These measures include encryption, access
          controls, secure storage, and regular monitoring of our systems. While
          we take reasonable steps to safeguard your information, please note
          that no method of transmission or storage is completely secure, and we
          cannot guarantee absolute security of your personal data.
        </p>

        <div className={styles.divider}></div>

        <h2 className={styles.title}>11. DATA RETENTION</h2>
        <p className={styles.text}>
          We will store your personal data for as long as it is reasonably
          necessary for achieving the purposes set forth in this Privacy Policy
          (including providing the Service to you), which includes (but is not
          limited to) the period during which you have an account with the App.
          We will also retain and use your personal data as necessary to comply
          with our legal obligations, resolve disputes, and enforce our
          agreements.
        </p>

        <div className={styles.divider}></div>

        <h2 className={styles.title}>
          12. HOW &quot;DO NOT TRACK&quot; REQUESTS ARE HANDLED
        </h2>
        <p className={styles.text}>
          Except as otherwise stipulated in this Privacy Policy, this App does
          not support &quot;Do Not Track&quot; requests. To determine whether any of the
          third-party services it uses honor the &quot;Do Not Track&quot; requests, please
          read their privacy policies.
        </p>

        <div className={styles.divider}></div>

        <h2 className={styles.title}>13. СALIFORNIA PRIVACY RIGHTS</h2>
        <p className={styles.text}>
          This section applies only to residents of California, United States,
          and describes the additional rights provided under the California
          Consumer Privacy Act (&quot;CCPA&quot;) and California&apos;s Shine the Light law.
        </p>
        <p className={styles.text}>
          Under California&apos;s Shine the Light law, California residents may
          request, once per year, information about how we share certain
          categories of personal information with third parties for their direct
          marketing purposes. To make such a request, please email us at
          privacy@skillescape.co with the subject line &quot;California Shine the
          Light Request&quot; and include your state of residence and email address in
          the body of your message.
        </p>
        <p className={styles.text}>
          In addition to the rights described in this Privacy Policy, California
          residents have the following rights under the CCPA:
        </p>
        <ul className={styles.list}>
          <li>
            <strong>
              Right to Opt Out of Sale or Sharing of Personal Information
            </strong>{" "}
            – You may direct us not to &quot;sell&quot; or &quot;share&quot; your personal
            information, as those terms are defined under California law.
          </li>
          <li>
            <strong>Right to Limit Use of Sensitive Personal Information</strong>{" "}
            – You may request that we restrict the use of sensitive personal
            information to what is reasonably necessary to provide the Service.
          </li>
        </ul>

        <div className={styles.divider}></div>

        <h2 className={styles.title}>Contact us</h2>
        <p className={styles.text}>
          71–75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom
        </p>
        <p className={styles.text}>email: privacy@skillescape.co</p>
        <p className={styles.text}>Date of Last Revision: January, 2026</p>
      </div>
    </div>
  );
}
