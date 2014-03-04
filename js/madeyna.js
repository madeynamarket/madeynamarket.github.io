$('#btnView').on('click', function() {
    var $mainVisual = $('#mainVisual').addClass('slideUp');
    var $buttons = $('#buttons').addClass('slideDown');
    $('#viewport').show();
    $('#dlBtnWrapper').show();
    setTimeout(function() {
        $('.page-spread').addClass('fadeIn');
        $mainVisual.hide();
        $buttons.hide();
    }, 500);
});