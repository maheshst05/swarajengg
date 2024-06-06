import React from "react";

const OurPartners = () => {
  return (
    // component
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="xl:flex xl:items-center xl:-mx-4">
          <div className="xl:w-1/2 xl:mx-4">
            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
              PARTNER’S DETAILES
            </h1>

            <p className="max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
              Experienced professionals: Vinod Bhandari, 6 years in Production & QA Tejswini Chaudhari, 5 years in Production Planning & QA. Certified experts in NDE and welding.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
            <div>
              <img
                className="object-cover rounded-xl h-64 w-full"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt="John Doe"
              />

              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Vinod Bajrang Bhandari.
              </h1>

              <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">
                Diploma in Mechanical Engineering
                6 Years of work experience in Production & Quality Assurance
              </p>




            </div>

            <div>
              <img
                className="object-cover rounded-xl h-64 w-full"
                src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Mia"
              />

              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Tejswini Pradip Chaudhari
              </h1>

              <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">
                BE Mechanical
                5 Years of work experience in
                Production Planning & Quality Assurance.

              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default OurPartners;
