import GridStructure from "@/components/GridStructure";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSummary } from "@/lib/data";
import { FormEvent, useEffect } from "react";

interface FormData {
  summary: string;
}

const Summary = () => {
  const { resumeSummary, setResumeSummary } = useSummary();

  const inputs = [
    {
      id: "summary",
      label: "Enter Summary",
      type: "text",
      placeholder: "Highly motivated and skilled...",
    },
  ];

  useEffect(() => {
    const storedData = localStorage.getItem("resumeSummary");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setResumeSummary(parsedData);
    }
  }, [setResumeSummary]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: FormData = {
      summary: (e.target as HTMLFormElement).summary.value,
    };
    localStorage.setItem("resumeSummary", JSON.stringify(formData));

    setResumeSummary(formData);
  };

  return (
    <GridStructure>
      <h1 className="font-bold text-2xl">Personal information</h1>
      <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
        {inputs.map((input, _) => (
          <div key={_}>
            <Label htmlFor={input.id}>{input.label}</Label>
            <Textarea
              placeholder={input.placeholder}
              value={resumeSummary.summary}
              onChange={(e) => setResumeSummary({ summary: e.target.value })}
              className="h-40"
              id={input.id}
              required
            />
          </div>
        ))}
        <Button type="submit">Save</Button>
      </form>
    </GridStructure>
  );
};

export default Summary;
