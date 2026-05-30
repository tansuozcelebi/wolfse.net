// Inline SVG ikon seti (currentColor ile renklenir). Hafif, bağımlılıksız.
const s = (p, vb = "0 0 24 24") =>
  `<svg viewBox="${vb}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${p}</svg>`;

export const icons = {
  laser: s('<path d="M12 2v5"/><path d="M8.5 7h7l-2 6h-3z"/><path d="M12 13v5"/><path d="M7 22l2-4h6l2 4"/>'),
  sheet: s('<rect x="3" y="6" width="18" height="12" rx="1"/><path d="M3 10h18"/><path d="M7 14h.01M11 14h.01M15 14h.01"/>'),
  tube: s('<ellipse cx="6" cy="12" rx="2.2" ry="7"/><path d="M6 5h12"/><path d="M6 19h12"/><ellipse cx="18" cy="12" rx="2.2" ry="7"/>'),
  bend: s('<path d="M4 20V8a4 4 0 0 1 4-4h12"/><path d="M4 20h7"/><path d="M16 8l4-4-4-4" transform="translate(0 4)"/>'),
  weld: s('<path d="M3 17l7-7"/><path d="M10 10l4 4"/><path d="M14 14l7-7"/><path d="M5 19l2 2"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/>'),
  surface: s('<rect x="3" y="4" width="18" height="16" rx="1.5"/><path d="M3 9c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2"/><path d="M3 14c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2"/>'),
  custom: s('<path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 7.7l5.4-.8z"/>'),
  gear: s('<circle cx="12" cy="12" r="3.2"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>'),
  car: s('<path d="M3 13l2-5a2 2 0 0 1 1.9-1.3h10.2A2 2 0 0 1 19 8l2 5"/><path d="M3 13h18v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M6.5 16h.01M17.5 16h.01"/>'),
  building: s('<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h.01M13 7h.01M9 11h.01M13 11h.01M9 15h.01M13 15h.01"/><path d="M9 21v-3h4v3"/>'),
  energy: s('<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>'),
  tractor: s('<circle cx="7" cy="17" r="3"/><circle cx="18" cy="18" r="2"/><path d="M10 17h5"/><path d="M4 17v-5h6l1-4h4v9"/><path d="M14 8V5h3"/>'),
  deco: s('<path d="M12 3l3 4-3 4-3-4z"/><path d="M12 11l3 4-3 4-3-4z"/><path d="M5 9l2 3-2 3"/><path d="M19 9l-2 3 2 3"/>'),
  shield: s('<path d="M12 2l8 3v6c0 5-3.4 8.5-8 11-4.6-2.5-8-6-8-11V5z"/><path d="M9 12l2 2 4-4"/>'),
  measure: s('<rect x="2" y="8" width="20" height="8" rx="1"/><path d="M6 8v3M10 8v4M14 8v3M18 8v4"/>'),
  tools: s('<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2z"/>'),
  bolt: s('<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>'),
  clock: s('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
  file: s('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>'),
  target: s('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/>'),
  layers: s('<path d="M12 2l9 5-9 5-9-5z"/><path d="M3 12l9 5 9-5"/><path d="M3 17l9 5 9-5"/>'),
  cube: s('<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M12 12l9-5M12 12v10M12 12L3 7"/>'),
  handshake: s('<path d="M2 12l4-4 4 2 2-2 2 2 4-2 4 4"/><path d="M14 10l-2 2-2-2"/><path d="M6 16l3 3 2-2"/>'),
  check: s('<path d="M20 6L9 17l-5-5"/>'),
  arrow: s('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  phone: s('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L7.6 9.8a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"/>'),
  mail: s('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 6l10 7 10-7"/>'),
  pin: s('<path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>'),
  whatsapp: s('<path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2z"/><path d="M8.5 8c-.3 0-.7.1-1 .5s-1 1.2-1 2.7 1.1 3.1 1.3 3.3 2.2 3.5 5.4 4.8c2.7 1 2.7.7 3.2.7s1.7-.7 1.9-1.4.2-1.3.2-1.4-.3-.2-.6-.4-1.7-.9-2-1-.5-.1-.7.2-.8 1-1 1.2-.4.2-.7.1a6.6 6.6 0 0 1-2-1.2 7.4 7.4 0 0 1-1.3-1.7c-.1-.3 0-.4.2-.6l.4-.5c.1-.2.2-.3.3-.5s0-.4 0-.5-.7-1.8-1-2.4c-.2-.5-.4-.4-.6-.4z" fill="currentColor" stroke="none"/>'),
  star: s('<path d="M12 2l2.9 6 6.6.6-5 4.3 1.5 6.5L12 16.9 6 19.4l1.5-6.5-5-4.3 6.6-.6z"/>'),
  send: s('<path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4z"/>'),
  doc: s('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/>'),
  wolf: s('<path d="M3 4l4 3 2-2 3 4 3-4 2 2 4-3-1 7c0 5-3.5 8-8 9-4.5-1-8-4-8-9z"/><path d="M9 12h.01M15 12h.01M12 15l-1 1h2z" />'),
  menu: s('<path d="M3 6h18M3 12h18M3 18h18"/>'),
  close: s('<path d="M6 6l12 12M18 6L6 18"/>'),
};

export function icon(name, cls = "icon") {
  const svg = icons[name] || icons.bolt;
  return svg.replace("<svg ", `<svg class="${cls}" `);
}
