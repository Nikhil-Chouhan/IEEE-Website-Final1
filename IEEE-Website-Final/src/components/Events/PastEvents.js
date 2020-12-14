import { render } from 'react-dom'
import React, { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import './EventsStyles.css'

const cards = [
  'https://instagram.famd1-2.fna.fbcdn.net/v/t51.2885-15/e35/s240x240/121396613_804714423675473_6883401838487330113_n.jpg?_nc_ht=instagram.famd1-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=G7RoRqz4KPYAX-GImmc&_nc_tp=15&oh=41b5513c6ed29840a988802583651267&oe=5FCBDB55',
    'https://instagram.famd1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/120998930_343628286946121_6114188808468902657_n.jpg?_nc_ht=instagram.famd1-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=5Zrz5W4E1D0AX-IHFEb&_nc_tp=24&oh=49190be7a60ad070be1f72ae7b9f987d&oe=5FCAF5F9',
    'https://instagram.famd1-2.fna.fbcdn.net/v/t51.2885-15/e35/s240x240/121010139_2780723878869799_6291524711352072867_n.jpg?_nc_ht=instagram.famd1-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=Qq_fZT8CnTcAX_VYqIR&_nc_tp=15&oh=31dcfcd2b7f717bf0d054ee771d6c374&oe=5FCC5F55',
    'https://instagram.famd1-3.fna.fbcdn.net/v/t51.2885-15/e35/s240x240/121067288_1019029438568106_5695414758169397937_n.jpg?_nc_ht=instagram.famd1-3.fna.fbcdn.net&_nc_cat=106&_nc_ohc=i0U95Pbyg24AX-j1m9g&_nc_tp=15&oh=5b523a4619c4c0dabb37e49d1aa2b6ee&oe=5FCCB68E'
]

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function PastEvents() {
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, set] = useSprings(cards.length, i => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    set(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <div id="eve" className="pokemon__img Events__img">
      {
        props.map(({ x, y, rot, scale }, i) => (
          <animated.div className="events" key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
            {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
            <animated.div className="childEvents" {...bind(i)} style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${cards[i]})` }} />
          </animated.div>
        ))
      }
    </div>
  )
}
export default PastEvents; 

