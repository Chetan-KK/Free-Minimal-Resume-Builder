import Resume from "@/components/Resume";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Preview = () => {
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <div className="flex justify-between items-center p-3 border-b">
        <Button onClick={() => navigate(-1)}>Back</Button>
        <p className="font-bold">F.M.R.B.</p>
        <Button onClick={handlePrint}>Print</Button>
      </div>
      <div className="overflow-scroll">
        <Resume />
      </div>
    </div>
  );
};

export default Preview;
