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
      <div className="">
        <Resume />
      </div>
      <div className="fixed right-5 top-3 print:opacity-0">
        <Button onClick={handlePrint}>Print</Button>
      </div>
      <div className="fixed left-5 top-3 print:opacity-0">
        <Button onClick={() => navigate(-1)}>Back</Button>
      </div>
    </div>
  );
};

export default Preview;
