import { shoe8 } from "../assets/images";
import Button from "../components/button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2
          className="font-palanquin capitalize text-4xl font-bold lg:max-w-lg"
        >
          We Provide You<br/>
          <span className="text-coral-red">Super&nbsp;</span>
          <span className="text-coral-red">Quality&nbsp;</span>
          Shoes
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted shoes are designed to meet your every need. Experience unmatched durability and elegance with every step you take.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Our dedication tjo detail and excellence ensures your satisfaction</p>
        <div className="mt-11">
          <Button label="View Details" />
        </div> 
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img 
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />


      </div>
    </section>
  );
};

export default SuperQuality;
