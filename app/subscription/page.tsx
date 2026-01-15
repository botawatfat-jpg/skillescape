import React from "react";
import styles from "../legal.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subscription Policy | Skillescape",
  description:
    "Learn about our subscription terms, payment methods, cancellation policy, and refund conditions.",
};

export default function SubscriptionPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.mainTitle}>SUBSCRIPTION POLICY</h1>

        <h2 className={styles.title}>Subscription Terms</h2>
        <p className={styles.text}>
          Please read this Agreement thoroughly and carefully. The purpose of
          this Agreement is to establish the terms and conditions under which the
          user obtains access to the learning materials.
        </p>

        <div className={styles.divider}></div>

        <h2 className={styles.title}>1. Trial</h2>
        <p className={styles.text}>
          We may offer a paid trial subscription for services provided through
          the Website and/or the App. Unless you cancel at least 24 hours before
          the end of the trial, you will be automatically charged a price
          indicated on the payment screen for a chosen subscription period and
          trial will be converted into a subscription.
        </p>

        <div className={styles.divider}></div>

        <h2 className={styles.title}>2. Subscription</h2>
        <p className={styles.text}>
          The subscription renews automatically at the end of each period (4
          weeks, 12 weeks, or otherwise, depending on the option selected by you
          at the time of purchase) until you cancel.
        </p>

        <div className={styles.divider}></div>

        <h2 className={styles.title}>3. Payment method</h2>
        <ol className={styles.list}>
          <li className={styles.text}>
            The Company charges the applicable fees to the payment method you
            submit at the time of purchase (after you confirm by single-touch
            identification, facial recognition, or entering your payment method
            details on the web, or otherwise accepting subscription terms provided
            on the payment screen on our web page).
          </li>
          <li className={styles.text}>
            You authorize us to store your payment method(s) and automatically
            charge the applicable subscription fees to the payment card that you
            submit for the renewal term.
          </li>
          <li className={styles.text}>
            The prices available through subscription services may change from
            time to time by territory.
          </li>
          <li className={styles.text}>
            Unless otherwise stated, any price changes will be effective from the
            start of the next subscription period. If you do not wish to pay the
            new price, you can cancel the applicable subscription prior to the
            change going into effect.
          </li>
        </ol>

        <div className={styles.divider}></div>

        <h2 className={styles.title}>4. Cancellation</h2>
        <ol className={styles.list}>
          <li className={styles.text}>
            You can cancel an introductory offer or subscription plan by clicking
            on the &quot;Unsubscribe&quot; button in your account before the end of the
            introductory offer or then-current subscription plan or by contacting
            our support at support@skillescape.co.
          </li>
          <li className={styles.text}>
            Note that deleting the app does not cancel your subscriptions.
          </li>
        </ol>

        <p className={styles.text}>
          Unless you cancel before the end of the introductory offer, your access
          to the Service will automatically continue and you will be
          automatically charged a price for a subscription plan (weekly, monthly,
          quarterly, or otherwise, depending on the option you select at the time
          of purchase) without notice. It is ultimately your responsibility to
          know when the introductory offer will end.
        </p>

        <p className={styles.text}>
          The period of auto-renewal will be the same as your initial
          subscription period unless otherwise disclosed to you on the Service.
          The renewal rate will be no more than the rate for the immediately
          prior subscription period, excluding any promotional and discount
          pricing, unless we notify you of a rate change prior to your
          auto-renewal.
        </p>

        <p className={styles.text}>
          In some cases, your payment date may change, such as when your payment
          method fails to settle or when you change your subscription plan. To
          view your next payment date, go to the website and click on the
          &quot;Subscription management&quot; link on the &quot;Menu&quot; page.
        </p>

        <p className={styles.text}>
          Canceling your subscription means that the automatic renewal will be
          disabled, but you will still have access to all your subscription
          features for the remaining time of your then-current period. YOU HEREBY
          EXPRESSLY CONSENT TO THE IMMEDIATE PERFORMANCE OF THE AGREEMENT AND
          ACKNOWLEDGE THAT your subscription plan will automatically renew for
          every subsequent month/year until you cancel in settings.
        </p>

        <p className={styles.text}>
          Auto-renewal of a purchased subscription can be disabled at any time:
        </p>
        <ol className={styles.list}>
          <li className={styles.text}>
            if users used Paypal for the payment, unsubscribing can be initiated
            in their Paypal account;
          </li>
          <li className={styles.text}>
            if another selected payment method – unsubscribing can be initiated in
            their Account by clicking on the &quot;Unsubscribe&quot; button in your account
            before the end of the introductory offer or then-current subscription
            period.
          </li>
        </ol>

        <p className={styles.text}>
          You must cancel your subscription in accordance with the cancellation
          procedures disclosed to you for the particular subscription. We will
          not refund fees that may have accrued to your account once Digital
          Content has been delivered to you.
        </p>

        <p className={styles.text}>
          When you make the payment for the subscription services, you
          acknowledge and agree that all purchases are non-refundable or
          exchangeable.
        </p>

        <div className={styles.divider}></div>

        <h2 className={styles.title}>5. Refunds</h2>
        <ol className={styles.list}>
          <li className={styles.text}>
            Fees for Services are made on a subscription or one-time purchase
            basis. We provide refunds at our own discretion and subject to laws
            and our terms and conditions, other supplemental terms, policies or
            documents that may be posted on the Company&apos;s website and related
            subscription services from time to time.
          </li>
          <li className={styles.text}>
            Since the Service is of a digital nature, we cannot accept any request
            for refunds unless we find the request acceptable.
          </li>
          <li className={styles.text}>
            Therefore your right of withdrawal is lost at this point as the
            Service will be deemed consumed in full. Notwithstanding anything to
            the contrary in the foregoing, the Company will provide refunds and/or
            subscription cancellations in cases and to the extent required by
            mandatory provisions of the applicable law.
          </li>
          <li className={styles.text}>
            Please note that after your subscription period expires, we will not
            be able to refund you.
          </li>
          <li className={styles.text}>
            <strong>For the subscribers residing in the EU or European Economic Area:</strong>{" "}
            If you are an EU resident, you are entitled to a full refund without
            stating any reason within fourteen (14) days after the subscription
            begins for the purchase of digital content. Please note that this
            14-day period commences when the subscription starts. The withdrawal
            right does not apply if the performance of the Agreement has begun
            with your prior expressed consent and your acknowledgment that you
            thereby lose your right of withdrawal. YOU HEREBY EXPRESSLY CONSENT TO
            THE IMMEDIATE PERFORMANCE OF THE AGREEMENT AND ACKNOWLEDGE THAT YOU
            WILL LOSE YOUR RIGHT OF WITHDRAWAL FROM THE AGREEMENT ONCE OUR SERVERS
            VALIDATE YOUR PURCHASE AND THE APPLICABLE PURCHASE IS SUCCESSFULLY
            DELIVERED TO YOU. Therefore, you will not be eligible for a refund
            unless the digital content is defective.
          </li>
          <li className={styles.text}>
            <strong>For the subscribers residing in other States:</strong> all charges
            for purchases are non-refundable and/or non-exchangeable, and there
            are no refunds or credits for partially used periods unless otherwise
            stated in section 5.7. as required by applicable law for refunds.
          </li>
          <li className={styles.text}>
            The user is eligible to receive a full refund if all the following
            criteria are met:
            <ul className={styles.sublist}>
              <li>the user contacts us within 31 days after the initial purchase,</li>
              <li>
                the user has followed the recommendations from the provided plan at
                least 28 consecutive days within the first 31 days after the
                purchase, and
              </li>
              <li>
                the user can demonstrate that he/she conscientiously has followed
                the plan (ex.: provide photos and/or video of completion of
                recommendations, tasks, etc.).
              </li>
            </ul>
          </li>
          <li className={styles.text}>
            These refund conditions apply only to services that have been
            subscribed to for at least one month. To request a refund, please,
            contact us via support@skillescape.co. We will review each case and
            notify the user by email whether the application is approved and how
            the refund will be made.
          </li>
          <li className={styles.text}>
            Please note that only fulfillment of all the above criteria stated in
            section 5.7 allow the user to receive a refund under this provision.
            For the sake of clarity, the Money-back guarantee does not apply to
            any other instances, such as the following cases:
            <ul className={styles.sublist}>
              <li>
                Personal reasons (you don&apos;t like the product, it did not meet your
                expectations etc.);
              </li>
              <li>
                Financial reasons (you did not expect that you will be charged,
                that the introductory offer will be converted into subscription,
                that the subscription will automatically renew, or that the
                services are paid etc.).
              </li>
            </ul>
          </li>
          <li className={styles.text}>
            Refunds will be made onto the original mode of payment and will be
            processed within 10 to 45 days depending on the issuing bank of the
            credit card.
          </li>
        </ol>

        <div className={styles.divider}></div>

        <h2 className={styles.title}>6. Changes</h2>
        <p className={styles.text}>
          The Company reserves the right, in its sole discretion, to modify,
          alter or otherwise update this Subscription term or to change, delete
          or otherwise update any features of the Service, the amount of Digital
          Content as well as set any price changes that will be effective from
          the start of the next subscription period with or without clear notice
          (except where such information is mandatory under applicable law). We
          will give you reasonable notice of any such pricing changes by posting
          the new prices on or through the website and/or by sending you an
          e-mail notification, or in other prominent ways. If you do not wish to
          pay the new price, you can cancel the applicable subscription prior to
          the change going into effect.
        </p>

        <p className={styles.text}>
          We may provide you with notice about some critical changes, for example
          by email or by posting notifications on the Service, but are not
          obliged to do so in every case. Any other changes will be notified to
          you only by updating the &quot;Last updated&quot; date of these Subscription
          terms and other supplemental terms, policies or documents that may be
          posted on the Company's website and you waive any right to receive
          specific notice of each such change. If you don't agree to the changes,
          you should stop using the Service. Use of the Service after any changes
          to these Subscription terms and other supplemental terms, policies or
          documents are made means that you accept such changes.
        </p>

        <div className={styles.divider}></div>

        <h2 className={styles.title}>7. Requirements</h2>
        <ol className={styles.list}>
          <li className={styles.text}>
            To enter into a legally binding agreement with us, the user must be a
            physical entity with deed capacity and 18 years of age or older.
          </li>
        </ol>

        <div className={styles.divider}></div>

        <h2 className={styles.title}>8. Acceptance</h2>
        <ol className={styles.list}>
          <li className={styles.text}>
            By continuing to use this website, the user agrees to its Subscription
            terms and other supplemental terms, policies or documents, that may be
            posted on the Company's website and related subscription services.
          </li>
          <li className={styles.text}>
            Accepting these Subscription terms and other supplemental terms,
            policies or documents, the user agrees, acknowledges familiarization
            and understanding of its provisions, and refuses to demand a refund in
            cases not described in section 5.7.
          </li>
        </ol>

        <div className={styles.divider}></div>

        <h2 className={styles.title}>9. Contacts</h2>
        <ol className={styles.list}>
          <li className={styles.text}>
            To find more information about our Service and its features or if you
            need assistance with your Account, please visit our FAQ Section, which
            is accessible through the Company's website.
          </li>
          <li className={styles.text}>
            Complaints and requests shall be directed to the Support Service at
            support@skillescape.co.
          </li>
        </ol>

        <div className={styles.divider}></div>

        <h2 className={styles.title}>Contact us</h2>
        <p className={styles.text}>
          71–75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom
        </p>
        <p className={styles.text}>email: support@skillescape.co</p>
        <p className={styles.text}>Date of Last Revision: January, 2026</p>
      </div>
    </div>
  );
}
