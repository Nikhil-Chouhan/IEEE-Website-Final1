import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import team from '../../img/About/Navin.jpg'
import mission from '../../img/About/Nirali.jpg'
import vision from '../../img/About/Isha.jpg'
import nishant from '../../img/About/Nishant.jpg'

const Grids = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return (
        <div className="teamc">
            <div className="row">
                <div className="col s12 l4 push-l7 offset-l1" data-aos="fade-down">
                    <img src={team} alt="" className="responsive-img materialboxed" />
                </div>
                <div className="col s12 l6 pull-l6 right-align offset-l1" data-aos="fade-up">
                    <h2 className="indigo-text text-darken-4">Navin Agarwal</h2>
                    <p>Navin has a clear vision of the future and he effortlessly steers the committee towards our goal.
                    He is able to recognise the potential in each individual and delegate appropriate tasks.
He stays unruffled at all times as this helps the team draw strength from him.</p>
                </div>
            </div>
            <div className="row">
                <div className="col s12 l4 push-l1" data-aos="fade-down">
                    <img src={mission} alt="" className="responsive-img materialboxed" />
                </div>
                <div className="col s12 l6 left-align push-l1 offset-l1" data-aos="fade-up">
                    <h2 className="indigo-text text-darken-4">Nirali Kabli</h2>
                    <p>Nirali Kabli, our Vice Chairperson infuses fresh energy into all her activities and wields her power effortlessly
                    She always ensures that everything runs smoothly and is virtually unstoppable at work.
                    To unwind, she follows her passion which is dancing.
                    We are very glad to have an all rounder like her leading our team!</p>
                </div>
            </div>
            <div className="row">
                <div className="col s12 l4 push-l7 offset-l1" data-aos="fade-down">
                    <img src={vision} alt="" className="responsive-img materialboxed" />
                </div>
                <div className="col s12 l6 pull-l6 right-align offset-l1" data-aos="fade-up">
                    <h2 className="indigo-text text-darken-4">Isha Gupta</h2>
                    <p>When you have Isha in your corner, you do not need a financial wiz
She invokes team spirit due to her flawless leadership skills.She is a perfectionist and inspires others to achieve new heights. She in an invaluable member of our team and we are proud to have her onboard!</p>
                </div>
            </div>
            <div className="row">
                <div className="col s12 l4 push-l1" data-aos="fade-down">
                    <img src={nishant} alt="" className="responsive-img materialboxed" />
                </div>
                <div className="col s12 l6 left-align push-l1 offset-l1" data-aos="fade-up">
                    <h2 className="indigo-text text-darken-4">Nishant Goel</h2>
                    <p>Nishant is an important part of the core committee. He ensures that communication amongst all the departments happens seamlessly. He is clear headed and very organised. He is multifaceted and multitalented as he conducts a podcast on “All Things Relationship" and also has a Fruit based nutrition startup, "Fruit Phoenix".
</p>
                </div>
            </div>
        </div>


    )
}
export default Grids
