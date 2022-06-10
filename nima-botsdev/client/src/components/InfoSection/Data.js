import dev from "../../images/dev.svg";
import bug from "../../images/bug.svg";
import se from "../../images/se.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Premium bots",
  headLine: "Fast and secure development for all needs",
  description:
    "At NIMA we approach every client differently and deliver best products in the short period of time",
  buttonLabel: "Explore",
  imgStart: false,
  alt: "Developer",
  dark: true,
  primary: true,
  darkText: false,
  img: dev,
};

export const homeObjTwo = {
  id: "support",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "24/7 Support",
  headLine: "Our customers get all-day support",
  description:
    "We value productivity of our bots so one of our engineers will be with you shortly if bot is down",
  buttonLabel: "Learn more",
  imgStart: true,
  alt: "Engineer",
  dark: false,
  primary: false,
  darkText: true,
  img: bug,
};

export const homeObjThree = {
  id: "demo",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Get demo",
  headLine: "Take a look on similar bots",
  description:
    "Due to the wide range of clients, we can show you one of the bots that already exist and similar to your needs, also it is absolutely free!",
  buttonLabel: "Start Now",
  imgStart: false,
  alt: "Project",
  dark: false,
  primary: false,
  darkText: true,
  img: se,
};
