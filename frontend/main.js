var map = new ol.Map({
  layers: [
    new ol.layer.VectorTile({
      source: new ol.source.VectorTile({
        attributions:'© <a href="http://www.openstreetmap.org/copyright">' +
        'OpenStreetMap contributors</a>',
        format: new ol.format.MVT(),
        tileGrid: ol.tilegrid.createXYZ({maxZoom: 22}),
        tilePixelRatio: 16,
        url:'http://localhost:8080/maps/bonn/{z}/{x}/{y}.vector.pbf?debug=true'
      })
    })
  ],
  target: 'map',
  view: new ol.View({
    center: [790793.4954921771, 6574927.869849075], //coordinates the map will center on initially
    zoom: 14
  })
});
