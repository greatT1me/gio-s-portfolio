const data = {
  topBarNav: {
    Home: "Home",
    "About me": "About",
    "My projects": "Projects",
    Services: "Services",
    Testimonials: "Testimonials",
  },
  aboutMe:
    "Whether you're a start-up founder, a product manager, or a fellow designer, I'm always open to new design challenges and collaborations. Feel free to explore my portfolio and get in touch with me through the contact section if you'd like to learn more about my design services or discuss a potential project. Thank you for visiting my website, and I hope to hear from you soon!",
  services: [
    {
      logoRoute: "/services/service1.svg",
      name: "UI/UX Design",
      text: "I provide UI/UX design services to create visually appealing and user-friendly digital interfaces.",
    },
    {
      logoRoute: "/services/service2.svg",
      name: "Frontend development",
      // text: "I specialize in using HTML, CSS, and JavaScript to create user-friendly website and application interfaces.",
      text: (
        <div>
          I specialize in using <span style={{ color: "#3930B6" }}>HTML</span> ,{" "}
          <span style={{ color: "#3930B6" }}>CSS</span>, and{" "}
          <span style={{ color: "#3930B6" }}>JavaScript</span> to create
          user-friendly website and application interfaces.
        </div>
      ),
    },
    {
      logoRoute: "/services/service3.svg",
      name: "Icon Design",
      text: "Creating visually compelling icons with a consistent style that effectively communicate ideas and concepts.",
    },
    {
      logoRoute: "/services/service4.svg",
      name: "Logo Design",
      text: "Creating unique logos that reflect a company's identity and differentiate them from competitors.",
    },
  ],
  MyProjects: [
    {
      imgURL: "/myProjects/project1.png",
      title: "Chat App",
      text: "Whether you're a startup founder, a product manager, or a fellow designer, I'm always open to new design challenges and collaborations. ",
    },
    {
      imgURL: "/myProjects/project2.png",
      title: "Chat App",
      text: "Whether you're a startup founder, a product manager, or a fellow designer, I'm always open to new design challenges and collaborations. ",
    },
    {
      imgURL: "/myProjects/project3.png",
      title: "Chat App",
      text: "Whether you're a startup founder, a product manager, or a fellow designer, I'm always open to new design challenges and collaborations. ",
    },
    {
      imgURL: "/myProjects/project4.png",
      title: "Chat App",
      text: "Whether you're a startup founder, a product manager, or a fellow designer, I'm always open to new design challenges and collaborations. ",
    },
  ],
  successStories: [
    {
      authorName: "Nairi Najaryan",
      story: `"Of the many web designers I've worked with, Giorgi stands out as one of the most competent and skilled. His web design skills are unparalleled, and the designs he creates are revolutionary. Not only did I not need to lead him, but at the project's conclusion I was the one who had asked for clarification. 10 STARS! I'm hoping to have a productive partnership with you for many years to come. Thank you very much. ️`,
      authorJob: "Designer & Developer",
      website: "Landing page design",
    },
    {
      authorName: "Rindert Dalstra, Suderans",
      story: `"- Great communication - Great problem-solving skills - Would recommend GIorgi without any hesitation - Happy to hire again"`,
      authorJob: "",
      website: "",
    },
    {
      authorName: "Natia Tkeshelashvili",
      story: `"It was nice to work with Giorgi. He's so dedicated to working, always doing his job by deadlines. I would work with him again. Good luck Giorgi! "`,
      authorJob: "",
      website: "",
    },
  ],
  footerBarNav: {
    About: "About",
    Services: "Services",
    Projects: "Projects",
    Testimonials: "Testimonials",
    "Get In Touch!": "GetInTouch",
  },
};

export default data;
