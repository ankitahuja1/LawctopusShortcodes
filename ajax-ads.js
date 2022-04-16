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
    console.log('mutation detected');
    let postListAds = document.querySelectorAll('.jet-listing-grid__item');
    let adsCount = document.querySelectorAll('.code-block-4');
    for (i=1; i<postListAds.length/postsAfter; i++){
        //console.log(postListAds[i].previousElementSibling);
        if(!postListAds[i*postsAfter].previousElementSibling.classList.contains('code-block-4')){
          NewElement.cloneNode(true).appendBefore(postListAds[i*postsAfter]);
        }
    }
} 

const adsInsertLoop = () => { adsInsert(3) };

const targetNode = document.getElementById('home-posts-ad');
const config = { attributes: false, childList: true, subtree: true };
const observer = new MutationObserver(adsInsertLoop);

observer.observe(targetNode, config)