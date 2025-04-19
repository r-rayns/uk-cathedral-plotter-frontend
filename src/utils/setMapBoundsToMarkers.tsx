import { useMap } from 'react-leaflet';
import { useEffect } from 'react';
import { latLngBounds } from 'leaflet';

/**
 * Sets the map bounds to the bounds of the markers passed in. To be used within a React Leaflet MapContainer.
 * ref: https://react-leaflet.js.org/docs/example-view-bounds/
 */
export function SetMapBoundsToMarkers({markers, padding = {x: 10, y: 10}}: SetMapBoundsToMarkersProps) {
  const map = useMap();

  useEffect(() => {
    if (markers.length) {
      const markerBounds = latLngBounds(markers.map(marker => [marker.lat, marker.lng]));
      map.fitBounds(markerBounds, {padding: [padding.x, padding.y]})
    }
  }, [markers, map, padding])

  return null;
}

interface SetMapBoundsToMarkersProps {
  markers: Array<{ lat: number, lng: number }>;
  padding?: {
    x: number;
    y: number;
  }
}