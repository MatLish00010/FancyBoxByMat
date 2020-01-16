(function($) {
    var $li = $('.img-list').find('> li'),
        $links = $li.find('> a'),
        $lightbox = $('.lightbox'),
        $next = $('.next'),
        $prev = $('.prev'),
        $overlay = $('.overlay'),
        liIndex,
        targetImg;

    //preload images
    var imgSources = [
        'images/img-1-lg.jpg',
        'images/img-2-lg.jpg',
        'images/img-3-lg.jpg',
        'images/img-4-lg.jpg'
    ];

    var imgs = [];
    for (var i = 0; i < imgSources.length; i++) {
        imgs[i] = new Image();
        imgs[i].src = imgSources[i];
    }

    function replaceImg(src) {
        $lightbox.find('img').attr('src', src);
    }

    function getHref(index) {
        return $li.eq(index).find('>a').attr('href');
    }

    function closeLigtbox() {
        $lightbox.fadeOut();
    }

    $overlay.click(closeLigtbox);

    $links.click(function(e) {
        e.preventDefault();
        targetImg = $(this).attr('href');
        liIndex = $(this).parent().index();
        replaceImg(targetImg);
        $lightbox.fadeIn();
    });

    $next.click( function() {
        if ( (liIndex + 1) < $li.length ) {
            targetImg = getHref(liIndex + 1);
            liIndex ++;
        } else {
            targetImg = getHref(0);
            liIndex = 0;
        }
        replaceImg(targetImg);
    });

    $prev.click( function() {
        if ( (liIndex) > 0 ) {
            targetImg = getHref(liIndex - 1);
            liIndex --;
        } else {
            targetImg = getHref($li.length - 1);
            liIndex = $li.length - 1;
        }
        replaceImg(targetImg);
    });

})(jQuery);

/*
var pictures = [
    'images/big_img/Cats_1.jpg',
    'images/big_img/Cats_2.jpg',
    'images/big_img/Cats_3.jpg'
];

var thumbnails = document.querySelectorAll('.gallery__picture-preview');
var fullPhoto = document.querySelector('.full-picture');

var addThumbnailClickHandler = function (thumbnail, photo) {
    thumbnail.addEventListener('click', function () {
        fullPhoto.src = photo;
    })
};

for (var i = 0; i < thumbnails.length; i++){
    addThumbnailClickHandler(thumbnails[i], pictures[i]);
}*/
