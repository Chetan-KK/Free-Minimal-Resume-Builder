import { FormEvent, useEffect, useState } from "react";
import GridStructure from "@/components/GridStructure";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAchievementsData } from "@/lib/data";

interface AchievementsData {
  year: string;
  title: string;
  [key: string]: string;
}

const Achievements = () => {
  const { achievementsData, setAchievementsData } = useAchievementsData();
  const [achievements, setAchievements] =
    useState<AchievementsData[]>(achievementsData);

  useEffect(() => {
    const storedData = localStorage.getItem("achievementsData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setAchievements(parsedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("achievementsData", JSON.stringify(achievements));
  }, [achievements]);

  const handleAddAchievement = () => {
    setAchievements([
      ...achievements,
      {
        year: "",
        title: "",
      },
    ]);
  };

  const handleAchievementChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedAchievements = [...achievements];
    updatedAchievements[index][field] = value;
    setAchievements(updatedAchievements);
  };

  const handleRemoveAchievement = (index: number) => {
    const updatedAchievements = [...achievements];
    updatedAchievements.splice(index, 1);
    setAchievements(updatedAchievements);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.setItem("achievementsData", JSON.stringify(achievements));
    setAchievementsData(achievements);
  };

  return (
    <GridStructure>
      <h1 className="font-bold text-2xl">Achievements</h1>
      <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
        {achievements.map((achievement, index) => (
          <div key={index} className="mb-4 border p-4 rounded">
            <div className="flex justify-between items-center">
              <div className="font-bold text-xl">Achievement {index + 1}</div>
              <Button
                type="button"
                variant={"destructive"}
                className=""
                onClick={() => handleRemoveAchievement(index)}
              >
                Remove
              </Button>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex flex-col gap-1">
                <Label className="text-sm" htmlFor={`year-${index}`}>
                  Year
                </Label>
                <Input
                  type="text"
                  id={`year-${index}`}
                  value={achievement.year}
                  onChange={(e) =>
                    handleAchievementChange(index, "year", e.target.value)
                  }
                  placeholder="2024"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <Label className="text-sm" htmlFor={`title-${index}`}>
                  Title
                </Label>
                <Input
                  type="text"
                  id={`title-${index}`}
                  value={achievement.title}
                  onChange={(e) =>
                    handleAchievementChange(index, "title", e.target.value)
                  }
                  placeholder="MindSpark '23 webscape winner"
                  required
                />
              </div>
            </div>
          </div>
        ))}
        <Button type="button" onClick={handleAddAchievement} className="mb-4">
          Add Achievement
        </Button>
        <Button type="submit">Save</Button>
      </form>
    </GridStructure>
  );
};

export default Achievements;
