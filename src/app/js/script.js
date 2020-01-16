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
}