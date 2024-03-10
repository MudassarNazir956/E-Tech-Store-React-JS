import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { BsPersonVcardFill } from "react-icons/bs";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl
"
            >
              E-Tech Store
            </a>
            <p className="text-gray-600 dark:text-white/70  lg:pr-24 pt-3">
              A gadget cannot capture what a soul has experienced. Beyond the
              gadget there is a world of humans that can take away your gadget
              as soon as you misuse it.
            </p>
            <p className="text-gray-400 mt-4">Build by Mudassar Nazir 👌 </p>
            <a
              href="https://github.com/MudassarNazir956"
              target="_blank"
              className="inline-block bg-primary/95 text-white py-3 px-6 mt-4 text-sm rounded-full font-semibold hover:bg-primary/60 duration-200"
            >
              Visit Github to Explore More Projects
            </a>
          </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* second col links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Faisalabad, Pakistan</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>+92 306 5870757</p>
                </div>

                {/* social links */}
                <div className="flex items-center gap-5 mt-7">
                  <a href="https://github.com/MudassarNazir956" target="_blank">
                    <FaGithub className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mudassar-nazir-8ab1a31b3/"
                    target="_blank"
                  >
                    <FaLinkedin className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a href="https://twitter.com/Mudassar_Nazir" target="_blank">
                    <FaTwitter className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a
                    href="https://mudassar-personal-portfolio.vercel.app/"
                    target="_blank"
                  >
                    <BsPersonVcardFill className="text-3xl hover:text-primary duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
