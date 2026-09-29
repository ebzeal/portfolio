import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Funfina collects, uses, and shares your personal data.",
};

/** Static, crawlable privacy policy. Required by app store listings and regulation. */
export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-display-md font-bold text-ink">Privacy Policy</h1>
      <p className="mt-2 text-sm text-ink-40">Last updated: {LAST_UPDATED}</p>

      <div className="mt-10 space-y-10 text-[15px] leading-relaxed text-ink-80">
        <Section title="1. Who we are">
          <p>
            Funfina (&ldquo;Funfina&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the Funfina mobile
            application and website (together, the &ldquo;Services&rdquo;). We
            provide a platform for comparing foreign-exchange rates, sending
            international transfers, peer-to-peer escrow payments, and rate
            locking. This policy explains what personal data we collect, why we
            collect it, and the choices you have.
          </p>
          <p>Registered address: 90 Taskar Drive, Sault Ste. Marie, Ontario, P6A 6M8, Canada.</p>
        </Section>

        <Section title="2. Data we collect">
          <p>We collect the following categories of personal data:</p>
          <ul>
            <li>
              <strong>Account data</strong> — name, email address, phone number,
              and login credentials.
            </li>
            <li>
              <strong>Identity &amp; KYC data</strong> — date of birth, national
              identification or passport details, proof of address, and
              self-portrait/liveness checks where required for regulatory
              verification (anti-money-laundering and counter-terrorism-financing
              obligations).
            </li>
            <li>
              <strong>Transaction data</strong> — transfer amounts, currencies,
              recipient details (name, account number, payment method), rate
              quotes, lock and escrow activity, and wallet balances.
            </li>
            <li>
              <strong>Device &amp; usage data</strong> — device model and
              operating system, app version, IP address, approximate location,
              crash reports, and interaction analytics.
            </li>
            <li>
              <strong>Communications</strong> — support messages and survey
              responses.
            </li>
          </ul>
        </Section>

        <Section title="3. How we use your data">
          <ul>
            <li>To provide and operate the Services, including processing transfers and payments.</li>
            <li>To verify your identity and meet legal and regulatory obligations (KYC/AML).</li>
            <li>To prevent fraud, money laundering, and other misuse.</li>
            <li>To improve and debug the Services (analytics and crash reporting).</li>
            <li>To send you service notifications and, with your consent, marketing.</li>
          </ul>
        </Section>

        <Section title="4. Legal bases">
          <p>
            We process personal data where it is necessary to perform our
            contract with you, to comply with a legal obligation, for our
            legitimate interests (such as fraud prevention and service
            improvement), or where you have given consent.
          </p>
        </Section>

        <Section title="5. Who we share data with">
          <ul>
            <li>
              <strong>Payment and remittance partners</strong> — banks, payout
              networks, and licensed money-transmitter partners that execute
              your transfers.
            </li>
            <li>
              <strong>Service providers</strong> — identity/authentication
              (Auth0), error monitoring (Sentry), product analytics (PostHog),
              and infrastructure providers.
            </li>
            <li>
              <strong>Regulators and authorities</strong> — where required by
              law, regulation, or legal process.
            </li>
          </ul>
          <p>
            We do not sell your personal data. We share it only as described
            above or with your direction.
          </p>
        </Section>

        <Section title="6. International transfers">
          <p>
            Your data may be transferred to and processed in countries other than
            the one in which you live. Where applicable, we rely on adequacy
            decisions or standard contractual clauses to safeguard such
            transfers.
          </p>
        </Section>

        <Section title="7. Data retention">
          <p>
            We retain personal data for as long as needed to provide the
            Services and to satisfy legal, accounting, and regulatory
            requirements (which for financial records is typically several years
            after your account closes), after which it is deleted or anonymized.
          </p>
        </Section>

        <Section title="8. Security">
          <p>
            We protect your data with encryption in transit and at rest, and
            store authentication tokens and biometric keys only in your device&apos;s
            secure enclave. Biometric data never leaves your device. No security
            measure is perfect, and we cannot guarantee absolute security.
          </p>
        </Section>

        <Section title="9. Your rights">
          <p>
            Depending on your jurisdiction, you may have the right to access,
            correct, delete, or port your personal data, and to object to or
            restrict certain processing. To exercise these rights, contact us at
            the address below.
          </p>
        </Section>

        <Section title="10. Children">
          <p>
            The Services are not directed at children under 18, and we do not
            knowingly collect their data.
          </p>
        </Section>

        <Section title="11. Changes to this policy">
          <p>
            We may update this policy from time to time. We will notify you of
            material changes through the app or by other means and update the
            date above.
          </p>
        </Section>

        <Section title="12. Contact us">
          <p>
            Questions about this policy or your data can be sent to{" "}
            support@funfina.com.
          </p>
        </Section>
      </div>
    </div>
  );
}

const LAST_UPDATED = "[DATE]";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-base font-semibold text-ink">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
