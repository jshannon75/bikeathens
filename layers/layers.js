var wms_layers = [];


        var lyr_Basemap_0 = new ol.layer.Tile({
            'title': 'Basemap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Mapboxrouting_1 = new ol.format.GeoJSON();
var features_Mapboxrouting_1 = format_Mapboxrouting_1.readFeatures(json_Mapboxrouting_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mapboxrouting_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mapboxrouting_1.addFeatures(features_Mapboxrouting_1);
var lyr_Mapboxrouting_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mapboxrouting_1, 
                style: style_Mapboxrouting_1,
                interactive: true,
    title: 'Mapbox routing<br />\
    <img src="styles/legend/Mapboxrouting_1_0.png" /> 1 - 71<br />\
    <img src="styles/legend/Mapboxrouting_1_1.png" /> 71 - 181<br />\
    <img src="styles/legend/Mapboxrouting_1_2.png" /> 181 - 343<br />\
    <img src="styles/legend/Mapboxrouting_1_3.png" /> 343 - 563<br />\
    <img src="styles/legend/Mapboxrouting_1_4.png" /> 563 - 881<br />\
    <img src="styles/legend/Mapboxrouting_1_5.png" /> 881 - 1498<br />\
    <img src="styles/legend/Mapboxrouting_1_6.png" /> 1498 - 2303<br />'
        });
var format_HERErouting_2 = new ol.format.GeoJSON();
var features_HERErouting_2 = format_HERErouting_2.readFeatures(json_HERErouting_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HERErouting_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HERErouting_2.addFeatures(features_HERErouting_2);
var lyr_HERErouting_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HERErouting_2, 
                style: style_HERErouting_2,
                interactive: true,
    title: 'HERE routing<br />\
    <img src="styles/legend/HERErouting_2_0.png" /> 1 - 105<br />\
    <img src="styles/legend/HERErouting_2_1.png" /> 105 - 256<br />\
    <img src="styles/legend/HERErouting_2_2.png" /> 256 - 473<br />\
    <img src="styles/legend/HERErouting_2_3.png" /> 473 - 799<br />\
    <img src="styles/legend/HERErouting_2_4.png" /> 799 - 1349<br />\
    <img src="styles/legend/HERErouting_2_5.png" /> 1349 - 2329<br />\
    <img src="styles/legend/HERErouting_2_6.png" /> 2329 - 3651<br />'
        });
var format_Googlerouting_3 = new ol.format.GeoJSON();
var features_Googlerouting_3 = format_Googlerouting_3.readFeatures(json_Googlerouting_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Googlerouting_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Googlerouting_3.addFeatures(features_Googlerouting_3);
var lyr_Googlerouting_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Googlerouting_3, 
                style: style_Googlerouting_3,
                interactive: true,
    title: 'Google routing<br />\
    <img src="styles/legend/Googlerouting_3_0.png" /> 1 - 134<br />\
    <img src="styles/legend/Googlerouting_3_1.png" /> 134 - 557<br />\
    <img src="styles/legend/Googlerouting_3_2.png" /> 557 - 1536<br />\
    <img src="styles/legend/Googlerouting_3_3.png" /> 1536 - 2941<br />\
    <img src="styles/legend/Googlerouting_3_4.png" /> 2941 - 5138<br />\
    <img src="styles/legend/Googlerouting_3_5.png" /> 5138 - 8581<br />\
    <img src="styles/legend/Googlerouting_3_6.png" /> 8581 - 15358<br />'
        });
var format_Bulldogbikesharedata_4 = new ol.format.GeoJSON();
var features_Bulldogbikesharedata_4 = format_Bulldogbikesharedata_4.readFeatures(json_Bulldogbikesharedata_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bulldogbikesharedata_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bulldogbikesharedata_4.addFeatures(features_Bulldogbikesharedata_4);
var lyr_Bulldogbikesharedata_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bulldogbikesharedata_4, 
                style: style_Bulldogbikesharedata_4,
                interactive: true,
    title: 'Bulldog bike share data<br />\
    <img src="styles/legend/Bulldogbikesharedata_4_0.png" /> 11 - 522<br />\
    <img src="styles/legend/Bulldogbikesharedata_4_1.png" /> 522 - 1781<br />\
    <img src="styles/legend/Bulldogbikesharedata_4_2.png" /> 1781 - 3829<br />\
    <img src="styles/legend/Bulldogbikesharedata_4_3.png" /> 3829 - 6913<br />\
    <img src="styles/legend/Bulldogbikesharedata_4_4.png" /> 6913 - 13990<br />\
    <img src="styles/legend/Bulldogbikesharedata_4_5.png" /> 13990 - 26429<br />\
    <img src="styles/legend/Bulldogbikesharedata_4_6.png" /> 26429 - 84095<br />'
        });

lyr_Basemap_0.setVisible(true);lyr_Mapboxrouting_1.setVisible(true);lyr_HERErouting_2.setVisible(true);lyr_Googlerouting_3.setVisible(true);lyr_Bulldogbikesharedata_4.setVisible(true);
var layersList = [lyr_Basemap_0,lyr_Mapboxrouting_1,lyr_HERErouting_2,lyr_Googlerouting_3,lyr_Bulldogbikesharedata_4];
lyr_Mapboxrouting_1.set('fieldAliases', {'fid': 'fid', 'distance': 'distance', 'duration': 'duration', 'rowid': 'rowid', 'n': 'n', });
lyr_HERErouting_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'departure': 'departure', 'origin': 'origin', 'arrival': 'arrival', 'destination': 'destination', 'mode': 'mode', 'traffic': 'traffic', 'distance': 'distance', 'baseTime': 'baseTime', 'travelTime': 'travelTime', 'co2Emission': 'co2Emission', 'rowid': 'rowid', 'n': 'n', });
lyr_Googlerouting_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'name': 'name', 'n': 'n', });
lyr_Bulldogbikesharedata_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'HFCS': 'HFCS', 'highway': 'highway', 'maxspeed': 'maxspeed', 'name': 'name', 'ref': 'ref', 'source.HFCS': 'source.HFCS', 'source.highway': 'source.highway', 'tiger.county': 'tiger.county', 'tiger.cfcc': 'tiger.cfcc', 'tiger.name_base': 'tiger.name_base', 'tiger.name_type': 'tiger.name_type', 'tiger.reviewed': 'tiger.reviewed', 'tiger.zip_left': 'tiger.zip_left', 'tiger.zip_right': 'tiger.zip_right', 'tiger.separated': 'tiger.separated', 'tiger.source': 'tiger.source', 'tiger.tlid': 'tiger.tlid', 'tiger.upload_uuid': 'tiger.upload_uuid', 'oneway': 'oneway', 'name_1': 'name_1', 'name_2': 'name_2', 'tiger.name_base_1': 'tiger.name_base_1', 'tiger.name_base_2': 'tiger.name_base_2', 'tiger.name_type_1': 'tiger.name_type_1', 'tiger.name_type_2': 'tiger.name_type_2', 'tiger.name_direction_prefix': 'tiger.name_direction_prefix', 'tiger.zip_left_1': 'tiger.zip_left_1', 'bicycle': 'bicycle', 'destination': 'destination', 'foot': 'foot', 'lanes': 'lanes', 'destination.ref': 'destination.ref', 'gdot.grip': 'gdot.grip', 'hgv': 'hgv', 'hgv.national_network': 'hgv.national_network', 'source.hgv.national_network': 'source.hgv.national_network', 'access': 'access', 'service': 'service', 'noref': 'noref', 'tiger.name_base_3': 'tiger.name_base_3', 'tiger.name_base_4': 'tiger.name_base_4', 'tiger.zip_left_2': 'tiger.zip_left_2', 'tiger.zip_right_1': 'tiger.zip_right_1', 'surface': 'surface', 'ROAD_NAME': 'ROAD_NAME', 'name.etymology.wikidata': 'name.etymology.wikidata', 'tiger.zip_right_2': 'tiger.zip_right_2', 'tiger.zip_left_3': 'tiger.zip_left_3', 'tiger.zip_right_3': 'tiger.zip_right_3', 'rcn_ref': 'rcn_ref', 'lanes.backward': 'lanes.backward', 'lanes.forward': 'lanes.forward', 'highway.source': 'highway.source', 'cycleway': 'cycleway', 'sidewalk': 'sidewalk', 'bridge': 'bridge', 'layer': 'layer', 'turn.lanes.forward': 'turn.lanes.forward', 'motor_vehicle': 'motor_vehicle', 'cycleway.both': 'cycleway.both', 'maxspeed.type': 'maxspeed.type', 'tiger.name_direction_suffix': 'tiger.name_direction_suffix', 'tiger.zip_left_4': 'tiger.zip_left_4', 'tiger.name_direction_prefix_1': 'tiger.name_direction_prefix_1', 'cycleway.lane': 'cycleway.lane', 'tiger.name_direction_suffix_3': 'tiger.name_direction_suffix_3', 'tiger.name_direction_suffix_4': 'tiger.name_direction_suffix_4', 'oneway.bicycle': 'oneway.bicycle', 'NHS': 'NHS', 'parking.condition.right': 'parking.condition.right', 'parking.lane.left': 'parking.lane.left', 'parking.lane.right': 'parking.lane.right', 'parking.lane.right.parallel': 'parking.lane.right.parallel', 'junction': 'junction', 'cycleway.right': 'cycleway.right', 'tiger.name_direction_suffix_1': 'tiger.name_direction_suffix_1', 'description': 'description', 'horse': 'horse', 'divided': 'divided', 'destination.ref.to': 'destination.ref.to', 'cycleway.left': 'cycleway.left', 'covered': 'covered', 'lit': 'lit', 'segregated': 'segregated', 'tiger.zip': 'tiger.zip', 'bus': 'bus', 'footway': 'footway', 'level': 'level', 'crossing': 'crossing', 'bridge.source': 'bridge.source', 'bridge.type': 'bridge.type', 'GADOT_HWY.reviewed': 'GADOT_HWY.reviewed', 'GADOT_HWY.source': 'GADOT_HWY.source', 'GADOT_HWY.source_1': 'GADOT_HWY.source_1', 'tunnel': 'tunnel', 'note.lanes': 'note.lanes', 'old_railway_operator': 'old_railway_operator', 'railway': 'railway', 'source.name': 'source.name', 'man_made': 'man_made', 'oneway_type': 'oneway_type', 'indoor': 'indoor', 'incline': 'incline', 'turn.lanes': 'turn.lanes', 'material': 'material', 'ramp': 'ramp', 'ramp.wheelchair': 'ramp.wheelchair', 'turn.lanes.backward': 'turn.lanes.backward', 'bus_bay': 'bus_bay', 'bicyle': 'bicyle', 'width': 'width', 'traffic_calming': 'traffic_calming', 'handrail': 'handrail', 'crossing.island': 'crossing.island', 'trail_visibility': 'trail_visibility', 'lanes.both_ways': 'lanes.both_ways', 'n': 'n', });
lyr_Mapboxrouting_1.set('fieldImages', {'fid': 'TextEdit', 'distance': 'TextEdit', 'duration': 'TextEdit', 'rowid': 'Range', 'n': 'Range', });
lyr_HERErouting_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'departure': 'DateTime', 'origin': 'TextEdit', 'arrival': 'DateTime', 'destination': 'TextEdit', 'mode': 'TextEdit', 'traffic': 'TextEdit', 'distance': 'Range', 'baseTime': 'Range', 'travelTime': 'Range', 'co2Emission': 'TextEdit', 'rowid': 'Range', 'n': 'Range', });
lyr_Googlerouting_3.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'n': 'Range', });
lyr_Bulldogbikesharedata_4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'HFCS': 'TextEdit', 'highway': 'TextEdit', 'maxspeed': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'source.HFCS': 'TextEdit', 'source.highway': 'TextEdit', 'tiger.county': 'TextEdit', 'tiger.cfcc': 'TextEdit', 'tiger.name_base': 'TextEdit', 'tiger.name_type': 'TextEdit', 'tiger.reviewed': 'TextEdit', 'tiger.zip_left': 'TextEdit', 'tiger.zip_right': 'TextEdit', 'tiger.separated': 'TextEdit', 'tiger.source': 'TextEdit', 'tiger.tlid': 'TextEdit', 'tiger.upload_uuid': 'TextEdit', 'oneway': 'TextEdit', 'name_1': 'TextEdit', 'name_2': 'TextEdit', 'tiger.name_base_1': 'TextEdit', 'tiger.name_base_2': 'TextEdit', 'tiger.name_type_1': 'TextEdit', 'tiger.name_type_2': 'TextEdit', 'tiger.name_direction_prefix': 'TextEdit', 'tiger.zip_left_1': 'TextEdit', 'bicycle': 'TextEdit', 'destination': 'TextEdit', 'foot': 'TextEdit', 'lanes': 'TextEdit', 'destination.ref': 'TextEdit', 'gdot.grip': 'TextEdit', 'hgv': 'TextEdit', 'hgv.national_network': 'TextEdit', 'source.hgv.national_network': 'TextEdit', 'access': 'TextEdit', 'service': 'TextEdit', 'noref': 'TextEdit', 'tiger.name_base_3': 'TextEdit', 'tiger.name_base_4': 'TextEdit', 'tiger.zip_left_2': 'TextEdit', 'tiger.zip_right_1': 'TextEdit', 'surface': 'TextEdit', 'ROAD_NAME': 'TextEdit', 'name.etymology.wikidata': 'TextEdit', 'tiger.zip_right_2': 'TextEdit', 'tiger.zip_left_3': 'TextEdit', 'tiger.zip_right_3': 'TextEdit', 'rcn_ref': 'TextEdit', 'lanes.backward': 'TextEdit', 'lanes.forward': 'TextEdit', 'highway.source': 'TextEdit', 'cycleway': 'TextEdit', 'sidewalk': 'TextEdit', 'bridge': 'TextEdit', 'layer': 'TextEdit', 'turn.lanes.forward': 'TextEdit', 'motor_vehicle': 'TextEdit', 'cycleway.both': 'TextEdit', 'maxspeed.type': 'TextEdit', 'tiger.name_direction_suffix': 'TextEdit', 'tiger.zip_left_4': 'TextEdit', 'tiger.name_direction_prefix_1': 'TextEdit', 'cycleway.lane': 'TextEdit', 'tiger.name_direction_suffix_3': 'TextEdit', 'tiger.name_direction_suffix_4': 'TextEdit', 'oneway.bicycle': 'TextEdit', 'NHS': 'TextEdit', 'parking.condition.right': 'TextEdit', 'parking.lane.left': 'TextEdit', 'parking.lane.right': 'TextEdit', 'parking.lane.right.parallel': 'TextEdit', 'junction': 'TextEdit', 'cycleway.right': 'TextEdit', 'tiger.name_direction_suffix_1': 'TextEdit', 'description': 'TextEdit', 'horse': 'TextEdit', 'divided': 'TextEdit', 'destination.ref.to': 'TextEdit', 'cycleway.left': 'TextEdit', 'covered': 'TextEdit', 'lit': 'TextEdit', 'segregated': 'TextEdit', 'tiger.zip': 'TextEdit', 'bus': 'TextEdit', 'footway': 'TextEdit', 'level': 'TextEdit', 'crossing': 'TextEdit', 'bridge.source': 'TextEdit', 'bridge.type': 'TextEdit', 'GADOT_HWY.reviewed': 'TextEdit', 'GADOT_HWY.source': 'TextEdit', 'GADOT_HWY.source_1': 'TextEdit', 'tunnel': 'TextEdit', 'note.lanes': 'TextEdit', 'old_railway_operator': 'TextEdit', 'railway': 'TextEdit', 'source.name': 'TextEdit', 'man_made': 'TextEdit', 'oneway_type': 'TextEdit', 'indoor': 'TextEdit', 'incline': 'TextEdit', 'turn.lanes': 'TextEdit', 'material': 'TextEdit', 'ramp': 'TextEdit', 'ramp.wheelchair': 'TextEdit', 'turn.lanes.backward': 'TextEdit', 'bus_bay': 'TextEdit', 'bicyle': 'TextEdit', 'width': 'TextEdit', 'traffic_calming': 'TextEdit', 'handrail': 'TextEdit', 'crossing.island': 'TextEdit', 'trail_visibility': 'TextEdit', 'lanes.both_ways': 'TextEdit', 'n': 'Range', });
lyr_Mapboxrouting_1.set('fieldLabels', {'fid': 'no label', 'distance': 'no label', 'duration': 'no label', 'rowid': 'no label', 'n': 'no label', });
lyr_HERErouting_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'departure': 'no label', 'origin': 'no label', 'arrival': 'no label', 'destination': 'no label', 'mode': 'no label', 'traffic': 'no label', 'distance': 'no label', 'baseTime': 'no label', 'travelTime': 'no label', 'co2Emission': 'no label', 'rowid': 'no label', 'n': 'no label', });
lyr_Googlerouting_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'name': 'no label', 'n': 'no label', });
lyr_Bulldogbikesharedata_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'HFCS': 'no label', 'highway': 'no label', 'maxspeed': 'no label', 'name': 'no label', 'ref': 'no label', 'source.HFCS': 'no label', 'source.highway': 'no label', 'tiger.county': 'no label', 'tiger.cfcc': 'no label', 'tiger.name_base': 'no label', 'tiger.name_type': 'no label', 'tiger.reviewed': 'no label', 'tiger.zip_left': 'no label', 'tiger.zip_right': 'no label', 'tiger.separated': 'no label', 'tiger.source': 'no label', 'tiger.tlid': 'no label', 'tiger.upload_uuid': 'no label', 'oneway': 'no label', 'name_1': 'no label', 'name_2': 'no label', 'tiger.name_base_1': 'no label', 'tiger.name_base_2': 'no label', 'tiger.name_type_1': 'no label', 'tiger.name_type_2': 'no label', 'tiger.name_direction_prefix': 'no label', 'tiger.zip_left_1': 'no label', 'bicycle': 'no label', 'destination': 'no label', 'foot': 'no label', 'lanes': 'no label', 'destination.ref': 'no label', 'gdot.grip': 'no label', 'hgv': 'no label', 'hgv.national_network': 'no label', 'source.hgv.national_network': 'no label', 'access': 'no label', 'service': 'no label', 'noref': 'no label', 'tiger.name_base_3': 'no label', 'tiger.name_base_4': 'no label', 'tiger.zip_left_2': 'no label', 'tiger.zip_right_1': 'no label', 'surface': 'no label', 'ROAD_NAME': 'no label', 'name.etymology.wikidata': 'no label', 'tiger.zip_right_2': 'no label', 'tiger.zip_left_3': 'no label', 'tiger.zip_right_3': 'no label', 'rcn_ref': 'no label', 'lanes.backward': 'no label', 'lanes.forward': 'no label', 'highway.source': 'no label', 'cycleway': 'no label', 'sidewalk': 'no label', 'bridge': 'no label', 'layer': 'no label', 'turn.lanes.forward': 'no label', 'motor_vehicle': 'no label', 'cycleway.both': 'no label', 'maxspeed.type': 'no label', 'tiger.name_direction_suffix': 'no label', 'tiger.zip_left_4': 'no label', 'tiger.name_direction_prefix_1': 'no label', 'cycleway.lane': 'no label', 'tiger.name_direction_suffix_3': 'no label', 'tiger.name_direction_suffix_4': 'no label', 'oneway.bicycle': 'no label', 'NHS': 'no label', 'parking.condition.right': 'no label', 'parking.lane.left': 'no label', 'parking.lane.right': 'no label', 'parking.lane.right.parallel': 'no label', 'junction': 'no label', 'cycleway.right': 'no label', 'tiger.name_direction_suffix_1': 'no label', 'description': 'no label', 'horse': 'no label', 'divided': 'no label', 'destination.ref.to': 'no label', 'cycleway.left': 'no label', 'covered': 'no label', 'lit': 'no label', 'segregated': 'no label', 'tiger.zip': 'no label', 'bus': 'no label', 'footway': 'no label', 'level': 'no label', 'crossing': 'no label', 'bridge.source': 'no label', 'bridge.type': 'no label', 'GADOT_HWY.reviewed': 'no label', 'GADOT_HWY.source': 'no label', 'GADOT_HWY.source_1': 'no label', 'tunnel': 'no label', 'note.lanes': 'no label', 'old_railway_operator': 'no label', 'railway': 'no label', 'source.name': 'no label', 'man_made': 'no label', 'oneway_type': 'no label', 'indoor': 'no label', 'incline': 'no label', 'turn.lanes': 'no label', 'material': 'no label', 'ramp': 'no label', 'ramp.wheelchair': 'no label', 'turn.lanes.backward': 'no label', 'bus_bay': 'no label', 'bicyle': 'no label', 'width': 'no label', 'traffic_calming': 'no label', 'handrail': 'no label', 'crossing.island': 'no label', 'trail_visibility': 'no label', 'lanes.both_ways': 'no label', 'n': 'no label', });
lyr_Bulldogbikesharedata_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});