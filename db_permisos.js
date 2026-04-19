// ================================================================
// ObraDigitalMX — Base de Datos de Permisos de Construccion
// db_permisos.js — Version 1.0.0 — Abril 2026
// ================================================================
// REGLAS: var siempre. Sin let, const, backticks, arrow functions.
// ================================================================

var DB_PERMISOS = {

  cdmx: {
    nombre: 'Ciudad de Mexico',
    tramites: [
      { doc: 'Manifestacion de Construccion Tipo A (obra menor menor a 60m2)', obligatorio: true, notas: 'Para obra menor sin DRO' },
      { doc: 'Manifestacion de Construccion Tipo B (obra 61-5000m2)', obligatorio: true, notas: 'Requiere DRO registrado SEDUVI' },
      { doc: 'Constancia de Alineamiento y Numero Oficial', obligatorio: true, notas: 'Tramitar en alcaldia correspondiente' },
      { doc: 'Certificado de Zonificacion de Uso de Suelo', obligatorio: true, notas: 'SEDUVI o ventanilla unica' },
      { doc: 'Proyecto arquitectonico firmado por DRO', obligatorio: true, notas: '5 tantos planos + version digital DWG' },
      { doc: 'Memoria descriptiva del proyecto', obligatorio: true, notas: 'Firmada por DRO y propietario' },
      { doc: 'Comprobante pago predial al corriente', obligatorio: true, notas: 'No mayor a 3 meses' },
      { doc: 'Identificacion oficial del propietario', obligatorio: true, notas: 'INE/Pasaporte vigente' },
      { doc: 'Escritura del predio (copia notariada)', obligatorio: true, notas: 'Inscrita en Registro Publico' },
      { doc: 'Estudio de mecanica de suelos', obligatorio: false, notas: 'Solo para obras mayores a 4 niveles o suelo blando' }
    ],
    dependencia: 'SEDUVI / Alcaldia correspondiente',
    tiempo: '30-60 dias habiles',
    costo: '$2,000 - $15,000 MXN segun m2'
  },

  jalisco: {
    nombre: 'Jalisco (Guadalajara)',
    tramites: [
      { doc: 'Solicitud de licencia de construccion', obligatorio: true, notas: 'Formato oficial DOP Guadalajara' },
      { doc: 'Constancia de alineamiento y numero oficial vigente', obligatorio: true, notas: 'Direccion de Obras Publicas' },
      { doc: 'Planos arquitectonicos escala 1:100 firmados DRO', obligatorio: true, notas: '4 juegos: plantas, fachadas, cortes' },
      { doc: 'Licencia de uso de suelo', obligatorio: true, notas: 'SEMADET o Ayuntamiento' },
      { doc: 'Comprobante pago impuesto predial corriente', obligatorio: true, notas: 'No mayor a 3 meses' },
      { doc: 'Identificacion oficial propietario', obligatorio: true, notas: 'INE/Pasaporte vigente' },
      { doc: 'Escritura o titulo de propiedad', obligatorio: true, notas: 'Copia certificada notario' },
      { doc: 'Calculo estructural firmado', obligatorio: false, notas: 'Sistema constructivo no tradicional o mayor a 3 niveles' }
    ],
    dependencia: 'Direccion de Obras Publicas Municipal',
    tiempo: '15-30 dias habiles',
    costo: '$1,500 - $10,000 MXN segun m2'
  },

  nuevo_leon: {
    nombre: 'Nuevo Leon (Monterrey)',
    tramites: [
      { doc: 'Solicitud de permiso de construccion', obligatorio: true, notas: 'SICODE Nuevo Leon en linea' },
      { doc: 'Croquis de localizacion georeferenciado', obligatorio: true, notas: 'Coordenadas GPS obligatorias desde 2024' },
      { doc: 'Planos arquitectonicos y estructurales', obligatorio: true, notas: 'Firmados DRO con numero de cedula' },
      { doc: 'Calculo estructural', obligatorio: true, notas: 'Obligatorio para toda obra nueva en NL' },
      { doc: 'Memoria descriptiva del proyecto', obligatorio: true, notas: 'Incluyendo sistema constructivo' },
      { doc: 'Comprobante predial al corriente', obligatorio: true, notas: 'Emitido por Tesoreria Municipal' },
      { doc: 'Escritura inscrita en RPP', obligatorio: true, notas: 'Registro Publico de la Propiedad NL' },
      { doc: 'DRO registrado ante municipio', obligatorio: true, notas: 'Cedula y registro vigente' }
    ],
    dependencia: 'SICODE / Secretaria de Desarrollo Sustentable NL',
    tiempo: '20-40 dias habiles',
    costo: '$2,000 - $18,000 MXN segun m2'
  },

  puebla: {
    nombre: 'Puebla',
    tramites: [
      { doc: 'Solicitud de licencia de construccion', obligatorio: true, notas: 'SEDUM Puebla o ventanilla municipal' },
      { doc: 'Licencia de uso de suelo vigente', obligatorio: true, notas: 'SEDUM o Direccion de Desarrollo Urbano' },
      { doc: 'Planos firmados por Director Responsable de Obra', obligatorio: true, notas: 'Arquitecto o ingeniero civil con cedula' },
      { doc: 'Memoria descriptiva del proyecto', obligatorio: true, notas: 'Incluyendo especificaciones de materiales' },
      { doc: 'Pago impuesto predial 5 anos al corriente', obligatorio: true, notas: 'Requisito especifico de Puebla' },
      { doc: 'Escritura o titulo de propiedad', obligatorio: true, notas: 'Registro Publico de Puebla' },
      { doc: 'Identificacion oficial vigente', obligatorio: true, notas: 'Propietario o representante legal' }
    ],
    dependencia: 'SEDUM / Direccion de Obras Publicas Municipal',
    tiempo: '20-35 dias habiles',
    costo: '$1,800 - $12,000 MXN segun m2'
  },

  tlaxcala: {
    nombre: 'Tlaxcala',
    tramites: [
      { doc: 'Solicitud de licencia de construccion', obligatorio: true, notas: 'SECOCOT Tlaxcala o presidencia municipal' },
      { doc: 'Constancia de alineamiento y numero oficial', obligatorio: true, notas: 'Presidencia municipal correspondiente' },
      { doc: 'Planos arquitectonicos firmados por profesionista', obligatorio: true, notas: 'Cedula profesional SECOCOT vigente' },
      { doc: 'Responsiva profesional o DRO', obligatorio: true, notas: 'Arquitecto o ingeniero con registro' },
      { doc: 'Comprobante predial vigente', obligatorio: true, notas: 'No mayor a 1 ano' },
      { doc: 'Escritura o titulo de propiedad', obligatorio: true, notas: 'Copia simple y cotejo' }
    ],
    dependencia: 'SECOCOT / Presidencia Municipal',
    tiempo: '10-25 dias habiles',
    costo: '$800 - $6,000 MXN segun m2'
  },

  veracruz: {
    nombre: 'Veracruz',
    tramites: [
      { doc: 'Solicitud de licencia de construccion', obligatorio: true, notas: 'SEDECOP o Obras Publicas Municipal' },
      { doc: 'Constancia de alineamiento y numero oficial', obligatorio: true, notas: 'Direccion de Obras Publicas' },
      { doc: 'Licencia de uso de suelo', obligatorio: true, notas: 'SEDESOL Veracruz o municipio' },
      { doc: 'Planos arquitectonicos firmados por DRO', obligatorio: true, notas: 'Arquitecto o ingeniero con cedula vigente' },
      { doc: 'Memoria descriptiva del proyecto', obligatorio: true, notas: 'Incluyendo especificaciones tecnicas' },
      { doc: 'Calculo estructural', obligatorio: false, notas: 'Requerido en zona costera o zona sismica alta' },
      { doc: 'Comprobante predial al corriente', obligatorio: true, notas: 'No mayor a 3 meses' },
      { doc: 'Escritura o titulo de propiedad', obligatorio: true, notas: 'Registro Publico de la Propiedad Veracruz' },
      { doc: 'Identificacion oficial vigente', obligatorio: true, notas: 'INE o pasaporte del propietario' }
    ],
    dependencia: 'SEDECOP / Direccion de Obras Publicas Municipal',
    tiempo: '20-40 dias habiles',
    costo: '$1,200 - $9,000 MXN segun m2'
  },

  guanajuato: {
    nombre: 'Guanajuato (Leon/Irapuato)',
    tramites: [
      { doc: 'Solicitud de licencia de construccion', obligatorio: true, notas: 'Formato IMUPLAN o Obras Publicas municipal' },
      { doc: 'Constancia de alineamiento y numero oficial vigente', obligatorio: true, notas: 'Direccion de Desarrollo Urbano' },
      { doc: 'Dictamen de uso de suelo', obligatorio: true, notas: 'IMUPLAN para Leon; municipio en otros' },
      { doc: 'Planos arquitectonicos y estructurales firmados', obligatorio: true, notas: '4 juegos firmados por DRO con cedula' },
      { doc: 'Memoria descriptiva del proyecto', obligatorio: true, notas: 'Sistema constructivo y especificaciones' },
      { doc: 'Comprobante predial al corriente', obligatorio: true, notas: 'No mayor a 6 meses' },
      { doc: 'Escritura o titulo de propiedad', obligatorio: true, notas: 'Copia certificada por notario publico' },
      { doc: 'Identificacion oficial vigente', obligatorio: true, notas: 'INE o pasaporte del propietario' },
      { doc: 'Calculo estructural', obligatorio: false, notas: 'Obligatorio para obra mayor a 2 niveles o mayor a 200m2' }
    ],
    dependencia: 'IMUPLAN / Direccion de Obras Publicas Municipal',
    tiempo: '15-30 dias habiles',
    costo: '$1,500 - $11,000 MXN segun m2'
  },

  queretaro: {
    nombre: 'Queretaro',
    tramites: [
      { doc: 'Solicitud de licencia de construccion', obligatorio: true, notas: 'SEDESU Queretaro o municipio correspondiente' },
      { doc: 'Constancia de alineamiento y numero oficial', obligatorio: true, notas: 'Obras Publicas Municipal' },
      { doc: 'Constancia de uso de suelo', obligatorio: true, notas: 'SEDESU o Desarrollo Urbano Municipal' },
      { doc: 'Planos arquitectonicos firmados por DRO', obligatorio: true, notas: 'Cedula profesional y registro municipal' },
      { doc: 'Memoria descriptiva del proyecto', obligatorio: true, notas: 'Incluyendo presupuesto estimado' },
      { doc: 'Calculo estructural firmado', obligatorio: true, notas: 'Obligatorio en Queretaro para toda obra nueva' },
      { doc: 'Comprobante predial al corriente', obligatorio: true, notas: 'No mayor a 3 meses' },
      { doc: 'Escritura del predio inscrita en RPP', obligatorio: true, notas: 'Registro Publico Queretaro' },
      { doc: 'Identificacion oficial vigente', obligatorio: true, notas: 'INE o pasaporte' }
    ],
    dependencia: 'SEDESU / Direccion de Obras Publicas Municipal',
    tiempo: '15-25 dias habiles',
    costo: '$1,800 - $13,000 MXN segun m2'
  },

  yucatan: {
    nombre: 'Yucatan (Merida)',
    tramites: [
      { doc: 'Solicitud de licencia de construccion', obligatorio: true, notas: 'IMPlan Merida o Obras Publicas Municipal' },
      { doc: 'Constancia de alineamiento y numero oficial', obligatorio: true, notas: 'Direccion de Desarrollo Urbano Merida' },
      { doc: 'Licencia de uso de suelo vigente', obligatorio: true, notas: 'IMPlan o municipio segun zona' },
      { doc: 'Planos arquitectonicos firmados por DRO', obligatorio: true, notas: '4 juegos: plantas, fachadas, cortes, instalaciones' },
      { doc: 'Memoria descriptiva del proyecto', obligatorio: true, notas: 'Incluyendo materiales y sistema constructivo' },
      { doc: 'Comprobante predial al corriente', obligatorio: true, notas: 'No mayor a 3 meses' },
      { doc: 'Escritura o titulo de propiedad', obligatorio: true, notas: 'Registro Publico Yucatan' },
      { doc: 'Identificacion oficial vigente', obligatorio: true, notas: 'INE o pasaporte del propietario' },
      { doc: 'Calculo estructural o responsiva', obligatorio: false, notas: 'Requerido para obra mayor a 3 niveles o zonas especiales' }
    ],
    dependencia: 'IMPlan / Direccion de Desarrollo Urbano Municipal',
    tiempo: '15-30 dias habiles',
    costo: '$1,200 - $10,000 MXN segun m2'
  },

  edomex: {
    nombre: 'Estado de Mexico (Toluca/Ecatepec)',
    tramites: [
      { doc: 'Solicitud de licencia de construccion', obligatorio: true, notas: 'Formato SEDUYM o Obras Publicas Municipal' },
      { doc: 'Constancia de alineamiento y numero oficial', obligatorio: true, notas: 'Direccion de Obras Publicas del municipio' },
      { doc: 'Certificado de zonificacion de uso de suelo', obligatorio: true, notas: 'SEDUYM o municipio segun tipo de obra' },
      { doc: 'Planos arquitectonicos firmados por DRO', obligatorio: true, notas: '5 juegos con firma y cedula profesional' },
      { doc: 'Memoria descriptiva y calculo estructural', obligatorio: true, notas: 'Obligatorio en todos los municipios del EdoMex' },
      { doc: 'Comprobante predial al corriente 2 anos', obligatorio: true, notas: 'Requisito especifico Estado de Mexico' },
      { doc: 'Escritura del predio inscrita en RPP', obligatorio: true, notas: 'Registro Publico del Estado de Mexico' },
      { doc: 'Identificacion oficial vigente', obligatorio: true, notas: 'INE o pasaporte del propietario' },
      { doc: 'Visto bueno de Proteccion Civil Municipal', obligatorio: false, notas: 'Requerido en municipios conurbados CDMX' }
    ],
    dependencia: 'SEDUYM / Direccion de Obras Publicas Municipal',
    tiempo: '25-45 dias habiles',
    costo: '$1,500 - $14,000 MXN segun m2'
  }

};
