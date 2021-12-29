// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Barry",
  middleName: "",
  lastName: "Shovlin",
  message: " Software Developer. Problem Solver. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/barryshovlin",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/barryshovlin/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/barryshovlin/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/barryshovlin32/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/headshot.jpg"),
  imageSize: 375,
  message:
    "Hello! I'm Barry Shovlin, a Full Stack Software Developer. I have always enjoyed problem solving and figuring out how things work. After years of working as a freelance musician and in hospitality, I decided to alter my career path and took a leap into Software Development. This was the perfect direction for me, as it has allowed me to use my creative problem solving, leadership, and soft skills while satisfying my need for constant learning.",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "barryshovlin", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["Here-To-Help", "Cooks-In-The-Kitchen", "NSS-Gifter", "WisdomAndGrace"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "JavaScript", value: 70 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 65 },
    { name: "C#/.NET", value: 70 },
    { name: "Typescript", value: 40 },
    { name: "SQL", value: 45 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Wanna talk shop? You can reach me at",
  email: "bshovlin32@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: 'Software Developer At ManAlive Studios',// Here Add Company Name
      date: 'Sept 2021 – Present',
      message: 'As the sole in-house developer, I am involved in every aspect of application and web development, while collaborating with contract developers to create a quality user experience. Some of the technologies we use are Typescript, NextJS, Docker, Tailwind.'
    },
    {
      role: 'Apprentice at Nashville Software School',
      date: 'Nov 2020 - May 2021',
      message: 'NSS is an intensive 6 month full stack Software Development Bootcamp fosued on Javascript, ReactJS, C#/.NET, and fundamentals of SQL'
    },
    {
      role: 'Taproom Key Manager At Tennessee Brew Works',
      date: 'Jan 2017 – Mar 2020',
      message: 'Duties include cash reconciliation, inventory, distribution of tips, stocking, and delegation of staff duties.'
    },
    {
      role: 'New Business Development At Mark Le Clair State Farm',
      date: 'Jan 2016 - May 2017',
      message: 'Accquire new business leads through outbound marketing calls, customer referrals, and current customer Insurance and Financial Reviews.'
    },
    {
      role: 'Freelance Musician',
      date: 'May 2013 - Jan 2016',
      message: 'Studio guitarist, songwriter, and touring guitarist.'
    },
    {
      role: 'Bachelor of Arts - Berklee College of Music',
      date: 'Jan 2010 - May 2013',
      message: 'Four year degree with concentration in Songwriting.'
    }
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
