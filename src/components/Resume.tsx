import {
  useAchievementsData,
  useCertificationsData,
  useEducationData,
  useExperienceData,
  useProjectData,
  useResumeData,
  useSkillsData,
  useSummary,
} from "@/lib/data";

const Resume = () => {
  const { resumeData } = useResumeData();
  const { resumeSummary } = useSummary();
  const { experienceData } = useExperienceData();
  const { projectData } = useProjectData();
  const { achievementsData } = useAchievementsData();
  const { educationData } = useEducationData();
  const { certificationsData } = useCertificationsData();
  const { skillsData } = useSkillsData();

  return (
    <main className="resume w-[794px] overflow-hidden mx-auto p-3 text-primary">
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
                    <div className="font-bold text-sm">{experience.title}</div>
                    <div className="text-sm">({experience.companyName})</div>
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
  );
};

export default Resume;
