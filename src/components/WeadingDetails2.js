import React, {useState} from 'react';
import '../OurStory.css';
import HindiStoryModal from './HindiStoryModal';
import './HindiStoryModal.css';
import img3 from '../images/wedding3.jpeg'
import img2 from '../images/wedding2.jpeg'
import img1 from '../images/wedding1.jpeg'

const WeadingDetails = () => {
    const [showHindiPopupFirstMet, setShowHindiPopupFirstMet] = useState(false);
    const [showHindiPopupFirstConversation, setShowHindiPopupFirstConversation] = useState(false);
    const [showHindiPopupFirstDate, setShowHindiPopupFirstDate] = useState(false);
    return (
        <section className="section w-details-area center-text" id="story">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="heading">
                            <span>We Love Each Other</span>
                            <h2 className="title">Our Story</h2>
                            <p>To love a person is to see all of their magic, and to remind them of it when they have
                                forgotten.</p>
                            <p>Ah, life grows lovely where you are.</p>
                            <span className="heading-bottom"><i className="icon icon-star"></i></span>
                        </div>
                    </div>
                    <div className="col-md-12 col-md-offset-0">
                        <ul className="timeline animate-box fadeInUp animated-fast">
                            <li className="animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{backgroundImage: `url(${img1})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">First We Met</h3>
                                        <span className="date">October 25, 2020</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>We first crossed paths on the auspicious day of Navami in 2020. My cousin had
                                            taken me to her place for a visit, and I had no idea that an ordinary
                                            evening was about to become so special. When she walked in with tea, she saw
                                            me for the first time. But me? I was so lost in my phone that I didn't even
                                            realize my destiny was standing right in front of me. That day, it was a
                                            one-sided meeting—she saw me, but I didn't see her.</p>
                                        <button
                                            type="button"
                                            className="hindi-btn"
                                            onClick={() => setShowHindiPopupFirstMet(true)}
                                        >
                                            <span className="hindi-btn__pill">Hindi</span>
                                            <span>Read in Hindi</span>
                                        </button>

                                        <HindiStoryModal
                                            open={showHindiPopupFirstMet}
                                            title="Pehli Mulakaat"
                                            onClose={() => setShowHindiPopupFirstMet(false)}
                                        >
                                            <p>
                                                Hum pehli baar Durga Puja 2020 ki Navami par mile. Mere Mama ka
                                                beta mujhe unke ghar ghumane le gaya tha. Mujhe andaza bhi nahi
                                                tha ki wo shaam mere liye itni khaas ban jayegi.
                                            </p>
                                            <p>
                                                Jab woh chai lekar aayi, toh usne mujhe pehli baar dekha. Par
                                                main? Main toh apne phone mein itna khoya hua tha ki mujhe pata
                                                hi nahi chala ki meri kismat mere theek saamne khadi hai. Uss
                                                din bas usne mujhe dekha tha, par maine use nahi.
                                            </p>
                                        </HindiStoryModal>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-inverted animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{backgroundImage: `url(${img2})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">The First Conversation</h3>
                                        <span className="date"><i className="icon icon-date"></i>October 30, 2022</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>Chhath Puja 2022: A Digital Connection

                                            It was during Chhath Puja in 2022. Her mother is my friend on Facebook and
                                            had posted a status with her picture. The moment I saw that photo, I felt an
                                            unexplainable connection.
                                        </p><p>
                                        I gathered some sudden courage and messaged her mother's account directly. To my
                                        surprise, I found out later that it wasn't her mother replying—it was her! That
                                        accidental conversation sparked everything. She confessed that she had liked me
                                        for a long time, and just like that, our journey began. </p>

                                        <button
                                            type="button"
                                            className="hindi-btn"
                                            onClick={() => setShowHindiPopupFirstConversation(true)}
                                        >
                                            <span className="hindi-btn__pill">Hindi</span>
                                            <span>Read in Hindi</span>
                                        </button>

                                        <HindiStoryModal
                                            open={showHindiPopupFirstConversation}
                                            title="Pehli Baatcheet"
                                            onClose={() => setShowHindiPopupFirstConversation(false)}
                                        >
                                            <p>
                                                Yeh Chhath Puja 2022 ki baat hai. Uski mummy meri Facebook
                                                friend hain, aur uss din unhone status pe uski ek photo lagayi
                                                thi. Wo photo dekhkar mujhe aisa laga jaise humare beech koi
                                                gehra connection hai.

                                            </p>
                                            <p>

                                                Pata nahi kahan se mujhme itni himmat aa gayi ki maine seedha
                                                uski mummy ke account pe message kar diya! Baad mein pata chala
                                                ki wo mummy nahi, balki wo khud reply kar rahi thi. Bas, wahin
                                                se humari baatein shuru huin aur usne bataya ki wo mujhe bohot
                                                pehle se pasand karti thi. Aur aise humari kahani shuru
                                                hui.
                                            </p>
                                        </HindiStoryModal>
                                    </div>
                                </div>
                            </li>
                            <li className="animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{backgroundImage: `url(${img3})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">The First Date</h3>
                                        <span className="date">March 17, 2023</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>It was March 17, 2023, just one day before my birthday. We went on our very
                                            first official date to the London Bridge Restaurant.
                                        </p><p>
                                        She surprised me by celebrating my pre-birthday there. We had lunch and spent
                                        hours just talking. It was the perfect start to another year of my life, and the
                                        beginning of many more dates to come.</p>
                                        <button
                                            type="button"
                                            className="hindi-btn"
                                            onClick={() => setShowHindiPopupFirstDate(true)}
                                        >
                                            <span className="hindi-btn__pill">Hindi</span>
                                            <span>Read in Hindi</span>
                                        </button>

                                        <HindiStoryModal
                                            open={showHindiPopupFirstDate}
                                            title="Hamari Pehli Date"
                                            onClose={() => setShowHindiPopupFirstDate(false)}
                                        >
                                            <p>
                                                Yeh 17 March 2023, mere birthday se theek ek din pehle ki baat
                                                hai. Hum pehli baar official date par London Bridge Restaurant
                                                gaye thay.
                                            </p>
                                            <p>
                                                Usne wahan mera pre-birthday celebrate kiya, humne saath lunch
                                                kiya aur dher saari baatein ki. Wo pehli mulakaat aur wo baatein
                                                humesha yaadgar rahengi.
                                            </p>
                                        </HindiStoryModal>
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

export default WeadingDetails;