import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Whatsapp = () => {
  return (
    <>

      {/* Whatsapp Button */}
      <Link
        to="https://wa.me/916201618024?text=Hello%20I%20want%20to%20connect%20with%20you
       "
      >
        <div className="bg-[green] text-center h-[50px] w-[50px] rounded-full text-white fixed bottom-23 lg:bottom-9 right-2 cursor-pointer z-10">
          <i className="ri-whatsapp-line text-[32px] "></i>
        </div>
      </Link>

      
    </>
  );
};

export default Whatsapp;
