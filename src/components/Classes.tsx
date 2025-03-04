import React from 'react';

    const Classes: React.FC = () => {
      return (
        <section id="classes" className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-josefin-sans font-semibold text-center mb-10 text-neutral">
              Explore Our Classes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-light shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
                <img
                  src="https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Yoga Class"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-raleway font-semibold mb-4 text-neutral">
                    Yoga
                  </h3>
                  <p className="text-gray-700">
                    Find your inner peace and improve flexibility with our rejuvenating yoga classes.
                  </p>
                </div>
              </div>
              <div className="bg-light shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
                <img
                  src="https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="HIIT Class"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-raleway font-semibold mb-4 text-neutral">
                    HIIT
                  </h3>
                  <p className="text-gray-700">
                    Burn calories and build strength with our high-intensity interval training sessions.
                  </p>
                </div>
              </div>
              <div className="bg-light shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
                <img
                  src="https://images.pexels.com/photos/1552246/pexels-photo-1552246.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Strength Training"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-raleway font-semibold mb-4 text-neutral">
                    Strength Training
                  </h3>
                  <p className="text-gray-700">
                    Build muscle and increase your overall strength with our comprehensive training programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default Classes;
