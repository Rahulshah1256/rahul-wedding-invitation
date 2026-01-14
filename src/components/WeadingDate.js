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

                        <img className="sindur-dan" src={sindurdan} alt="Sindur Dan"/>
                        <h5 className="date">{prettyWithSuffix}</h5>
                        <h3 className="pre-title">Save The Date</h3>
                        <h1 className="title">Rahul   <img className="sindur-dan" src={hand} alt="Sindur Dan"/> Sujata</h1>

                    </div>
			</div>
		</div>
	</div>
    );
}

export default WeadingDate;