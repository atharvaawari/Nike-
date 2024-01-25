import {CustomerReviews,Footer, Hero, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality } from './sections';
import Nav from './components/Nav'

const App = ()=> (

  <main className="relative" >
    <Nav/>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <PopularProducts/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding">
      <Services/>
    </section>
    <section className="padding">
      <SpecialOffer/>
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews/>
    </section>
    <section className="padding">
      <Subscribe/>
    </section>
    <section className=" bg-black padding-x padding-t pb-8 text-white ">
      <Footer/>
    </section>
  </main>
)

export default App