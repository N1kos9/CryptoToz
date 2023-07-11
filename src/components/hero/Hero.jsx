import './HeroStyle.css'
import { AiOutlineArrowDown } from 'react-icons/ai'

function Hero() {
  return (<>
  <section className='main'>
    <div className='text'>
      <h2>platform for</h2>
      <h1>the crypto industry</h1>
      <p>at vero eos et accusamus et iusto odio ignissimos ducimus qui blanditiis <br />
      praesentium um delenti atque corrupti.</p>
      <a href="">get started</a>
    </div>
    <div className='main-img'>
      <img src='/hero.svg' alt="" />
    </div>
    <div className='arrow'>
      <a href="/">Scroll Down <span><AiOutlineArrowDown className='arrow-down' /></span></a>
    </div>
  </section>
  </>
  )
}

export default Hero