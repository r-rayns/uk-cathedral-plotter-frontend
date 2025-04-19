import type { LeafletPositionClass } from "@/models/leaflet";
import type { ReactNode } from 'react';

export function MapLegend({entries, position}: MapLegendProps) {

  return (
    <section className={["leaflet-control backdrop-blur-sm bg-white/50 m-4 p-4", ...position].join(' ')}>
      <h3>Legend</h3>
      <div className="flex flex-col gap-2">
        {entries.map(({label, icon}, index) => (
          <div key={index} className="flex items-center gap-2">
            {icon}
            {label}
          </div>
        ))}
      </div>
    </section>
  )
}

export interface MapLegendEntry {
  label: ReactNode;
  icon: ReactNode;
}

export interface MapLegendProps {
  entries: Array<MapLegendEntry>
  position: [( LeafletPositionClass.TOP | LeafletPositionClass.BOTTOM ), ( LeafletPositionClass.LEFT | LeafletPositionClass.RIGHT )]
}

