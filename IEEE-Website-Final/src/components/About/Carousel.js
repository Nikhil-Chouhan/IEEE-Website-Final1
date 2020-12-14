import React,{useEffect} from 'react'
import M from 'materialize-css';
import Aos from 'aos'
import 'aos/dist/aos.css'


const Carousel = () =>{
    useEffect(() => {
        let elements = document.querySelectorAll(".carousel");
        M.Carousel.init(elements);
        Aos.init({duration: 3000});
    }, []);
        return(
            <div className="container">
                <div className="carousel">
                    <a className="carousel-item" href="#one!"><img src="https://images.unsplash.com/photo-1605719125065-3dd9e3f79057?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" data-aos="zoom-in"/></a>
                    <a className="carousel-item" href="#two!"><img src="https://images.unsplash.com/photo-1605719125065-3dd9e3f79057?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" data-aos="zoom-in"/></a>
                    <a className="carousel-item" href="#three!"><img src="https://images.unsplash.com/photo-1605719125065-3dd9e3f79057?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" data-aos="zoom-in"/></a>
                    <a className="carousel-item" href="#four!"><img src="https://images.unsplash.com/photo-1605719125065-3dd9e3f79057?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" data-aos="zoom-in"/></a>
                    <a className="carousel-item" href="#five!"><img src="https://images.unsplash.com/photo-1605719125065-3dd9e3f79057?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" data-aos="zoom-in"/></a>
                </div>
            </div>
            
        )

}
export default Carousel
