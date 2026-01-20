// app/privacy/page.tsx
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | Pattern Growth",
  description:
    "Learn how Pattern Growth collects, uses, and protects your personal information. Privacy policy for growth strategy consulting services and website visitors.",
  alternates: { canonical: "https://www.patterngrowth.com/privacy" },
  openGraph: {
    type: "website",
    url: "https://www.patterngrowth.com/privacy",
    title: "Privacy Policy | Pattern Growth",
    description:
      "Learn how Pattern Growth collects, uses, and protects your personal information. Our privacy policy explains data practices for our growth strategy consulting services and website visitors.",
    siteName: "Pattern Growth",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Pattern Growth",
    description:
      "Learn how Pattern Growth collects, uses, and protects your personal information. Our privacy policy explains data practices for our growth strategy consulting services and website visitors.",
  },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <div className="prose prose-neutral dark:prose-invert prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-xl prose-p:text-muted-foreground prose-li:text-muted-foreground">
        <h1>Privacy Policy</h1>
        <p className="text-sm text-muted-foreground">Last updated: January 20, 2026</p>
        
        <p>
          Pattern Growth ("we," "us," or "our") respects your privacy. This Privacy Policy describes how we collect, use, and share information when you visit our website at patterngrowth.com (the "Site") or engage with our services.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We may collect information you provide directly to us, such as when you schedule a consultation, send us a message, or otherwise communicate with us. This may include your name, email address, company name, and any other information you choose to provide.
        </p>
        <p>
          We also automatically collect certain information when you visit our Site, including your IP address, browser type, operating system, referring URLs, and information about how you interact with our Site.
        </p>

        <h2>Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar tracking technologies to collect information about your browsing activities. These technologies help us analyze Site traffic, understand user behavior, and improve our services.
        </p>
        <p>
          We use third-party analytics and advertising services, including Google Analytics and Google Ads, which may use cookies to collect information about your visits to our Site and other websites. This information is used to measure the effectiveness of our marketing efforts and provide relevant advertisements.
        </p>
        <p>
          You can manage your cookie preferences through your browser settings. You may also opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Analytics Opt-out Browser Add-on</a>.
        </p>

        <h2>How We Use Your Information</h2>
        <p>We may use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Respond to your inquiries and communicate with you</li>
          <li>Analyze usage patterns and trends</li>
          <li>Measure the effectiveness of our marketing</li>
          <li>Protect against fraud and unauthorized activity</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>Information Sharing</h2>
        <p>
          We do not sell your personal information. We may share information with third-party service providers who assist us in operating our Site and conducting our business, subject to confidentiality obligations. We may also share information as required by law or to protect our rights.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          Our Site may contain links to third-party websites or integrate with third-party services (such as scheduling tools). These third parties have their own privacy policies, and we encourage you to review them. We are not responsible for the privacy practices of third parties.
        </p>

        <h2>Data Retention</h2>
        <p>
          We retain information for as long as necessary to fulfill the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by law.
        </p>

        <h2>Your Rights</h2>
        <p>
          Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. To exercise these rights, please contact us using the information below.
        </p>

        <h2>Security</h2>
        <p>
          We implement reasonable security measures to protect your information. However, no method of transmission over the Internet or electronic storage is completely secure.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on this page with a new "Last updated" date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or our privacy practices, please contact us at:
        </p>
        <p>
          <strong>Pattern Growth</strong><br />
          Email: <a href="mailto:hello@patterngrowth.com" className="text-primary hover:underline">hello@patterngrowth.com</a>
        </p>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            <Link href="/" className="text-primary hover:underline">← Back to Home</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
