import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_esjga8q", "template_qoi17p9", form.current, "HXMwj8uNgjwEZrfnh")
      .then(
        () => {
          setToastMessage("Message sent successfully!");
          setIsSuccess(true);
          setShowToast(true);
          form.current?.reset();
          
          // Hide toast after 5 seconds
          setTimeout(() => {
            setShowToast(false);
          }, 5000);
        },
        (error) => {
          setToastMessage("Failed to send message. Please try again.");
          setIsSuccess(false);
          setShowToast(true);
          console.error(error.text);
          
          // Hide toast after 5 seconds
          setTimeout(() => {
            setShowToast(false);
          }, 5000);
        }
      );
  };

  return (
    <section id="contact" className="py-12 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500">
            Contact Me
          </span>
        </h2>

        <div className="max-w-lg mx-auto relative">
          {/* Toast Notification */}
          {showToast && (
            <div 
              className={`fixed top-4 right-4 z-50 flex items-center p-4 mb-4 rounded-lg shadow transition-all duration-500 transform translate-x-0 ${
                isSuccess 
                  ? "bg-green-50 text-green-800 dark:bg-green-800 dark:text-green-100 border-l-4 border-green-500" 
                  : "bg-red-50 text-red-800 dark:bg-red-800 dark:text-red-100 border-l-4 border-red-500"
              }`}
              role="alert"
            >
              <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 rounded-lg">
                {isSuccess ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                )}
              </div>
              <div className="ml-1 text-sm font-medium">{toastMessage}</div>
              <button 
                type="button" 
                className="ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex h-8 w-8 hover:bg-gray-200 dark:hover:bg-gray-700" 
                onClick={() => setShowToast(false)} 
                aria-label="Close"
              >
                <span className="sr-only">Close</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
          )}

          {/* Decorative bubbles */}
          <div className="hidden md:block absolute -top-4 -left-8 w-8 h-8 bg-yellow-400 dark:bg-yellow-600 rounded-full opacity-80 dark:opacity-60" />
          <div className="hidden md:block absolute -bottom-6 -right-6 w-6 h-6 bg-green-400 dark:bg-green-600 rounded-full opacity-80 dark:opacity-60" />

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={3}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="I'd love to hear from you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white rounded-md hover:from-blue-700 hover:to-blue-800 dark:hover:from-blue-600 dark:hover:to-blue-700 transition duration-300 shadow transform hover:-translate-y-1 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="hidden md:block absolute top-1/2 -left-10 w-4 h-4 bg-red-400 dark:bg-red-600 rounded-full opacity-80 dark:opacity-60" />
        </div>
      </div>
    </section>
  );
}