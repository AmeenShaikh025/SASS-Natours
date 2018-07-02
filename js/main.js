//Menu open close

$(document).ready(function(){
    $('.navigation__link').click(function() {
        $('.navigation__checkbox').prop('checked', false); // Unchecks it
    });
});