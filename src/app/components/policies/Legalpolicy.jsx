export default function Legalpolicy() {
  return (
    <section id="legal" className="w-full bg-white">
      <div className="max-w-[900px] mx-auto px-6 py-20">

        {/* HEADER */}
        <div className="mb-10">
          <p className="text-sm text-black/60 mb-2">
            Policies • Trust • Security
          </p>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Legal
          </h1>

          <p className="text-sm text-black/60">
            Effective Date:{" "}
            <span className="font-medium">November 20, 2025</span>
          </p>
        </div>

        {/* CONTENT */}
        <div className="space-y-8 text-black/80 leading-relaxed">

          <Section title="Legal">
            <p>
              WIBEIT LLC is a limited liability company organized and existing
              under the laws of the Commonwealth of Kentucky, United States of
              America. WIBEIT LLC is the legal owner and operator of the WibeIT
              communication platform, including the WibeIT mobile applications,
              this website located at{" "}
              <a
                href="https://wibeit.co"
                target="_blank"
                className="text-[#FE5800]"
              >
                https://wibeit.co
              </a>
              , and all official WibeIT online channels and services made
              available to users.
            </p>
          </Section>
          <br />
          <Section className="mb-5" title="Company information">
            <ul className="list-disc pl-6 space-y-2 ">
              <li><strong>Legal name:</strong> WIBEIT LLC</li>
              <li>
                <strong>Registered office:</strong> 212 N 2nd St, Ste 100,
                Richmond, KY 40475, United States
              </li>
              <li>
                <strong>Jurisdiction of formation:</strong> Commonwealth of
                Kentucky, USA
              </li>
              <li>
                <strong>Entity type:</strong> Limited Liability Company (LLC)
              </li>
              <li>
                <strong>Tax identification:</strong> Employer Identification
                Number issued by the U.S. Internal Revenue Service (IRS).
              </li>
            </ul>
          </Section>
          <br />
          <Section title="Ownership of WibeIT products and services">
            <p>
              WIBEIT LLC owns and controls all rights, title, and interest in and
              to the WibeIT communication platform, including the WibeIT mobile
              applications, associated software, trademarks, logos, design
              assets, domain names, and all related content and services made
              available through the WibeIT ecosystem.
            </p>

            <p className="mt-4">
              All official announcements, updates, and public communications for
              WibeIT are published through channels operated by WIBEIT LLC,
              including this website and WibeIT-branded accounts on social media
              platforms and app stores where WIBEIT LLC is identified as the
              owner or publisher.
            </p>
          </Section>
          <br />
          <Section title="Official social media channels">
            <p className="mb-3">
              WIBEIT LLC currently maintains the following official social media
              accounts for the WibeIT platform:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>X: x.com/WibeIT</li>
              <li>Instagram: www.instagram.com/wibe.it/</li>
              <li>Facebook: Wibeit</li>
              <li>Telegram: t.me/wibeitapplication</li>
            </ul>

            <p className="mt-4">
              Any other accounts, pages, or groups using the WibeIT name or
              branding that are not listed here should be treated as unofficial
              and are not controlled by WIBEIT LLC.
            </p>
          </Section>
          <br />
          <Section title="Contact">
            <ul className="space-y-2">
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:support@wibeit.co"
                  className="text-[#FE5800]"
                >
                  support@wibeit.co
                </a>
              </li>
              <li>
                <strong>Mailing address:</strong> WIBEIT LLC, 212 N 2nd St, Ste
                100, Richmond, KY 40475, United States
              </li>
            </ul>
          </Section>
          <br />
          <Section title="Legal notices">
            <p>
              Use of the WibeIT application, this website, and any related online
              services is subject to the applicable Terms of Service, Privacy
              Policy, and other policies published by WIBEIT LLC on this site.
            </p>

            <p className="mt-4">
              By accessing or using WibeIT, users acknowledge that WIBEIT LLC is
              the provider of the service and the controller of related data
              processing activities, as described in those documents.
            </p>
          </Section>

        </div>

        {/* FOOTER */}
        <p className="mt-16 text-center text-sm text-black/50">
          © 2025 WibeIT LLC. All Rights Reserved.
        </p>

      </div>
    </section>
  );
}

/* REUSABLE SECTION COMPONENT */
function Section({ title, children }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-black">
        {title}
      </h2>
      <div>{children}</div>
    </div>
  );
}
