
export function formatPrice(valorCentavos : number | 0) {
    const cotizacionDolar = 400; // Cotización del dólar en pesos argentinos
    const valorPesos = valorCentavos * (cotizacionDolar / 100)
    const formatoPesos = new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(valorPesos);
  
    return formatoPesos;
  }