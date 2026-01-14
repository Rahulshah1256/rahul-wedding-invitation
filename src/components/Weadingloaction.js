import React from 'react';
import '../OurStory.css';
import img1 from '../images/chheka.jpeg';
import img2 from '../images/wedding2.jpeg';
import img3 from '../images/matkor.jpeg';
import mehendi1 from '../images/mehendi1.jpeg';
import haldiImg from '../images/haldi.jpeg';

const Weadingloaction = () => {
    return (
        <section className="section w-details-area center-text" id="ceremony">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="heading">
                            <h2 className="title">Wedding Ceremony Details</h2>
                            <span className="heading-bottom"><i className="icon icon-star"></i></span>
                        </div>
                    </div>

                    <div className="col-md-12 col-md-offset-0">
                        <ul className="timeline animate-box fadeInUp animated-fast">
                            {/* Chheka: put details on the RIGHT to avoid overlapping the badge */}
                            <li className="timeline-inverted animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{ backgroundImage: `url(${img1})` }}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">Chheka(Tilak) Ceremony</h3>
                                        <span className="date">Monday, 23rd February 2026</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>Time: 12:00 PM onwards</p>
                                        <p>Venue: Tajpur Saraiya, Tetariya</p>
                                    </div>
                                </div>
                            </li>

                            <li className="animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{ backgroundImage: `url(${img3})` }}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">Puja Mathkor</h3>
                                        <span className="date">Tuesday, 24th February 2026</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>Time: 6:00 PM onwards</p>
                                        <p>Venue: Paigambarpur, Muzaffarpur</p>
                                    </div>
                                </div>
                            </li>

                            {/* Haldi */}
                            <li className="timeline-inverted animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{ backgroundImage: `url(${haldiImg})` }}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">Haldi Ceremony</h3>
                                        <span className="date">Tuesday, 24th February 2026</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>Time: 7:00 PM onwards</p>
                                        <p>Venue: Paigambarpur, Muzaffarpur</p>
                                    </div>
                                </div>
                            </li>

                            <li className="animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{ backgroundImage: `url(${mehendi1})` }}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">Mehendi Ceremony</h3>
                                        <span className="date">Tuesday, 24th February 2026</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>Time: 8:00 PM onwards</p>
                                        <p>Venue: Paigambarpur, Muzaffarpur</p>
                                    </div>
                                </div>
                            </li>

                            {/* Wedding */}
                            <li className="timeline-inverted animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{ backgroundImage: `url(${img2})` }}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">Wedding Ceremony</h3>
                                        <span className="date">Wednesday, 25th February 2026</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>Time: 8:00 PM onwards</p>
                                        <p>Venue: Tajpur Saraiya, Tetariya</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Weadingloaction;