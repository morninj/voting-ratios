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
selectState('map1', 'WY');

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
selectState('map2', 'OH');

$(document).ready(function() {
    $('#map2').on('usmapclick', function(event, data) {
        if (data.name != 'DC') {
            selectState('map2', data.name);
            $('#state_list_2').val(data.name)
            updateRatio();
        }
    });
});

// Hide maps if we're on mobile
$(document).ready(function() {
    if ($(window).width() < 768) {
        $('.clickable-map').hide();
        $('.map-metadata').hide();
        $('.constitutional-blurb').slideUp();
        $('.show-maps').show();
        $('.hide-maps').hide();
        $('.vote-display-column').css('margin-top', '30px');
        $('.vote-display-column').css('margin-bottom', '30px');
    }
    if ($(window).width() >= 768) {
        $('.constitutional-blurb').css('margin', '415px -100px 0 -100px');
        $('.constitutional-blurb').css('font-size', '0.75em');
    }
});
