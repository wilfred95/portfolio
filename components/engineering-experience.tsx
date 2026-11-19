"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "next-themes";

type EngineeringRole = {
  id: number;
  position: string;
  employmentType?: string;
  company: string;
  location?: string;
  period: string;
  note?: string;
  responsibilities: string[];
};

export default function EngineeringExperience() {
  const roles: EngineeringRole[] = [
    {
      id: 1,
      position: "Distribution Substation Operator",
      company: "Ibadan Electricity Distribution Company (IBEDC) Plc",
      location: "Technical Operations, Omu-Aran Business Hub, Kwara State",
      period: "Oct 2016 – Dec 2022",
      note: "Shift-based role held alongside full-time B.Eng studies (2018–2022)",
      responsibilities: [
        "Operated Offa, Ajase, Oro and Egbin injection substations (7.5 MVA and 15 MVA, 33/11 kV), executing HV/LV switching on 8-hour shifts per standard operating procedures and dispatch instructions.",
        "Operated and inspected vacuum (VCB), SF6 and air circuit breakers, isolators, protection relays and power transformers.",
        "Restored supply after protection trips, feeder failures and overloads, coordinating with the Business Hub dispatch office.",
        "Issued Protection Guarantees (permits to work) and protective tags through safe-clearance procedures, achieving zero lost-time incidents over six years.",
        "Recorded hourly load and integrated energy-meter readings and maintained the daily operating log.",
      ],
    },
    {
      id: 2,
      position: "Technical Lead",
      company: "Ajase-Ipo Rural Electrification Project",
      location: "Kwara State",
      period: "Aug 2021 – Nov 2022",
      responsibilities: [
        "Led the technical delivery of 10 distribution transformers, from installation through commissioning.",
        "Produced electrical layouts in AutoCAD and coordinated installation crews.",
      ],
    },
    {
      id: 3,
      position: "Process Control & Instrumentation Intern",
      company: "Procter & Gamble",
      location: "Nigeria",
      period: "Nov 2015 – Oct 2016",
      responsibilities: [
        "Tested and verified pressure, temperature, flow and level control loops.",
        "Calibrated pressure transmitters, flow meters, temperature sensors and load cells.",
        "Troubleshot Allen-Bradley, Siemens and Schneider Electric PLCs; configured HMI screens.",
        "Performed preventive maintenance on field instruments and control panels.",
      ],
    },
    {
      id: 4,
      position: "Electrical Technician (Solar Installations)",
      employmentType: "Contract",
      company: "University of Ibadan",
      period: "2012 – 2013",
      responsibilities: [
        "Installed solar PV systems and inverters across hostels, offices and academic departments.",
        "Sized and installed battery banks; installed solar street lights across hostels and campus roads.",
      ],
    },
  ];

  // TODO(Ayomide): Add photos of substations / solar installations.
  // Put the image files in /public/engineering/ (or use hosted URLs), fill in
  // the array below, then uncomment the "Field Photos" block near the end of
  // this component. Remember to also add the image host to next.config.mjs if
  // you use remote URLs with next/image.
  // const fieldPhotos: { src: string; alt: string; caption?: string }[] = [
  //   { src: "/engineering/TODO-substation.jpg", alt: "TODO", caption: "TODO" },
  //   { src: "/engineering/TODO-solar.jpg", alt: "TODO", caption: "TODO" },
  // ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };
  const { theme } = useTheme();

  return (
    <section
      id="engineering-experience"
      className={`py-20 relative overflow-hidden ${theme === "light" ? "bg-zinc-200" : "bg-zinc-950"}`}
    >
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeIn}
            custom={0}
            className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500"
          >
            Engineering &amp; Field Experience
          </motion.h2>
          <motion.div
            variants={fadeIn}
            custom={1}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto mb-8"
          ></motion.div>
          <motion.p
            variants={fadeIn}
            custom={2}
            className="text-zinc-400 max-w-2xl mx-auto"
          >
            Electrical &amp; Electronics Engineering work across power
            distribution, process control and solar installations.
          </motion.p>
        </motion.div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {roles.map((role, index) => (
            <motion.div
              key={role.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={index + 3}
            >
              <Card className="bg-zinc-800 border-zinc-700 overflow-hidden hover:border-blue-500/50 transition-colors duration-300">
                <CardContent className="p-0">
                  <div className="p-6 border-b border-zinc-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-500/10 p-3 rounded-lg">
                        <Zap className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {role.position}
                          {role.employmentType && (
                            <span className="ml-2 text-sm font-normal text-zinc-400">
                              ({role.employmentType})
                            </span>
                          )}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-zinc-400">
                          <div className="flex items-center">
                            {role.company}
                          </div>
                          {role.location && (
                            <>
                              <div className="hidden sm:block text-zinc-600">
                                •
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1 shrink-0" />
                                {role.location}
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center text-zinc-500 md:text-right shrink-0">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{role.period}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    {role.note && (
                      <p className="text-zinc-300 mb-6 italic">{role.note}</p>
                    )}

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Key Responsibilities
                      </h4>
                      <ul className="list-disc list-inside text-zinc-400 space-y-2 pl-2">
                        {role.responsibilities.map((responsibility, i) => (
                          <li key={i} className="pl-2">
                            <span className="text-zinc-300">
                              {responsibility}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* TODO(Ayomide): Field Photos block — uncomment once `fieldPhotos` above is filled in.
        <div className="max-w-4xl mx-auto mt-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Field Photos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fieldPhotos.map((photo, i) => (
              <figure key={i} className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
                <img src={photo.src} alt={photo.alt} className="w-full h-56 object-cover" />
                {photo.caption && (
                  <figcaption className="p-3 text-sm text-zinc-400">{photo.caption}</figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
        */}
      </div>
    </section>
  );
}
