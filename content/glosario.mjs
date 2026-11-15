/**
 * Las palabras de la ley de tráfico, explicadas.
 *
 * Cada término lleva el número de su concepto en el anexo I de la Ley sobre
 * Tráfico, Circulación de Vehículos a Motor y Seguridad Vial (Real Decreto
 * Legislativo 6/2015), en la redacción vigente desde el 1 de octubre de 2026
 * (Real Decreto 518/2026). El texto se leyó el 15 de noviembre de 2026 en la
 * API de datos abiertos del BOE:
 * https://www.boe.es/datosabiertos/api/legislacion-consolidada/id/BOE-A-2015-11722/texto/bloque/ani
 *
 * `texto` es una explicación en lenguaje llano, no la definición literal.
 * `en` es un equivalente orientativo en inglés. `ojo` avisa de una confusión
 * con otra palabra de la lista. `concepto: null` señala un término que el
 * anexo I no define; entonces `referencia` dice dónde está su definición.
 * `nuevo` marca los conceptos que el Real Decreto 518/2026 cambió o añadió.
 *
 * Antes de cambiar una explicación, vuelve a leer el concepto en el BOE: una
 * explicación puede ser más corta que la ley, pero no decir otra cosa.
 */
/** El día en que se publicó la guía. No cambia. */
export const PUBLICADA_EL = '2026-11-15';
/** El último día en que las explicaciones se compararon con el texto del BOE. Cámbialo cada vez que se relean. */
export const LEIDO_EL = '2026-11-15';

export const FUENTES = [
  {
    titulo: 'BOE · Ley sobre Tráfico, Circulación de Vehículos a Motor y Seguridad Vial (Real Decreto Legislativo 6/2015), anexo I, texto consolidado',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722',
  },
  {
    titulo: 'BOE · Real Decreto 518/2026, de 24 de junio (cambia los conceptos 2, 59 y 74 a 77 y añade del 83 al 86; en vigor desde el 1 de octubre de 2026)',
    url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2026-13889',
  },
  {
    titulo: 'BOE · Reglamento General de Vehículos (Real Decreto 2822/1998), anexo II, apartado A, texto consolidado (la definición de vehículo de movilidad personal)',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1999-1826',
  },
];

export const SECCIONES = [
  {
    id: 'la-via',
    titulo: 'La vía y sus partes',
    entrada: 'Casi todas las normas dicen dónde se aplican con estas palabras. Conviene no mezclar dos: arcén y acera.',
    terminos: [
      { id: 'plataforma', termino: 'Plataforma', en: 'roadway including the shoulders', concepto: 54, texto: 'La parte de la carretera pensada para los vehículos: la calzada más los arcenes.' },
      { id: 'calzada', termino: 'Calzada', en: 'carriageway', concepto: 55, texto: 'La parte de la carretera por la que circulan los vehículos. Está formada por uno o varios carriles.', ojo: 'El arcén no forma parte de la calzada.' },
      { id: 'carril', termino: 'Carril', en: 'lane', concepto: 56, texto: 'Cada una de las bandas a lo largo en que se divide la calzada, con anchura suficiente para una fila de automóviles que no sean motocicletas. Puede estar marcado con líneas o no.' },
      { id: 'arcen', termino: 'Arcén', en: 'hard shoulder', concepto: 61, texto: 'La franja con firme pegada a la calzada. No está hecha para que circulen los automóviles, salvo en circunstancias excepcionales.', ojo: 'No es la acera. El arcén va junto a la calzada de una carretera; la acera es el sitio de los peatones.' },
      { id: 'acera', termino: 'Acera', en: 'pavement (sidewalk)', concepto: 58, texto: 'La zona a lo largo de la carretera, elevada o no, destinada al paso de los peatones.' },
      { id: 'zona-peatonal', termino: 'Zona peatonal', en: 'pedestrian area', concepto: 59, texto: 'La parte de la calle, elevada o delimitada de otra forma, reservada para que los peatones pasen y estén, con prioridad. Incluye las aceras, las plazas, los bulevares, los paseos, los andenes y otras zonas parecidas.', nuevo: true },
      { id: 'refugio', termino: 'Refugio', en: 'pedestrian refuge (island)', concepto: 60, texto: 'Una zona peatonal situada dentro de la calzada y protegida del tráfico.' },
      { id: 'interseccion', termino: 'Intersección', en: 'junction', concepto: 62, texto: 'El punto de la red donde se encuentran varias vías y todos los cruces entre vehículos se hacen al mismo nivel.' },
      { id: 'glorieta', termino: 'Glorieta', en: 'roundabout', concepto: 63, texto: 'Una intersección especial: los tramos que llegan se comunican por un anillo en el que se circula girando alrededor de una isleta central. Las «glorietas partidas», en las que dos tramos se conectan directamente a través de la isleta, no son glorietas propiamente dichas.' },
      { id: 'paso-a-nivel', termino: 'Paso a nivel', en: 'level crossing', concepto: 64, texto: 'El cruce, a la misma altura, entre una vía y una línea de ferrocarril que tiene su propia plataforma.' },
    ],
  },
  {
    id: 'tipos-de-via',
    titulo: 'Tipos de vía',
    entrada: 'Los límites de velocidad y muchas prohibiciones dependen de en cuál de estas vías estás.',
    terminos: [
      { id: 'carretera', termino: 'Carretera', en: 'road outside built-up areas', concepto: 65, texto: 'Vía pública pavimentada que está fuera de poblado. Hay una excepción: los tramos en travesía pasan por dentro de un poblado y también son carretera.' },
      { id: 'autopista', termino: 'Autopista', en: 'motorway', concepto: 66, texto: 'Carretera proyectada, construida y señalizada como autopista, solo para automóviles. Las propiedades vecinas no tienen acceso a ella, no cruza a nivel ninguna otra vía ni línea de ferrocarril, y cada sentido tiene su propia calzada, separada de la otra.' },
      { id: 'autovia', termino: 'Autovía', en: 'dual carriageway (autovía)', concepto: 67, texto: 'Como la autopista, no tiene cruces a nivel y cada sentido tiene su calzada separada. La definición cambia en dos cosas: las propiedades vecinas pueden tener un acceso limitado, y no se dice que sea solo para automóviles.', ojo: 'Autopista y autovía no son sinónimos, aunque se circule de forma parecida por las dos.' },
      { id: 'via-para-automoviles', termino: 'Vía para automóviles', en: 'road reserved for motor vehicles', concepto: 68, texto: 'Vía reservada solo a los automóviles, con una sola calzada y sin acceso desde las propiedades vecinas. Se señaliza con las señales S-3 y S-4.' },
      { id: 'carretera-convencional', termino: 'Carretera convencional', en: 'conventional road', concepto: 69, texto: 'La carretera que no es autopista, ni autovía, ni vía para automóviles.' },
      { id: 'poblado', termino: 'Poblado', en: 'built-up area', concepto: 70, texto: 'El espacio con edificios en cuyas vías de entrada y de salida están las señales de entrada a poblado y de salida de poblado.' },
      { id: 'travesia', termino: 'Travesía', en: 'stretch of road through a town', concepto: 71, texto: 'El tramo de una carretera que pasa por dentro de un poblado. No lo es el tramo que tiene una variante a la que se puede acceder.', ojo: 'Está dentro del poblado, pero no es una vía urbana: sigue siendo carretera.' },
      { id: 'via-interurbana', termino: 'Vía interurbana', en: 'interurban road', concepto: 72, texto: 'Vía pública situada fuera de poblado.' },
      { id: 'via-urbana', termino: 'Vía urbana', en: 'urban road', concepto: 73, texto: 'Vía pública situada dentro de poblado, excepto las travesías.' },
    ],
  },
  {
    id: 'parar',
    titulo: 'Parar el vehículo',
    entrada: 'Tres palabras para tres cosas distintas. Lo que las separa es el motivo, el tiempo y si el conductor se queda.',
    terminos: [
      { id: 'detencion', termino: 'Detención', en: 'stop forced by traffic or by a rule', concepto: 80, texto: 'Inmovilizar el vehículo por una emergencia, porque la circulación lo exige (un atasco) o para cumplir una norma (un semáforo en rojo, un stop).' },
      { id: 'parada', termino: 'Parada', en: 'stopping (under two minutes)', concepto: 81, texto: 'Inmovilizar el vehículo menos de dos minutos, sin que el conductor pueda abandonarlo.' },
      { id: 'estacionamiento', termino: 'Estacionamiento', en: 'parking', concepto: 82, texto: 'Cualquier inmovilización del vehículo que no sea ni detención ni parada.', ojo: 'La diferencia con la parada no es apagar el motor: son los dos minutos y que el conductor deje el vehículo.' },
    ],
  },
  {
    id: 'personas',
    titulo: 'Las personas',
    entrada: 'Quién es conductor y quién es peatón no siempre es evidente.',
    terminos: [
      { id: 'conductor', termino: 'Conductor', en: 'driver', concepto: 1, texto: 'Quien maneja la dirección o va al mando de un vehículo, o quien lleva a su cargo uno o varios animales. En un vehículo de autoescuela, se considera conductor a quien está a cargo de los mandos adicionales.' },
      { id: 'peaton', termino: 'Peatón', en: 'pedestrian', concepto: 4, texto: 'Quien va a pie por la vía sin ser conductor. También cuenta como peatón quien empuja o arrastra un cochecito de niño, la silla de una persona con discapacidad u otro vehículo pequeño sin motor; quien lleva a pie un ciclo o un ciclomotor de dos ruedas; y la persona con discapacidad que va al paso en silla de ruedas, con motor o sin él.', ojo: 'Quien camina empujando su bicicleta es peatón; en cuanto se sube, es conductor.' },
      { id: 'titular', termino: 'Titular del vehículo', en: 'registered keeper', concepto: 5, texto: 'La persona a cuyo nombre está inscrito el vehículo en el registro oficial.' },
      { id: 'conductor-habitual', termino: 'Conductor habitual', en: 'usual driver', concepto: 2, texto: 'La persona con permiso o licencia que, con su consentimiento, el titular (o quien tiene el vehículo en alquiler a largo plazo) comunica al Registro de Vehículos como la que lo conduce de manera usual o con más frecuencia. Si quien matricula un vehículo es una persona física sin autorización para conducir, tiene que designar un conductor habitual.', nuevo: true },
      { id: 'usuarios-vulnerables', termino: 'Usuarios vulnerables de la vía', en: 'vulnerable road users', concepto: 86, texto: 'Quienes, por el medio en que se desplazan o por su edad, corren más riesgo de sufrir lesiones, o lesiones más graves, en un accidente: los peatones (y entre ellos los menores, las personas mayores, con discapacidad o con movilidad reducida), los ciclistas, quienes conducen vehículos de movilidad personal y los conductores y pasajeros de motocicletas y ciclomotores.', nuevo: true },
    ],
  },
  {
    id: 'vehiculos',
    titulo: 'Los vehículos',
    entrada: 'En la ley, «automóvil» no significa «coche». De esa palabra cuelgan casi todas las demás.',
    terminos: [
      { id: 'vehiculo', termino: 'Vehículo', en: 'vehicle', concepto: 6, texto: 'Cualquier aparato apto para circular por las vías.' },
      { id: 'ciclo', termino: 'Ciclo', en: 'cycle', concepto: 7, texto: 'Vehículo de al menos dos ruedas que se mueve sobre todo con la fuerza de quien va encima, normalmente con pedales. Incluye los de pedaleo asistido.' },
      { id: 'bicicleta', termino: 'Bicicleta', en: 'bicycle', concepto: 8, texto: 'Un ciclo de dos ruedas.' },
      { id: 'ciclomotor', termino: 'Ciclomotor', en: 'moped', concepto: 9, texto: 'Vehículo de dos o tres ruedas que por construcción no pasa de 45 km/h, con motor de hasta 50 cm³ o, si es eléctrico, de hasta 4 kW. También lo son ciertos vehículos ligeros de cuatro ruedas con esos límites y hasta 350 kg en vacío.', ojo: 'Un ciclomotor no es un «vehículo de motor» para la ley, aunque tenga motor.' },
      { id: 'vehiculo-de-motor', termino: 'Vehículo de motor', en: 'motor vehicle', concepto: 12, texto: 'Vehículo con motor para moverse. La definición deja fuera a los ciclomotores, los tranvías y los vehículos para personas de movilidad reducida.' },
      { id: 'automovil', termino: 'Automóvil', en: 'motor vehicle for carrying people or goods', concepto: 13, texto: 'Vehículo de motor que sirve normalmente para llevar personas, cosas o las dos, o para arrastrar otros vehículos con ese fin. No incluye los vehículos especiales.', ojo: 'Una motocicleta, un autobús y un camión también son automóviles. El coche es un «turismo».' },
      { id: 'motocicleta', termino: 'Motocicleta', en: 'motorcycle', concepto: 14, texto: 'Automóvil de dos ruedas, o de tres con sidecar, con motor de combustión de más de 50 cm³, o que por construcción pasa de 45 km/h, o las dos cosas.' },
      { id: 'turismo', termino: 'Turismo', en: 'passenger car', concepto: 15, texto: 'Automóvil para llevar personas, con al menos cuatro ruedas y, como máximo, ocho plazas además de la del conductor. Es la palabra legal para «coche».' },
      { id: 'autobus', termino: 'Autobús o autocar', en: 'bus or coach', concepto: 16, texto: 'Automóvil de más de nueve plazas, contando la del conductor, hecho para llevar personas y su equipaje.' },
      { id: 'camion', termino: 'Camión', en: 'lorry (truck)', concepto: 18, texto: 'Automóvil de cuatro ruedas o más hecho para transportar mercancías, con la cabina separada del resto de la carrocería y nueve plazas como máximo, contando al conductor.' },
      { id: 'vehiculo-mixto', termino: 'Vehículo mixto adaptable', en: 'adaptable passenger-and-goods vehicle', concepto: 19, texto: 'Automóvil preparado para llevar mercancías y personas, a la vez o no, hasta nueve plazas contando al conductor, en el que la carga puede sustituirse en parte o del todo por asientos.' },
      { id: 'remolque', termino: 'Remolque', en: 'trailer', concepto: 20, texto: 'Vehículo sin motor hecho para que lo arrastre un vehículo de motor.' },
      { id: 'remolque-ligero', termino: 'Remolque ligero', en: 'light trailer', concepto: 21, texto: 'El remolque cuya masa máxima autorizada no pasa de 750 kg. Los agrícolas no entran en esta clasificación.' },
      { id: 'semirremolque', termino: 'Semirremolque', en: 'semi-trailer', concepto: 22, texto: 'Vehículo sin motor hecho para acoplarse a un automóvil, sobre el que apoya una parte de sí mismo y al que pasa una parte importante de su masa.' },
      { id: 'conjunto-de-vehiculos', termino: 'Conjunto de vehículos', en: 'combination of vehicles', concepto: 24, texto: 'Un vehículo de motor acoplado a un semirremolque (vehículo articulado) o enganchado a un remolque (tren de carretera).' },
      { id: 'vmp', termino: 'Vehículo de movilidad personal (VMP)', en: 'personal mobility vehicle (e-scooter)', concepto: null, referencia: 'Reglamento General de Vehículos, anexo II, apartado A', texto: 'El nombre legal del patinete eléctrico y de los vehículos parecidos: una o más ruedas, una sola plaza y solo motores eléctricos, con una velocidad máxima por diseño de entre 6 y 25 km/h. Solo puede llevar asiento si se equilibra solo. Las normas para circular con ellos están en el Reglamento General de Circulación (artículos 38.4 y 155).', ojo: 'Tampoco es un «vehículo de motor»: el Reglamento General de Vehículos lo deja fuera de esa definición, igual que al ciclomotor.' },
    ],
  },
  {
    id: 'masas',
    titulo: 'Las masas',
    entrada: 'Tres palabras que salen en las normas sobre remolques, permisos de conducir y límites de peso.',
    terminos: [
      { id: 'tara', termino: 'Tara', en: 'unladen mass (tare)', concepto: 35, texto: 'La masa del vehículo vacío: con su equipo fijo, todo su combustible, agua y lubricante, y sus repuestos, herramientas y accesorios reglamentarios, pero sin personas ni carga.' },
      { id: 'masa-en-carga', termino: 'Masa en carga', en: 'laden mass', concepto: 36, texto: 'La masa real del vehículo en un momento dado: el vehículo más su carga, sus pasajeros y el personal de servicio.' },
      { id: 'mma', termino: 'Masa máxima autorizada (MMA)', en: 'maximum authorised mass', concepto: 37, texto: 'La masa máxima con la que un vehículo cargado puede circular por las vías públicas.', ojo: 'La tara es lo que pesa vacío; la MMA, lo máximo que puede pesar cargado.' },
    ],
  },
  {
    id: 'luces',
    titulo: 'Las luces',
    entrada: 'La ley llama a cada luz por lo que hace, no por el nombre que se usa al hablar.',
    terminos: [
      { id: 'luz-de-carretera', termino: 'Luz de carretera o de largo alcance', en: 'main beam (high beam)', concepto: 40, texto: 'La que alumbra una distancia larga de la vía por delante del vehículo. Son «las largas».' },
      { id: 'luz-de-cruce', termino: 'Luz de cruce o de corto alcance', en: 'dipped beam (low beam)', concepto: 41, texto: 'La que alumbra la vía por delante sin deslumbrar ni molestar a quienes vienen de frente ni a los demás usuarios. Son «las cortas».' },
      { id: 'luz-de-posicion', termino: 'Luz de posición', en: 'position lights (side lights)', concepto: 42, hasta: 43, texto: 'Las que indican que el vehículo está ahí y lo ancho que es, visto desde delante o desde detrás.' },
      { id: 'luz-indicadora-de-direccion', termino: 'Luz indicadora de dirección', en: 'direction indicator', concepto: 46, texto: 'La que avisa a los demás de que el conductor quiere cambiar de dirección hacia la derecha o hacia la izquierda. Es «el intermitente».' },
      { id: 'senal-de-emergencia', termino: 'Señal de emergencia', en: 'hazard warning lights', concepto: 49, texto: 'Todos los intermitentes funcionando a la vez, para avisar de que el vehículo supone temporalmente un peligro para los demás.' },
      { id: 'antiniebla-delantera', termino: 'Luz antiniebla delantera', en: 'front fog light', concepto: 50, texto: 'La que mejora el alumbrado de la carretera con niebla, nevada, tormenta o nube de polvo.' },
      { id: 'antiniebla-trasera', termino: 'Luz antiniebla trasera', en: 'rear fog light', concepto: 51, texto: 'La que hace el vehículo más visible por detrás cuando la niebla es densa.' },
      { id: 'luz-de-galibo', termino: 'Luz de gálibo', en: 'end-outline marker light', concepto: 48, texto: 'La que se coloca lo más cerca posible del borde exterior más alto del vehículo para indicar su anchura total.' },
      { id: 'luz-de-estacionamiento', termino: 'Luz de estacionamiento', en: 'parking light', concepto: 53, texto: 'La que señala un vehículo estacionado en zona edificada; en ese caso sustituye a las luces de posición.' },
      { id: 'catadioptrico', termino: 'Catadióptrico', en: 'reflector', concepto: 44, texto: 'Dispositivo que hace visible el vehículo reflejando la luz que le llega de otra fuente, como los faros de otro vehículo.' },
    ],
  },
  {
    id: 'bicis-y-calles',
    titulo: 'Bicicletas, peatones y calles',
    entrada: 'Varias de estas definiciones cambiaron o llegaron con la reforma del 1 de octubre de 2026.',
    terminos: [
      { id: 'via-ciclista', termino: 'Vía ciclista', en: 'cycle way', concepto: 74, texto: 'Vía preparada para los ciclos, con su señalización y con anchura para que pasen con seguridad. Otros vehículos solo pueden usarla si la autoridad lo autoriza y lo señaliza.', nuevo: true },
      { id: 'carril-bici', termino: 'Carril-bici', en: 'cycle lane', concepto: 75, texto: 'Vía ciclista pegada a la calzada, en un sentido o en los dos.', nuevo: true },
      { id: 'carril-bici-protegido', termino: 'Carril-bici protegido', en: 'protected cycle lane', concepto: 76, texto: 'Carril-bici con elementos laterales que lo separan físicamente del resto de la calzada y de la acera.', nuevo: true },
      { id: 'acera-bici', termino: 'Acera-bici', en: 'cycle track on the pavement', concepto: 77, texto: 'Vía ciclista señalizada sobre la acera.', nuevo: true },
      { id: 'pista-bici', termino: 'Pista-bici', en: 'cycle path', concepto: 78, texto: 'Vía ciclista separada del tráfico de motor, con un trazado independiente de las carreteras.' },
      { id: 'senda-ciclable', termino: 'Senda ciclable', en: 'path shared by pedestrians and cycles', concepto: 79, texto: 'Vía para peatones y ciclos, separada del tráfico de motor, que va por espacios abiertos, parques, jardines o bosques.' },
      { id: 'plataforma-unica', termino: 'Zona con plataforma única de calzada y acera', en: 'single-surface street', concepto: 83, texto: 'Zona diseñada para favorecer al peatón, que tiene prioridad de paso en cualquier punto de la calzada. En ella la señalización se reduce al mínimo.', nuevo: true },
      { id: 'prioridad-residencial', termino: 'Zona o área de prioridad residencial', en: 'residential priority area', concepto: 84, texto: 'Área que el ayuntamiento delimita y regula para mantener su uso sostenible, con restricciones de acceso o de circulación para los vehículos de quienes no residen en ella, entre otras medidas.', nuevo: true },
      { id: 'camino-escolar', termino: 'Camino o ruta escolar seguro', en: 'safe school route', concepto: 85, texto: 'Conjunto de vías acondicionadas para que los niños y las niñas vayan al colegio andando, en transporte público o por medios no motorizados. Puede tener señales propias, límites de velocidad específicos y restricciones a los vehículos de motor.', nuevo: true },
    ],
  },
];

/** Parejas y tríos que conviene no confundir, para la cabecera de la guía. Cada uno enlaza a sus términos. */
export const PAREJAS = [
  { titulo: 'Detención, parada y estacionamiento', ids: ['detencion', 'parada', 'estacionamiento'] },
  { titulo: 'Arcén y acera', ids: ['arcen', 'acera'] },
  { titulo: 'Travesía y vía urbana', ids: ['travesia', 'via-urbana'] },
  { titulo: 'Autopista y autovía', ids: ['autopista', 'autovia'] },
  { titulo: 'Automóvil y turismo', ids: ['automovil', 'turismo'] },
  { titulo: 'Ciclo, bicicleta y ciclomotor', ids: ['ciclo', 'bicicleta', 'ciclomotor'] },
  { titulo: 'Tara y masa máxima autorizada', ids: ['tara', 'mma'] },
];
