import React from 'react';
    import { Check } from 'lucide-react';

    const Features: React.FC = () => {
      return (
        <section id="features" className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-josefin-sans font-semibold text-center mb-10 text-neutral">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-light shadow-md rounded-lg p-8 hover:shadow-lg transition duration-300">
                <Check className="text-accent h-8 w-8 mb-4" />
                <h3 className="text-xl font-raleway font-semibold mb-4 text-neutral">
                  Expert Trainers
                </h3>
                <p className="text-gray-700">
                  Our certified trainers provide personalized guidance and support to help you achieve your fitness goals.
                </p>
              </div>
              <div className="bg-light shadow-md rounded-lg p-8 hover:shadow-lg transition duration-300">
                <Check className="text-accent h-8 w-8 mb-4" />
                <h3 className="text-xl font-raleway font-semibold mb-4 text-neutral">
                  Modern Equipment
                </h3>
                <p className="text-gray-700">
                  State-of-the-art equipment to help you maximize your workouts and reach new heights.
                </p>
              </div>
              <div className="bg-light shadow-md rounded-lg p-8 hover:shadow-lg transition duration-300">
                <Check className="text-accent h-8 w-8 mb-4" />
                <h3 className="text-xl font-raleway font-semibold mb-4 text-neutral">
                  Diverse Classes
                </h3>
                <p className="text-gray-700">
                  From yoga to HIIT, we offer a wide range of classes for all fitness levels and interests.
                </p>
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default Features;
