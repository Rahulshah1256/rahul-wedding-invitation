import React from 'react';
import sindurdan from '../images/ap.png';
import hand from '../images/w22.png';
import '../WeadingDate.css';
import { MARRIAGE_DATE } from '../config';

const WeadingDate = () => {
    const date = new Date(MARRIAGE_DATE);
    const opts = { day: 'numeric', month: 'long', year: 'numeric' };
    const pretty = date.toLocaleDateString(undefined, opts);
    // Convert "11 December 2019" to "11th December 2019" for the previous style
    const day = date.getDate();
    const suffix = (day % 100 >= 11 && day % 100 <= 13)
        ? 'th'
        : (['th','st','nd','rd'][day % 10] || 'th');
    const prettyWithSuffix = pretty.replace(String(day), `${day}${suffix}`);

    return (
        <div className="main-slider" id="home">
            <div className="display-table center-text">
                <div className="display-table-cell">
                    <div className="slider-content">
                        <div className="saveDate-card">
                            <div className="saveDate-top">
                                <img className="sindur-dan" src={sindurdan} alt="Sindur Dan"/>
                            </div>

                            <div className="saveDate-mid">
                                <div className="saveDate-badge">Save the Date</div>
                                <h5 className="date saveDate-date">{prettyWithSuffix}</h5>
                            </div>

                            <div className="saveDate-names" aria-label="Couple names">
                                <span className="saveDate-name">Rahul</span>
                                <span className="saveDate-sep" aria-hidden="true">
                                    <img className="saveDate-hand" src={hand} alt=""/>
                                </span>
                                <span className="saveDate-name">Sujata</span>
                            </div>
                        </div>
                    </div>
			</div>
		</div>
	</div>
    );
}

export default WeadingDate;