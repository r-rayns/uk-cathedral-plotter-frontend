import { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import type { Cathedral } from '@/models/cathedrals.ts';
import type { MapLegendEntry } from '@/components/map-controls/mapLegend.tsx';
import { MapLegend } from '@/components/map-controls/mapLegend.tsx';
import type { ApiResponse } from '@/models/api-response.ts';
import CathedralMarker from '@/components/cathedralMarker.tsx';
import { SetMapBoundsToMarkers } from '@/utils/setMapBoundsToMarkers.tsx';
import { constructUrl, getDenominationColour } from '@/utils/helpers.tsx';
import { PlaceOfWorshipIcon } from '@/components/icons/placeOfWorshipIcon.tsx';
import { MapControl } from '@/components/mapControl.tsx';


export default function CathedralMap() {
  const [cathedrals, setCathedrals] = useState<Array<Cathedral>>([]);
  const [cathedralLegend, setCathedralLegend] = useState(Array<MapLegendEntry>);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchCathedrals = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(constructUrl('cathedrals'));
        const body: ApiResponse<Array<Cathedral>> = ( await res.json() ) ?? null;

        if (!res.ok) {
          console.error(`[${res.status}] Failed to fetch cathedrals: ${body.message ?? ''}`)
        }
        setCathedrals(body.data ?? []);
      } catch (err) {
        console.error('Unexpected error fetching cathedral data')
      } finally {
        setIsLoading(false);
      }
    };
    void fetchCathedrals()
  }, [])

  useEffect(() => {
    // Generate the legend entries, creating a label and icon for each denomination
    const uniqueDenominations = [...new Set(cathedrals.map(cathedral => cathedral.denomination))];
    const orderedDenominations = uniqueDenominations.sort();

    setCathedralLegend(orderedDenominations
      .map(denomination => ( {
          label: <span className="text-xs md:text-sm">{denomination}</span>,
          icon: <PlaceOfWorshipIcon
            fill={getDenominationColour(denomination)}
            className="w-4 h-4 md:w-6 md:h-6"
            title={`Legend icon for (denomination: ${denomination})`}/>
        } )
      ));
  }, [cathedrals]);


  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      {isLoading ? (
        <div className="h-full w-full flex items-center justify-center">
          <div className="text-lg font-semibold">Loading...</div>
        </div>
      ) : (
        <MapContainer center={[0, 0]}
                      zoom={13}
                      style={{height: "100%", width: "100%"}}>

          <SetMapBoundsToMarkers markers={cathedrals} padding={{x: 15, y: 15}}/>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapControl position="topright" disableClickPropagation={true}>
            <MapLegend entries={cathedralLegend}/>
          </MapControl>
          {cathedrals.map((cathedral, index) => (
            <CathedralMarker key={index}
                             cathedral={cathedral}/>
          ))}
        </MapContainer>

      )}

    </div>
  )
}

