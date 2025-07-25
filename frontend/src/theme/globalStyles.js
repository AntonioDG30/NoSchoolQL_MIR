/**
 * STILI GLOBALI DELL'APPLICAZIONE
 * 
 * Definisco tutti gli stili CSS globali che vengono applicati
 * all'intera applicazione. Questo include:
 * - Reset e normalizzazione CSS
 * - Animazioni riutilizzabili
 * - Classi utility
 * - Stili per scrollbar personalizzate
 * - Media query per responsive design
 * 
 * Gli stili vengono iniettati dinamicamente nel DOM all'avvio.
 * 
 * @author Antonio Di Giorgio
 */

const stiliGlobali = `
  /* ===========================
     RESET E NORMALIZZAZIONE
     =========================== */
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    /* Transizioni globali per cambio tema */
    transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
  }

  body {
    /* Font stack ottimizzato per leggibilità su tutti i sistemi */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 0.3s ease, color 0.3s ease;
    overflow-x: hidden; /* Previene scroll orizzontale */
  }

  /* ===========================
     ANIMAZIONI KEYFRAMES
     =========================== */
  
  /* Fade in semplice */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  /* Slide in dal basso */
  @keyframes slideIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Slide in dal basso (più pronunciato) */
  @keyframes slideInDown {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Slide in dall'alto */
  @keyframes slideInUp {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Slide in da sinistra */
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-30px); }
    to { opacity: 1; transform: translateX(0); }
  }

  /* Slide in da destra */
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(30px); }
    to { opacity: 1; transform: translateX(0); }
  }

  /* Scale in (zoom) */
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
  }

  /* Effetto fluttuante */
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }

  /* Pulsazione */
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  /* Rotazione continua */
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Effetto shimmer per skeleton loading */
  @keyframes shimmer {
    0% { background-position: -1000px 0; }
    100% { background-position: 1000px 0; }
  }

  /* Effetto onda */
  @keyframes wave {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(20deg); }
    75% { transform: rotate(-20deg); }
  }

  /* Espansione verticale */
  @keyframes expandHeight {
    from {
      opacity: 0;
      max-height: 0;
      transform: scaleY(0);
    }
    to {
      opacity: 1;
      max-height: 1000px;
      transform: scaleY(1);
    }
  }

  /* ===========================
     CLASSI ANIMAZIONE
     =========================== */
  
  .animate-fade-in,
  .animate-fadeIn {
    animation: fadeIn 0.6s ease-out;
  }

  .animate-slideIn {
    animation: slideIn 0.6s ease-out;
  }

  .animate-slide-in-down {
    animation: slideInDown 0.6s ease-out;
  }

  .animate-slide-in-up {
    animation: slideInUp 0.6s ease-out;
  }

  .animate-slide-in-left,
  .animate-slideInLeft {
    animation: slideInLeft 0.6s ease-out;
  }

  .animate-slide-in-right {
    animation: slideInRight 0.6s ease-out;
  }

  .animate-scale-in,
  .animate-scaleIn {
    animation: scaleIn 0.6s ease-out;
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-pulse {
    animation: pulse 2s ease-in-out infinite;
  }

  .animate-spin {
    animation: spin 1s linear infinite;
  }

  .animate-rotate {
    animation: spin 20s linear infinite;
  }

  .animate-wave {
    animation: wave 2s ease-in-out infinite;
  }

  .animate-expand {
    animation: expandHeight 0.3s ease-out;
    transform-origin: top;
  }

  /* ===========================
     CLASSI UTILITY
     =========================== */
  
  /* Skeleton loading - tema chiaro */
  .skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 1000px 100%;
    animation: shimmer 2s infinite;
  }

  /* Skeleton loading - tema scuro */
  .skeleton-dark {
    background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
    background-size: 1000px 100%;
    animation: shimmer 2s infinite;
  }

  /* Effetto hover solleva elemento */
  .hover-lift {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .hover-lift:hover {
    transform: translateY(-6px);
  }

  /* Effetto vetro (glassmorphism) */
  .glass {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.1);
  }

  /* Testo con gradiente */
  .gradient-text {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* ===========================
     FOCUS E ACCESSIBILITÀ
     =========================== */
  
  /* Rimuovo outline default per stili custom */
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  /* ===========================
     RESPONSIVE UTILITIES
     =========================== */
  
  /* Mobile (max 768px) */
  @media (max-width: 768px) {
    .hide-mobile {
      display: none !important;
    }

    .mobile-stack {
      flex-direction: column !important;
    }

    .mobile-full-width {
      width: 100% !important;
    }
  }

  /* Tablet (max 1024px) */
  @media (max-width: 1024px) {
    .hide-tablet {
      display: none !important;
    }
  }

  /* ===========================
     SCROLLBAR PERSONALIZZATA
     =========================== */
  
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #94a3b8;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #64748b;
  }
`;

/**
 * Inietto gli stili globali nel DOM se non sono già presenti.
 * Verifico l'esistenza per evitare duplicazioni in hot reload.
 */
if (typeof document !== 'undefined' && !document.getElementById('global-styles')) {
  const foglioStili = document.createElement('style');
  foglioStili.id = 'global-styles';
  foglioStili.textContent = stiliGlobali;
  document.head.appendChild(foglioStili);
}