import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Student Screening",
    description:
      "First, we evaluate the qualifications, skills, and potential of students to succeed in their desired educational pursuits and to ensure a good match between students and the programs they are applying for.",
  },
  {
    title: "University Assistance",
    description:
      "Our experienced team ensures a smooth and efficient process, helping students secure admissions to their desired universities abroad.",
  },
  {
    title: "Admission Assistance",
    description:
      "Our dedicated team provides guidance on meeting admission requirements and deadlines.",
  },
  {
    title: "Documentation Guidance",
    description:
      "We assist students in understanding and compiling the necessary documents for their study abroad applications, including academic transcripts, letters of recommendation, personal statements, and more.",
  },
  {
    title: "Visa Lodgement",
    description:
      "We assist students in understanding visa requirements, preparing the necessary documentation, and completing the application accurately.",
  },
  {
    title: "Pre-Departure Briefing",
    description:
      "We guide students on travel preparations, cultural adaptation, and safety tips.",
  },
];

const WorkingProcess: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-full min-h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
            alt="Students sitting together"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="px-4 md:px-12 py-8">
          <p className="text-[#FF8E3C] text-2xl mb-2">Our working process</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
             <span className="text-[#074293]">How We Work ?</span> 
          </h2>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#074293] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-black">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;







