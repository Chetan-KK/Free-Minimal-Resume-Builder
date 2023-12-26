import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const Example = () => {
  const resumeData = {
    fullName: "Chetan Yogesh Khulage",
    email: "chetankhulage350@gmail.com",
    phone: "9284276295",
    linkedin: "in/chetan-khulage",
    github: "Chetan-KK",
    website: "https://portfolio2023-chetan-kk.vercel.app/",
  };
  const resumeSummary = {
    summary:
      "Enthusiastic 3rd-year Computer Engineering student, currently serving as GDSC Frontend Lead and 3rd-year ACE Technical Head. Demonstrated proficiency in web development, creating visually engaging websites. Skilled in project bundling and passionate about 3D graphics exploration with R3F and Blender. Eager to contribute creativity and technical expertise to collaborative team projects.",
  };
  const experienceData = [
    {
      title: "web developer and team leader",
      companyName: "Div and Section PVT. LTD.",
      startDate: "Dec-20",
      endDate: "Feb-20",
      description:
        "Developed a web application for my college enabling students and staff to create accounts. Utilized a tech stack comprising HTML, CSS, and JS for the front-end, while implementing a robust back-end for seamless database management.\nCreated functionality for staff to post daily announcements and updates to the site, enhancing college communications.\nImplemented features for students to provide feedback on college services, increasing transparency and engagement.",
    },
    {
      title: "Freelancer",
      companyName: "Enhouser",
      startDate: "July-23",
      endDate: "Sept-23",
      description:
        "Led a dynamic team as the primary frontend developer at Enhouser, spearheading the complete development of the company's website using React. Played a pivotal role in crafting a visually appealing and user-friendly interface to enhance the overall user experience.\nUtilized React to create a responsive and intuitive user interface, resulting in a 25% improvement in user engagement.\nEstablished best practices, reusable components and style guides, increasing team productivity by 20%.",
    },
  ];
  const projectData = [
    {
      projectName: "COVID-India Tracker",
      usedLanguages: "HTML5, CSS3, JS(ES6), JAVA, HIBERNET, JDBC, MYSQL",
      startDate: "Mar-20",
      endDate: "Apr-20",
      description:
        "Developed an innovative web-application using dynamic APIs to provide real-time updates on COVID-19 statistics in India.\nImplemented user-friendly features such as daily news updates about the virus, enhancing user engagement and keeping them informed.",
    },
    {
      projectName: "3D Physics experience",
      usedLanguages:
        "HTML, CSS, JAVASCRIPT, THREEJS, CANNON JS, DAT.GUI, EVENTS, VERCEL",
      startDate: "Oct-22",
      endDate: "Dec-22",
      description:
        "Implemented a physics engine that accurately simulates collisions, resulting in a 15% longer average user session.\nGained valuable experience with 3D graphics, physics simulation, real-time rendering, and optimizations in a web environment.\nDemonstrated ability to learn and apply complex graphics and physics techniques to deliver a high-quality 3D experience in the browser.",
    },
    {
      projectName: "Youtube clone",
      usedLanguages:
        "HTML, CSS3, JAVASCRIPT, REACT JS, REACT-ROUTER-DOM, VERCEL",
      startDate: "Jan-23",
      endDate: "Mar-23",
      description:
        "Developed a YouTube Clone project using React with a 99% similarity score to the original YouTube interface and features.\nAchieved a 20% improvement in code maintainability and development speed by adopting React's component-based architecture, resulting in a more efficient development process.\nLogged150+ hours of hands-on practice during project, deepening understanding of React concepts and refining skills in complex web apps.",
    },
  ];
  const achievementsData = [
    { year: "2023", title: "COEP MINDESPARK ‘23 WEBSCAPE WINNER" },
    { year: "2023", title: "ONSET ‘23 WEB DEV WINNER" },
    { year: "2023", title: " HACKTOBERFEST ‘23 CONTRIBUTER" },
    { year: "2023", title: "350+ Contributions on GitHub" },
  ];
  const educationData = [
    {
      universityName: "D. Y. Patil School of Engineering and technology, pune",
      qualificationName: "Bachelor in Computer Science",
      result: "pursuing",
      startDate: "2022",
      endDate: "2025",
    },
    {
      universityName: "Ashok Institute of Engineering technology, polytechnic",
      qualificationName: "Diploma in Computer Science",
      result: "87.88",
      startDate: "2019",
      endDate: "2022",
    },
    {
      universityName: "Shree samarth vidya mandir, Ahmednagar",
      qualificationName: "10th",
      result: "68.20",
      startDate: "",
      endDate: "",
    },
  ];
  const certificationsData = [
    {
      certificationName: "Three js journey by bruno simon",
      certificationYear: "2023",
      learnedLanguages:
        "Three js, Cannon js, react-three-fiber, rapier, zustand",
    },
    {
      certificationName: "Javascript Complete course",
      certificationYear: "2022",
      learnedLanguages: "Javascript, javascript fundamentals, OOPs",
    },
  ];
  const skillsData = [
    {
      skillType: "Front-end",
      skills:
        "HTML5, CSS3, TAILWIND, JAVASCRIPT, TYPESCRIPT, REACT, NEXT, ZUSTAND, THREE JS, REACT-THREE-FIBER, DREI, CHART JS, VITE JS",
    },
    { skillType: "Back-end", skills: "NODE.JS, EXPRESS.JS, EJS, AXIOS, JAVA" },
    { skillType: "Database", skills: "MONGODB, MYSQL, SQL, FIREBASE" },
    { skillType: "Version control", skills: "Git, GitHub, GitLab" },
    {
      skillType: "Designing",
      skills: "photoshop, illustrator,adobe XD, blender, figma, canva, spline",
    },
  ];

  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <div className="flex justify-between print:hidden items-center p-3 border-b">
        <Button onClick={() => navigate(-1)}>Back</Button>
        <Link to={"/"}>
          <div className="font-bold flex flex-col leading-4">
            <p>F.M.</p>
            <p>R.B.</p>
          </div>
        </Link>
        <Button onClick={handlePrint}>Print</Button>
      </div>
      <div className="print:overflow-visible overflow-scroll">
        <main className="resume-container w-[794px] overflow-hidden mx-auto p-3 text-primary">
          {!(resumeData.fullName === "") && (
            <header className="flex flex-col gap-1 border-b pb-1">
              <h1 className="font-bold text-xl text-center">
                {resumeData.fullName}
              </h1>
              {/* contact */}
              <div className="flex justify-center gap-4 text-xs">
                <a
                  href={`mailto:${resumeData.email}`}
                  target="_blank"
                  className="flex items-center gap-1 justify-center"
                >
                  <i className="fa-solid fa-envelope w-4 translate-y-0.5 h-4"></i>
                  {resumeData.email}
                </a>
                <a
                  href={`tel:${resumeData.phone}`}
                  className="flex items-center gap-1 justify-center"
                >
                  <i className="fa-solid fa-phone"></i>
                  {resumeData.phone}
                </a>
              </div>
              {/* links */}
              <div className="flex justify-center gap-4 text-xs">
                <a
                  href={`https://github.com/${resumeData.github}`}
                  target="_blank"
                  className="flex items-center gap-1 justify-center"
                >
                  <i className="fa-brands fa-github"></i>
                  {resumeData.github}
                </a>
                <a
                  href={resumeData.website}
                  target="_blank"
                  className="flex items-center gap-1 justify-center"
                >
                  <i className="fa-solid fa-globe"></i>
                  {resumeData.website}
                </a>
                <a
                  href={`https://www.linkedin.com/${resumeData.linkedin}/`}
                  target="_blank"
                  className="flex items-center gap-1 justify-center"
                >
                  <i className="fa-brands fa-linkedin"></i>
                  {resumeData.linkedin}
                </a>
              </div>
            </header>
          )}

          {/* summary */}
          {!(resumeSummary.summary === "") && (
            <div className="flex flex-col gap-1 border-b py-1">
              <h1 className="font-bold uppercase">Summary</h1>
              <p className="text-xs text-justify indent-5">
                {resumeSummary.summary}
              </p>
            </div>
          )}

          {/* experience */}
          {!(experienceData.length === 0) && (
            <div className="flex flex-col gap-1 border-b py-1">
              <h1 className="font-bold uppercase">Experience</h1>
              <div className="text-xs text-justify flex flex-col gap-1">
                {experienceData.map((experience, _) => (
                  <div className="" key={_}>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-1">
                        <div className="font-bold text-sm">
                          {experience.title}
                        </div>
                        <div className="text-sm">
                          ({experience.companyName})
                        </div>
                      </div>

                      <div className="flex gap-1 font-bold">
                        {experience.startDate} to {experience.endDate}
                      </div>
                    </div>
                    <div className="pl-4 mt-1">
                      <ul className="list-disc">
                        {experience.description.split("\n").map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* projects */}
          {!(projectData.length === 0) && (
            <div className="flex flex-col gap-1 border-b py-1">
              <h1 className="font-bold uppercase">Projects</h1>
              <div className="text-xs text-justify flex flex-col gap-1">
                {projectData.map((project, _) => (
                  <div className="" key={_}>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-1 items-end">
                        <div className="font-bold text-sm">
                          {project.projectName}
                        </div>
                        <div className="">({project.usedLanguages})</div>
                      </div>

                      <div className="flex gap-1 font-bold">
                        {project.startDate} to {project.endDate}
                      </div>
                    </div>
                    <div className="pl-4 mt-1">
                      <ul className="list-disc">
                        {project.description.split("\n").map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* achievements */}
          {!(achievementsData.length === 0) && (
            <div className="flex flex-col gap-1 border-b py-1">
              <h1 className="font-bold uppercase">Achievements</h1>
              <div className="text-xs grid grid-cols-[repeat(2,1fr)]  gap-1 grid-rows-[1fr]">
                {achievementsData.map((achievement, _) => (
                  <div className="flex gap-3 " key={_}>
                    <div className="font-bold">{achievement.year}</div>
                    <div className="">{achievement.title}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* education */}
          {!(educationData.length === 0) && (
            <div className="flex flex-col gap-1 border-b py-1">
              <h1 className="font-bold uppercase">Education</h1>
              <div className="text-xs text-justify flex flex-col gap-1">
                {educationData.map((education, _) => (
                  <div className="flex justify-between items-center" key={_}>
                    <div className="flex gap-1 items-center">
                      <div className="font-bold text-sm">
                        {education.qualificationName}
                      </div>
                      <div className="">({education.universityName})</div> -
                      <div className="font-bold">{education.result}</div>
                    </div>

                    <div className="flex gap-1 font-bold">
                      {!(education.startDate === "") &&
                        `${education.startDate} to ${education.endDate}`}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* certifications */}
          {!(certificationsData.length === 0) && (
            <div className="flex flex-col gap-1 border-b py-1">
              <h1 className="font-bold uppercase">Certifications</h1>
              <div className="text-xs text-justify flex flex-col gap-1">
                {certificationsData.map((certification, _) => (
                  <div className="flex justify-between items-center" key={_}>
                    <div className="flex gap-1 items-center">
                      <div className="font-bold">
                        {certification.certificationName}
                      </div>
                      <div className="">({certification.learnedLanguages})</div>
                    </div>

                    <div className="flex gap-1 font-bold">
                      {certification.certificationYear}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* skills */}
          {!(skillsData.length === 0) && (
            <div className="flex flex-col gap-1 py-1">
              <h1 className="font-bold uppercase">Skills</h1>
              <div className="text-xs text-justify flex flex-col gap-1">
                {skillsData.map((skill, _) => (
                  <div className="" key={_}>
                    <span className="font-bold whitespace-nowrap">
                      {skill.skillType}:{" "}
                    </span>
                    {skill.skills}
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Example;
