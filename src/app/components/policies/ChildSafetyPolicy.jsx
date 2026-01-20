export default function ChildSafetyPolicy() {
    return (
        <section id="childsafety" className=" w-full bg-white">
            <div className="max-w-[900px] mx-auto px-6 py-20">

                {/* HEADER */}
                <div className="mb-10">
                    <p className="text-sm text-black/60 mb-2">
                        Policies • Trust • Safety
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Child Safety and CSAE Policy
                    </h1>

                    <p className="text-sm text-black/60">
                        Effective Date: <span className="font-medium">20th August 2025</span>
                    </p>
                </div>

                {/* INTRO */}
                <div className="space-y-6 text-black/80 leading-relaxed">
                    <p>
                        <strong>Wibeit</strong> is committed to protecting minors and ensuring
                        safe, respectful communication for all users.
                    </p>

                    <p>
                        This page contains Wibeit’s published standards prohibiting
                        <strong> Child Sexual Abuse and Exploitation (CSAE)</strong>.
                    </p>

                    <p>
                        Wibeit maintains a <strong>zero-tolerance policy</strong> against any
                        form of CSAE. This policy outlines the measures taken to prevent,
                        detect, and respond to violations, in compliance with Google Play’s
                        Child Safety Standards and international child protection laws.
                    </p>
                </div>

                <Section title="1. Age Restrictions and Eligibility">
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Children under 13 years of age are not permitted to use Wibeit.</li>
                        <li>Users aged 13–18 may use Wibeit only with parental or legal guardian consent.</li>
                        <li>Wibeit may take reasonable steps to verify age or consent when required by law.</li>
                        <li>Violating accounts may be restricted, suspended, or terminated.</li>
                    </ul>
                </Section>

                <Section title="2. Prohibited Activities">
                    <p className="mb-3">
                        The following activities are strictly prohibited on Wibeit:
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Sharing, promoting, or distributing content that depicts or sexualizes minors.</li>
                        <li>Soliciting or requesting sexual material involving minors.</li>
                        <li>Grooming or attempting to exploit minors in any form.</li>
                        <li>Distributing links, files, or material related to CSAE.</li>
                        <li>Impersonating minors or facilitating harmful activities involving minors.</li>
                    </ul>

                    <p className="mt-4 font-medium">
                        Any user engaging in these actions will face immediate account
                        termination and may be reported to law enforcement.
                    </p>
                </Section>

                <Section title="3. Enforcement and Reporting">
                    <p>
                        Wibeit enforces strict action against CSAE-related activity. Violating
                        content or accounts may be removed without prior notice.
                    </p>

                    <p className="mt-3">
                        We fully cooperate with law enforcement agencies and child protection
                        organizations where legally required.
                    </p>

                    <p className="mt-4">
                        If you encounter suspicious or harmful content, report it immediately:
                    </p>

                    <ul className="mt-3 space-y-2">
                        <li>
                            Email: <a href="mailto:privacy@wibeit.co" className="text-[#FE5800]">privacy@wibeit.co</a>
                        </li>
                        <li>
                            Support: <a href="mailto:support@wibeit.co" className="text-[#FE5800]">support@wibeit.co</a>
                        </li>
                    </ul>

                    <p className="mt-4">
                        Please include screenshots, chat IDs, or timestamps where possible.
                    </p>

                    <p className="mt-3">
                        You may also report content directly in-app using the <strong>Report</strong> option.
                    </p>
                </Section>

                <Section title="4. Moderation and Safety Measures">
                    <ul className="list-disc pl-6 space-y-2">
                        <li>In-app reporting and blocking tools</li>
                        <li>Manual and automated moderation systems</li>
                        <li>Immediate removal of harmful content where possible</li>
                        <li>Secure data preservation for lawful investigations</li>
                        <li>Regular audits aligned with global child safety standards</li>
                    </ul>
                </Section>

                <Section title="5. Commitment to Lawful Cooperation">
                    <p>
                        Wibeit complies with all applicable child safety regulations,
                        including <strong>COPPA</strong>, <strong>GDPR-K</strong>, and other
                        international frameworks.
                    </p>

                    <p className="mt-3">
                        We cooperate with law enforcement and safety organizations while
                        respecting user privacy and data protection principles.
                    </p>
                </Section>

                <Section title="6. Parental Guidance">
                    <p className="mb-3">
                        Parents and guardians are encouraged to:
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Supervise children’s online activity</li>
                        <li>Promote safe communication practices</li>
                        <li>Report concerns through Wibeit’s official channels</li>
                    </ul>

                    <p className="mt-4">
                        Wibeit promotes digital wellbeing and safe online experiences for families.
                    </p>
                </Section>

                <Section title="7. Policy Updates">
                    <p>
                        This policy may be updated to reflect changes in law or safety practices.
                        Continued use of Wibeit constitutes acceptance of the updated policy.
                    </p>
                </Section>

                <Section title="8. Contact Information">
                    <p>
                        <strong>Wibeit Technologies</strong><br />
                        Website: <a href="https://www.wibeit.co" target="_blank" className="text-[#FE5800]">www.wibeit.co</a><br />
                        Privacy: <a href="mailto:privacy@wibeit.co" className="text-[#FE5800]">privacy@wibeit.co</a><br />
                        Support: <a href="mailto:support@wibeit.co" className="text-[#FE5800]">support@wibeit.co</a>
                    </p>

                    <p className="mt-4 text-sm text-black/60">
                        Last Updated: 7th October 2025
                    </p>
                </Section>

                <p className="mt-16 text-center text-sm text-black/50">
                    © 2025 Wibeit Technologies. All Rights Reserved.
                </p>

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
