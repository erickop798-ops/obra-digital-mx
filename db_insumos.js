// ObraDigitalMX - Modulo 1: Catalogo Base de Insumos 2026
// Precios Zona Centro (Promedio CDMX/Puebla/Tlaxcala). Sin IVA.
// Los salarios incluyen Factor de Salario Real (FASAR 1.65).
// CORREGIDO: const -> var (compatibilidad Windows file://)

var db_insumos = {
  materiales_base: {
    "cemento_cpc30r":    { precio: 215.00,  unidad: "bolsa 50kg",  descripcion: "Cemento Portland CPC 30R" },
    "cal_hidratada":     { precio: 97.00,   unidad: "bolsa 20kg",  descripcion: "Cal hidratada para construccion" },
    "arena_fina":        { precio: 400.00,  unidad: "m3",          descripcion: "Arena de rio cribada" },
    "grava_19mm":        { precio: 430.00,  unidad: "m3",          descripcion: "Grava triturada 19mm (3/4)" },
    "block_15x20x40":    { precio: 18.50,   unidad: "pieza",       descripcion: "Block hueco de concreto 15x20x40" },
    "tabique_rojo":      { precio: 6.50,    unidad: "pieza",       descripcion: "Tabique rojo recocido 7x14x28" },
    "panel_yeso_estandar":{ precio: 190.00, unidad: "pieza",       descripcion: "Tablaroca estandar 1.22x2.44m" },
    "concreto_f250":     { precio: 2450.00, unidad: "m3",          descripcion: "Concreto premezclado f'c=250 (Solo material)" }
  },

  acero: {
    "varilla_3_8":       { precio: 165.00,   unidad: "pieza 12m", peso_kg: 6.71,  descripcion: "Varilla corrugada No.3 (3/8)" },
    "varilla_1_2":       { precio: 290.00,   unidad: "pieza 12m", peso_kg: 11.97, descripcion: "Varilla corrugada No.4 (1/2)" },
    "acero_tonelada":    { precio: 20068.00, unidad: "ton",        descripcion: "Acero de refuerzo material puro (Ton)" },
    "malla_6x6_10_10":   { precio: 850.00,   unidad: "rollo 9m2", descripcion: "Malla electrosoldada 6x6-10/10" }
  },

  acabados: {
    "piso_economico":    { precio: 160.00, unidad: "m2",          descripcion: "Ceramica estandar 45x45" },
    "piso_estandar":     { precio: 310.00, unidad: "m2",          descripcion: "Porcelanato 60x60" },
    "piso_premium":      { precio: 950.00, unidad: "m2",          descripcion: "Marmol o gran formato lujo" },
    "pintura_vinilica":  { precio: 650.00, unidad: "cubeta 19L",  rendimiento_m2: 35, descripcion: "Pintura interior vinilica" },
    "impermeabilizante": { precio: 850.00, unidad: "cubeta 19L",  rendimiento_m2: 19, descripcion: "Impermeabilizante acrilico 5 anios" }, // <--- COMA AÑADIDA
    "muro_tablaroca_comercial": { precio: 380.00, unidad: "m2", descripcion: "Muro divisorio Tablaroca doble cara + aislante acustico" },
    "plafon_reticular":         { precio: 290.00, unidad: "m2", descripcion: "Plafon reticular comercial (falso techo) c/suspension" },
    "pintura_epoxica":          { precio: 1450.00, unidad: "cubeta 19L", rendimiento_m2: 25, descripcion: "Pintura epoxica alto trafico (Comercio/Sotanos)" }
  },

  instalaciones: {
    "tubo_pvc_san_4":    { precio: 215.00,  unidad: "tramo 6m",   descripcion: "Tubo PVC Sanitario 102mm (4 pulg)" },
    "tubo_cpvc_hid_1_2": { precio: 95.00,   unidad: "tramo 3m",   descripcion: "Tubo CPVC 13mm (1/2 pulg)" },
    "cable_thw_12":      { precio: 1550.00, unidad: "rollo 100m", descripcion: "Cable electrico THW cal. 12" },
    "kit_salida_electrica":{ precio: 380.00, unidad: "salida",    descripcion: "Poliducto, chalupa, cable y placa basica" }, // <--- COMA AÑADIDA
    "cable_trifasico":          { precio: 4200.00, unidad: "rollo 100m", descripcion: "Cable uso rudo/trifasico cal. 8" },
    "ducto_hvac_m2":            { precio: 550.00, unidad: "m2", descripcion: "Ducteria lamina galvanizada para Aire Acondicionado" },
    "salida_rociador_incendio": { precio: 850.00, unidad: "salida", descripcion: "Salida para aspersor (sprinkler) red contra incendio NTC" },
    "luminaria_panel_led":      { precio: 650.00, unidad: "pieza", descripcion: "Panel LED 60x60 comercial" }
  },

  mano_de_obra: {
    "peon":                { precio_dia: 520.00, unidad: "jornal", descripcion: "Peon (SMG $315 x FSR 1.65)" },
    "oficial_albanil":     { precio_dia: 600.00, unidad: "jornal", descripcion: "Albanil (SMP $363 x FSR 1.65)" },
    "oficial_electricista":{ precio_dia: 590.00, unidad: "jornal", descripcion: "Electricista (SMP $356 x FSR 1.65)" },
    "oficial_plomero":     { precio_dia: 590.00, unidad: "jornal", descripcion: "Plomero (SMP $356 x FSR 1.65)" },
    "oficial_pintor":      { precio_dia: 575.00, unidad: "jornal", descripcion: "Pintor (SMP $349 x FSR 1.65)" },
    "maestro_obra":        { precio_dia: 850.00, unidad: "jornal", descripcion: "Maestro de obra / Cabo de oficios" }
  }, // <--- COMA AÑADIDA (antes de equipamiento_especial)

  equipamiento_especial: {
    "elevador_pasajeros_4N":    { precio: 680000.00, unidad: "equipo", descripcion: "Elevador 6 personas (4 niveles) instalado" },
    "bomba_presurizadora_multi":{ precio: 28500.00, unidad: "equipo", descripcion: "Sistema hidroneumatico para multifamiliar" },
    "cisterna_prefabricada_10k":{ precio: 32000.00, unidad: "equipo", descripcion: "Cisterna 10,000L instalada c/excavacion basica" },
    "minisplit_2_toneladas":    { precio: 14500.00, unidad: "equipo", descripcion: "Aire Acondicionado Inverter 2 Toneladas instalado" }
  }
};