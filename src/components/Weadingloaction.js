import React, { useMemo } from 'react';
import '../OurStory.css';
import img1 from '../images/chheka.jpeg';
import img2 from '../images/wedding2.jpeg';
import img3 from '../images/matkor.jpeg';
import mehendi1 from '../images/mehendi1.jpeg';
import haldiImg from '../images/haldi.jpeg';

const Weadingloaction = () => {
    const ceremonies = useMemo(() => ([
        {
            key: 'chheka',
            inverted: true,
            image: img1,
            title: 'Chheka(Tilak)',
            date: 'Monday, 23rd February 2026',
            time: '12:00 PM onwards',
            venue: 'Tajpur Saraiya, Tetariya',
        },
        {
            key: 'matkor',
            inverted: false,
            image: img3,
            title: 'Puja Matkor',
            date: 'Tuesday, 24th February 2026',
            time: '6:00 PM onwards',
            venue: 'Paigambarpur, Muzaffarpur',
        },
        {
            key: 'haldi',
            inverted: true,
            image: haldiImg,
            title: 'Haldi',
            date: 'Tuesday, 24th February 2026',
            time: '7:00 PM onwards',
            venue: 'Paigambarpur, Muzaffarpur',
        },
        {
            key: 'mehendi',
            inverted: false,
            image: mehendi1,
            title: 'Mehendi',
            date: 'Tuesday, 24th February 2026',
            time: '8:00 PM onwards',
            venue: 'Paigambarpur, Muzaffarpur',
        },
        {
            key: 'wedding',
            inverted: true,
            image: img2,
            title: 'Wedding',
            date: 'Wednesday, 25th February 2026',
            time: '8:00 PM onwards',
            venue: 'Tajpur Saraiya, Tetariya',
        },
    ]), []);

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
                            {ceremonies.map((c) => (
                                <li
                                    key={c.key}
                                    className={`${c.inverted ? 'timeline-inverted ' : ''}animate-box fadeInUp animated-fast`}
                                >
                                    <div className="timeline-badge" style={{ backgroundImage: `url(${c.image})` }}></div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h3 className="timeline-title">{c.title}</h3>
                                            <span className="date">{c.date}</span>
                                        </div>
                                        <div className="timeline-body">
                                            <p>Time: {c.time}</p>
                                            <p>Venue: {c.venue}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Weadingloaction;