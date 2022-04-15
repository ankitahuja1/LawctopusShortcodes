// Select the node that will be observed for mutations
const targetNode = document.getElementById('home-posts-ad');

// Options for the observer (which mutations to observe)
const config = { attributes: false, childList: true, subtree: true };

//prototype to add ads
Element.prototype.appendBeforeThis = function (element) {
    this.parentNode.insertBefore(element, this);
}, false;

Element.prototype.appendBefore = function (element) {
    element.parentNode.insertBefore(this, element);
}, false;

var NewElement = document.createElement('div');
NewElement.innerHTML = 'New Element';
NewElement.id = 'NewElement';



// Callback function to execute when mutations are observed
var callback = () => {
    setTimeout(
    function(){
    let postListAds = document.querySelectorAll('.jet-listing-grid__item');
    let adsCount = document.querySelectorAll('.code-block-4');
    console.log(adsCount.length*3*2.5 + " vs " + postListAds.length);
      if(adsCount.length*3*2.5 < postListAds.length){
      console.log('A child node has been added or removed.');
        for (i=0; i<postListAds.length/3; i++){
            console.log(i + " and total posts is " + postListAds.length + " and sum is " + i*3);
            //NewElement.appendBefore(postListAds[i*3]);
        }
      }
    }, 5000)
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config)

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
