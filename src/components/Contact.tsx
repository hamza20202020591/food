import React from 'react';

    const Contact: React.FC = () => {
      return (
        <section id="contact" className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-josefin-sans font-semibold text-center mb-10 text-neutral">
              Get In Touch
            </h2>
            <form className="max-w-lg mx-auto">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-8">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-accent hover:bg-secondary text-light font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline transition duration-300"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      );
    };

    export default Contact;
