import Resume from "@/components/Resume";
import { Button } from "@/components/ui/button";

const Preview = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <div className="">
        <Resume />
      </div>
      <div className="fixed right-5 bottom-3 print:opacity-0">
        <Button onClick={handlePrint}>Print</Button>
      </div>
    </div>
  );
};

export default Preview;
