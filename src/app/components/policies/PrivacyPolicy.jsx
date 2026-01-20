export default function PrivacyPolicy() {
    return (
        <section id="Privacypolicy" className="w-full bg-white">
            <div className="max-w-[900px] mx-auto px-6 py-20">

                {/* HEADER */}
                <div className="mb-10">
                    <p className="text-sm text-black/60 mb-2">
                        Policies • Trust • Security
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Privacy Policy
                    </h1>

                    <p className="text-sm text-black/60">
                        Effective Date: <span className="font-medium">October 24, 2025</span>
                    </p>
                </div>

                {/* INTRO */}
                <div className="space-y-6 text-black/80 leading-relaxed">
                    <p>
                        At <strong>Wibeit</strong>, protecting your privacy is our top priority.
                        We handle your personal information responsibly, securely, and
                        transparently. This Privacy Policy explains what information we
                        collect, how we use it, who we share it with, and what rights you have.
                    </p>

                    <p>
                        By using the Wibeit app, you agree to this Privacy Policy. Please review
                        it carefully.
                    </p>
                </div>

                {/* SECTION */}
                <Section title="1. Eligibility" className="text-black">
                    <ul className="list-disc pl-6 space-y-2">
                        <li>You must be at least 13 years old (or the minimum age required by law in your country).</li>
                        <li>Users under 18 must have parent or legal guardian consent.</li>
                    </ul>
                </Section>

                <Section title="2. Information We Collect">
                    <SubTitle>2.1 Personal Information</SubTitle>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Account Details:</strong> Phone number, email address, or username for account creation and authentication.</li>
                        <li><strong>Profile Information:</strong> Optional display name, profile picture, and status visible to other users.</li>
                    </ul>

                    <SubTitle>2.2 Communication Data</SubTitle>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Messages & Media:</strong> Wibeit does not read or permanently store message content. Temporary metadata may be retained for delivery.</li>
                        <li><strong>Call Data:</strong> Call time and duration only. Wibeit does not record calls.</li>
                    </ul>

                    <SubTitle>2.3 Device & Usage Information</SubTitle>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Device Info:</strong> Model, OS version, and identifiers.</li>
                        <li><strong>Identifiers:</strong> Android ID, Advertising ID, or App Installation ID.</li>
                        <li><strong>Usage Data:</strong> Crash logs and performance analytics.</li>
                    </ul>
                </Section>

                <Section title="3. How We Use Your Information">
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Service delivery (chat, calls, account setup)</li>
                        <li>Authentication & security</li>
                        <li>Performance improvements</li>
                        <li>Customer support</li>
                        <li>Notifications & updates</li>
                    </ul>
                </Section>

                <Section title="4. Third-Party SDKs and Services">
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Firebase (Google LLC)</strong> – Authentication, messaging, crash analytics
                            <br />
                            <a href="https://firebase.google.com/support/privacy" target="_blank" className="text-[#FE5800]">
                                https://firebase.google.com/support/privacy
                            </a>
                        </li>

                        <li>
                            <strong>Appsflyer</strong> – Install attribution & analytics
                            <br />
                            <a href="https://www.appsflyer.com/legal/services-privacy-policy/" target="_blank" className="text-[#FE5800]">
                                https://www.appsflyer.com/legal/services-privacy-policy/
                            </a>
                        </li>

                        <li>
                            <strong>Stream.io</strong> – Chat & call infrastructure
                            <br />
                            <a href="https://getstream.io/legal/privacy/" target="_blank" className="text-[#FE5800]">
                                https://getstream.io/legal/privacy/
                            </a>
                        </li>
                    </ul>
                </Section>

                <Section title="5. Data Sharing">
                    <p>
                        Wibeit does not sell personal information. Limited technical data may
                        be shared with trusted service providers for analytics, security, and
                        performance.
                    </p>
                </Section>

                <Section title="6. Safety & Security">
                    <p>
                        We use strong authentication and network safeguards. Illegal or abusive
                        activity is prohibited, and we cooperate with authorities when legally required.
                    </p>
                </Section>

                <Section title="7. Data Retention">
                    <p>
                        Data is retained only as long as necessary and securely deleted or anonymized when no longer needed.
                    </p>
                </Section>

                <Section title="8. Your Rights">
                    <p>
                        You may access, correct, or delete your data depending on your country’s laws.
                    </p>

                    <p className="mt-3">
                        <strong>Account Deletion:</strong><br />
                        Settings → Account → Delete Account
                        <br />
                        or email <a href="mailto:support@wibeit.co" className="text-[#FE5800]">support@wibeit.co</a>
                    </p>
                </Section>

                <Section title="9. Permissions Used">
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Camera</li>
                        <li>Microphone</li>
                        <li>Storage</li>
                        <li>Notifications</li>
                        <li>Advertising ID</li>
                    </ul>
                </Section>

                <Section title="10. Limitation of Liability">
                    <p>
                        Wibeit is provided “as is.” We are not responsible for service interruptions or third-party failures.
                    </p>
                </Section>

                <Section title="11. Changes & Updates">
                    <p>
                        We may update this policy. Continued use means acceptance of the updated version.
                    </p>
                </Section>

                <Section title="12. Contact Us">
                    <p>
                        Privacy: <a href="mailto:privacy@wibeit.co" className="text-[#FE5800]">privacy@wibeit.co</a><br />
                        Support: <a href="mailto:support@wibeit.co" className="text-[#FE5800]">support@wibeit.co</a><br />
                        Website: <a href="https://www.wibeit.co" target="_blank" className="text-[#FE5800]">www.wibeit.co</a>
                    </p>
                </Section>

            </div>
        </section>
    );
}

/* REUSABLE COMPONENTS */
function Section({ title, children }) {
    return (
        <div className="mt-12">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <div className="text-black/80 leading-relaxed">{children}</div>
        </div>
    );
}

function SubTitle({ children }) {
    return <h3 className="font-semibold mt-6 mb-2">{children}</h3>;
}