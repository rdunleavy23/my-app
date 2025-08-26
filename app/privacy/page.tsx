import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Pattern Growth",
  description: "How Pattern Growth collects, uses, and protects your information.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy | Pattern Growth",
    description: "How Pattern Growth collects, uses, and protects your information.",
    type: "article",
    url: "https://patterngrowth.com/privacy"
  }
};

export default function PrivacyPage() {
  const lastUpdated = "2025-08-26";
  return (
    <main className="mx-auto max-w-3xl px-6 py-14">
      <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>

      <section className="prose prose-zinc dark:prose-invert mt-8">
        <p>
          Pattern Growth (“we”, “us”, “our”) respects your privacy. This policy explains what we
          collect, how we use it, and the choices you have.
        </p>

        <h2>Information We Collect</h2>
        <ul>
          <li>Contact details you provide (e.g., name, email, company).</li>
          <li>Usage data such as pages visited and interactions on our site.</li>
          <li>Technical data from your browser or device (IP address, user agent, cookies).</li>
        </ul>

        <h2>How We Use Information</h2>
        <ul>
          <li>To respond to inquiries and provide requested services.</li>
          <li>To improve site performance, content, and user experience.</li>
          <li>To communicate updates, insights, or offerings you may find useful.</li>
        </ul>

        <h2>Cookies & Analytics</h2>
        <p>
          We may use cookies and analytics to understand site usage and improve our services. You
          can control cookies through your browser settings.
        </p>

        <h2>Sharing</h2>
        <p>
          We do not sell personal information. We may share data with trusted service providers who
          process it on our behalf, under appropriate safeguards, or when required by law.
        </p>

        <h2>Data Retention</h2>
        <p>
          We retain information only as long as necessary for the purposes described or as required
          by law.
        </p>

        <h2>Your Choices</h2>
        <ul>
          <li>Request access, correction, or deletion of your information, subject to applicable law.</li>
          <li>Opt out of non-essential communications at any time.</li>
        </ul>

        <h2>Security</h2>
        <p>
          We use reasonable administrative, technical, and physical safeguards to protect your
          information. No method is 100% secure.
        </p>

        <h2>International Users</h2>
        <p>
          Your information may be processed outside your country. We take steps to ensure appropriate
          protections are in place where required.
        </p>

        <h2>Contact</h2>
        <p>
          Questions or requests: privacy@patterngrowth.com
        </p>
      </section>
    </main>
  );
}
