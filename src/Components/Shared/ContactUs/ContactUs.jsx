import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D] text-center mb-6">
          Contact Us
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Have questions or need assistance? Our team is here to help you every step of the way.
          Reach out for inquiries, partnership opportunities, or technical support.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-[#4FB3E8] mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-gray-600">
              <li>📍 <strong>Address:</strong> TradeLinker HQ, Dhaka, Bangladesh</li>
              <li>📞 <strong>Phone:</strong> +880-1234-567890</li>
              <li>📧 <strong>Email:</strong> support@tradelinker.com</li>
              <li>🌐 <strong>Website:</strong> www.tradelinker.com</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#4FB3E8] mt-6 mb-3">Working Hours</h3>
            <p className="text-gray-600">Sunday – Thursday: 9:00 AM – 6:00 PM</p>
            <p className="text-gray-600">Friday – Saturday: Closed</p>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-[#4FB3E8] mb-4">Send Us a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#4FB3E8]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#4FB3E8]"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#4FB3E8]"
              ></textarea>
              <button
                type="submit"
                className="bg-[#1B365D] hover:bg-[#007BFF] text-white px-6 py-2 rounded font-medium w-full transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
