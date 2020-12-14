import { render } from 'react-dom'
import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import './ContactusCard.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function Card() {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  return (
    <div className= "OuterCard" onClick={() => set(state => !state)} data-aos="fade-right">
      <a.div class="c NiraliBack" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
      <a.div class="c NiraliFront" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
    </div>
  )
}

export default Card