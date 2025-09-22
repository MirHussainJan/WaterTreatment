import Footer from "../components/Footer";
import Header from "../components/Header";
import SubHero from "../components/ui/SubHero";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const ContactUs = () => {
  // EmailJS integration
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  // Replace these with your EmailJS values
  const SERVICE_ID = "service_10vngko"; // ✅ from Email Services
  const TEMPLATE_ID = "template_ewpjqfe"; // ✅ from Email Templates
  const USER_ID = "YmIkYeAfUoazs_-F0"; // ✅ your Public Key (API Keys → Public Key)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setSent(false);
    try {
      const response = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        USER_ID
      );
      console.log("SUCCESS!", response.status, response.text);
      setSent(true);
      setTimeout(() => setSent(false), 2000);
      formRef.current.reset();
    } catch (error) {
      console.error("FAILED...", error);
      // Optionally, you can show an error state here
    } finally {
      setSending(false);
    }
  };

  const data = [
    {
      name: "CALL NOW",
      title: "Phone Number",
      desc: "+971 4 269 524",
      img: "/call.png",
    },
    {
      name: "SEND NOW",
      title: "Our Mail",
      desc: "marketing@ultratecuae.com",
      img: "/email.png",
    },
    {
      name: "MEET US",
      title: "Our Address",
      desc: "S11 Near Arabian Adventures DIP 2 DUBAI",
      img: "/location.png",
    },
  ];

  return (
    <>
      <Header />
      <SubHero
        title="Contact Us"
        desc="Let’s discuss your water treatment needs. Get in touch for pure water solutions. Our experts are ready to help you achieve optimal water quality."
        img="/Contact-US-Image-BG-scaled.jpg"
      />

      <section className="py-16 bg-[#ECF2F6] px-4 md:px-0">
        <div className="max-w-[1140px] mx-auto">
          {/* Contact Info Boxes */}
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8 justify-between md:px-0 px-4 mb-16">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden w-full flex flex-col gap-4 relative p-4"
              >
                <h1 className="font-semibold text-sm text-[#01008c]">
                  {item.name}
                </h1>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-24 h-24 absolute top-0 right-0"
                />
                <div className="pt-12 pb-2">
                  <h3 className="text-base md:text-xl font-semibold cursor-pointer text-gray-600 mb-2 hover:text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Map + Form */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            {/* Google Map */}
            <iframe
              loading="lazy"
              src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=15&output=embed&iwloc=near"
              width="100%"
              height="500"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="London Eye, London, United Kingdom"
            />

            {/* Contact Form */}
            <div className="form w-full max-w-2xl mx-auto px-6 pt-10">
              <h1 className="text-2xl font-semibold text-gray-700 mb-6">
                Send A Message
              </h1>

              <form
                className="space-y-5"
                ref={formRef}
                onSubmit={handleSubmit}
              >
                {/* Name */}
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  className="w-full p-3 rounded-2xl text-sm border-0 focus:outline-0 bg-white"
                  required
                />

                {/* Email & Phone */}
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    className="flex-1 p-3 rounded-2xl text-sm border-0 focus:outline-0 bg-white"
                    required
                  />
                  <input
                    type="tel"
                    name="user_phone"
                    placeholder="Phone"
                    className="flex-1 p-3 rounded-2xl text-sm border-0 focus:outline-0 bg-white"
                  />
                </div>

                {/* Service */}
                <input
                  type="text"
                  name="service"
                  placeholder="Service"
                  className="w-full p-3 rounded-2xl text-sm border-0 focus:outline-0 bg-white"
                />

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="4"
                  className="w-full p-3 rounded-2xl text-sm border-0 focus:outline-0 bg-white"
                  required
                ></textarea>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`w-full md:w-auto px-6 py-3 rounded-full text-sm font-medium shadow-md cursor-pointer transition disabled:opacity-60
                    ${sent ? 'bg-green-600 text-white' : 'bg-[#01008c] text-white hover:bg-blue-950'}`}
                  disabled={sending || sent}
                >
                  {sending ? "Sending..." : sent ? "Sent!" : "Submit Form"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;
