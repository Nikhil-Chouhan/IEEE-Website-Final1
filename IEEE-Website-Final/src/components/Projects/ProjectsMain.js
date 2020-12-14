import React, { useEffect } from 'react';
import PastEvents from './PastProjects';
import UpComingEvents from './UpComingProjects';

function EventsMain({ compeleted, ongoing }) {
    useEffect(() => {
        // console.log(compeleted, ongoing)
        window.$('.slide-nav').on('click', function (e) {
            e.preventDefault();
            // get current slide
            var current = window.$('.flex--active').data('slide'),
                // get button data-slide
                next = window.$(this).data('slide');

            window.$('.slide-nav').removeClass('active');
            window.$(this).addClass('active');

            if (current === next) {
                return false;
            } else {
                window.$('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
                window.$('.flex--active').addClass('animate--end');
                setTimeout(function () {
                    window.$('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
                    window.$('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
                }, 800);
            }
        });
    }, [])
    return (
        <>
            <div className="slider__warpper">
                <div className="flex__container flex--dialga flex--pikachu flex--active" data-slide="1" style={{overflowX:"hidden"}}>
                    <div className="flex__item flex__item--left Events_Left Projects_Left">
                        <div className="flex__content">
                            <p className="text--sub">IEEE MPSTME</p>
                            <h1 className="flow-text" style={{fontWeight: "bold"}}>Ongoing Projects</h1>
                            <p className="text--normal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <p className="text__background">Ongoing</p>
                    </div>
                    <div className="flex__item flex__item--right Events_Right projects_pro">
                        <UpComingEvents ongoing={ongoing}/>
                    </div>
                </div>
                <div className="flex__container flex--zekrom flex--piplup animate--start" data-slide="2" style={{overflowX:"hidden"}}>
                    <div className="flex__item flex__item--left Events_Left Projects_Left">
                        <div className="flex__content">
                            <p className="text--sub">IEEE MPSTME</p>
                            <h1 className="flow-text" style={{fontWeight: "bold"}}>Completed Projects</h1>
                            <p className="text--normal">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <p className="text__background">Completed</p>
                    </div>
                    <div className="flex__item flex__item--right Events_Right Projects_Right projects_pro"><PastEvents completed={compeleted} /></div>
                </div>
            </div>

            <div className="slider__navi">
                <a href="#" className="slide-nav active" data-slide="1">Ongoing</a>
                <a href="#" className="slide-nav" data-slide="2">Completed</a>
            </div>
        </>
    )
}

export default EventsMain
