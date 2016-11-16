$('#map1').usmap({
    stateStyles: {fill: '#efefef', stroke: '#ccc'},
    stateHoverStyles: {fill: '#3d9943'},
    stateHoverAnimation: 150,
    stateSpecificLabelBackingStyles: {
        'DC': {fill: '#fff', stroke: '#fff'},
    },
    stateSpecificLabelBackingHoverStyles: {
        'DC': {fill: '#fff', stroke: '#fff'},
    }
});
selectState('map1', 'MN');

$(document).ready(function() {
    $('#map1').on('usmapclick', function(event, data) {
        if (data.name != 'DC') {
            selectState('map1', data.name);
            $('#state_list_1').val(data.name)
            updateRatio();
        }
    });
});

$('#map2').usmap({
    stateStyles: {fill: '#efefef', stroke: '#ccc'},
    stateHoverStyles: {fill: '#3d9943'},
    stateHoverAnimation: 150,
    stateSpecificLabelBackingStyles: {
        'DC': {fill: '#fff', stroke: '#fff'},
    },
    stateSpecificLabelBackingHoverStyles: {
        'DC': {fill: '#fff', stroke: '#fff'},
    }
});
selectState('map2', 'MI');

$(document).ready(function() {
    $('#map2').on('usmapclick', function(event, data) {
        if (data.name != 'DC') {
            selectState('map2', data.name);
            $('#state_list_2').val(data.name)
            updateRatio();
        }
    });
});


$(document).ready(function() {
    $('.clickable-map').hide();
    $('.map-metadata').hide();
});
