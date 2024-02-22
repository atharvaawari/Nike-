import {shoe8} from '../assets/images'
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg dark:text-white">
          We Provide You <span className="text-violet-600/80">Super</span> <br /> <span className="text-violet-600/80">Quality</span> Shoes
        </h2>

        <p className="mt-4 lg:max-w-lg info-text dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et aliquam inventore accusantium officia, autem repellat ipsa. Tempora doloribus autem iste quas, sunt corporis nostrum libero perferendis?
        </p>
        <p className="mt-6 lg:max-w-lg info-text dark:text-white">
          Our dedication to details and excellence ensure your satisfaction
        </p>
        <div className="mt-11">
        <Button label="view details" />
        </div>
      </div>

      <div className='flex flex-1 justify-center items-center' >
        <img 
        src={shoe8} 
        alt="shoe8"
        width={570}
        height={522}
        className='object-contain'
        />
      </div>
    </section>
  )
}

export default SuperQuality