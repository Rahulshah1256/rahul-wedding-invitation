import React from 'react';

/**
 * Simple embedded Google Map.
 *
 * Update either the `placeQuery` (recommended) or replace `iframeSrc` completely.
 */
const GoogleMapLocation = ({
  title = 'Location',
  placeQuery = 'Paigambarpur, Muzaffarpur',
  height = 360,
}) => {
  // Uses the public embed endpoint (no API key required).
  const iframeSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    placeQuery
  )}&output=embed`;

  return (
    <section className="section w-details-area center-text" id="location">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="heading">
              <h2 className="title">{title}</h2>
              <span className="heading-bottom">
                <i className="icon icon-star"></i>
              </span>
            </div>
          </div>

          <div className="col-sm-12">
            <div style={{ borderRadius: 8, overflow: 'hidden' }}>
              <iframe
                title={title}
                src={iframeSrc}
                width="100%"
                height={height}
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMapLocation;

