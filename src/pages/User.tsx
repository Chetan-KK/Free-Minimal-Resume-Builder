import GridStructure from "@/components/GridStructure";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useResumeData } from "@/lib/data";
import { FormEvent, useEffect } from "react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  website: string;
}

const User = () => {
  const { resumeData, setResumeData } = useResumeData();

  const inputs = [
    {
      id: "fullName",
      label: "Enter full name",
      type: "text",
      placeholder: "stan lee",
      value: resumeData.fullName,
    },
    {
      id: "email",
      label: "Enter email ID",
      type: "email",
      placeholder: "example@gmail.com",
      value: resumeData.email,
    },
    {
      id: "phone",
      label: "Enter phone no.",
      type: "phone",
      placeholder: "+91 12345-67890",
      value: resumeData.phone,
    },
    {
      id: "linkedin",
      label: "Linkedin URL",
      type: "text",
      placeholder: "/in/chetan-khulage",
      value: resumeData.linkedin,
    },
    {
      id: "github",
      label: "GitHub URL",
      type: "text",
      placeholder: "Chetan-KK",
      value: resumeData.github,
    },
    {
      id: "website",
      label: "Personal website",
      type: "text",
      placeholder: "https://www.example.com",
      value: resumeData.website,
    },
  ];

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setResumeData(parsedData);
    }
  }, [setResumeData]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: FormData = {
      fullName: (e.target as HTMLFormElement).fullName.value,
      email: (e.target as HTMLFormElement).email.value,
      phone: (e.target as HTMLFormElement).phone.value,
      linkedin: (e.target as HTMLFormElement).linkedin.value,
      github: (e.target as HTMLFormElement).github.value,
      website: (e.target as HTMLFormElement).website.value,
    };

    localStorage.setItem("resumeData", JSON.stringify(formData));

    setResumeData(formData);
  };

  return (
    <GridStructure>
      <h1 className="font-bold text-2xl">Personal information</h1>
      <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
        {inputs.map((input, _) => (
          <div key={_}>
            <Label htmlFor={input.id}>{input.label}</Label>
            <Input
              type={input.type}
              id={input.id}
              value={input.value}
              onChange={(e) =>
                setResumeData({ ...resumeData, [input.id]: e.target.value })
              }
              placeholder={input.placeholder}
              required
            />
          </div>
        ))}
        <Button type="submit">Save</Button>
      </form>
    </GridStructure>
  );
};

export default User;
