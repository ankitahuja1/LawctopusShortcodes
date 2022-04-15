// Select the node that will be observed for mutations
const targetNode = document.getElementById('home-posts-ad');

// Options for the observer (which mutations to observe)
const config = { attributes: false, childList: true, subtree: true };

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
var adsInsert = () => {
    let postListAds = document.querySelectorAll('.jet-listing-grid__item');
    let adsCount = document.querySelectorAll('.code-block-4');
    console.log('A child node has been added or removed.');
    for (i=1; i<postListAds.length/3; i++){
        console.log(postListAds[i].previousElementSibling);
        if(!postListAds[i*3].previousElementSibling.classList.contains('code-block-4')){
          NewElement.cloneNode(true).appendBefore(postListAds[i*3]);
        }
    }
} 

(() => { adsInsert(); setInterval(adsInsert, 1000); })();

//document.querySelector('#btn-load-more').addEventListener('click', callback);

// Create an observer instance linked to the callback function
//const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
//observer.observe(targetNode, config)

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