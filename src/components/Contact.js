import React from 'react';
import wp from '../images/w.png'
import InstagramIcon from './InstagramIcon';
import FacebookIcon from './FacebookIcon';

const Contact = () => {
    return ( 
<footer id="contact">
		<div className="container center-text">
			<ul className="social-icons">
				<li><a href="https://www.instagram.com/its_rahul__shah?igsh=MWpjNmhvamQ0a3prZQ==" target="_blank" rel="noopener noreferrer"><InstagramIcon size={24} /></a></li>
				<li><a href="https://www.facebook.com/share/14T7MfjgHwA/" target="_blank" rel="noopener noreferrer"><FacebookIcon size={24} /></a></li>
				<li><a href="https://api.whatsapp.com/send/?phone=919089496572&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"><img alt="WP" src={wp} /></a></li>
			</ul>
		</div>
	</footer>
        );
    }

export default Contact;
