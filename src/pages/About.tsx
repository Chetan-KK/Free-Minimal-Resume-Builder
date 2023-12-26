import Footer from "@/components/Footer";
import Header from "@/components/Header";

const About = () => {
  return (
    <div>
      <Header />
      <div className="p-5 max-w-[60rem] mx-auto">
        <h1 className="sm:text-3xl text-2xl text-center font-bold mb-5">
          Free Minimal resume builder
        </h1>
        <div className="sm:leading-10 sm:text-xl text-justify flex flex-col sm:gap-7 gap-4 indent-11">
          <p>
            Welcome to free-minimal-resume-builder.vercel.app, the easiest way
            to create a professional resume online.
          </p>
          <p>
            This site was created by{" "}
            <a
              href="https://www.linkedin.com/in/chetan-khulage"
              target="_blank"
              className="mx-1 underline underline-offset-4 text-blue-500"
            >
              Chetan-KK
            </a>{" "}
            to provide job seekers with a simple yet powerful resume building
            tool. With its minimalist design and focus on essential resume
            sections, Free Minimal resume builder helps you create a resume that
            stands out to recruiters and hiring managers.
          </p>
          <p>
            To use Free Minimal resume builder all you need to do is enter your
            personal, education, and work history details into our resume
            builder. Our system then takes that information and automatically
            formats it into a clean, modern resume template. You can preview
            your resume, make edits, download it as a PDF, and start applying to
            jobs in minutes.
          </p>
          <p>
            The resume template used on Free Minimal resume builder was designed
            based on feedback from recruiters to include only the most important
            resume sections. This one-page format highlights your skills,
            experience, and achievements in a scannable and engaging way for
            hiring managers.
          </p>
          <p>
            This resume builder makes it easy to tailor your resume to each job
            application.
          </p>
          <p>
            Free Minimal resume builder is an open source project on GitHub.
            Developers can contribute to help improve the site and build new
            features. User feedback is also critical for making Free Minimal
            resume builder more useful for job seekers. If you have any
            suggestions, please contact us. link to repo:{" "}
            <a
              href="https://github.com/Chetan-KK/Free-Minimal-Resume-Builder"
              target="_blank"
              className="mx-1 underline underline-offset-4 text-blue-500"
            >
              here.
            </a>
          </p>
          <p>
            Thank you for choosing Free Minimal resume builder to create your
            professional resume. We hope it will be a valuable tool in your job
            search. Let us know if you have any other questions!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
