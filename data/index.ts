export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Some Achievement", link: "#achievement" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I enjoy challenging myself to learn new things.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech and Design enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Now I with my teammate, Mr. Foo and Mr. Teo are doing on FYP: Grievance System Management.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "FYP: Grievance Management System",
    des: "This project was developed in collaboration with my teammates, Mr. Foo and Mr. Teo, utilizing Flutter, Laravel, Tailwind, and other technologies.",
    img: "/p1.svg",
    iconLists: ["/flutter.svg", "/laravel.svg", "/tail.svg"],
    url: "https://github.com/AaaaaaaaaronL",
  },
  {
    id: 2,
    title: "Developing a Modern Portfolio with Next.js",
    des: "This is my portfolio, built using Next.js, Framer Motion, and other tools to serve as a platform to record my achievements and skill.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    url: "",
  },
  {
    id: 3,
    title: "Python Project",
    des: "I have used Python for web scraping with Selenium and am currently exploring the fundamentals of machine learning.",
    img: "/p3.svg",
    iconLists: ["/python.svg", "/selenium.svg"],
    url: "https://github.com/AaaaaaaaaronL",
  },
  {
    id: 4,
    title: "Cinema Website",
    des: "My first Web-based project. Pure HTML, CSS,  Bootstrap, and JavaScript project. It was a simple project to showcase my skills in frontend development.",
    img: "/p4.svg",
    iconLists: ["/html.svg","/css.svg","/bootstrap.svg","/javascript.svg" ],
    url: "https://github.com/AaaaaaaaaronL",
  },
];

export const achievement = [
  {
    quote:
      "My analytical skills are well-developed, as evidenced by my consistent academic performance in accounting, where I maintained an average of over 80% and ranked among the top three in my secondary school. Additionally, my love for hands-on crafts, such as puzzles and model-making, further showcases my meticulous nature and ability to focus on intricate details.",
  },
  {
    quote:
      "I excel at conveying my thoughts and intentions clearly, which has been further enhanced by my experience working in a customer service center. This role taught me the importance of empathy, patience, and effective communication in resolving issues and delivering exceptional service.",
  },
  {
    quote:
      "I excel at conveying my thoughts and intentions clearly, which has been further enhanced by my experience working in a customer service center. This role taught me the importance of empathy, patience, and effective communication in resolving issues and delivering exceptional service.",
  },
  {
    quote:
      "My analytical skills are well-developed, as evidenced by my consistent academic performance in accounting, where I maintained an average of over 80% and ranked among the top three in my school. Additionally, my love for hands-on crafts, such as puzzles and model-making, further showcases my meticulous nature and ability to focus on intricate details.",
  },
];

// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     img: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "appwrite",
//     img: "/app.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "HOSTINGER",
//     img: "/host.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "stream",
//     img: "/s.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "docker.",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//   },
// ];

export const workExperience = [
  {
    id: 1,
    title: "Customer Service Representative",
    desc: "I initially handled cases in Taiwan and later upgraded to handle cases for the UK and Ireland.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Part-time Tuition Teacher",
    desc: "I'm responsible for assisting students with their homework and organizing activities.",
    className: "md:col-span-2", 
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Dev Project",
    desc: "I am collaborating with my partner, Mr. Foo, on a web-based project",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Student",
    desc: "Continue learning throughout life and try to improve myself.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/AaaaaaaaaronL"
  },
  {
    id: 2,
    img: "/facebook.svg",
    url: "https://www.facebook.com/profile.php?id=100026114171105"
  },
  {
    id: 3,
    img: "/link.svg",
    url:"https://www.linkedin.com/in/chun-kiat-lwi-058308287/"
  },
];
