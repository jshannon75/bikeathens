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
var format_BulldogBikeShare_1 = new ol.format.GeoJSON();
var features_BulldogBikeShare_1 = format_BulldogBikeShare_1.readFeatures(json_BulldogBikeShare_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BulldogBikeShare_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BulldogBikeShare_1.addFeatures(features_BulldogBikeShare_1);
var lyr_BulldogBikeShare_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BulldogBikeShare_1, 
                style: style_BulldogBikeShare_1,
                interactive: true,
    title: 'Bulldog Bike Share<br />\
    <img src="styles/legend/BulldogBikeShare_1_0.png" /> 11 - 522<br />\
    <img src="styles/legend/BulldogBikeShare_1_1.png" /> 522 - 1781<br />\
    <img src="styles/legend/BulldogBikeShare_1_2.png" /> 1781 - 3829<br />\
    <img src="styles/legend/BulldogBikeShare_1_3.png" /> 3829 - 6913<br />\
    <img src="styles/legend/BulldogBikeShare_1_4.png" /> 6913 - 13990<br />\
    <img src="styles/legend/BulldogBikeShare_1_5.png" /> 13990 - 26429<br />\
    <img src="styles/legend/BulldogBikeShare_1_6.png" /> 26429 - 84095<br />'
        });
var format_Trainingpointsofinterest_2 = new ol.format.GeoJSON();
var features_Trainingpointsofinterest_2 = format_Trainingpointsofinterest_2.readFeatures(json_Trainingpointsofinterest_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trainingpointsofinterest_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trainingpointsofinterest_2.addFeatures(features_Trainingpointsofinterest_2);
var lyr_Trainingpointsofinterest_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Trainingpointsofinterest_2, 
                style: style_Trainingpointsofinterest_2,
                interactive: true,
                title: '<img src="styles/legend/Trainingpointsofinterest_2.png" /> Training points of interest'
            });
var format_Hererouting_3 = new ol.format.GeoJSON();
var features_Hererouting_3 = format_Hererouting_3.readFeatures(json_Hererouting_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hererouting_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hererouting_3.addFeatures(features_Hererouting_3);
var lyr_Hererouting_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hererouting_3, 
                style: style_Hererouting_3,
                interactive: false,
    title: 'Here routing<br />\
    <img src="styles/legend/Hererouting_3_0.png" /> 1 - 105<br />\
    <img src="styles/legend/Hererouting_3_1.png" /> 105 - 256<br />\
    <img src="styles/legend/Hererouting_3_2.png" /> 256 - 473<br />\
    <img src="styles/legend/Hererouting_3_3.png" /> 473 - 799<br />\
    <img src="styles/legend/Hererouting_3_4.png" /> 799 - 1349<br />\
    <img src="styles/legend/Hererouting_3_5.png" /> 1349 - 2329<br />\
    <img src="styles/legend/Hererouting_3_6.png" /> 2329 - 3651<br />'
        });
var format_Mapboxrouting_4 = new ol.format.GeoJSON();
var features_Mapboxrouting_4 = format_Mapboxrouting_4.readFeatures(json_Mapboxrouting_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mapboxrouting_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mapboxrouting_4.addFeatures(features_Mapboxrouting_4);
var lyr_Mapboxrouting_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mapboxrouting_4, 
                style: style_Mapboxrouting_4,
                interactive: false,
    title: 'Mapbox routing<br />\
    <img src="styles/legend/Mapboxrouting_4_0.png" /> 1 - 94<br />\
    <img src="styles/legend/Mapboxrouting_4_1.png" /> 94 - 262<br />\
    <img src="styles/legend/Mapboxrouting_4_2.png" /> 262 - 559<br />\
    <img src="styles/legend/Mapboxrouting_4_3.png" /> 559 - 1078<br />\
    <img src="styles/legend/Mapboxrouting_4_4.png" /> 1078 - 1793<br />\
    <img src="styles/legend/Mapboxrouting_4_5.png" /> 1793 - 2303<br />'
        });
var format_Googlerouting_5 = new ol.format.GeoJSON();
var features_Googlerouting_5 = format_Googlerouting_5.readFeatures(json_Googlerouting_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Googlerouting_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Googlerouting_5.addFeatures(features_Googlerouting_5);
var lyr_Googlerouting_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Googlerouting_5, 
                style: style_Googlerouting_5,
                interactive: false,
    title: 'Google routing<br />\
    <img src="styles/legend/Googlerouting_5_0.png" /> 1 - 134<br />\
    <img src="styles/legend/Googlerouting_5_1.png" /> 134 - 557<br />\
    <img src="styles/legend/Googlerouting_5_2.png" /> 557 - 1536<br />\
    <img src="styles/legend/Googlerouting_5_3.png" /> 1536 - 2941<br />\
    <img src="styles/legend/Googlerouting_5_4.png" /> 2941 - 5138<br />\
    <img src="styles/legend/Googlerouting_5_5.png" /> 5138 - 8581<br />\
    <img src="styles/legend/Googlerouting_5_6.png" /> 8581 - 15358<br />'
        });
var format_Draftroutes_6 = new ol.format.GeoJSON();
var features_Draftroutes_6 = format_Draftroutes_6.readFeatures(json_Draftroutes_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Draftroutes_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Draftroutes_6.addFeatures(features_Draftroutes_6);
var lyr_Draftroutes_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Draftroutes_6, 
                style: style_Draftroutes_6,
                interactive: false,
                title: '<img src="styles/legend/Draftroutes_6.png" /> Draft routes'
            });

lyr_Positron_0.setVisible(true);lyr_BulldogBikeShare_1.setVisible(false);lyr_Trainingpointsofinterest_2.setVisible(true);lyr_Hererouting_3.setVisible(false);lyr_Mapboxrouting_4.setVisible(false);lyr_Googlerouting_5.setVisible(false);lyr_Draftroutes_6.setVisible(true);
var layersList = [lyr_Positron_0,lyr_BulldogBikeShare_1,lyr_Trainingpointsofinterest_2,lyr_Hererouting_3,lyr_Mapboxrouting_4,lyr_Googlerouting_5,lyr_Draftroutes_6];
lyr_BulldogBikeShare_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'HFCS': 'HFCS', 'highway': 'highway', 'maxspeed': 'maxspeed', 'name': 'name', 'ref': 'ref', 'source.HFCS': 'source.HFCS', 'source.highway': 'source.highway', 'tiger.county': 'tiger.county', 'tiger.cfcc': 'tiger.cfcc', 'tiger.name_base': 'tiger.name_base', 'tiger.name_type': 'tiger.name_type', 'tiger.reviewed': 'tiger.reviewed', 'tiger.zip_left': 'tiger.zip_left', 'tiger.zip_right': 'tiger.zip_right', 'tiger.separated': 'tiger.separated', 'tiger.source': 'tiger.source', 'tiger.tlid': 'tiger.tlid', 'tiger.upload_uuid': 'tiger.upload_uuid', 'oneway': 'oneway', 'name_1': 'name_1', 'name_2': 'name_2', 'tiger.name_base_1': 'tiger.name_base_1', 'tiger.name_base_2': 'tiger.name_base_2', 'tiger.name_type_1': 'tiger.name_type_1', 'tiger.name_type_2': 'tiger.name_type_2', 'tiger.name_direction_prefix': 'tiger.name_direction_prefix', 'tiger.zip_left_1': 'tiger.zip_left_1', 'bicycle': 'bicycle', 'destination': 'destination', 'foot': 'foot', 'lanes': 'lanes', 'destination.ref': 'destination.ref', 'gdot.grip': 'gdot.grip', 'hgv': 'hgv', 'hgv.national_network': 'hgv.national_network', 'source.hgv.national_network': 'source.hgv.national_network', 'access': 'access', 'service': 'service', 'noref': 'noref', 'tiger.name_base_3': 'tiger.name_base_3', 'tiger.name_base_4': 'tiger.name_base_4', 'tiger.zip_left_2': 'tiger.zip_left_2', 'tiger.zip_right_1': 'tiger.zip_right_1', 'surface': 'surface', 'ROAD_NAME': 'ROAD_NAME', 'name.etymology.wikidata': 'name.etymology.wikidata', 'tiger.zip_right_2': 'tiger.zip_right_2', 'tiger.zip_left_3': 'tiger.zip_left_3', 'tiger.zip_right_3': 'tiger.zip_right_3', 'rcn_ref': 'rcn_ref', 'lanes.backward': 'lanes.backward', 'lanes.forward': 'lanes.forward', 'highway.source': 'highway.source', 'cycleway': 'cycleway', 'sidewalk': 'sidewalk', 'bridge': 'bridge', 'layer': 'layer', 'turn.lanes.forward': 'turn.lanes.forward', 'motor_vehicle': 'motor_vehicle', 'cycleway.both': 'cycleway.both', 'maxspeed.type': 'maxspeed.type', 'tiger.name_direction_suffix': 'tiger.name_direction_suffix', 'tiger.zip_left_4': 'tiger.zip_left_4', 'tiger.name_direction_prefix_1': 'tiger.name_direction_prefix_1', 'cycleway.lane': 'cycleway.lane', 'tiger.name_direction_suffix_3': 'tiger.name_direction_suffix_3', 'tiger.name_direction_suffix_4': 'tiger.name_direction_suffix_4', 'oneway.bicycle': 'oneway.bicycle', 'NHS': 'NHS', 'parking.condition.right': 'parking.condition.right', 'parking.lane.left': 'parking.lane.left', 'parking.lane.right': 'parking.lane.right', 'parking.lane.right.parallel': 'parking.lane.right.parallel', 'junction': 'junction', 'cycleway.right': 'cycleway.right', 'tiger.name_direction_suffix_1': 'tiger.name_direction_suffix_1', 'description': 'description', 'horse': 'horse', 'divided': 'divided', 'destination.ref.to': 'destination.ref.to', 'cycleway.left': 'cycleway.left', 'covered': 'covered', 'lit': 'lit', 'segregated': 'segregated', 'tiger.zip': 'tiger.zip', 'bus': 'bus', 'footway': 'footway', 'level': 'level', 'crossing': 'crossing', 'bridge.source': 'bridge.source', 'bridge.type': 'bridge.type', 'GADOT_HWY.reviewed': 'GADOT_HWY.reviewed', 'GADOT_HWY.source': 'GADOT_HWY.source', 'GADOT_HWY.source_1': 'GADOT_HWY.source_1', 'tunnel': 'tunnel', 'note.lanes': 'note.lanes', 'old_railway_operator': 'old_railway_operator', 'railway': 'railway', 'source.name': 'source.name', 'man_made': 'man_made', 'oneway_type': 'oneway_type', 'indoor': 'indoor', 'incline': 'incline', 'turn.lanes': 'turn.lanes', 'material': 'material', 'ramp': 'ramp', 'ramp.wheelchair': 'ramp.wheelchair', 'turn.lanes.backward': 'turn.lanes.backward', 'bus_bay': 'bus_bay', 'bicyle': 'bicyle', 'width': 'width', 'traffic_calming': 'traffic_calming', 'handrail': 'handrail', 'crossing.island': 'crossing.island', 'trail_visibility': 'trail_visibility', 'lanes.both_ways': 'lanes.both_ways', 'n': 'n', });
lyr_Trainingpointsofinterest_2.set('fieldAliases', {'name': 'name', 'category': 'category', 'address': 'address', 'city': 'city', 'zip': 'zip', 'lat': 'lat', 'lon': 'lon', 'primary_sic': 'primary_sic', 'primary_naics': 'primary_naics', 'ES_short': 'ES_short', });
lyr_Hererouting_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'departure': 'departure', 'origin': 'origin', 'arrival': 'arrival', 'destination': 'destination', 'mode': 'mode', 'traffic': 'traffic', 'distance': 'distance', 'baseTime': 'baseTime', 'travelTime': 'travelTime', 'co2Emission': 'co2Emission', 'rowid': 'rowid', 'n': 'n', });
lyr_Mapboxrouting_4.set('fieldAliases', {'fid': 'fid', 'distance': 'distance', 'duration': 'duration', 'rowid': 'rowid', 'n': 'n', });
lyr_Googlerouting_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'name': 'name', 'n': 'n', });
lyr_Draftroutes_6.set('fieldAliases', {'fid': 'fid', 'rowid': 'rowid', 'name': 'name', 'dist_all': 'dist_all', 'slope_med': 'slope_med', 'pct_less5': 'pct_less5', 'pct_more5': 'pct_more5', 'pct_more10': 'pct_more10', 'pct_more15': 'pct_more15', 'pct_5_10': 'pct_5_10', 'waviness': 'waviness', 'topo_index_wav2': 'topo_index_wav2', 'textbox': 'textbox', 'TR_NAME': 'TR_NAME', 'ACC_TR_TYP': 'ACC_TR_TYP', 'SEGMENTID': 'SEGMENTID', 'ST_NAME': 'ST_NAME', 'greenway': 'greenway', 'facility': 'facility', 'bike_cat': 'bike_cat', 'MPH': 'MPH', 'CLASSIFICA': 'CLASSIFICA', 'biketrail': 'biketrail', 'rectrail': 'rectrail', 'mphscore': 'mphscore', 'bikelane': 'bikelane', 'separate': 'separate', 'safety': 'safety', 'fid_2': 'fid_2', 'full_id': 'full_id', 'osm_id': 'osm_id', 'name_2': 'name_2', 'n': 'n', 'fid_3': 'fid_3', 'distance': 'distance', 'duration': 'duration', 'rowid_2': 'rowid_2', 'n_2': 'n_2', 'fid_4': 'fid_4', 'rowid_3': 'rowid_3', 'name_3': 'name_3', 'dist_all_2': 'dist_all_2', 'slope_med_2': 'slope_med_2', 'pct_less5_2': 'pct_less5_2', 'pct_more5_2': 'pct_more5_2', 'pct_more10_2': 'pct_more10_2', 'pct_more15_2': 'pct_more15_2', 'pct_5_10_2': 'pct_5_10_2', 'waviness_2': 'waviness_2', 'topo_index_wav2_2': 'topo_index_wav2_2', 'textbox_2': 'textbox_2', 'TR_NAME_2': 'TR_NAME_2', 'ACC_TR_TYP_2': 'ACC_TR_TYP_2', 'SEGMENTID_2': 'SEGMENTID_2', 'ST_NAME_2': 'ST_NAME_2', 'greenway_2': 'greenway_2', 'facility_2': 'facility_2', 'bike_cat_2': 'bike_cat_2', 'MPH_2': 'MPH_2', 'CLASSIFICA_2': 'CLASSIFICA_2', 'biketrail_2': 'biketrail_2', 'rectrail_2': 'rectrail_2', 'mphscore_2': 'mphscore_2', 'bikelane_2': 'bikelane_2', 'separate_2': 'separate_2', 'safety_2': 'safety_2', });
lyr_BulldogBikeShare_1.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'HFCS': 'TextEdit', 'highway': 'TextEdit', 'maxspeed': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'source.HFCS': 'TextEdit', 'source.highway': 'TextEdit', 'tiger.county': 'TextEdit', 'tiger.cfcc': 'TextEdit', 'tiger.name_base': 'TextEdit', 'tiger.name_type': 'TextEdit', 'tiger.reviewed': 'TextEdit', 'tiger.zip_left': 'TextEdit', 'tiger.zip_right': 'TextEdit', 'tiger.separated': 'TextEdit', 'tiger.source': 'TextEdit', 'tiger.tlid': 'TextEdit', 'tiger.upload_uuid': 'TextEdit', 'oneway': 'TextEdit', 'name_1': 'TextEdit', 'name_2': 'TextEdit', 'tiger.name_base_1': 'TextEdit', 'tiger.name_base_2': 'TextEdit', 'tiger.name_type_1': 'TextEdit', 'tiger.name_type_2': 'TextEdit', 'tiger.name_direction_prefix': 'TextEdit', 'tiger.zip_left_1': 'TextEdit', 'bicycle': 'TextEdit', 'destination': 'TextEdit', 'foot': 'TextEdit', 'lanes': 'TextEdit', 'destination.ref': 'TextEdit', 'gdot.grip': 'TextEdit', 'hgv': 'TextEdit', 'hgv.national_network': 'TextEdit', 'source.hgv.national_network': 'TextEdit', 'access': 'TextEdit', 'service': 'TextEdit', 'noref': 'TextEdit', 'tiger.name_base_3': 'TextEdit', 'tiger.name_base_4': 'TextEdit', 'tiger.zip_left_2': 'TextEdit', 'tiger.zip_right_1': 'TextEdit', 'surface': 'TextEdit', 'ROAD_NAME': 'TextEdit', 'name.etymology.wikidata': 'TextEdit', 'tiger.zip_right_2': 'TextEdit', 'tiger.zip_left_3': 'TextEdit', 'tiger.zip_right_3': 'TextEdit', 'rcn_ref': 'TextEdit', 'lanes.backward': 'TextEdit', 'lanes.forward': 'TextEdit', 'highway.source': 'TextEdit', 'cycleway': 'TextEdit', 'sidewalk': 'TextEdit', 'bridge': 'TextEdit', 'layer': 'TextEdit', 'turn.lanes.forward': 'TextEdit', 'motor_vehicle': 'TextEdit', 'cycleway.both': 'TextEdit', 'maxspeed.type': 'TextEdit', 'tiger.name_direction_suffix': 'TextEdit', 'tiger.zip_left_4': 'TextEdit', 'tiger.name_direction_prefix_1': 'TextEdit', 'cycleway.lane': 'TextEdit', 'tiger.name_direction_suffix_3': 'TextEdit', 'tiger.name_direction_suffix_4': 'TextEdit', 'oneway.bicycle': 'TextEdit', 'NHS': 'TextEdit', 'parking.condition.right': 'TextEdit', 'parking.lane.left': 'TextEdit', 'parking.lane.right': 'TextEdit', 'parking.lane.right.parallel': 'TextEdit', 'junction': 'TextEdit', 'cycleway.right': 'TextEdit', 'tiger.name_direction_suffix_1': 'TextEdit', 'description': 'TextEdit', 'horse': 'TextEdit', 'divided': 'TextEdit', 'destination.ref.to': 'TextEdit', 'cycleway.left': 'TextEdit', 'covered': 'TextEdit', 'lit': 'TextEdit', 'segregated': 'TextEdit', 'tiger.zip': 'TextEdit', 'bus': 'TextEdit', 'footway': 'TextEdit', 'level': 'TextEdit', 'crossing': 'TextEdit', 'bridge.source': 'TextEdit', 'bridge.type': 'TextEdit', 'GADOT_HWY.reviewed': 'TextEdit', 'GADOT_HWY.source': 'TextEdit', 'GADOT_HWY.source_1': 'TextEdit', 'tunnel': 'TextEdit', 'note.lanes': 'TextEdit', 'old_railway_operator': 'TextEdit', 'railway': 'TextEdit', 'source.name': 'TextEdit', 'man_made': 'TextEdit', 'oneway_type': 'TextEdit', 'indoor': 'TextEdit', 'incline': 'TextEdit', 'turn.lanes': 'TextEdit', 'material': 'TextEdit', 'ramp': 'TextEdit', 'ramp.wheelchair': 'TextEdit', 'turn.lanes.backward': 'TextEdit', 'bus_bay': 'TextEdit', 'bicyle': 'TextEdit', 'width': 'TextEdit', 'traffic_calming': 'TextEdit', 'handrail': 'TextEdit', 'crossing.island': 'TextEdit', 'trail_visibility': 'TextEdit', 'lanes.both_ways': 'TextEdit', 'n': 'Range', });
lyr_Trainingpointsofinterest_2.set('fieldImages', {'name': '', 'category': '', 'address': '', 'city': '', 'zip': '', 'lat': '', 'lon': '', 'primary_sic': '', 'primary_naics': '', 'ES_short': '', });
lyr_Hererouting_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'departure': 'DateTime', 'origin': 'TextEdit', 'arrival': 'DateTime', 'destination': 'TextEdit', 'mode': 'TextEdit', 'traffic': 'TextEdit', 'distance': 'Range', 'baseTime': 'Range', 'travelTime': 'Range', 'co2Emission': 'TextEdit', 'rowid': 'Range', 'n': 'Range', });
lyr_Mapboxrouting_4.set('fieldImages', {'fid': 'TextEdit', 'distance': 'TextEdit', 'duration': 'TextEdit', 'rowid': 'Range', 'n': 'Range', });
lyr_Googlerouting_5.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'n': 'Range', });
lyr_Draftroutes_6.set('fieldImages', {'fid': 'TextEdit', 'rowid': 'TextEdit', 'name': 'TextEdit', 'dist_all': 'TextEdit', 'slope_med': 'TextEdit', 'pct_less5': 'TextEdit', 'pct_more5': 'TextEdit', 'pct_more10': 'TextEdit', 'pct_more15': 'TextEdit', 'pct_5_10': 'TextEdit', 'waviness': 'TextEdit', 'topo_index_wav2': 'TextEdit', 'textbox': 'TextEdit', 'TR_NAME': 'TextEdit', 'ACC_TR_TYP': 'TextEdit', 'SEGMENTID': 'TextEdit', 'ST_NAME': 'TextEdit', 'greenway': 'TextEdit', 'facility': 'TextEdit', 'bike_cat': 'TextEdit', 'MPH': 'TextEdit', 'CLASSIFICA': 'TextEdit', 'biketrail': 'TextEdit', 'rectrail': 'TextEdit', 'mphscore': 'TextEdit', 'bikelane': 'TextEdit', 'separate': 'TextEdit', 'safety': 'TextEdit', 'fid_2': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'name_2': 'TextEdit', 'n': 'Range', 'fid_3': 'TextEdit', 'distance': 'TextEdit', 'duration': 'TextEdit', 'rowid_2': 'Range', 'n_2': 'Range', 'fid_4': 'TextEdit', 'rowid_3': 'TextEdit', 'name_3': 'TextEdit', 'dist_all_2': 'TextEdit', 'slope_med_2': 'TextEdit', 'pct_less5_2': 'TextEdit', 'pct_more5_2': 'TextEdit', 'pct_more10_2': 'TextEdit', 'pct_more15_2': 'TextEdit', 'pct_5_10_2': 'TextEdit', 'waviness_2': 'TextEdit', 'topo_index_wav2_2': 'TextEdit', 'textbox_2': 'TextEdit', 'TR_NAME_2': 'TextEdit', 'ACC_TR_TYP_2': 'TextEdit', 'SEGMENTID_2': 'TextEdit', 'ST_NAME_2': 'TextEdit', 'greenway_2': 'TextEdit', 'facility_2': 'TextEdit', 'bike_cat_2': 'TextEdit', 'MPH_2': 'TextEdit', 'CLASSIFICA_2': 'TextEdit', 'biketrail_2': 'TextEdit', 'rectrail_2': 'TextEdit', 'mphscore_2': 'TextEdit', 'bikelane_2': 'TextEdit', 'separate_2': 'TextEdit', 'safety_2': 'TextEdit', });
lyr_BulldogBikeShare_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'HFCS': 'no label', 'highway': 'no label', 'maxspeed': 'no label', 'name': 'no label', 'ref': 'no label', 'source.HFCS': 'no label', 'source.highway': 'no label', 'tiger.county': 'no label', 'tiger.cfcc': 'no label', 'tiger.name_base': 'no label', 'tiger.name_type': 'no label', 'tiger.reviewed': 'no label', 'tiger.zip_left': 'no label', 'tiger.zip_right': 'no label', 'tiger.separated': 'no label', 'tiger.source': 'no label', 'tiger.tlid': 'no label', 'tiger.upload_uuid': 'no label', 'oneway': 'no label', 'name_1': 'no label', 'name_2': 'no label', 'tiger.name_base_1': 'no label', 'tiger.name_base_2': 'no label', 'tiger.name_type_1': 'no label', 'tiger.name_type_2': 'no label', 'tiger.name_direction_prefix': 'no label', 'tiger.zip_left_1': 'no label', 'bicycle': 'no label', 'destination': 'no label', 'foot': 'no label', 'lanes': 'no label', 'destination.ref': 'no label', 'gdot.grip': 'no label', 'hgv': 'no label', 'hgv.national_network': 'no label', 'source.hgv.national_network': 'no label', 'access': 'no label', 'service': 'no label', 'noref': 'no label', 'tiger.name_base_3': 'no label', 'tiger.name_base_4': 'no label', 'tiger.zip_left_2': 'no label', 'tiger.zip_right_1': 'no label', 'surface': 'no label', 'ROAD_NAME': 'no label', 'name.etymology.wikidata': 'no label', 'tiger.zip_right_2': 'no label', 'tiger.zip_left_3': 'no label', 'tiger.zip_right_3': 'no label', 'rcn_ref': 'no label', 'lanes.backward': 'no label', 'lanes.forward': 'no label', 'highway.source': 'no label', 'cycleway': 'no label', 'sidewalk': 'no label', 'bridge': 'no label', 'layer': 'no label', 'turn.lanes.forward': 'no label', 'motor_vehicle': 'no label', 'cycleway.both': 'no label', 'maxspeed.type': 'no label', 'tiger.name_direction_suffix': 'no label', 'tiger.zip_left_4': 'no label', 'tiger.name_direction_prefix_1': 'no label', 'cycleway.lane': 'no label', 'tiger.name_direction_suffix_3': 'no label', 'tiger.name_direction_suffix_4': 'no label', 'oneway.bicycle': 'no label', 'NHS': 'no label', 'parking.condition.right': 'no label', 'parking.lane.left': 'no label', 'parking.lane.right': 'no label', 'parking.lane.right.parallel': 'no label', 'junction': 'no label', 'cycleway.right': 'no label', 'tiger.name_direction_suffix_1': 'no label', 'description': 'no label', 'horse': 'no label', 'divided': 'no label', 'destination.ref.to': 'no label', 'cycleway.left': 'no label', 'covered': 'no label', 'lit': 'no label', 'segregated': 'no label', 'tiger.zip': 'no label', 'bus': 'no label', 'footway': 'no label', 'level': 'no label', 'crossing': 'no label', 'bridge.source': 'no label', 'bridge.type': 'no label', 'GADOT_HWY.reviewed': 'no label', 'GADOT_HWY.source': 'no label', 'GADOT_HWY.source_1': 'no label', 'tunnel': 'no label', 'note.lanes': 'no label', 'old_railway_operator': 'no label', 'railway': 'no label', 'source.name': 'no label', 'man_made': 'no label', 'oneway_type': 'no label', 'indoor': 'no label', 'incline': 'no label', 'turn.lanes': 'no label', 'material': 'no label', 'ramp': 'no label', 'ramp.wheelchair': 'no label', 'turn.lanes.backward': 'no label', 'bus_bay': 'no label', 'bicyle': 'no label', 'width': 'no label', 'traffic_calming': 'no label', 'handrail': 'no label', 'crossing.island': 'no label', 'trail_visibility': 'no label', 'lanes.both_ways': 'no label', 'n': 'no label', });
lyr_Trainingpointsofinterest_2.set('fieldLabels', {'name': 'no label', 'category': 'no label', 'address': 'no label', 'city': 'no label', 'zip': 'no label', 'lat': 'no label', 'lon': 'no label', 'primary_sic': 'no label', 'primary_naics': 'no label', 'ES_short': 'no label', });
lyr_Hererouting_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'departure': 'no label', 'origin': 'no label', 'arrival': 'no label', 'destination': 'no label', 'mode': 'no label', 'traffic': 'no label', 'distance': 'no label', 'baseTime': 'no label', 'travelTime': 'no label', 'co2Emission': 'no label', 'rowid': 'no label', 'n': 'no label', });
lyr_Mapboxrouting_4.set('fieldLabels', {'fid': 'no label', 'distance': 'no label', 'duration': 'no label', 'rowid': 'no label', 'n': 'no label', });
lyr_Googlerouting_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'name': 'no label', 'n': 'no label', });
lyr_Draftroutes_6.set('fieldLabels', {'fid': 'no label', 'rowid': 'no label', 'name': 'no label', 'dist_all': 'no label', 'slope_med': 'no label', 'pct_less5': 'no label', 'pct_more5': 'no label', 'pct_more10': 'no label', 'pct_more15': 'no label', 'pct_5_10': 'no label', 'waviness': 'no label', 'topo_index_wav2': 'no label', 'textbox': 'no label', 'TR_NAME': 'no label', 'ACC_TR_TYP': 'no label', 'SEGMENTID': 'no label', 'ST_NAME': 'no label', 'greenway': 'no label', 'facility': 'no label', 'bike_cat': 'no label', 'MPH': 'no label', 'CLASSIFICA': 'no label', 'biketrail': 'no label', 'rectrail': 'no label', 'mphscore': 'no label', 'bikelane': 'no label', 'separate': 'no label', 'safety': 'no label', 'fid_2': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'name_2': 'no label', 'n': 'no label', 'fid_3': 'no label', 'distance': 'no label', 'duration': 'no label', 'rowid_2': 'no label', 'n_2': 'no label', 'fid_4': 'no label', 'rowid_3': 'no label', 'name_3': 'no label', 'dist_all_2': 'no label', 'slope_med_2': 'no label', 'pct_less5_2': 'no label', 'pct_more5_2': 'no label', 'pct_more10_2': 'no label', 'pct_more15_2': 'no label', 'pct_5_10_2': 'no label', 'waviness_2': 'no label', 'topo_index_wav2_2': 'no label', 'textbox_2': 'no label', 'TR_NAME_2': 'no label', 'ACC_TR_TYP_2': 'no label', 'SEGMENTID_2': 'no label', 'ST_NAME_2': 'no label', 'greenway_2': 'no label', 'facility_2': 'no label', 'bike_cat_2': 'no label', 'MPH_2': 'no label', 'CLASSIFICA_2': 'no label', 'biketrail_2': 'no label', 'rectrail_2': 'no label', 'mphscore_2': 'no label', 'bikelane_2': 'no label', 'separate_2': 'no label', 'safety_2': 'no label', });
lyr_Draftroutes_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});