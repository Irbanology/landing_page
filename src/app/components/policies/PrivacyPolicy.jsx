export default function PrivacyPolicy() {
    return (
        <main id="privacy-policy" className="w-full bg-white text-black">
            <div className="max-w-[900px] mx-auto px-6 py-20 leading-relaxed">

                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                    Wibeit Privacy Policy
                </h1>

                <p className="mb-6">
                    <strong>Effective Date:</strong> October 24, 2025<br />
                    <strong>Last Updated:</strong> October 24, 2025
                </p>

                <p className="mb-6">
                    Wibeit (“Wibeit,” “we,” “our,” or “us”) is committed to protecting your privacy and handling your information responsibly.
                    This Privacy Policy explains how we collect, use, process, store, and share information when you use the Wibeit mobile
                    application and related services (collectively, the “Services”).
                </p>

                <p className="mb-10">
                    By accessing or using Wibeit, you agree to the practices described in this Privacy Policy.
                </p>

                <Section title="1. Eligibility">
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Wibeit is not intended for children under the age of 13.</li>
                        <li>Users must be at least 13 years old (or the minimum legal age in their country).</li>
                        <li>If you are under 18, you must have permission from a parent or legal guardian.</li>
                        <li>We do not knowingly collect personal data from children under 13.</li>
                    </ul>
                </Section>

                <Section title="2. Information We Collect">
                    <h4 className="font-semibold mt-4">2.1 Information You Provide</h4>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Account Information:</strong> Phone number, email address, or username used for account creation and authentication.</li>
                        <li><strong>Profile Information:</strong> Display name, profile photo, and status (optional and visible to other users).</li>
                        <li><strong>Support Communications:</strong> Information you provide when contacting support.</li>
                    </ul>

                    <h4 className="font-semibold mt-6">2.2 Communications Data</h4>
                    <p className="mt-2">
                        <strong>Messages and Media:</strong><br />
                        Wibeit does not manually read private messages. Message content and media are processed and stored securely by our
                        service providers (such as Stream.io) solely to enable message delivery, synchronization, and real-time communication.
                    </p>

                    <p className="mt-4">
                        <strong>Voice Calls:</strong><br />
                        Wibeit does not record voice calls. Limited call-related metadata such as call duration, timestamps, and connection
                        quality may be processed temporarily to ensure call functionality and performance.
                    </p>

                    <h4 className="font-semibold mt-6">2.3 Device and Usage Information</h4>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Device Information:</strong> Device model, operating system version, app version, and crash diagnostics.</li>
                        <li><strong>Identifiers:</strong> Advertising ID, App Instance ID, or similar identifiers for analytics, attribution, fraud prevention, and security purposes.</li>
                        <li><strong>Usage Data:</strong> Anonymous logs related to app performance, feature usage, and stability.</li>
                    </ul>
                </Section>

                <Section title="3. How We Use Your Information">
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Provide and operate chat, media sharing, and voice calling features</li>
                        <li>Authenticate users and manage accounts</li>
                        <li>Maintain security and prevent abuse or fraud</li>
                        <li>Improve performance, reliability, and user experience</li>
                        <li>Provide customer support and respond to inquiries</li>
                        <li>Send essential service-related notifications and updates</li>
                    </ul>
                </Section>

                <Section title="4. Third-Party Services and SDKs">
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Firebase (Google LLC): Authentication, push notifications, and crash reporting</li>
                        <li>AppsFlyer: App install attribution, analytics, and campaign measurement</li>
                        <li>Stream.io: Real-time chat and voice communication infrastructure</li>
                    </ul>
                    <p className="mt-4">
                        These providers process data in accordance with their own privacy policies and applicable data protection laws.
                    </p>
                </Section>

                <Section title="5. Data Sharing">
                    <p>We do not sell personal information.</p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>Service operation and delivery</li>
                        <li>Analytics and performance monitoring</li>
                        <li>Security, fraud prevention, and legal compliance</li>
                        <li>All third parties are contractually obligated to protect user data.</li>
                    </ul>
                </Section>

                <Section title="6. Data Retention">
                    <ul className="list-disc pl-6 space-y-2">
                        <li>We retain personal data only for as long as necessary to provide our Services and comply with legal obligations.</li>
                        <li>When data is no longer required, it is securely deleted or anonymized.</li>
                    </ul>
                </Section>

                <Section title="7. Security">
                    <ul className="list-disc pl-6 space-y-2">
                        <li>We use industry-standard technical and organizational safeguards to protect your data.</li>
                        <li>However, no system is completely secure, and we cannot guarantee absolute security.</li>
                    </ul>
                </Section>

                <Section title="8. Your Rights">
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Access your personal data</li>
                        <li>Correct inaccurate information</li>
                        <li>Request deletion of your account and data</li>
                        <li>Object to or restrict certain processing activities</li>
                    </ul>

                    <p className="mt-4 font-medium">Account and Data Deletion</p>
                    <p className="mt-2">Settings → Account → Delete Account</p>
                    <p className="mt-2">
                        You may also request deletion by contacting:<br />
                        support@wibeit.co
                    </p>
                </Section>

                <Section title="9. Permissions Used">
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Camera: To capture and share photos or set a profile picture</li>
                        <li>Microphone: To enable real-time voice calls (audio is not recorded)</li>
                        <li>Storage / Media Access: To send and receive images or files</li>
                        <li>Notifications: To deliver message and call alerts</li>
                        <li>Advertising ID: For analytics and attribution via AppsFlyer</li>
                    </ul>
                </Section>

                <Section title="10. International Data Transfers">
                    <p>
                        Your information may be processed and stored on servers located outside your country.
                        We ensure appropriate safeguards are in place in accordance with applicable data protection laws.
                    </p>
                </Section>

                <Section title="11. Limitation of Liability">
                    <p>
                        Wibeit is provided on an “as is” and “as available” basis.
                        We do not guarantee uninterrupted or error-free service and are not responsible for issues caused by third-party services.
                    </p>
                </Section>

                <Section title="12. Changes to This Policy">
                    <p>
                        We may update this Privacy Policy from time to time.
                        Continued use of Wibeit constitutes acceptance of the updated policy.
                    </p>
                </Section>

                <Section title="13. Contact Us">
                    <p>Privacy: privacy@wibeit.co</p>
                    <p>Support: support@wibeit.co</p>
                    <p>Website: https://www.wibeit.co</p>
                </Section>

                <Section title="14. GDPR – European Economic Area (EEA), United Kingdom & Switzerland">
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Right of access</li>
                        <li>Right to rectification</li>
                        <li>Right to erasure</li>
                        <li>Right to restrict processing</li>
                        <li>Right to data portability</li>
                        <li>Right to object</li>
                    </ul>
                </Section>

                <Section title="15. California Privacy Rights (CCPA / CPRA)">
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Right to know</li>
                        <li>Right to delete</li>
                        <li>Right to correct</li>
                        <li>Right to opt out</li>
                    </ul>
                </Section>

                <Section title="16. Do Not Track Signals">
                    <p>
                        Some devices and browsers offer “Do Not Track” signals.
                        Currently, Wibeit does not respond to such signals.
                    </p>
                </Section>
                <p className="mt-16 text-center text-sm text-black/50">
                    © 2025 Wibeit Technologies. All Rights Reserved.
                </p>
            </div>
        </main>
    );
}

function Section({ title, children }) {
    return (
        <section className="mt-10">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            {children}
        </section>
    );
}
