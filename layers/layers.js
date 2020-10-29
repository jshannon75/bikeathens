var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Trainingpointsofinterest_1 = new ol.format.GeoJSON();
var features_Trainingpointsofinterest_1 = format_Trainingpointsofinterest_1.readFeatures(json_Trainingpointsofinterest_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trainingpointsofinterest_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trainingpointsofinterest_1.addFeatures(features_Trainingpointsofinterest_1);
var lyr_Trainingpointsofinterest_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Trainingpointsofinterest_1, 
                style: style_Trainingpointsofinterest_1,
                interactive: true,
    title: 'Training points of interest<br />\
    <img src="styles/legend/Trainingpointsofinterest_1_0.png" /> Grocery<br />\
    <img src="styles/legend/Trainingpointsofinterest_1_1.png" /> Healthcare/Clinics<br />\
    <img src="styles/legend/Trainingpointsofinterest_1_2.png" /> Library<br />\
    <img src="styles/legend/Trainingpointsofinterest_1_3.png" /> Parks<br />\
    <img src="styles/legend/Trainingpointsofinterest_1_4.png" /> Schools<br />'
        });
var format_Draftroutes_2 = new ol.format.GeoJSON();
var features_Draftroutes_2 = format_Draftroutes_2.readFeatures(json_Draftroutes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Draftroutes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Draftroutes_2.addFeatures(features_Draftroutes_2);
var lyr_Draftroutes_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Draftroutes_2, 
                style: style_Draftroutes_2,
                interactive: false,
                title: '<img src="styles/legend/Draftroutes_2.png" /> Draft routes'
            });

lyr_Positron_0.setVisible(true);lyr_Trainingpointsofinterest_1.setVisible(true);lyr_Draftroutes_2.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Trainingpointsofinterest_1,lyr_Draftroutes_2];
lyr_Trainingpointsofinterest_1.set('fieldAliases', {'name': 'name', 'category': 'category', 'address': 'address', 'city': 'city', 'zip': 'zip', 'lat': 'lat', 'lon': 'lon', 'primary_sic': 'primary_sic', 'primary_naics': 'primary_naics', 'ES_short': 'ES_short', });
lyr_Draftroutes_2.set('fieldAliases', {'fid': 'fid', 'rowid': 'rowid', 'name': 'name', 'dist_all': 'dist_all', 'slope_med': 'slope_med', 'pct_less5': 'pct_less5', 'pct_more5': 'pct_more5', 'pct_more10': 'pct_more10', 'pct_more15': 'pct_more15', 'pct_5_10': 'pct_5_10', 'waviness': 'waviness', 'topo_index_wav2': 'topo_index_wav2', 'textbox': 'textbox', 'TR_NAME': 'TR_NAME', 'ACC_TR_TYP': 'ACC_TR_TYP', 'SEGMENTID': 'SEGMENTID', 'ST_NAME': 'ST_NAME', 'greenway': 'greenway', 'facility': 'facility', 'bike_cat': 'bike_cat', 'MPH': 'MPH', 'CLASSIFICA': 'CLASSIFICA', 'biketrail': 'biketrail', 'rectrail': 'rectrail', 'mphscore': 'mphscore', 'bikelane': 'bikelane', 'separate': 'separate', 'safety': 'safety', });
lyr_Trainingpointsofinterest_1.set('fieldImages', {'name': 'TextEdit', 'category': 'TextEdit', 'address': 'TextEdit', 'city': 'TextEdit', 'zip': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'primary_sic': 'TextEdit', 'primary_naics': 'TextEdit', 'ES_short': 'TextEdit', });
lyr_Draftroutes_2.set('fieldImages', {'fid': 'TextEdit', 'rowid': 'TextEdit', 'name': 'TextEdit', 'dist_all': 'TextEdit', 'slope_med': 'TextEdit', 'pct_less5': 'TextEdit', 'pct_more5': 'TextEdit', 'pct_more10': 'TextEdit', 'pct_more15': 'TextEdit', 'pct_5_10': 'TextEdit', 'waviness': 'TextEdit', 'topo_index_wav2': 'TextEdit', 'textbox': 'TextEdit', 'TR_NAME': 'TextEdit', 'ACC_TR_TYP': 'TextEdit', 'SEGMENTID': 'TextEdit', 'ST_NAME': 'TextEdit', 'greenway': 'TextEdit', 'facility': 'TextEdit', 'bike_cat': 'TextEdit', 'MPH': 'TextEdit', 'CLASSIFICA': 'TextEdit', 'biketrail': 'TextEdit', 'rectrail': 'TextEdit', 'mphscore': 'TextEdit', 'bikelane': 'TextEdit', 'separate': 'TextEdit', 'safety': 'TextEdit', });
lyr_Trainingpointsofinterest_1.set('fieldLabels', {'name': 'no label', 'category': 'no label', 'address': 'no label', 'city': 'no label', 'zip': 'no label', 'lat': 'no label', 'lon': 'no label', 'primary_sic': 'no label', 'primary_naics': 'no label', 'ES_short': 'no label', });
lyr_Draftroutes_2.set('fieldLabels', {'fid': 'no label', 'rowid': 'no label', 'name': 'no label', 'dist_all': 'no label', 'slope_med': 'no label', 'pct_less5': 'no label', 'pct_more5': 'no label', 'pct_more10': 'no label', 'pct_more15': 'no label', 'pct_5_10': 'no label', 'waviness': 'no label', 'topo_index_wav2': 'no label', 'textbox': 'no label', 'TR_NAME': 'no label', 'ACC_TR_TYP': 'no label', 'SEGMENTID': 'no label', 'ST_NAME': 'no label', 'greenway': 'no label', 'facility': 'no label', 'bike_cat': 'no label', 'MPH': 'no label', 'CLASSIFICA': 'no label', 'biketrail': 'no label', 'rectrail': 'no label', 'mphscore': 'no label', 'bikelane': 'no label', 'separate': 'no label', 'safety': 'no label', });
lyr_Draftroutes_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});