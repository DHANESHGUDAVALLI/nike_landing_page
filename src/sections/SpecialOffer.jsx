import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images"
import Button from "../components/button";
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container"> 
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full" 
        />
      </div>
       <div className="flex flex-1 flex-col">
        <h2
          className="font-palanquin capitalize text-4xl font-bold lg:max-w-lg"
        >
          <span className="text-coral-red">Special&nbsp;</span>
          <span className="text-coral-red">Offer&nbsp;</span>
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Limited‑Time Deal: Buy one pair, get your second pair 50% off.
Mix and match your favorite Nike styles today.
Exclusive online offer—no in‑store code needed.
Shop now before this deal disappears!
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Summer Flash Sale! Get up to 30% off on our latest Nike sneakers.
Every style, every size—snag yours before they’re gone.
Free shipping on all orders over $100.
Hurry, this offer ends at midnight Sunday!</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight}/>
          <Button label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
           />
        </div> 
      </div>
    </section>
  )
}

export default SpecialOffer