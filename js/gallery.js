
var total_images = 24;
var baseURL = window.location.href.split('/').slice(0, -1).join('/');

function make_image(x)
{
    thumb =  baseURL + '/images/outfits_thumb/sannish_' + x + '.png';
    full_sized =  baseURL + '/images/outfits/sannish_' + x + '.png';

    return '<a href=\"' + full_sized + '\"><img src=\"' + thumb + '"' +
    'height=125px><img></a>';
}

document.addEventListener('DOMContentLoaded', function() {

    let gallery = document.getElementById("gallery");
    for (let x = 1; x < total_images; x++) {
        gallery.innerHTML += make_image(x);
    }

});