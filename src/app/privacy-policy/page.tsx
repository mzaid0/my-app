import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionParagraph from "@/components/SectionParagraph";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />

      <div className="bg-black">
        <main className="bg-[#e9ffff] py-[120px] rounded-b-[200px]">
          <div className="max-w-[700px] mx-auto">
            <h1 className="text-[46px] font-[500] text-center mb-6">
              Privacy Policy
            </h1>
            <div className="space-y-8">
              <SectionParagraph content="At Invoic'App, the privacy and security of your personal data are our top priorities. This privacy policy explains what information we collect, how we use it, and the measures we take to protect it." />
              <SectionParagraph
                title="1. Data Collection"
                content={
                  <>
                    We collect the following information to ensure an optimal
                    experience with our application:
                    <br />
                    - Company logo.
                    <br />
                    - User&apos;s first name, last name, email address, and
                    profile picture.
                    <br />
                    - Google login token for integration with Google Drive.
                    <br />
                    - Store information: name, contact email, address, URL,
                    phone number, and VAT number.
                    <br />
                    - Emails sent and invoices created through our platform.
                    <br />- Email credentials used for sending invoices.
                  </>
                }
              />
              <SectionParagraph
                title="2. Data Usage"
                content={
                  <>
                    The collected data is used to:
                    <br />- Provide and improve our services.
                    <br />- Offer support when needed.
                    <br />- Keep you informed about updates, special offers, and
                    important application-related information.
                    <br />- Conduct anonymous analyses to better understand
                    application usage and optimize our features.
                  </>
                }
              />
              <SectionParagraph
                title="3. Data Sharing"
                content="Your personal data is never shared with third parties. It is exclusively used for the services provided by Invoic'App."
              />
              <SectionParagraph
                title="4. Data Security"
                content={
                  <>
                    We have implemented robust measures to ensure the security
                    of your information:
                    <br />- <span className="font-bold">
                      Server Security:
                    </span>{" "}
                    Your data is stored on secure servers that comply with the
                    industry&apos;s highest standards.
                    <br />-{" "}
                    <span className="font-bold">
                      Encryption of Sensitive Data:
                    </span>{" "}
                    We use encryption technologies to protect your information
                    during transmission.
                    <br />- <span className="font-bold">
                      Access Control:
                    </span>{" "}
                    Access to your data is strictly limited to authorized
                    employees and only when necessary to provide our services.
                    <br />- <span className="font-bold">
                      Regular Audits:
                    </span>{" "}
                    We conduct frequent security audits to identify and address
                    potential vulnerabilities.
                  </>
                }
              />
              <SectionParagraph
                title="5. User Rights"
                content={
                  <>
                    In accordance with the General Data Protection Regulation
                    (GDPR) and Article 13 of the French Data Protection Act
                    (amended in 2018), you have the following rights regarding
                    your personal data:
                    <br />- <span className="font-bold">
                      Right of Access:
                    </span>{" "}
                    You can request a copy of the personal data we hold about
                    you.
                    <br />-{" "}
                    <span className="font-bold">
                      Right of Rectification:
                    </span>{" "}
                    You can request correction of inaccurate or incomplete data.
                    <br />- <span className="font-bold">
                      Right to Erasure:
                    </span>{" "}
                    You can request the deletion of your personal data under
                    certain conditions.
                    <br />-{" "}
                    <span className="font-bold">Right to Restriction:</span> You
                    can request the temporary suspension of data usage in
                    specific situations. To exercise these rights, you can
                    contact us using the details provided below.
                  </>
                }
              />
              <SectionParagraph
                title="6. Contact"
                content={
                  <>
                    For any questions or to exercise your rights regarding your
                    personal data, you can reach us at contact@invoic-vsc.com.
                  </>
                }
              />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
