import React from 'react';

/**
 * Simple embedded Google Map.
 *
 * Provide ONE of:
 * - `mapUrl`: Full Google Maps URL to embed (will be converted to an embed-friendly URL when possible)
 * - `coords`: { lat: number, lng: number }
 * - `placeQuery`: string (fallback)
 */
const GoogleMapLocation = ({
  title = 'Location',
  placeQuery = 'Paigambarpur, Muzaffarpur',
  coords,
  mapUrl,
  height = 360,
}) => {
  const buildEmbedSrc = () => {
    // 1) If a full URL was provided, try to embed it.
    if (mapUrl) {
      // Many “Share” URLs won’t embed directly; using the public q=...&output=embed endpoint is reliable.
      // If the URL contains an @lat,lng segment, extract coordinates from it.
      const atMatch = String(mapUrl).match(/@(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)/);
      if (atMatch) {
        const lat = atMatch[1];
        const lng = atMatch[2];
        return `https://www.google.com/maps?q=${encodeURIComponent(`${lat},${lng}`)}&output=embed`;
      }

      // Otherwise, attempt to extract explicit coordinate params like !3dLAT!4dLNG
      const bangMatch = String(mapUrl).match(/!3d(-?\d+(?:\.\d+)?)!4d(-?\d+(?:\.\d+)?)/);
      if (bangMatch) {
        const lat = bangMatch[1];
        const lng = bangMatch[2];
        return `https://www.google.com/maps?q=${encodeURIComponent(`${lat},${lng}`)}&output=embed`;
      }

      // Fallback: embed the URL as-is.
      return String(mapUrl);
    }

    // 2) If coordinates were provided, embed them.
    if (coords && typeof coords.lat === 'number' && typeof coords.lng === 'number') {
      return `https://www.google.com/maps?q=${encodeURIComponent(
        `${coords.lat},${coords.lng}`
      )}&output=embed`;
    }

    // 3) Fallback to place query.
    return `https://www.google.com/maps?q=${encodeURIComponent(placeQuery)}&output=embed`;
  };

  const iframeSrc = buildEmbedSrc();

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

