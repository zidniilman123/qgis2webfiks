var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_BatasKecamatan_1 = new ol.format.GeoJSON();
var features_BatasKecamatan_1 = format_BatasKecamatan_1.readFeatures(json_BatasKecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_1.addFeatures(features_BatasKecamatan_1);
var lyr_BatasKecamatan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatan_1, 
                style: style_BatasKecamatan_1,
                popuplayertitle: "Batas Kecamatan ",
                interactive: true,
                title: '<img src="styles/legend/BatasKecamatan_1.png" /> Batas Kecamatan '
            });
var format_Radius2Km_2 = new ol.format.GeoJSON();
var features_Radius2Km_2 = format_Radius2Km_2.readFeatures(json_Radius2Km_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Radius2Km_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Radius2Km_2.addFeatures(features_Radius2Km_2);
var lyr_Radius2Km_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Radius2Km_2, 
                style: style_Radius2Km_2,
                popuplayertitle: "Radius 2 Km",
                interactive: true,
                title: '<img src="styles/legend/Radius2Km_2.png" /> Radius 2 Km'
            });
var format_FasilitasKesehatanKabBoyolali_3 = new ol.format.GeoJSON();
var features_FasilitasKesehatanKabBoyolali_3 = format_FasilitasKesehatanKabBoyolali_3.readFeatures(json_FasilitasKesehatanKabBoyolali_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasilitasKesehatanKabBoyolali_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasKesehatanKabBoyolali_3.addFeatures(features_FasilitasKesehatanKabBoyolali_3);
var lyr_FasilitasKesehatanKabBoyolali_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasilitasKesehatanKabBoyolali_3, 
                style: style_FasilitasKesehatanKabBoyolali_3,
                popuplayertitle: "Fasilitas Kesehatan Kab. Boyolali",
                interactive: true,
                title: '<img src="styles/legend/FasilitasKesehatanKabBoyolali_3.png" /> Fasilitas Kesehatan Kab. Boyolali'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_BatasKecamatan_1.setVisible(true);lyr_Radius2Km_2.setVisible(true);lyr_FasilitasKesehatanKabBoyolali_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_BatasKecamatan_1,lyr_Radius2Km_2,lyr_FasilitasKesehatanKabBoyolali_3];
lyr_BatasKecamatan_1.set('fieldAliases', {'WADMKC': 'WADMKC', });
lyr_Radius2Km_2.set('fieldAliases', {'"NAMA OBJE': '"NAMA OBJE', 'KOORDINAT': 'KOORDINAT', 'KOORDINA_1': 'KOORDINA_1', 'ALAMAT': 'ALAMAT', 'TELP': 'TELP', 'BUKA': 'BUKA', 'FOTO"': 'FOTO"', });
lyr_FasilitasKesehatanKabBoyolali_3.set('fieldAliases', {'"NAMA OBJE': '"NAMA OBJE', 'KOORDINAT': 'KOORDINAT', 'KOORDINA_1': 'KOORDINA_1', 'ALAMAT': 'ALAMAT', 'TELP': 'TELP', 'BUKA': 'BUKA', 'FOTO"': 'FOTO"', });
lyr_BatasKecamatan_1.set('fieldImages', {'WADMKC': 'TextEdit', });
lyr_Radius2Km_2.set('fieldImages', {'"NAMA OBJE': 'TextEdit', 'KOORDINAT': 'TextEdit', 'KOORDINA_1': 'TextEdit', 'ALAMAT': 'TextEdit', 'TELP': 'TextEdit', 'BUKA': 'TextEdit', 'FOTO"': 'TextEdit', });
lyr_FasilitasKesehatanKabBoyolali_3.set('fieldImages', {'"NAMA OBJE': 'TextEdit', 'KOORDINAT': 'TextEdit', 'KOORDINA_1': 'TextEdit', 'ALAMAT': 'TextEdit', 'TELP': 'TextEdit', 'BUKA': 'TextEdit', 'FOTO"': 'ExternalResource', });
lyr_BatasKecamatan_1.set('fieldLabels', {'WADMKC': 'no label', });
lyr_Radius2Km_2.set('fieldLabels', {'"NAMA OBJE': 'no label', 'KOORDINAT': 'no label', 'KOORDINA_1': 'no label', 'ALAMAT': 'no label', 'TELP': 'no label', 'BUKA': 'no label', 'FOTO"': 'no label', });
lyr_FasilitasKesehatanKabBoyolali_3.set('fieldLabels', {'"NAMA OBJE': 'inline label - visible with data', 'KOORDINAT': 'hidden field', 'KOORDINA_1': 'hidden field', 'ALAMAT': 'inline label - visible with data', 'TELP': 'inline label - visible with data', 'BUKA': 'inline label - visible with data', 'FOTO"': 'inline label - visible with data', });
lyr_FasilitasKesehatanKabBoyolali_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});