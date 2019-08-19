var trabajos = [{
    figure: "P1.png",
    alt: "Descripción de la imagen",
    title: "Wako",
    about: "Proyecto de emergencia textil para Taller: Producto, 2018"
}, {
    figure: "P2.png",
    alt: "Descripción de la imagen",
    title: "La Tribu",
    about: "Juego de mesa para fines investigativos para Taller: Producto, 2018"
}, {
    figure: "P3.png",
    alt: "Descripción de la imagen",
    title: "Móviles de Magia y Cartón: Rola el auto",
    about: "Nueva línea de juguetes de medios de transporte para el trabajo con un emprendimiento. TIDE, 2019"
}, {
    figure: "P4.png",
    alt: "Descripción de la imagen",
    title: "Tanin",
    about: "Producto alimenticio a base de mate creado para la feria gastronómica en Taller: Producto, 2018"
}, {
    figure: "P5.png",
    alt: "Descripción de la imagen",
    title: "Esplat",
    about: "Prensador de alimentos para Ilko. TIDE, 2019"
}, {
    figure: "P6.png",
    alt: "Descripción de la imagen",
    title: "Hotel Papiofornia",
    about: "Dispositivo de enriquecimiento ambiental para papiones. Taller: Identidad, 2017"
}, {
    figure: "P9.png",
    alt: "Descripción de la imagen",
    title: "Alcor",
    about: "Exhibidor de vinos. Taller: Calidad II, 2019"
}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
