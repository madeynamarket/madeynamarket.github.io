(function() {
    var loadImage = function($obj) {
        var src = $obj.attr('data-src');
        var $deferred = new $.Deferred();
        var $img = $('<img>');
        $img.on('load', function() {
            $obj.css('background-image', 'url(' + src +')')
            console.log(src);
            $deferred.resolve();
        }).attr('src', src);
        return $deferred.promise();
    };

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

        $.when(
                loadImage($('.page-1'))
            ).then(
            function() {
                return loadImage($('.page-2'));
            }
        ).done(
            function() {
                return loadImage($('.page-3'))
            },
            function() {
                return loadImage($('.page-4'))
            },
            function() {
                return loadImage($('.page-5'))
            },
            function() {
                return loadImage($('.page-6'))
            }
        );
    });

    $(window).on('load', function() {
        $.when(
            loadImage($('.thumb-1'))
        ).done(
            function() {
                return loadImage($('.thumb-2'))
            },
            function() {
                return loadImage($('.thumb-3'))
            },
            function() {
                return loadImage($('.thumb-4'))
            },
            function() {
                return loadImage($('.thumb-5'))
            },
            function() {
                return loadImage($('.thumb-6'))
            }
        );
    });
})();
