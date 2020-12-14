import React, { useState, useEffect, useMemo } from 'react'
import { useTransition, a } from 'react-spring'
import shuffle from 'lodash/shuffle'
import useMeasure from './useMeasure'
import useMedia from './useMedia'
import data from './data'
import img10 from '../../img/Gallery/video-1.png';
import img11 from '../../img/Gallery/video-2.jpg';
import './Gallery.css';

function Gallery(){
    // Hook1: Tie media queries to the number of columns
  const columns = useMedia(['(min-width: 300px)', '(min-width: 300px)', '(min-width: 100px)'], [4, 3, 2], 2)
  // Hook2: Measure the width of the container element
  const [bind, { width }] = useMeasure()
  // Hook3: Hold items
  const [items, set] = useState(data)
  // Hook4: shuffle data every 2 seconds
  useEffect(() => void setInterval(() => set(shuffle), 4000), [])
  // Hook5: Form a grid of stacked items using width & columns we got from hooks 1 & 2
  const [heights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0) // Each column gets a height starting with zero
    let gridItems = items.map((child, i) => {
      const column = heights.indexOf(Math.min(...heights)) // Basic masonry-grid placing, puts tile into the smallest column using Math.min
      const xy = [(width / columns) * column, (heights[column] += child.height / 2) - child.height / 2] // X = container width / number of columns * column index, Y = it's just the height of the current column
      return { ...child, xy, width: width / columns, height: child.height / 2 }
    })
    return [heights, gridItems]
  }, [columns, items, width])
  // Hook6: Turn the static grid values into animated transitions, any addition, removal or change will be animated
  const transitions = useTransition(gridItems, (item) => item.css, {
    from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
    enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25
  })
  // Render the grid
  return (
      <div>
  <section id="gallery">
     <header className="section-header" style = {{ marginTop: 20}}>
        <h3 className="section-title">Our gallery</h3>
      </header>
    <div {...bind} class="list" style={{ height: Math.max(...heights) }}>
      {transitions.map(({ item, props: { xy, ...rest }, key }) => (
        <a.div className="card"  key={key} style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`), ...rest }}>
          <div  style={{ backgroundImage: item.css}} />
          <div className="gallery-info">
              <div>
                <a href={item.img_url} data-lightbox="gallery" data-title={item.name} className="link-preview" title="Preview"><i className="ion ion-eye"></i></a>
                <a href={item.link} className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
              </div>
            </div>
        </a.div>
      ))}
    </div>
    </section>
    <section id="video_link">
<div className="basic-3" >
   <div className="container">
       <div className="row ">
           <div className="col-lg-12 wow fadeInUp">
                 <header className="section-header">
                <h3>Video Links</h3>
                </header>
           </div> 
       </div> 
       <div className="row" >
           <div className= "d1 wow fadeInUp">
               
               <div className="image-container">
                   <div className="video-wrapper" >
                       <a className="popup-youtube" href="https://www.youtube.com/watch?v=q9B-UKeV2hw&feature=youtu.be" data-effect="fadeIn">
                           <img className="img-fluid" src={img10}  alt="alternative"></img>
                           <span className="video-play-button">
                               <span></span>
                           </span>
                       </a>
                   </div> 
               </div> 

           </div> 

           <div className="d2 wow fadeInUp" >
               
               <div className="image-container">
                   <div className="video-wrapper" >
                       <a className="popup-youtube" href="https://www.youtube.com/watch?v=yeo2yqAdbEE" data-effect="fadeIn">
                           <img className="img-fluid" src={img11}  alt="alternative"></img>
                           <span className="video-play-button">
                               <span></span>
                           </span>
                       </a>
                   </div> 
               </div> 

           </div> 

       </div> 
   </div> 
</div> 
</section> 
    </div>
  )
}

export default Gallery