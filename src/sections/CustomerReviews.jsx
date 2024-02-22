import ReviewCard from "../components/ReviewCard"
import {reviews} from "../constants"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold dark:text-white">
        What Our
        <span className="text-violet-600/80"> Customers </span>
        Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center dark:text-white">Hear genuine stories from our satisfied Customers about their expectional experiences with us.</p>
      <div className="mt-14 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) =>(
          <ReviewCard
          key={review.customerName}
          imgURL={review.imgURL}
          customerName={review.customerName}
          rating={review.rating}
          feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews