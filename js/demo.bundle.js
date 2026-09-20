// Generado con node build.mjs
(()=>{const modules={};
modules["js/data/products.js"]=(()=>{
// Catálogo de demostración editable. No contiene datos de clientes ni conexiones SQL.
const productos = [
  {
    "id": 1,
    "nombre": "Camisa de Cuadros Negra",
    "categoria": "Camisas",
    "precio": 649,
    "precioOferta": null,
    "etiqueta": "",
    "descripcion": "Camisa de Cuadros Negra, una prenda versátil para combinar con tu estilo. Catálogo de demostración; precios y existencias de ejemplo.",
    "imagenPrincipal": "./assets/imagenes/CAM-CUA-NEG_1.jpg",
    "imagenes": [
      {
        "idImagen": 11,
        "ruta": "./assets/imagenes/CAM-CUA-NEG_1.jpg",
        "esPrincipal": true
      },
      {
        "idImagen": 12,
        "ruta": "./assets/imagenes/CAM-CUA-NEG_2.jpg",
        "esPrincipal": false
      },
      {
        "idImagen": 13,
        "ruta": "./assets/imagenes/CAM-CUA-NEG_3.jpg",
        "esPrincipal": false
      }
    ],
    "variantes": [
      {
        "idVariante": 11,
        "sku": "CAM-CUA-NEG-S",
        "talla": "S",
        "color": "Negro",
        "precio": 649,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 12,
        "sku": "CAM-CUA-NEG-M",
        "talla": "M",
        "color": "Negro",
        "precio": 649,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 13,
        "sku": "CAM-CUA-NEG-L",
        "talla": "L",
        "color": "Negro",
        "precio": 649,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 14,
        "sku": "CAM-CUA-NEG-XL",
        "talla": "XL",
        "color": "Negro",
        "precio": 649,
        "precioOferta": null,
        "stockDisponible": 5
      }
    ]
  },
  {
    "id": 2,
    "nombre": "Camisa Oxford Azul",
    "categoria": "Camisas",
    "precio": 649,
    "precioOferta": null,
    "etiqueta": "",
    "descripcion": "Camisa Oxford Azul, una prenda versátil para combinar con tu estilo. Catálogo de demostración; precios y existencias de ejemplo.",
    "imagenPrincipal": "./assets/imagenes/CAM-OXF-AZU_1.jpg",
    "imagenes": [
      {
        "idImagen": 21,
        "ruta": "./assets/imagenes/CAM-OXF-AZU_1.jpg",
        "esPrincipal": true
      },
      {
        "idImagen": 22,
        "ruta": "./assets/imagenes/CAM-OXF-AZU_2.jpg",
        "esPrincipal": false
      },
      {
        "idImagen": 23,
        "ruta": "./assets/imagenes/CAM-OXF-AZU_3.jpg",
        "esPrincipal": false
      }
    ],
    "variantes": [
      {
        "idVariante": 21,
        "sku": "CAM-OXF-AZU-S",
        "talla": "S",
        "color": "Azul",
        "precio": 649,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 22,
        "sku": "CAM-OXF-AZU-M",
        "talla": "M",
        "color": "Azul",
        "precio": 649,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 23,
        "sku": "CAM-OXF-AZU-L",
        "talla": "L",
        "color": "Azul",
        "precio": 649,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 24,
        "sku": "CAM-OXF-AZU-XL",
        "talla": "XL",
        "color": "Azul",
        "precio": 649,
        "precioOferta": null,
        "stockDisponible": 5
      }
    ]
  },
  {
    "id": 3,
    "nombre": "Camisa Oxford Blanca",
    "categoria": "Camisas",
    "precio": 649,
    "precioOferta": null,
    "etiqueta": "Nuevo",
    "descripcion": "Camisa Oxford Blanca, una prenda versátil para combinar con tu estilo. Catálogo de demostración; precios y existencias de ejemplo.",
    "imagenPrincipal": "./assets/imagenes/CAM-OXF-BLA_1.jpg",
    "imagenes": [
      {
        "idImagen": 31,
        "ruta": "./assets/imagenes/CAM-OXF-BLA_1.jpg",
        "esPrincipal": true
      },
      {
        "idImagen": 32,
        "ruta": "./assets/imagenes/CAM-OXF-BLA_2.jpg",
        "esPrincipal": false
      },
      {
        "idImagen": 33,
        "ruta": "./assets/imagenes/CAM-OXF-BLA_3.jpg",
        "esPrincipal": false
      }
    ],
    "variantes": [
      {
        "idVariante": 31,
        "sku": "CAM-OXF-BLA-S",
        "talla": "S",
        "color": "Blanco",
        "precio": 649,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 32,
        "sku": "CAM-OXF-BLA-M",
        "talla": "M",
        "color": "Blanco",
        "precio": 649,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 33,
        "sku": "CAM-OXF-BLA-L",
        "talla": "L",
        "color": "Blanco",
        "precio": 649,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 34,
        "sku": "CAM-OXF-BLA-XL",
        "talla": "XL",
        "color": "Blanco",
        "precio": 649,
        "precioOferta": null,
        "stockDisponible": 5
      }
    ]
  },
  {
    "id": 4,
    "nombre": "Chamarra Bomber Negra",
    "categoria": "Chamarras",
    "precio": 1099,
    "precioOferta": null,
    "etiqueta": "",
    "descripcion": "Chamarra Bomber Negra, una prenda versátil para combinar con tu estilo. Catálogo de demostración; precios y existencias de ejemplo.",
    "imagenPrincipal": "./assets/imagenes/CHA-BOM-NEG_1.jpg",
    "imagenes": [
      {
        "idImagen": 41,
        "ruta": "./assets/imagenes/CHA-BOM-NEG_1.jpg",
        "esPrincipal": true
      },
      {
        "idImagen": 42,
        "ruta": "./assets/imagenes/CHA-BOM-NEG_2.jpg",
        "esPrincipal": false
      },
      {
        "idImagen": 43,
        "ruta": "./assets/imagenes/CHA-BOM-NEG_3.jpg",
        "esPrincipal": false
      }
    ],
    "variantes": [
      {
        "idVariante": 41,
        "sku": "CHA-BOM-NEG-S",
        "talla": "S",
        "color": "Negro",
        "precio": 1099,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 42,
        "sku": "CHA-BOM-NEG-M",
        "talla": "M",
        "color": "Negro",
        "precio": 1099,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 43,
        "sku": "CHA-BOM-NEG-L",
        "talla": "L",
        "color": "Negro",
        "precio": 1099,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 44,
        "sku": "CHA-BOM-NEG-XL",
        "talla": "XL",
        "color": "Negro",
        "precio": 1099,
        "precioOferta": null,
        "stockDisponible": 5
      }
    ]
  },
  {
    "id": 5,
    "nombre": "Chamarra Bomber Verde",
    "categoria": "Chamarras",
    "precio": 1099,
    "precioOferta": null,
    "etiqueta": "",
    "descripcion": "Chamarra Bomber Verde, una prenda versátil para combinar con tu estilo. Catálogo de demostración; precios y existencias de ejemplo.",
    "imagenPrincipal": "./assets/imagenes/CHA-BOM-VER_1.jpg",
    "imagenes": [
      {
        "idImagen": 51,
        "ruta": "./assets/imagenes/CHA-BOM-VER_1.jpg",
        "esPrincipal": true
      },
      {
        "idImagen": 52,
        "ruta": "./assets/imagenes/CHA-BOM-VER_2.jpg",
        "esPrincipal": false
      },
      {
        "idImagen": 53,
        "ruta": "./assets/imagenes/CHA-BOM-VER_3.jpg",
        "esPrincipal": false
      }
    ],
    "variantes": [
      {
        "idVariante": 51,
        "sku": "CHA-BOM-VER-S",
        "talla": "S",
        "color": "Verde",
        "precio": 1099,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 52,
        "sku": "CHA-BOM-VER-M",
        "talla": "M",
        "color": "Verde",
        "precio": 1099,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 53,
        "sku": "CHA-BOM-VER-L",
        "talla": "L",
        "color": "Verde",
        "precio": 1099,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 54,
        "sku": "CHA-BOM-VER-XL",
        "talla": "XL",
        "color": "Verde",
        "precio": 1099,
        "precioOferta": null,
        "stockDisponible": 5
      }
    ]
  },
  {
    "id": 6,
    "nombre": "Chamarra Denim Azul",
    "categoria": "Chamarras",
    "precio": 1099,
    "precioOferta": null,
    "etiqueta": "Nuevo",
    "descripcion": "Chamarra Denim Azul, una prenda versátil para combinar con tu estilo. Catálogo de demostración; precios y existencias de ejemplo.",
    "imagenPrincipal": "./assets/imagenes/CHA-DEN-AZU_1.jpg",
    "imagenes": [
      {
        "idImagen": 61,
        "ruta": "./assets/imagenes/CHA-DEN-AZU_1.jpg",
        "esPrincipal": true
      },
      {
        "idImagen": 62,
        "ruta": "./assets/imagenes/CHA-DEN-AZU_2.jpg",
        "esPrincipal": false
      },
      {
        "idImagen": 63,
        "ruta": "./assets/imagenes/CHA-DEN-AZU_3.jpg",
        "esPrincipal": false
      }
    ],
    "variantes": [
      {
        "idVariante": 61,
        "sku": "CHA-DEN-AZU-S",
        "talla": "S",
        "color": "Azul",
        "precio": 1099,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 62,
        "sku": "CHA-DEN-AZU-M",
        "talla": "M",
        "color": "Azul",
        "precio": 1099,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 63,
        "sku": "CHA-DEN-AZU-L",
        "talla": "L",
        "color": "Azul",
        "precio": 1099,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 64,
        "sku": "CHA-DEN-AZU-XL",
        "talla": "XL",
        "color": "Azul",
        "precio": 1099,
        "precioOferta": null,
        "stockDisponible": 5
      }
    ]
  },
  {
    "id": 7,
    "nombre": "Pantalón Cargo Beige",
    "categoria": "Pantalones",
    "precio": 749,
    "precioOferta": 649,
    "etiqueta": "Oferta",
    "descripcion": "Pantalón Cargo Beige, una prenda versátil para combinar con tu estilo. Catálogo de demostración; precios y existencias de ejemplo.",
    "imagenPrincipal": "./assets/imagenes/PAN-CAR-BEI_1.jpg",
    "imagenes": [
      {
        "idImagen": 71,
        "ruta": "./assets/imagenes/PAN-CAR-BEI_1.jpg",
        "esPrincipal": true
      },
      {
        "idImagen": 72,
        "ruta": "./assets/imagenes/PAN-CAR-BEI_2.jpg",
        "esPrincipal": false
      },
      {
        "idImagen": 73,
        "ruta": "./assets/imagenes/PAN-CAR-BEI_3.jpg",
        "esPrincipal": false
      }
    ],
    "variantes": [
      {
        "idVariante": 71,
        "sku": "PAN-CAR-BEI-S",
        "talla": "S",
        "color": "Beige",
        "precio": 749,
        "precioOferta": 649,
        "stockDisponible": 12
      },
      {
        "idVariante": 72,
        "sku": "PAN-CAR-BEI-M",
        "talla": "M",
        "color": "Beige",
        "precio": 749,
        "precioOferta": 649,
        "stockDisponible": 12
      },
      {
        "idVariante": 73,
        "sku": "PAN-CAR-BEI-L",
        "talla": "L",
        "color": "Beige",
        "precio": 749,
        "precioOferta": 649,
        "stockDisponible": 12
      },
      {
        "idVariante": 74,
        "sku": "PAN-CAR-BEI-XL",
        "talla": "XL",
        "color": "Beige",
        "precio": 749,
        "precioOferta": 649,
        "stockDisponible": 5
      }
    ]
  },
  {
    "id": 8,
    "nombre": "Pantalón Cargo Negro",
    "categoria": "Pantalones",
    "precio": 749,
    "precioOferta": null,
    "etiqueta": "",
    "descripcion": "Pantalón Cargo Negro, una prenda versátil para combinar con tu estilo. Catálogo de demostración; precios y existencias de ejemplo.",
    "imagenPrincipal": "./assets/imagenes/PAN-CAR-NEG_1.jpg",
    "imagenes": [
      {
        "idImagen": 81,
        "ruta": "./assets/imagenes/PAN-CAR-NEG_1.jpg",
        "esPrincipal": true
      },
      {
        "idImagen": 82,
        "ruta": "./assets/imagenes/PAN-CAR-NEG_2.jpg",
        "esPrincipal": false
      },
      {
        "idImagen": 83,
        "ruta": "./assets/imagenes/PAN-CAR-NEG_3.jpg",
        "esPrincipal": false
      }
    ],
    "variantes": [
      {
        "idVariante": 81,
        "sku": "PAN-CAR-NEG-S",
        "talla": "S",
        "color": "Negro",
        "precio": 749,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 82,
        "sku": "PAN-CAR-NEG-M",
        "talla": "M",
        "color": "Negro",
        "precio": 749,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 83,
        "sku": "PAN-CAR-NEG-L",
        "talla": "L",
        "color": "Negro",
        "precio": 749,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 84,
        "sku": "PAN-CAR-NEG-XL",
        "talla": "XL",
        "color": "Negro",
        "precio": 749,
        "precioOferta": null,
        "stockDisponible": 5
      }
    ]
  },
  {
    "id": 9,
    "nombre": "Pantalón Jogger Gris",
    "categoria": "Pantalones",
    "precio": 749,
    "precioOferta": null,
    "etiqueta": "Nuevo",
    "descripcion": "Pantalón Jogger Gris, una prenda versátil para combinar con tu estilo. Catálogo de demostración; precios y existencias de ejemplo.",
    "imagenPrincipal": "./assets/imagenes/PAN-JOG-GRI_1.jpg",
    "imagenes": [
      {
        "idImagen": 91,
        "ruta": "./assets/imagenes/PAN-JOG-GRI_1.jpg",
        "esPrincipal": true
      },
      {
        "idImagen": 92,
        "ruta": "./assets/imagenes/PAN-JOG-GRI_2.jpg",
        "esPrincipal": false
      },
      {
        "idImagen": 93,
        "ruta": "./assets/imagenes/PAN-JOG-GRI_3.jpg",
        "esPrincipal": false
      }
    ],
    "variantes": [
      {
        "idVariante": 91,
        "sku": "PAN-JOG-GRI-S",
        "talla": "S",
        "color": "Gris",
        "precio": 749,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 92,
        "sku": "PAN-JOG-GRI-M",
        "talla": "M",
        "color": "Gris",
        "precio": 749,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 93,
        "sku": "PAN-JOG-GRI-L",
        "talla": "L",
        "color": "Gris",
        "precio": 749,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 94,
        "sku": "PAN-JOG-GRI-XL",
        "talla": "XL",
        "color": "Gris",
        "precio": 749,
        "precioOferta": null,
        "stockDisponible": 5
      }
    ]
  },
  {
    "id": 10,
    "nombre": "Pantalón Jogger Negro",
    "categoria": "Pantalones",
    "precio": 749,
    "precioOferta": null,
    "etiqueta": "",
    "descripcion": "Pantalón Jogger Negro, una prenda versátil para combinar con tu estilo. Catálogo de demostración; precios y existencias de ejemplo.",
    "imagenPrincipal": "./assets/imagenes/PAN-JOG-NEG_1.jpg",
    "imagenes": [
      {
        "idImagen": 101,
        "ruta": "./assets/imagenes/PAN-JOG-NEG_1.jpg",
        "esPrincipal": true
      },
      {
        "idImagen": 102,
        "ruta": "./assets/imagenes/PAN-JOG-NEG_2.jpg",
        "esPrincipal": false
      },
      {
        "idImagen": 103,
        "ruta": "./assets/imagenes/PAN-JOG-NEG_3.jpg",
        "esPrincipal": false
      }
    ],
    "variantes": [
      {
        "idVariante": 101,
        "sku": "PAN-JOG-NEG-S",
        "talla": "S",
        "color": "Negro",
        "precio": 749,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 102,
        "sku": "PAN-JOG-NEG-M",
        "talla": "M",
        "color": "Negro",
        "precio": 749,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 103,
        "sku": "PAN-JOG-NEG-L",
        "talla": "L",
        "color": "Negro",
        "precio": 749,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 104,
        "sku": "PAN-JOG-NEG-XL",
        "talla": "XL",
        "color": "Negro",
        "precio": 749,
        "precioOferta": null,
        "stockDisponible": 5
      }
    ]
  },
  {
    "id": 11,
    "nombre": "Playera Básica Azul",
    "categoria": "Playeras",
    "precio": 399,
    "precioOferta": null,
    "etiqueta": "",
    "descripcion": "Playera Básica Azul, una prenda versátil para combinar con tu estilo. Catálogo de demostración; precios y existencias de ejemplo.",
    "imagenPrincipal": "./assets/imagenes/PLY-BAS-AZU_1.jpg",
    "imagenes": [
      {
        "idImagen": 111,
        "ruta": "./assets/imagenes/PLY-BAS-AZU_1.jpg",
        "esPrincipal": true
      },
      {
        "idImagen": 112,
        "ruta": "./assets/imagenes/PLY-BAS-AZU_2.jpg",
        "esPrincipal": false
      },
      {
        "idImagen": 113,
        "ruta": "./assets/imagenes/PLY-BAS-AZU_3.jpg",
        "esPrincipal": false
      }
    ],
    "variantes": [
      {
        "idVariante": 111,
        "sku": "PLY-BAS-AZU-S",
        "talla": "S",
        "color": "Azul",
        "precio": 399,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 112,
        "sku": "PLY-BAS-AZU-M",
        "talla": "M",
        "color": "Azul",
        "precio": 399,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 113,
        "sku": "PLY-BAS-AZU-L",
        "talla": "L",
        "color": "Azul",
        "precio": 399,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 114,
        "sku": "PLY-BAS-AZU-XL",
        "talla": "XL",
        "color": "Azul",
        "precio": 399,
        "precioOferta": null,
        "stockDisponible": 5
      }
    ]
  },
  {
    "id": 12,
    "nombre": "Playera Oversize Beige",
    "categoria": "Playeras",
    "precio": 399,
    "precioOferta": null,
    "etiqueta": "Nuevo",
    "descripcion": "Playera Oversize Beige, una prenda versátil para combinar con tu estilo. Catálogo de demostración; precios y existencias de ejemplo.",
    "imagenPrincipal": "./assets/imagenes/PLY-OV-BEI_1.jpg",
    "imagenes": [
      {
        "idImagen": 121,
        "ruta": "./assets/imagenes/PLY-OV-BEI_1.jpg",
        "esPrincipal": true
      },
      {
        "idImagen": 122,
        "ruta": "./assets/imagenes/PLY-OV-BEI_2.jpg",
        "esPrincipal": false
      },
      {
        "idImagen": 123,
        "ruta": "./assets/imagenes/PLY-OV-BEI_3.jpg",
        "esPrincipal": false
      }
    ],
    "variantes": [
      {
        "idVariante": 121,
        "sku": "PLY-OV-BEI-S",
        "talla": "S",
        "color": "Beige",
        "precio": 399,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 122,
        "sku": "PLY-OV-BEI-M",
        "talla": "M",
        "color": "Beige",
        "precio": 399,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 123,
        "sku": "PLY-OV-BEI-L",
        "talla": "L",
        "color": "Beige",
        "precio": 399,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 124,
        "sku": "PLY-OV-BEI-XL",
        "talla": "XL",
        "color": "Beige",
        "precio": 399,
        "precioOferta": null,
        "stockDisponible": 5
      }
    ]
  },
  {
    "id": 13,
    "nombre": "Playera Oversize Blanca",
    "categoria": "Playeras",
    "precio": 399,
    "precioOferta": null,
    "etiqueta": "",
    "descripcion": "Playera Oversize Blanca, una prenda versátil para combinar con tu estilo. Catálogo de demostración; precios y existencias de ejemplo.",
    "imagenPrincipal": "./assets/imagenes/PLY-OV-BLA_1.jpg",
    "imagenes": [
      {
        "idImagen": 131,
        "ruta": "./assets/imagenes/PLY-OV-BLA_1.jpg",
        "esPrincipal": true
      },
      {
        "idImagen": 132,
        "ruta": "./assets/imagenes/PLY-OV-BLA_2.jpg",
        "esPrincipal": false
      },
      {
        "idImagen": 133,
        "ruta": "./assets/imagenes/PLY-OV-BLA_3.jpg",
        "esPrincipal": false
      }
    ],
    "variantes": [
      {
        "idVariante": 131,
        "sku": "PLY-OV-BLA-S",
        "talla": "S",
        "color": "Blanco",
        "precio": 399,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 132,
        "sku": "PLY-OV-BLA-M",
        "talla": "M",
        "color": "Blanco",
        "precio": 399,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 133,
        "sku": "PLY-OV-BLA-L",
        "talla": "L",
        "color": "Blanco",
        "precio": 399,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 134,
        "sku": "PLY-OV-BLA-XL",
        "talla": "XL",
        "color": "Blanco",
        "precio": 399,
        "precioOferta": null,
        "stockDisponible": 5
      }
    ]
  },
  {
    "id": 14,
    "nombre": "Playera Oversize Negra",
    "categoria": "Playeras",
    "precio": 399,
    "precioOferta": 299,
    "etiqueta": "Oferta",
    "descripcion": "Playera Oversize Negra, una prenda versátil para combinar con tu estilo. Catálogo de demostración; precios y existencias de ejemplo.",
    "imagenPrincipal": "./assets/imagenes/PLY-OV-NEG_1.jpg",
    "imagenes": [
      {
        "idImagen": 141,
        "ruta": "./assets/imagenes/PLY-OV-NEG_1.jpg",
        "esPrincipal": true
      },
      {
        "idImagen": 142,
        "ruta": "./assets/imagenes/PLY-OV-NEG_2.jpg",
        "esPrincipal": false
      },
      {
        "idImagen": 143,
        "ruta": "./assets/imagenes/PLY-OV-NEG_3.jpg",
        "esPrincipal": false
      }
    ],
    "variantes": [
      {
        "idVariante": 141,
        "sku": "PLY-OV-NEG-S",
        "talla": "S",
        "color": "Negro",
        "precio": 399,
        "precioOferta": 299,
        "stockDisponible": 12
      },
      {
        "idVariante": 142,
        "sku": "PLY-OV-NEG-M",
        "talla": "M",
        "color": "Negro",
        "precio": 399,
        "precioOferta": 299,
        "stockDisponible": 12
      },
      {
        "idVariante": 143,
        "sku": "PLY-OV-NEG-L",
        "talla": "L",
        "color": "Negro",
        "precio": 399,
        "precioOferta": 299,
        "stockDisponible": 12
      },
      {
        "idVariante": 144,
        "sku": "PLY-OV-NEG-XL",
        "talla": "XL",
        "color": "Negro",
        "precio": 399,
        "precioOferta": 299,
        "stockDisponible": 5
      }
    ]
  },
  {
    "id": 15,
    "nombre": "Short Cargo Beige",
    "categoria": "Shorts",
    "precio": 399,
    "precioOferta": null,
    "etiqueta": "Nuevo",
    "descripcion": "Short Cargo Beige, una prenda versátil para combinar con tu estilo. Catálogo de demostración; precios y existencias de ejemplo.",
    "imagenPrincipal": "./assets/imagenes/SHO-CAR-BEI_1.jpg",
    "imagenes": [
      {
        "idImagen": 151,
        "ruta": "./assets/imagenes/SHO-CAR-BEI_1.jpg",
        "esPrincipal": true
      },
      {
        "idImagen": 152,
        "ruta": "./assets/imagenes/SHO-CAR-BEI_2.jpg",
        "esPrincipal": false
      },
      {
        "idImagen": 153,
        "ruta": "./assets/imagenes/SHO-CAR-BEI_3.jpg",
        "esPrincipal": false
      }
    ],
    "variantes": [
      {
        "idVariante": 151,
        "sku": "SHO-CAR-BEI-S",
        "talla": "S",
        "color": "Beige",
        "precio": 399,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 152,
        "sku": "SHO-CAR-BEI-M",
        "talla": "M",
        "color": "Beige",
        "precio": 399,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 153,
        "sku": "SHO-CAR-BEI-L",
        "talla": "L",
        "color": "Beige",
        "precio": 399,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 154,
        "sku": "SHO-CAR-BEI-XL",
        "talla": "XL",
        "color": "Beige",
        "precio": 399,
        "precioOferta": null,
        "stockDisponible": 5
      }
    ]
  },
  {
    "id": 16,
    "nombre": "Short Cargo Negro",
    "categoria": "Shorts",
    "precio": 399,
    "precioOferta": null,
    "etiqueta": "",
    "descripcion": "Short Cargo Negro, una prenda versátil para combinar con tu estilo. Catálogo de demostración; precios y existencias de ejemplo.",
    "imagenPrincipal": "./assets/imagenes/SHO-CAR-NEG_1.jpg",
    "imagenes": [
      {
        "idImagen": 161,
        "ruta": "./assets/imagenes/SHO-CAR-NEG_1.jpg",
        "esPrincipal": true
      },
      {
        "idImagen": 162,
        "ruta": "./assets/imagenes/SHO-CAR-NEG_2.jpg",
        "esPrincipal": false
      },
      {
        "idImagen": 163,
        "ruta": "./assets/imagenes/SHO-CAR-NEG_3.jpg",
        "esPrincipal": false
      }
    ],
    "variantes": [
      {
        "idVariante": 161,
        "sku": "SHO-CAR-NEG-S",
        "talla": "S",
        "color": "Negro",
        "precio": 399,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 162,
        "sku": "SHO-CAR-NEG-M",
        "talla": "M",
        "color": "Negro",
        "precio": 399,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 163,
        "sku": "SHO-CAR-NEG-L",
        "talla": "L",
        "color": "Negro",
        "precio": 399,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 164,
        "sku": "SHO-CAR-NEG-XL",
        "talla": "XL",
        "color": "Negro",
        "precio": 399,
        "precioOferta": null,
        "stockDisponible": 5
      }
    ]
  },
  {
    "id": 17,
    "nombre": "Short Deportivo Gris",
    "categoria": "Shorts",
    "precio": 399,
    "precioOferta": null,
    "etiqueta": "",
    "descripcion": "Short Deportivo Gris, una prenda versátil para combinar con tu estilo. Catálogo de demostración; precios y existencias de ejemplo.",
    "imagenPrincipal": "./assets/imagenes/SHO-DEP-GRI_1.jpg",
    "imagenes": [
      {
        "idImagen": 171,
        "ruta": "./assets/imagenes/SHO-DEP-GRI_1.jpg",
        "esPrincipal": true
      },
      {
        "idImagen": 172,
        "ruta": "./assets/imagenes/SHO-DEP-GRI_2.jpg",
        "esPrincipal": false
      },
      {
        "idImagen": 173,
        "ruta": "./assets/imagenes/SHO-DEP-GRI_3.jpg",
        "esPrincipal": false
      }
    ],
    "variantes": [
      {
        "idVariante": 171,
        "sku": "SHO-DEP-GRI-S",
        "talla": "S",
        "color": "Gris",
        "precio": 399,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 172,
        "sku": "SHO-DEP-GRI-M",
        "talla": "M",
        "color": "Gris",
        "precio": 399,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 173,
        "sku": "SHO-DEP-GRI-L",
        "talla": "L",
        "color": "Gris",
        "precio": 399,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 174,
        "sku": "SHO-DEP-GRI-XL",
        "talla": "XL",
        "color": "Gris",
        "precio": 399,
        "precioOferta": null,
        "stockDisponible": 5
      }
    ]
  },
  {
    "id": 18,
    "nombre": "Sudadera Hoodie Gris",
    "categoria": "Sudaderas",
    "precio": 799,
    "precioOferta": null,
    "etiqueta": "Nuevo",
    "descripcion": "Sudadera Hoodie Gris, una prenda versátil para combinar con tu estilo. Catálogo de demostración; precios y existencias de ejemplo.",
    "imagenPrincipal": "./assets/imagenes/SUD-HOOD-GRI_1.jpg",
    "imagenes": [
      {
        "idImagen": 181,
        "ruta": "./assets/imagenes/SUD-HOOD-GRI_1.jpg",
        "esPrincipal": true
      },
      {
        "idImagen": 182,
        "ruta": "./assets/imagenes/SUD-HOOD-GRI_2.jpg",
        "esPrincipal": false
      },
      {
        "idImagen": 183,
        "ruta": "./assets/imagenes/SUD-HOOD-GRI_3.jpg",
        "esPrincipal": false
      }
    ],
    "variantes": [
      {
        "idVariante": 181,
        "sku": "SUD-HOOD-GRI-S",
        "talla": "S",
        "color": "Gris",
        "precio": 799,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 182,
        "sku": "SUD-HOOD-GRI-M",
        "talla": "M",
        "color": "Gris",
        "precio": 799,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 183,
        "sku": "SUD-HOOD-GRI-L",
        "talla": "L",
        "color": "Gris",
        "precio": 799,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 184,
        "sku": "SUD-HOOD-GRI-XL",
        "talla": "XL",
        "color": "Gris",
        "precio": 799,
        "precioOferta": null,
        "stockDisponible": 5
      }
    ]
  },
  {
    "id": 19,
    "nombre": "Sudadera Hoodie Negra",
    "categoria": "Sudaderas",
    "precio": 799,
    "precioOferta": null,
    "etiqueta": "",
    "descripcion": "Sudadera Hoodie Negra, una prenda versátil para combinar con tu estilo. Catálogo de demostración; precios y existencias de ejemplo.",
    "imagenPrincipal": "./assets/imagenes/SUD-HOOD-NEG_1.jpg",
    "imagenes": [
      {
        "idImagen": 191,
        "ruta": "./assets/imagenes/SUD-HOOD-NEG_1.jpg",
        "esPrincipal": true
      },
      {
        "idImagen": 192,
        "ruta": "./assets/imagenes/SUD-HOOD-NEG_2.jpg",
        "esPrincipal": false
      },
      {
        "idImagen": 193,
        "ruta": "./assets/imagenes/SUD-HOOD-NEG_3.jpg",
        "esPrincipal": false
      }
    ],
    "variantes": [
      {
        "idVariante": 191,
        "sku": "SUD-HOOD-NEG-S",
        "talla": "S",
        "color": "Negro",
        "precio": 799,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 192,
        "sku": "SUD-HOOD-NEG-M",
        "talla": "M",
        "color": "Negro",
        "precio": 799,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 193,
        "sku": "SUD-HOOD-NEG-L",
        "talla": "L",
        "color": "Negro",
        "precio": 799,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 194,
        "sku": "SUD-HOOD-NEG-XL",
        "talla": "XL",
        "color": "Negro",
        "precio": 799,
        "precioOferta": null,
        "stockDisponible": 5
      }
    ]
  },
  {
    "id": 20,
    "nombre": "Sudadera Hoodie Verde",
    "categoria": "Sudaderas",
    "precio": 799,
    "precioOferta": null,
    "etiqueta": "",
    "descripcion": "Sudadera Hoodie Verde, una prenda versátil para combinar con tu estilo. Catálogo de demostración; precios y existencias de ejemplo.",
    "imagenPrincipal": "./assets/imagenes/SUD-HOOD-VER_1.jpg",
    "imagenes": [
      {
        "idImagen": 201,
        "ruta": "./assets/imagenes/SUD-HOOD-VER_1.jpg",
        "esPrincipal": true
      },
      {
        "idImagen": 202,
        "ruta": "./assets/imagenes/SUD-HOOD-VER_2.jpg",
        "esPrincipal": false
      },
      {
        "idImagen": 203,
        "ruta": "./assets/imagenes/SUD-HOOD-VER_3.jpg",
        "esPrincipal": false
      }
    ],
    "variantes": [
      {
        "idVariante": 201,
        "sku": "SUD-HOOD-VER-S",
        "talla": "S",
        "color": "Verde",
        "precio": 799,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 202,
        "sku": "SUD-HOOD-VER-M",
        "talla": "M",
        "color": "Verde",
        "precio": 799,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 203,
        "sku": "SUD-HOOD-VER-L",
        "talla": "L",
        "color": "Verde",
        "precio": 799,
        "precioOferta": null,
        "stockDisponible": 12
      },
      {
        "idVariante": 204,
        "sku": "SUD-HOOD-VER-XL",
        "talla": "XL",
        "color": "Verde",
        "precio": 799,
        "precioOferta": null,
        "stockDisponible": 5
      }
    ]
  }
];

return {productos};
})();
modules["js/store/cartStore.js"]=(()=>{
const { productos } = modules["js/data/products.js"];
const KEY="urbanstyle.demo.carrito.v1";
let carrito=[];const subs=new Set();
try { const data=JSON.parse(localStorage.getItem(KEY)||"[]"); if(Array.isArray(data)) carrito=data.filter(x=>productos.some(p=>p.variantes.some(v=>v.idVariante===x.idVariante))&&Number.isInteger(x.cantidad)&&x.cantidad>0); } catch (_) {}
function notificar(){try{localStorage.setItem(KEY,JSON.stringify(carrito));}catch(_){} subs.forEach(fn=>fn(obtenerCarrito()));}
function obtenerCarrito(){return structuredClone(carrito);}
function obtenerSubtotal(){return carrito.reduce((s,p)=>s+p.precio*p.cantidad,0);}
function suscribirCarrito(fn){subs.add(fn);fn(obtenerCarrito());return ()=>subs.delete(fn);}
async function agregarProducto(producto,talla,cantidad=1){
 const base=productos.find(p=>p.variantes.some(v=>v.idVariante===producto.idVariante));
 const v=base?.variantes.find(v=>v.idVariante===producto.idVariante);const item=carrito.find(p=>p.idVariante===producto.idVariante);
 if(!v || !Number.isInteger(cantidad)||cantidad<1||(item?.cantidad||0)+cantidad>v.stockDisponible){alert("No hay más existencias de ejemplo para esa talla.");notificar();return false;}
 if(item)item.cantidad+=cantidad;
 else carrito.push({id:base.id,idVariante:v.idVariante,claveCarrito:`variante:${v.idVariante}`,nombre:base.nombre,imagen:base.imagenPrincipal,color:v.color,talla:v.talla,precio:v.precioOferta??v.precio,cantidad});
 notificar();return true;
}
async function aumentarCantidad(clave){const p=carrito.find(p=>p.claveCarrito===clave);return p?agregarProducto(p,p.talla,1):false;}
async function disminuirCantidad(clave){const p=carrito.find(p=>p.claveCarrito===clave);if(p){p.cantidad--;if(!p.cantidad)carrito=carrito.filter(x=>x!==p);}notificar();return true;}
async function eliminarProducto(clave){carrito=carrito.filter(p=>p.claveCarrito!==clave);notificar();return true;}
function vaciarCarrito(){carrito=[];notificar();}

return {obtenerCarrito,obtenerSubtotal,suscribirCarrito,agregarProducto,aumentarCantidad,disminuirCantidad,eliminarProducto,vaciarCarrito};
})();
modules["js/components/header.js"]=(()=>{
const { suscribirCarrito } = modules["js/store/cartStore.js"];

function iniciarHeader() {
    const botonMenu = document.getElementById("botonMenu");
    const menu = document.getElementById("menu");
    const botonCarrito = document.getElementById("botonCarrito");
    const contadorCarrito = document.getElementById("contadorCarrito");

    botonMenu?.addEventListener("click", () => {
        menu?.classList.toggle("visible");
    });

    menu?.querySelectorAll("a").forEach((enlace) => {
        enlace.addEventListener("click", () => menu.classList.remove("visible"));
    });

    botonCarrito?.addEventListener("click", () => {
        window.dispatchEvent(new CustomEvent("cart:open"));
    });

    suscribirCarrito((carrito) => {
        const cantidad = carrito.reduce((total, item) => total + item.cantidad, 0);
        if (contadorCarrito) contadorCarrito.textContent = cantidad;
    });
}

return {iniciarHeader};
})();
modules["js/services/productsApi.js"]=(()=>{
const { productos } = modules["js/data/products.js"];
async function obtenerProductos() { return structuredClone(productos); }
async function obtenerProductoPorId(id) {
    const p=productos.find(p=>p.id===Number(id)); if(!p) throw new Error("Producto no encontrado");
    return structuredClone(p);
}

return {obtenerProductos,obtenerProductoPorId};
})();
modules["js/utils/currency.js"]=(()=>{
function formatearPrecio(precio) {
    return precio.toLocaleString("es-MX", {
        style: "currency",
        currency: "MXN"
    });
}

return {formatearPrecio};
})();
modules["js/components/catalog.js"]=(()=>{
const { obtenerProductos } = modules["js/services/productsApi.js"];
const { formatearPrecio } = modules["js/utils/currency.js"];

let productos = [];

async function iniciarCatalogo() {
    const contenedor = document.getElementById("contenedorProductos");
    const buscador = document.getElementById("buscador");
    const filtroCategoria = document.getElementById("filtroCategoria");
    const filtroPrecio = document.getElementById("filtroPrecio");
    const sinProductos = document.getElementById("mensajeSinProductos");

    if (!contenedor) {
        console.error("No se encontró #contenedorProductos");
        return;
    }

    function mostrar(lista) {
        contenedor.innerHTML = "";

        if (sinProductos) {
            sinProductos.style.display = lista.length ? "none" : "block";
        }

        lista.forEach((producto) => {
            const tarjeta = document.createElement("article");
            tarjeta.className = "tarjeta-producto";

            const imagen = producto.imagenPrincipal || "";
            const tieneOferta =
                producto.precioOferta !== null &&
                producto.precioOferta !== undefined;

            tarjeta.innerHTML = `
                <div class="contenedor-imagen">
                    ${producto.etiqueta ? `<span class="etiqueta">${producto.etiqueta}</span>` : ""}
                    <img src="${imagen}" alt="${producto.nombre}" loading="lazy">
                </div>
                <div class="informacion-producto">
                    <p class="categoria">${producto.categoria}</p>
                    <h3>${producto.nombre}</h3>
                    ${
                        tieneOferta
                            ? `<p class="precio-anterior">${formatearPrecio(producto.precio)}</p>
                               <p class="precio">${formatearPrecio(producto.precioOferta)}</p>`
                            : `<p class="precio">${formatearPrecio(producto.precio)}</p>`
                    }
                    <button class="agregar-carrito" type="button">Ver producto</button>
                </div>
            `;

            const abrirProducto = () => {
                window.dispatchEvent(
                    new CustomEvent("product:open", {
                        detail: { id: producto.id }
                    })
                );
            };

            tarjeta.addEventListener("click", (evento) => {
                if (evento.target.closest(".agregar-carrito")) return;
                abrirProducto();
            });

            tarjeta
                .querySelector(".agregar-carrito")
                .addEventListener("click", (evento) => {
                    evento.stopPropagation();
                    abrirProducto();
                });

            contenedor.appendChild(tarjeta);
        });
    }

    function filtrar() {
        const texto = buscador?.value.toLowerCase().trim() || "";
        const categoria = filtroCategoria?.value || "todos";
        const precio = filtroPrecio?.value || "todos";

        const filtrados = productos.filter((producto) => {
            const coincideTexto = producto.nombre.toLowerCase().includes(texto);
            const coincideCategoria =
                categoria === "todos" || producto.categoria === categoria;
            const precioProducto = producto.precioOferta ?? producto.precio;
            const coincidePrecio =
                precio === "todos" || precioProducto <= Number(precio);

            return coincideTexto && coincideCategoria && coincidePrecio;
        });

        mostrar(filtrados);
    }

    buscador?.addEventListener("input", filtrar);
    filtroCategoria?.addEventListener("change", filtrar);
    filtroPrecio?.addEventListener("change", filtrar);

    try {
        contenedor.innerHTML = '<p class="cargando-productos">Cargando productos...</p>';
        productos = await obtenerProductos();
        mostrar(productos);
    } catch (error) {
        console.error("Error al cargar productos:", error);
        contenedor.innerHTML = `
            <p class="error-productos">
                No fue posible cargar los productos. ${error.message}
            </p>
        `;
    }
}

return {iniciarCatalogo};
})();
modules["js/ui/productGallery.js"]=(()=>{
function obtenerContenedorMiniaturas() {
    let contenedor = document.getElementById("modalMiniaturas");

    if (contenedor) return contenedor;

    const bloqueImagen = document.querySelector("#modalProducto .modal-imagen");
    if (!bloqueImagen) return null;

    let galeria = bloqueImagen.closest(".galeria-producto");

    if (!galeria) {
        galeria = document.createElement("div");
        galeria.className = "galeria-producto";
        bloqueImagen.parentNode.insertBefore(galeria, bloqueImagen);
        galeria.appendChild(bloqueImagen);
    }

    contenedor = document.createElement("div");
    contenedor.id = "modalMiniaturas";
    contenedor.className = "miniaturas-producto";
    galeria.appendChild(contenedor);

    return contenedor;
}

function renderizarGaleria(producto) {
    const imagenPrincipal = document.getElementById("modalImagen");
    const miniaturas = obtenerContenedorMiniaturas();

    if (!imagenPrincipal) return;

    const imagenes = Array.isArray(producto?.imagenes) ? producto.imagenes : [];

    if (miniaturas) miniaturas.innerHTML = "";

    if (!imagenes.length) {
        imagenPrincipal.removeAttribute("src");
        imagenPrincipal.alt = producto?.nombre || "Producto sin imagen";
        return;
    }

    const principal = imagenes.find((item) => item.esPrincipal) || imagenes[0];

    imagenPrincipal.src = principal.ruta;
    imagenPrincipal.alt = producto.nombre;

    if (!miniaturas) return;

    imagenes.forEach((item) => {
        const boton = document.createElement("button");
        boton.type = "button";
        boton.className = "miniatura-producto";
        boton.setAttribute("aria-label", `Ver imagen de ${producto.nombre}`);

        if (item.idImagen === principal.idImagen) {
            boton.classList.add("activa");
        }

        const miniatura = document.createElement("img");
        miniatura.src = item.ruta;
        miniatura.alt = producto.nombre;
        miniatura.loading = "lazy";

        boton.appendChild(miniatura);

        boton.addEventListener("click", () => {
            imagenPrincipal.src = item.ruta;

            miniaturas
                .querySelectorAll(".miniatura-producto")
                .forEach((elemento) => elemento.classList.remove("activa"));

            boton.classList.add("activa");
        });

        miniaturas.appendChild(boton);
    });
}

return {renderizarGaleria};
})();
modules["js/ui/productVariants.js"]=(()=>{
let varianteSeleccionada = null;

function obtenerElementoStock() {
    let stock = document.getElementById("modalStock");
    if (stock) return stock;

    const selector = document.getElementById("modalTalla")?.closest(".selector-producto");
    if (!selector) return null;

    stock = document.createElement("p");
    stock.id = "modalStock";
    stock.className = "stock-variante";
    selector.appendChild(stock);

    return stock;
}

function actualizarDisponibilidad(variante) {
    const stock = obtenerElementoStock();
    const cantidad = document.getElementById("modalCantidad");
    const agregar = document.getElementById("agregarDesdeModal");

    if (!variante) {
        if (stock) stock.textContent = "Producto agotado";
        if (agregar) agregar.disabled = true;
        if (cantidad) cantidad.removeAttribute("max");
        return;
    }

    if (stock) {
        stock.textContent = `Disponibles: ${variante.stockDisponible}`;
    }

    if (cantidad) {
        cantidad.max = String(variante.stockDisponible);

        if (
            Number(cantidad.value) > variante.stockDisponible ||
            Number(cantidad.value) <= 0
        ) {
            cantidad.value = "1";
        }
    }

    if (agregar) {
        agregar.disabled = variante.stockDisponible <= 0;
    }
}

function renderizarVariantes(producto, onChange = null) {
    const select = document.getElementById("modalTalla");
    const agregar = document.getElementById("agregarDesdeModal");

    varianteSeleccionada = null;

    if (!select) return;

    select.innerHTML = "";

    const variantes = Array.isArray(producto?.variantes)
        ? producto.variantes
        : [];

    if (!variantes.length) {
        const opcion = document.createElement("option");
        opcion.textContent = "Sin disponibilidad";
        opcion.value = "";
        opcion.disabled = true;
        opcion.selected = true;
        select.appendChild(opcion);
        actualizarDisponibilidad(null);
        return;
    }

    variantes.forEach((variante) => {
        const opcion = document.createElement("option");
        opcion.value = String(variante.idVariante);
        opcion.textContent = variante.color
            ? `${variante.talla} - ${variante.color}`
            : variante.talla;

        if (variante.stockDisponible <= 0) {
            opcion.disabled = true;
            opcion.textContent += " - Agotado";
        }

        select.appendChild(opcion);
    });

    const primeraDisponible = variantes.find(
        (variante) => variante.stockDisponible > 0
    );

    if (!primeraDisponible) {
        select.selectedIndex = -1;
        actualizarDisponibilidad(null);
        return;
    }

    varianteSeleccionada = primeraDisponible;
    select.value = String(primeraDisponible.idVariante);
    actualizarDisponibilidad(primeraDisponible);
    if (agregar) agregar.disabled = false;

    onChange?.(primeraDisponible);

    select.onchange = () => {
        varianteSeleccionada =
            variantes.find(
                (variante) => variante.idVariante === Number(select.value)
            ) || null;

        actualizarDisponibilidad(varianteSeleccionada);
        onChange?.(varianteSeleccionada);
    };
}

function obtenerVarianteSeleccionada() {
    return varianteSeleccionada;
}

return {renderizarVariantes,obtenerVarianteSeleccionada};
})();
modules["js/components/productModal.js"]=(()=>{
const { obtenerProductoPorId } = modules["js/services/productsApi.js"];
const { formatearPrecio } = modules["js/utils/currency.js"];
const { agregarProducto } = modules["js/store/cartStore.js"];
const { renderizarGaleria } = modules["js/ui/productGallery.js"];
const {
    renderizarVariantes,
    obtenerVarianteSeleccionada
} = modules["js/ui/productVariants.js"];

function iniciarProductoModal() {
    const modal = document.getElementById("modalProducto");
    const cerrar = document.getElementById("cerrarModalProducto");
    const categoria = document.getElementById("modalCategoria");
    const nombre = document.getElementById("modalNombre");
    const precio = document.getElementById("modalPrecio");
    const descripcion = document.getElementById("modalDescripcion");
    const cantidad = document.getElementById("modalCantidad");
    const agregar = document.getElementById("agregarDesdeModal");

    if (!modal || !cerrar || !precio || !cantidad || !agregar) {
        console.error("El componente product-modal.html está incompleto.");
        return;
    }

    let productoSeleccionado = null;

    function actualizarPrecio(variante = null) {
        if (!productoSeleccionado) return;

        const precioBase = variante?.precio ?? productoSeleccionado.precio;
        const precioOferta =
            variante?.precioOferta ?? productoSeleccionado.precioOferta;

        precio.textContent = formatearPrecio(precioOferta ?? precioBase);
    }

    async function abrir(idProducto) {
        try {
            agregar.disabled = true;
            agregar.textContent = "Cargando...";

            productoSeleccionado = await obtenerProductoPorId(idProducto);

            if (categoria) categoria.textContent = productoSeleccionado.categoria;
            if (nombre) nombre.textContent = productoSeleccionado.nombre;
            if (descripcion) {
                descripcion.textContent = productoSeleccionado.descripcion || "";
            }

            cantidad.value = "1";

            renderizarGaleria(productoSeleccionado);
            renderizarVariantes(productoSeleccionado, actualizarPrecio);
            actualizarPrecio(obtenerVarianteSeleccionada());

            agregar.textContent = "Agregar al carrito";
            agregar.disabled = !obtenerVarianteSeleccionada();
            modal.classList.add("visible");
        } catch (error) {
            productoSeleccionado = null;
            agregar.textContent = "Agregar al carrito";
            agregar.disabled = false;
            console.error("Error cargando producto:", error);
            alert("No fue posible cargar el producto.");
        }
    }

    function ocultar() {
        modal.classList.remove("visible");
        productoSeleccionado = null;
    }

    agregar.addEventListener("click", async () => {
        if (!productoSeleccionado) return;

        const variante = obtenerVarianteSeleccionada();
        if (!variante) {
            alert("Selecciona una variante disponible.");
            return;
        }

        const cantidadSeleccionada = Number(cantidad.value);

        if (!Number.isInteger(cantidadSeleccionada) || cantidadSeleccionada <= 0) {
            alert("Selecciona una cantidad válida.");
            return;
        }

        if (cantidadSeleccionada > variante.stockDisponible) {
            alert(`Solo hay ${variante.stockDisponible} unidades disponibles.`);
            return;
        }

        const imagenPrincipal =
            productoSeleccionado.imagenes?.find((item) => item.esPrincipal)?.ruta ||
            productoSeleccionado.imagenes?.[0]?.ruta ||
            "";

        const productoCarrito = {
            id: productoSeleccionado.id,
            idVariante: variante.idVariante,
            sku: variante.sku,
            nombre: productoSeleccionado.nombre,
            categoria: productoSeleccionado.categoria,
            imagen: imagenPrincipal,
            color: variante.color,
            precio: variante.precioOferta ?? variante.precio,
            stockDisponible: variante.stockDisponible
        };

        agregar.disabled = true;
        agregar.textContent = "Reservando...";

        const agregado = await agregarProducto(
            productoCarrito,
            variante.talla,
            cantidadSeleccionada
        );

        agregar.disabled = false;
        agregar.textContent = "Agregar al carrito";

        if (agregado) {
            ocultar();
            window.dispatchEvent(new CustomEvent("cart:open"));
        }
    });

    window.addEventListener("product:open", (evento) => {
        abrir(evento.detail.id);
    });

    cerrar.addEventListener("click", ocultar);

    modal.addEventListener("click", (evento) => {
        if (evento.target === modal) ocultar();
    });

    window.addEventListener("ui:escape", ocultar);
}

return {iniciarProductoModal};
})();
modules["js/components/cart.js"]=(()=>{
const {
    suscribirCarrito,
    eliminarProducto,
    aumentarCantidad,
    disminuirCantidad
} = modules["js/store/cartStore.js"];
const { formatearPrecio } = modules["js/utils/currency.js"];

function iniciarCarrito() {
    const panel = document.getElementById("panelCarrito");
    const fondo = document.getElementById("fondoOscuro");
    const cerrar = document.getElementById("cerrarCarrito");
    const lista = document.getElementById("listaCarrito");
    const total = document.getElementById("totalCarrito");
    const finalizar = document.getElementById("finalizarCompra");
    const whatsappBtn = document.querySelector(".whatsapp-btn");

    if (!panel || !fondo || !cerrar || !lista || !total || !finalizar) return;

    let bloqueado = false;
    window.addEventListener("checkout:lock", evento => {
        bloqueado = Boolean(evento.detail.bloqueado);
        finalizar.textContent = bloqueado ? "Consultar pago" : "Finalizar compra";
        lista.querySelectorAll(".producto-carrito-controles button").forEach(b => b.disabled = bloqueado);
    });

    function abrir() {
        panel.classList.add("abierto");
        fondo.classList.add("visible");
        if (whatsappBtn) whatsappBtn.classList.add("oculto");
    }

    function ocultar() {
        panel.classList.remove("abierto");
        fondo.classList.remove("visible");
        if (whatsappBtn) whatsappBtn.classList.add("oculto");
    }

    function renderizar(carrito) {
        lista.innerHTML = "";

        if (!carrito.length) {
            lista.innerHTML = '<p class="carrito-vacio">Tu carrito está vacío.</p>';
            total.textContent = formatearPrecio(0);
            return;
        }

        carrito.forEach((producto) => {
            const subtotal = producto.precio * producto.cantidad;
            const elemento = document.createElement("div");
            elemento.className = "producto-carrito";

            const color = producto.color
                ? `<p class="producto-carrito-color">Color: ${producto.color}</p>`
                : "";

            elemento.innerHTML = `
                <div class="producto-carrito-imagen">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                </div>
                <div class="producto-carrito-info">
                    <h4>${producto.nombre}</h4>
                    <p class="producto-carrito-talla">Talla: ${producto.talla}</p>
                    ${color}
                    <p class="producto-carrito-precio">${formatearPrecio(producto.precio)}</p>
                    <div class="producto-carrito-controles">
                        <div class="control-cantidad">
                            <button class="boton-restar" type="button">−</button>
                            <span>${producto.cantidad}</span>
                            <button class="boton-sumar" type="button">+</button>
                        </div>
                        <button class="boton-eliminar-carrito" type="button">Eliminar</button>
                    </div>
                    <p class="subtotal-producto">Subtotal: ${formatearPrecio(subtotal)}</p>
                </div>
            `;

            elemento
                .querySelector(".boton-sumar")
                .addEventListener("click", async (evento) => {
                    const boton = evento.currentTarget;
                    boton.disabled = true;
                    try { await aumentarCantidad(producto.claveCarrito); }
                    finally { boton.disabled = bloqueado; }
                });

            elemento
                .querySelector(".boton-restar")
                .addEventListener("click", async (evento) => {
                    const boton = evento.currentTarget;
                    boton.disabled = true;
                    try { await disminuirCantidad(producto.claveCarrito); }
                    finally { boton.disabled = bloqueado; }
                });

            elemento
                .querySelector(".boton-eliminar-carrito")
                .addEventListener("click", async (evento) => {
                    const boton = evento.currentTarget;
                    boton.disabled = true;
                    try { await eliminarProducto(producto.claveCarrito); }
                    finally { boton.disabled = bloqueado; }
                });

            elemento.querySelectorAll(".producto-carrito-controles button").forEach(b => b.disabled = bloqueado);
            lista.appendChild(elemento);
        });

        const totalCompra = carrito.reduce(
            (acumulado, producto) => acumulado + producto.precio * producto.cantidad,
            0
        );

        total.textContent = formatearPrecio(totalCompra);
    }

    window.addEventListener("cart:open", abrir);
    window.addEventListener("cart:close", ocultar);
    window.addEventListener("ui:escape", ocultar);
    cerrar.addEventListener("click", ocultar);
    fondo.addEventListener("click", ocultar);

    finalizar.addEventListener("click", () => {
        ocultar();
        window.dispatchEvent(new CustomEvent("checkout:open"));
    });

    suscribirCarrito(renderizar);
}

return {iniciarCarrito};
})();
modules["js/components/checkout.js"]=(()=>{
const { obtenerCarrito,obtenerSubtotal,vaciarCarrito } = modules["js/store/cartStore.js"];
const { formatearPrecio } = modules["js/utils/currency.js"];
function iniciarCheckout(){
 const $=id=>document.getElementById(id),checkout=$("checkout"),form=$("formularioCheckout"),pago=$("checkoutPagoTarjeta"),msg=$("pagoMensaje");
 const fixture={nombre:"Cliente",apellidos:"Demostración",correoCheckout:"cliente@example.com",telefono:"0000000000",calle:"Calle de ejemplo",numero:"123",codigoPostal:"00000",colonia:"Centro",ciudad:"Ciudad de ejemplo",estado:"Estado de ejemplo"};
 function resumen(){
  $("checkoutProductos").replaceChildren();
  for(const p of obtenerCarrito()){
   const row=document.createElement("div");row.className="checkout-producto";
   const img=document.createElement("img");img.src=p.imagen;img.alt=p.nombre;
   const info=document.createElement("div");info.className="checkout-producto-info";
   const h=document.createElement("h4");h.textContent=p.nombre;const t=document.createElement("p");t.textContent=`Talla: ${p.talla} · Color: ${p.color} · Cantidad: ${p.cantidad}`;
   const amount=document.createElement("strong");amount.textContent=formatearPrecio(p.precio*p.cantidad);info.append(h,t);row.append(img,info,amount);$("checkoutProductos").append(row);
  }
  const envio=Number(document.querySelector('input[name="envio"]:checked')?.value||99);
  $("checkoutSubtotal").textContent=formatearPrecio(obtenerSubtotal());$("checkoutEnvio").textContent=formatearPrecio(envio);$("checkoutTotal").textContent=formatearPrecio(obtenerSubtotal()+envio);
 }
 function cerrar(){checkout.classList.remove("visible");document.body.style.overflow="";}
 function abrir(){
  if(!obtenerCarrito().length){alert("Agrega un producto para probar la demo.");return;}
  for(const [id,value] of Object.entries(fixture))$(id).value=value;
  form.style.display="";pago.hidden=true;resumen();checkout.classList.add("visible");document.body.style.overflow="hidden";
 }
 form.addEventListener("submit",e=>{e.preventDefault();form.style.display="none";pago.hidden=false;msg.textContent="Pedido DEMO · No se enviará información ni se realizará un cobro.";$("cardPaymentBrick_container").hidden=false;$("demoEditar").hidden=false;$("demoConsultar").hidden=true;$("demoReiniciar").hidden=true;});
 function aprobado(){msg.textContent="Simulación: pago aprobado. Tu pedido de ejemplo está confirmado. No se realizó ningún cobro.";$("cardPaymentBrick_container").hidden=true;$("demoConsultar").hidden=true;$("demoEditar").hidden=true;$("demoReiniciar").hidden=false;vaciarCarrito();}
 $("demoPagar").addEventListener("click",()=>{
  const result=$("demoResultado").value;
  if(result==="approved")aprobado();
  else if(result==="pending"){msg.textContent="Simulación: pago pendiente. Puedes simular su confirmación o volver al carrito.";$("cardPaymentBrick_container").hidden=true;$("demoConsultar").hidden=false;}
  else msg.textContent="Simulación: pago rechazado. Puedes seleccionar otro resultado y repetir la demostración.";
 });
 $("demoConsultar").addEventListener("click",aprobado);
 $("demoEditar").addEventListener("click",()=>{cerrar();window.dispatchEvent(new CustomEvent("cart:open"));});
 $("demoReiniciar").addEventListener("click",()=>{cerrar();form.reset();window.location.hash="productos";});
 $("cerrarCheckout").addEventListener("click",cerrar);window.addEventListener("ui:escape",cerrar);window.addEventListener("checkout:open",abrir);
 document.querySelectorAll('input[name="envio"]').forEach(r=>r.addEventListener("change",resumen));
}

return {iniciarCheckout};
})();
modules["js/components/newsletter.js"]=(()=>{
function iniciarNewsletter() {
 document.getElementById("formularioSuscripcion")?.addEventListener("submit",e=>{
  e.preventDefault(); document.getElementById("mensajeFormulario").textContent="Demostración: no se envió ni guardó tu correo."; e.target.reset();
 });
}

return {iniciarNewsletter};
})();
modules["js/app.js"]=(()=>{
const { iniciarHeader } = modules["js/components/header.js"];
const { iniciarCatalogo } = modules["js/components/catalog.js"];
const { iniciarProductoModal } = modules["js/components/productModal.js"];
const { iniciarCarrito } = modules["js/components/cart.js"];
const { iniciarCheckout } = modules["js/components/checkout.js"];
const { iniciarNewsletter } = modules["js/components/newsletter.js"];
iniciarHeader(); iniciarProductoModal(); iniciarCarrito(); iniciarCheckout(); iniciarNewsletter(); iniciarCatalogo();
document.addEventListener("keydown",e=>{if(e.key==="Escape")window.dispatchEvent(new CustomEvent("ui:escape"));});
document.querySelector(".whatsapp-btn")?.addEventListener("click",e=>{e.preventDefault();alert("Demostración: aquí se abriría el WhatsApp de la tienda.");});

return {};
})();
})();
