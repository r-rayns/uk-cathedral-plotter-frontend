import { Marker, Popup } from 'react-leaflet';
import { divIcon } from 'leaflet';
import type { Cathedral } from '@/models/cathedrals.ts';
import { MarkerList } from '@/components/markerList.tsx';
import { placeOfWorshipMarkerIcon } from '@/components/marker-icons/placeOfWorshipMarkerIcon.tsx';
import { getDenominationColour } from '@/utils/helpers.tsx';

export default function CathedralMarker({cathedral}: CathedralMarkerProps) {
  const customIcon = divIcon({
    html: placeOfWorshipMarkerIcon(
      getDenominationColour(cathedral.denomination),
      `Cathedral map marker (Denomination ${cathedral.denomination})`
    ),
    className: 'cathedral-marker',
    iconSize: [32, 32],
    iconAnchor: [16, 16]
  });


  return (
    <Marker
      icon={customIcon}
      position={[cathedral.lat, cathedral.lng]}
      title={cathedral.name}>
      <Popup>
        <div>
          <h3>{cathedral.name}</h3>
          <MarkerList>
            <MarkerList.Term>Denomination</MarkerList.Term>
            <MarkerList.Detail>{cathedral.denomination}</MarkerList.Detail>
            <MarkerList.Term>Year of construction</MarkerList.Term>
            <MarkerList.Detail>{cathedral.yearOfConstruction}</MarkerList.Detail>
            <MarkerList.Term>Religion</MarkerList.Term>
            <MarkerList.Detail>{cathedral.religion}</MarkerList.Detail>
            <MarkerList.Term>Diocese</MarkerList.Term>
            <MarkerList.Detail>{cathedral.diocese}</MarkerList.Detail>
            <MarkerList.Term>Website</MarkerList.Term>
            <MarkerList.Detail>
              {cathedral.website !== 'Unknown' ? (
                <a href={cathedral.website}
                   target="_blank"
                   rel="noopener noreferrer">{cathedral.website}</a>
              ) : 'Unknown'}
            </MarkerList.Detail>
            {cathedral.architecturalStyles.length > 0 && (
              <>
                <MarkerList.Term>Architectural Styles</MarkerList.Term>
                <MarkerList.Detail>
                  <ul className="list-disc list-inside ml-4">
                    {cathedral.architecturalStyles.map((style, index) => (
                      <li key={index}>{style}</li>
                    ))}
                  </ul>
                </MarkerList.Detail>
              </>
            )}
          </MarkerList>
        </div>
      </Popup>
    </Marker>
  )

}

interface CathedralMarkerProps {
  cathedral: Cathedral;
}