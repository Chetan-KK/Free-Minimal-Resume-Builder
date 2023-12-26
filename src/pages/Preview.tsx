import Resume from "@/components/Resume";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const Preview = () => {
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <div className="flex justify-between items-center print:hidden p-3 border-b">
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
        <Resume />
      </div>
    </div>
  );
};

export default Preview;
