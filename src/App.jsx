import { CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality } from './sections';
import Nav from './components/Nav'
import { ThemProvider } from './context/ThemeContext';
import { useEffect, useState } from 'react';

function App() {

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = ()=> {
    setThemeMode("light")
  }

  const darkTheme = ()=>{
    setThemeMode("dark")
  }

  // actual change in theme 

  useEffect( ()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode] )

return (
  <ThemProvider value={{themeMode, darkTheme, lightTheme}} >
    <main className="relative dark:bg-black" >
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue dark:bg-slate-500 padding">
        <CustomerReviews />
      </section>
      <section className="padding dark:bg-slate-500">
        <Subscribe />
      </section>
      <section className=" bg-black padding-x padding-t pb-8 text-white dark:bg-white dark:text-black ">
        <Footer />
      </section>
    </main>
  </ThemProvider>
)
}

export default App