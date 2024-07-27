import { FormEvent, useEffect, useState } from "react";
import GridStructure from "@/components/GridStructure";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCertificationsData } from "@/lib/data";

interface CertificationData {
  certificationName: string;
  certificationYear: string;
  learnedLanguages: string;
  [key: string]: string;
}

const Certifications = () => {
  const { certificationsData, setCertificationsData } = useCertificationsData();
  const [certifications, setCertifications] =
    useState<CertificationData[]>(certificationsData);

  useEffect(() => {
    const storedData = localStorage.getItem("certificationsData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setCertifications(parsedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("certificationsData", JSON.stringify(certifications));
  }, [certifications]);

  const handleAddCertification = () => {
    setCertifications([
      ...certifications,
      {
        certificationName: "",
        certificationYear: "",
        learnedLanguages: "",
      },
    ]);
  };

  const handleCertificationChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedCertifications = [...certifications];
    updatedCertifications[index][field] = value;
    setCertifications(updatedCertifications);
  };

  const handleRemoveCertification = (index: number) => {
    const updatedCertifications = [...certifications];
    updatedCertifications.splice(index, 1);
    setCertifications(updatedCertifications);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.setItem("certificationsData", JSON.stringify(certifications));
    setCertificationsData(certifications);
  };

  return (
    <GridStructure>
      <h1 className="font-bold text-2xl">Certifications</h1>
      <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
        {certifications.map((certification, index) => (
          <div key={index} className="mb-4 border p-4 rounded">
            <div className="flex justify-between items-center">
              <div className="font-bold text-xl">Certification {index + 1}</div>
              <Button
                type="button"
                variant={"destructive"}
                className=""
                onClick={() => handleRemoveCertification(index)}
              >
                Remove
              </Button>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex flex-col gap-1">
                <Label
                  className="text-sm"
                  htmlFor={`certificationName-${index}`}
                >
                  Certification Name
                </Label>
                <Input
                  type="text"
                  id={`certificationName-${index}`}
                  value={certification.certificationName}
                  onChange={(e) =>
                    handleCertificationChange(
                      index,
                      "certificationName",
                      e.target.value
                    )
                  }
                  placeholder="Three js journey by bruno simon"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <Label
                  className="text-sm"
                  htmlFor={`certificationYear-${index}`}
                >
                  Certification Year
                </Label>
                <Input
                  type="text"
                  id={`certificationYear-${index}`}
                  value={certification.certificationYear}
                  onChange={(e) =>
                    handleCertificationChange(
                      index,
                      "certificationYear",
                      e.target.value
                    )
                  }
                  placeholder="2022"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <Label
                  className="text-sm"
                  htmlFor={`learnedLanguages-${index}`}
                >
                  Learned Languages
                </Label>
                <Input
                  type="text"
                  id={`learnedLanguages-${index}`}
                  value={certification.learnedLanguages}
                  onChange={(e) =>
                    handleCertificationChange(
                      index,
                      "learnedLanguages",
                      e.target.value
                    )
                  }
                  placeholder="Three js, Cannon.js ..."
                  required
                />
              </div>
            </div>
          </div>
        ))}
        <Button type="button" onClick={handleAddCertification} className="mb-4">
          Add Certification
        </Button>
        <Button type="submit">Save</Button>
      </form>
    </GridStructure>
  );
};

export default Certifications;
