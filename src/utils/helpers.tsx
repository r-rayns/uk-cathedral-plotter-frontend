import { camelCase } from 'lodash-es';

export function getDenominationColour(denomination: string) {
  let colour;
  const denominationCamelCase = camelCase(denomination);
  const denominationColours: Record<string, string> = {
    anglican: '#b31217',
    romanCatholic: '#d4af37',
    russianOrthodox: '#003366',
    churchOfScotland: '#005eb8',
    scottishEpiscopal: '#6a1b9a',
    episcopal: '#7f0000',
    syroMalabarCatholic: '#b95d00',
  };

  if (denominationCamelCase === 'unknown') {
    // For unknown denominations
    colour = '#333333';
  } else {
    // Use the matching colour if one is found, otherwise default to cyan
    colour = denominationColours[denominationCamelCase] ?? '#40e2ea';
  }

  return colour;
}

export function constructUrl(apiPath: string): string {
  /**
   * "import.meta.env.DEV" is a built-in env var set by Vite:
   * https://vite.dev/guide/env-and-mode.html#env-variables
   */
  const isDev = import.meta.env.DEV;
  let currentUrl = "";
  if (isDev) {
    currentUrl = import.meta.env.VITE_API_URL ?? "http://localhost:9212";
  } else if (typeof window !== "undefined") {
    currentUrl = window.location.origin;
  }
  const cleanPath = apiPath.startsWith('/') ? apiPath.slice(1) : apiPath;
  return `${currentUrl}/api/${cleanPath}`;
}