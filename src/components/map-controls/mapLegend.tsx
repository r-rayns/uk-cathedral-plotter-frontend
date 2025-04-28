import {  useState } from 'react';
import type {ReactNode} from 'react';

// To be used nested inside a MapControl component
export function MapLegend({entries,}: MapLegendProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function toggleCollapsed() {
    setIsCollapsed(!isCollapsed);
  }


  return (
    <div className="leaflet-bar leaflet-touch backdrop-blur-xs bg-blue-100/40 text-slate-800 py-1">
      <div
        onClick={toggleCollapsed}
        className="flex flex-row px-2 justify-between hover:backdrop-blur-xl gap-2 hover:cursor-pointer hover:text-black"
      >
        <h4 className="my-0 text-center">Legend</h4>
        <span
          className={`text-base transition-[rotate] duration-300 ${isCollapsed ? 'rotate-180' : 'rotate-0'}`}
        >
          ▲
        </span>
      </div>
      <div className={`flex flex-col gap-2 transition-[max-height] duration-500 ease-in-out px-2 scroll-gutter-stable
          ${isCollapsed
        ? 'max-h-0 overflow-y-hidden'
        : 'max-h-[300px] overflow-y-auto'}`
      }
      >
        {entries.map(({label, icon}, index) => (
          <div key={index} className="flex items-center gap-2">
            {icon}
            {label}
          </div>
        ))}
      </div>
    </div>
  )
}

export interface MapLegendProps {
  entries: Array<MapLegendEntry>;
}

export interface MapLegendEntry {
  label: ReactNode;
  icon: ReactNode;
}