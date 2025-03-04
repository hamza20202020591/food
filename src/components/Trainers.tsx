import React from 'react';

    const Trainers: React.FC = () => {
      return (
        <section id="trainers" className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-josefin-sans font-semibold text-center mb-10 text-neutral">
              Meet Our Experts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-light shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
                <img
                  src="https://images.pexels.com/photos/2261486/pexels-photo-2261486.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Trainer 1"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-raleway font-semibold mb-4 text-neutral">
                    John Doe
                  </h3>
                  <p className="text-gray-700">
                    Certified personal trainer with 10+ years of experience. Specializing in weight training and nutrition.
                  </p>
                </div>
              </div>
              <div className="bg-light shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
                <img
                  src="https://images.pexels.com/photos/2261482/pexels-photo-2261482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Trainer 2"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-raleway font-semibold mb-4 text-neutral">
                    Jane Smith
                  </h3>
                  <p className="text-gray-700">
                    Specializes in HIIT and strength training programs. Passionate about helping clients achieve their goals.
                  </p>
                </div>
              </div>
              <div className="bg-light shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
                <img
                  src="https://images.pexels.com/photos/3863024/pexels-photo-3863024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Trainer 3"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-raleway font-semibold mb-4 text-neutral">
                    Mike Johnson
                  </h3>
                  <p className="text-gray-700">
                    Yoga and Pilates instructor focused on flexibility and balance. Dedicated to holistic wellness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default Trainers;
