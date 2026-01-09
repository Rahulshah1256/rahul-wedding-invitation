import React from 'react';
import { MARRIAGE_DATE } from '../config';

const Weadingloaction = () => {
    const date = new Date(MARRIAGE_DATE);
    const weekday = date.toLocaleDateString(undefined, { weekday: 'long' });
    const day = date.getDate();
    const suffix = (day % 100 >= 11 && day % 100 <= 13)
        ? 'th'
        : (['th','st','nd','rd'][day % 10] || 'th');
    const monthYear = date.toLocaleDateString(undefined, { month: 'long', year: 'numeric' });
    const displayDate = `${weekday}, ${day}${suffix} ${monthYear}`;

    return ( <section className="section w-details-area center-text">
		<div className="container">
			<div className="row">
				<div className="col-sm-1"></div>
				<div className="col-sm-10">
					
					<div className="heading">
						<h2 className="title">Wedding & Reception Details</h2>
						<span className="heading-bottom"><i className="icon icon-star"></i></span>
					</div>
					
					<div className="wedding-details margin-bottom">
						
						<div className="w-detail right">
							<i className="icon icon-ciurclke"></i>
							<h4 className="title">WEDDING CEREMONY</h4>
                            <p>{displayDate}</p>
							<p>Tajpur Saraiya, Tetariya</p>


						</div>

						<div className="w-detail right">
							<i className="icon icon-wine-glass"></i>
							<h4 className="title">DINNER</h4>
							<p>Time: 10PM Onwards</p>
						</div> 
						
						<div className="w-detail left">
							<i className="icon icon-cake"></i>
							<h4 className="title">RECEPTION PARTY</h4>
							<p>{displayDate}</p>
							<p>Tajpur Saraiya, Tetariya</p>
                        </div>

						<div className="w-detail left">
							<i className="icon icon-wine-glass"></i>
							<h4 className="title">DINNER</h4>
							<p>Time: 7PM Onwards</p>
						</div> 
						
					</div>
					
				</div>
			</div>
		</div>
    </section>    
    );
}

export default Weadingloaction;