$(document).ready(function() {
    $('#state_list_1').on('change', function() {
        selectState('map1', $('#state_list_1').val());
        updateRatio();
        $(this).blur();
    });
    $('#state_list_2').on('change', function() {
        selectState('map2', $('#state_list_2').val());
        updateRatio();
        $(this).blur();
    });
});

function updateRatio() {
    var ratio = states[$('#state_list_1').val()][$('#state_list_2').val()];
    $('.vote-ratio').text(ratio);
    if (ratio == 1.00) {
        $('.vote-plural').text('');
    } else {
        $('.vote-plural').text('s');
    }

    $('.map1-metadata > .metadata-entry > .electoral-votes').text(states[$('#state_list_1').val()]['ec_votes']);
    $('.map2-metadata > .metadata-entry > .electoral-votes').text(states[$('#state_list_2').val()]['ec_votes']);
    $('.map1-metadata > .metadata-entry > .population').text(states[$('#state_list_1').val()]['population'].toLocaleString());
    $('.map2-metadata > .metadata-entry > .population').text(states[$('#state_list_2').val()]['population'].toLocaleString());
    $('.map1-metadata > .metadata-entry > .reg-voters-2014').text(states[$('#state_list_1').val()]['voters2014'].toLocaleString());
    $('.map2-metadata > .metadata-entry > .reg-voters-2014').text(states[$('#state_list_2').val()]['voters2014'].toLocaleString());
    $('.map1-metadata > .metadata-entry > .electors-per-voter').text(states[$('#state_list_1').val()]['ecpervoter']);
    $('.map2-metadata > .metadata-entry > .electors-per-voter').text(states[$('#state_list_2').val()]['ecpervoter']);
}

function selectState(map, name) {
    $("#" + map + " > svg > path").each(function() {
        $(this).css('fill', '');
    });
    $("#" + map + " > svg > path#" + name).css('fill', '#32bc3c');
    updateRatio();
}


$(document).ready(function() {
    // Show/hide maps on click
    $('.show-maps').click(function() {
        $('.clickable-map').slideDown();
        $('.map-metadata').slideDown();
        $(this).hide();
        $('.hide-maps').show();
    });
    $('.hide-maps').click(function() {
        $('.clickable-map').slideUp();
        $('.map-metadata').slideUp();
        $('.constitutional-blurb').slideUp();
        $(this).hide();
        $('.show-maps').show();
    });

    // Hide/show certain elements if the widget is embedded
    // and apply some style changes
    if (getParameterByName('embed') == 'true') {
        $('.embed-hide').hide();
        $('.embed-show').show();
        $('.main-footer').css('margin-bottom', '0');
    }

    // Show embed code
    $('.show-embed-code').click(function() {
        $('.embed-code').slideToggle();
    });

});
//
// Get query string parameters
function getParameterByName(name, url) {
    if (!url) { url = window.location.href; }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
