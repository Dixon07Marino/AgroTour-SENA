// ============= productos.js =============
const productosHome = {
    destacados: [
      {
        tipo: "DESTINO",
        precio: 90000,
        imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/549654722.jpg?k=94cbbbbf9b615ba903f51033c16cf657da31863f30c8b3e691b8d17ed1733eb0&o=",
        titulo: "Campestre Villa del Campo se encuentra en Santa Rosa de Cabal, en la región de Risaralda, a 33 km de Ukumari Zoo. Ofrece alojamiento con wifi gratis, zona de barbacoa, jardín y parking privado gratis. Todas las unidades tienen baño privado totalmente equipado con ducha y artículos de aseo gratuitos. En la casa rural se sirve todos los días un desayuno americano. Finca Campestre Villa del Campo ofrece terraza.",
        estrellas: 5,
        oferta: false
      },
      {
        tipo: "PAQUETE",
        precio: 70000,
        imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/374335236.jpg?k=95a2a0c1c6f78b1f6445c9549bba1354e10e201e6d37ef4ab42ad1e036e4baad&o=&hp=1",
        titulo: "Cabanas La Herradura se encuentra a 34 km de Ukumari Zoo y ofrece alojamiento conjardín, terraza y servicio de habitaciones. La casa rural ofrece wifi y parking privado, ambos gratis. Todas las unidades tienen baño privado totalmente equipado con ducha y artículos de aseo gratuitos.",
        estrellas: 4,
        oferta: true
      },
      {
        tipo: "DESTINO", 
        precio: 120000,
        imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/587576083.jpg?k=70eb91aa98d097c393d27cd63df8fcd256d9e52ce1f42b848ec01eeb19556100&o=",
        titulo: "Finca el mirador se encuentra en Dosquebradas y ofrece wifi gratis, jardín, terraza y bar. Un lugar tranquilo y lleno de naturaleza.",
        estrellas: 3,
        oferta: true
      },
      {
        tipo: "DESTINO", 
        precio: 120000,
        imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/587576083.jpg?k=70eb91aa98d097c393d27cd63df8fcd256d9e52ce1f42b848ec01eeb19556100&o=",
        titulo: "Finca el mirador se encuentra en Dosquebradas y ofrece wifi gratis, jardín, terraza y bar. Un lugar tranquilo y lleno de naturaleza.",
        estrellas: 3,
        oferta: true
      },
      {
        tipo: "DESTINO",
        precio: 70000,
        imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/353860738.jpg?k=c9535c4088b9428da6fb605d21475a24f07775307e94086847c51333d06577c0&o=", 
        titulo: "La Frontera está en Chinchiná y ofrece alojamiento con terraza o balcón, wifi gratis y TV de pantalla plana, además de piscina al aire libre y jardín. Todas las unidades tienen baño privado totalmente equipado con ducha y artículos de aseo gratuitos.",
        estrellas: 4,
        oferta: false
      },
      {
        tipo: "DESTINO",
        precio: 70000,
        imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/353860738.jpg?k=c9535c4088b9428da6fb605d21475a24f07775307e94086847c51333d06577c0&o=", 
        titulo: "La Frontera está en Chinchiná y ofrece alojamiento con terraza o balcón, wifi gratis y TV de pantalla plana, además de piscina al aire libre y jardín. Todas las unidades tienen baño privado totalmente equipado con ducha y artículos de aseo gratuitos.",
        estrellas: 4,
        oferta: false
      },
      {
        tipo: "DESTINO",
        precio: 70000,
        imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/467677914.jpg?k=6d83af0336673c520b8e584cf421f64f5517108993836f22615af92f312982b7&o=&hp=1", 
        titulo: "La Bella Finca Hostal-Lodge es un alojamiento con vistas a la montaña que se encuentra en Villamaría, a 24 km de Cable Aéreo de Manizales y a 34 km de Laguna del Otún. El alojamiento, que está a 33 km de Nevado de Santa Isabel, dispone de terraza y parking privado gratis.",
        estrellas: 4,
        oferta: false
      },
      {
        tipo: "DESTINO",
        precio: 70000,
        imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/467677914.jpg?k=6d83af0336673c520b8e584cf421f64f5517108993836f22615af92f312982b7&o=&hp=1", 
        titulo: "La Bella Finca Hostal-Lodge es un alojamiento con vistas a la montaña que se encuentra en Villamaría, a 24 km de Cable Aéreo de Manizales y a 34 km de Laguna del Otún. El alojamiento, que está a 33 km de Nevado de Santa Isabel, dispone de terraza y parking privado gratis.",
        estrellas: 4,
        oferta: false
      },
      {
        tipo: "DESTINO",
        precio: 70000,
        imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/188140138.jpg?k=77afcc5dd3947ee778c2851fd301cf3524f6abf661e79c11d720d7c0e7c79a2f&o=&hp=1", 
        titulo: "Finca El Sueño De Mi Abuelo está a 26 km de Ukumari Zoo y ofrece alojamiento con restaurante, piscina al aire libre, jardín y salón de uso común. La casa rural ofrece wifi y parking privado, ambos gratis.",
        estrellas: 4,
        oferta: false
      },
      {
        tipo: "DESTINO",
        precio: 70000,
        imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/188140138.jpg?k=77afcc5dd3947ee778c2851fd301cf3524f6abf661e79c11d720d7c0e7c79a2f&o=&hp=1", 
        titulo: "Finca El Sueño De Mi Abuelo está a 26 km de Ukumari Zoo y ofrece alojamiento con restaurante, piscina al aire libre, jardín y salón de uso común. La casa rural ofrece wifi y parking privado, ambos gratis.",
        estrellas: 4,
        oferta: false
      },
      {
        tipo: "DESTINO",
        precio: 70000,
        imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/533949176.jpg?k=951c16eab7a561d854adc3a80f56b09df7b1329fcd4ae0b7f4fe864019e56d70&o=", 
        titulo: "Cabaña Eje Cafetero, Sauna terapéutico, que cuenta con piscina al aire libre, jardín y terraza, ofrece alojamiento en Filandia con wifi gratis y vistas a la ciudad. La casa rural, que tiene parking privado gratis, está en una zona en la que se pueden practicar actividades como senderismo y ciclismo.",
        estrellas: 4,
        oferta: false
      },
      {
        tipo: "DESTINO",
        precio: 70000,
        imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/533949176.jpg?k=951c16eab7a561d854adc3a80f56b09df7b1329fcd4ae0b7f4fe864019e56d70&o=", 
        titulo: "Cabaña Eje Cafetero, Sauna terapéutico, que cuenta con piscina al aire libre, jardín y terraza, ofrece alojamiento en Filandia con wifi gratis y vistas a la ciudad. La casa rural, que tiene parking privado gratis, está en una zona en la que se pueden practicar actividades como senderismo y ciclismo.",
        estrellas: 4,
        oferta: false
      }
    ],
    ofertas: [
      {
        tipo: "DESTINO",
        precio: 90000,
        imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/549654722.jpg?k=94cbbbbf9b615ba903f51033c16cf657da31863f30c8b3e691b8d17ed1733eb0&o=",
        titulo: "Campestre Villa del Campo se encuentra en Santa Rosa de Cabal, en la región de Risaralda, a 33 km de Ukumari Zoo. Ofrece alojamiento con wifi gratis, zona de barbacoa, jardín y parking privado gratis. Todas las unidades tienen baño privado totalmente equipado con ducha y artículos de aseo gratuitos. En la casa rural se sirve todos los días un desayuno americano. Finca Campestre Villa del Campo ofrece terraza.",
        estrellas: 5,
        oferta: false
      },
      {
        tipo: "PAQUETE",
        precio: 70000,
        imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/374335236.jpg?k=95a2a0c1c6f78b1f6445c9549bba1354e10e201e6d37ef4ab42ad1e036e4baad&o=&hp=1",
        titulo: "Cabanas La Herradura se encuentra a 34 km de Ukumari Zoo y ofrece alojamiento conjardín, terraza y servicio de habitaciones. La casa rural ofrece wifi y parking privado, ambos gratis. Todas las unidades tienen baño privado totalmente equipado con ducha y artículos de aseo gratuitos.",
        estrellas: 4,
        oferta: true
      },
      {
        tipo: "DESTINO", 
        precio: 120000,
        imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/587576083.jpg?k=70eb91aa98d097c393d27cd63df8fcd256d9e52ce1f42b848ec01eeb19556100&o=",
        titulo: "Finca el mirador se encuentra en Dosquebradas y ofrece wifi gratis, jardín, terraza y bar. Un lugar tranquilo y lleno de naturaleza.",
        estrellas: 3,
        oferta: true
      },
      {
        tipo: "DESTINO", 
        precio: 120000,
        imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/587576083.jpg?k=70eb91aa98d097c393d27cd63df8fcd256d9e52ce1f42b848ec01eeb19556100&o=",
        titulo: "Finca el mirador se encuentra en Dosquebradas y ofrece wifi gratis, jardín, terraza y bar. Un lugar tranquilo y lleno de naturaleza.",
        estrellas: 3,
        oferta: true
      },
      {
        tipo: "DESTINO",
        precio: 70000,
        imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/353860738.jpg?k=c9535c4088b9428da6fb605d21475a24f07775307e94086847c51333d06577c0&o=", 
        titulo: "La Frontera está en Chinchiná y ofrece alojamiento con terraza o balcón, wifi gratis y TV de pantalla plana, además de piscina al aire libre y jardín. Todas las unidades tienen baño privado totalmente equipado con ducha y artículos de aseo gratuitos.",
        estrellas: 4,
        oferta: false
      },
      {
        tipo: "DESTINO",
        precio: 70000,
        imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/353860738.jpg?k=c9535c4088b9428da6fb605d21475a24f07775307e94086847c51333d06577c0&o=", 
        titulo: "La Frontera está en Chinchiná y ofrece alojamiento con terraza o balcón, wifi gratis y TV de pantalla plana, además de piscina al aire libre y jardín. Todas las unidades tienen baño privado totalmente equipado con ducha y artículos de aseo gratuitos.",
        estrellas: 4,
        oferta: false
      },
      {
        tipo: "DESTINO",
        precio: 70000,
        imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/467677914.jpg?k=6d83af0336673c520b8e584cf421f64f5517108993836f22615af92f312982b7&o=&hp=1", 
        titulo: "La Bella Finca Hostal-Lodge es un alojamiento con vistas a la montaña que se encuentra en Villamaría, a 24 km de Cable Aéreo de Manizales y a 34 km de Laguna del Otún. El alojamiento, que está a 33 km de Nevado de Santa Isabel, dispone de terraza y parking privado gratis.",
        estrellas: 4,
        oferta: false
      },
      {
        tipo: "DESTINO",
        precio: 70000,
        imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/188140138.jpg?k=77afcc5dd3947ee778c2851fd301cf3524f6abf661e79c11d720d7c0e7c79a2f&o=&hp=1", 
        titulo: "Finca El Sueño De Mi Abuelo está a 26 km de Ukumari Zoo y ofrece alojamiento con restaurante, piscina al aire libre, jardín y salón de uso común. La casa rural ofrece wifi y parking privado, ambos gratis.",
        estrellas: 4,
        oferta: false
      },
      {
        tipo: "DESTINO",
        precio: 70000,
        imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/188140138.jpg?k=77afcc5dd3947ee778c2851fd301cf3524f6abf661e79c11d720d7c0e7c79a2f&o=&hp=1", 
        titulo: "Finca El Sueño De Mi Abuelo está a 26 km de Ukumari Zoo y ofrece alojamiento con restaurante, piscina al aire libre, jardín y salón de uso común. La casa rural ofrece wifi y parking privado, ambos gratis.",
        estrellas: 4,
        oferta: false
      },
      {
        tipo: "DESTINO",
        precio: 70000,
        imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/188140138.jpg?k=77afcc5dd3947ee778c2851fd301cf3524f6abf661e79c11d720d7c0e7c79a2f&o=&hp=1", 
        titulo: "Finca El Sueño De Mi Abuelo está a 26 km de Ukumari Zoo y ofrece alojamiento con restaurante, piscina al aire libre, jardín y salón de uso común. La casa rural ofrece wifi y parking privado, ambos gratis.",
        estrellas: 4,
        oferta: false
      },
      {
        tipo: "DESTINO",
        precio: 70000,
        imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/533949176.jpg?k=951c16eab7a561d854adc3a80f56b09df7b1329fcd4ae0b7f4fe864019e56d70&o=", 
        titulo: "Cabaña Eje Cafetero, Sauna terapéutico, que cuenta con piscina al aire libre, jardín y terraza, ofrece alojamiento en Filandia con wifi gratis y vistas a la ciudad. La casa rural, que tiene parking privado gratis, está en una zona en la que se pueden practicar actividades como senderismo y ciclismo.",
        estrellas: 4,
        oferta: false
      },
      {
        tipo: "DESTINO",
        precio: 70000,
        imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/533949176.jpg?k=951c16eab7a561d854adc3a80f56b09df7b1329fcd4ae0b7f4fe864019e56d70&o=", 
        titulo: "Cabaña Eje Cafetero, Sauna terapéutico, que cuenta con piscina al aire libre, jardín y terraza, ofrece alojamiento en Filandia con wifi gratis y vistas a la ciudad. La casa rural, que tiene parking privado gratis, está en una zona en la que se pueden practicar actividades como senderismo y ciclismo.",
        estrellas: 4,
        oferta: false
      }
    ]
  };