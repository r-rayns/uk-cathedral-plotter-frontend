import { useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';
import { createPortal } from 'react-dom';
import { Control, DomEvent, DomUtil } from 'leaflet';
import type {PropsWithChildren} from 'react';
import type { ControlPosition } from 'leaflet';

export interface MapControlProps {
  position: ControlPosition;
  disableClickPropagation?: boolean;
}

export function MapControl({position, disableClickPropagation, children}: PropsWithChildren<MapControlProps>) {
  const [container, setContainer] = useState<HTMLElement | null>(null);
  const map = useMap();

  useEffect(() => {
    // Create a new map control
    const mapControl = new Control({position});

    mapControl.onAdd = () => {
      const section = DomUtil.create('section');
      if (disableClickPropagation === true) {
        // All click events will stop at the control and not pass through to the map
        DomEvent.disableClickPropagation(section);
      }
      return section;
    };

    // Add the control to the map
    map.addControl(mapControl);

    // Store the container element to use in the portal
    setContainer(mapControl.getContainer() ?? null);

    // Clean up when the component unmounts
    return () => {
      map.removeControl(mapControl);
    };
  }, [map, position, disableClickPropagation]);

  return container ? createPortal(children, container) : null;
}
