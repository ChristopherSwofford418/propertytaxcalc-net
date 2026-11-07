import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | propertytaxcalc.net",
  description: "Get in touch with the propertytaxcalc.net team for support, feedback, or inquiries.",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Contact Us</h1>
      <div className="prose prose-blue max-w-none text-gray-600">
        <p className="text-lg leading-relaxed mb-6">
          We value your feedback and are here to help. Whether you have a question about one of our calculators, spotted an issue, or want to suggest a new feature, we want to hear from you.
        </p>
        <div className="bg-gray-50 rounded-lg p-8 mt-8 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
          <p className="mb-2"><strong>Email:</strong> <a href="mailto:info@clearpasstechnologies.com">info@clearpasstechnologies.com</a></p>
        </div>
      </div>
    </div>
  );
}
