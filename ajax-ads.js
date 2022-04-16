//prototype to add ads
Element.prototype.appendBeforeThis = function (element) {
    this.parentNode.insertBefore(element, this);
}, false;

Element.prototype.appendBefore = function (element) {
    element.parentNode.insertBefore(this, element)
}, false;

var NewElement = document.createElement('div');
NewElement.innerHTML = 'New Element';
NewElement.className = 'code-block-4';

// Callback function to execute when mutations are observed
var adsInsert = postsAfter => {
    let postListAds = document.querySelectorAll('.jet-listing-grid__item');
    let adsCount = document.querySelectorAll('.code-block-4');
    for (i=1; i<postListAds.length/postsAfter; i++){
        console.log(postListAds[i].previousElementSibling);
        if(!postListAds[i*postsAfter].previousElementSibling.classList.contains('code-block-4')){
          NewElement.cloneNode(true).appendBefore(postListAds[i*postsAfter]);
        }
    }
} 

adsInsert(3);

const callback = () => { setTimeout(adsInsert , 1000, 3); setTimeout(adsInsert, 2000, 3); setTimeout(adsInsert, 3000, 3); setTimeout(adsInsert, 4000, 3); setTimeout(adsInsert, 5000, 3); };

document.querySelector('#btn-load-more').addEventListener('click', callback);

var ads = 
[
  {
    "name": "upgrad",
    "link": "https://upgrad.com",
    "image": "https://test.lawctopus.com/wp-content/plugins/ad-inserter/images/ez-8.jpg"
  },
  {
    "name": "upgrad2",
    "link": "https://www.upgrad.com",
    "image": "https://test.lawctopus.com/wp-content/plugins/ad-inserter/images/ez-8.jpg"
  }
];