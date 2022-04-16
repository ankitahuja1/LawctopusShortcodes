//prototype to add ads
Element.prototype.appendBeforeThis = function (element) {
    this.parentNode.insertBefore(element, this);
}, false;

Element.prototype.appendBefore = function (element) {
    element.parentNode.insertBefore(this, element)
}, false;



// Callback function to execute when mutations are observed
var adsInsert = (postsAfter, img, url) => {
    console.log('mutation detected');
    let postListAds = document.querySelectorAll('.jet-listing-grid__item');
    
    let NewElement = document.createElement('div'); NewElement.className = 'code-block-4';
    
    let NewAnchor = document.createElement('a'); NewAnchor.href=url;
    
    let NewImage = document.createElement('img'); NewImage.src = img; 
    NewImage.style.margin = "14px 0";
    
    NewAnchor.appendChild(NewImage);
    NewElement.appendChild(NewAnchor);
    
    let adsCount = document.querySelectorAll('.code-block-4');
    for (i=1; i<postListAds.length/postsAfter; i++){
        //console.log(postListAds[i].previousElementSibling);
        if(!postListAds[i*postsAfter].previousElementSibling.classList.contains('code-block-4')){
          NewElement.cloneNode(true).appendBefore(postListAds[i*postsAfter]);
        }
    }
} 

const adsInsertLoop = () => { 

  adsInsert(12, "https://www.lawctopus.com/wp-content/uploads/2022/03/LLS-ad-1-top-sit-u.gif", "https://courses.lawctopus.com/learn/view-all?show=courses&type=1&utm_source=lawctopus&utm_medium=topbanner&utm_campaign=top");

  adsInsert(9, "https://www.lawctopus.com/wp-content/uploads/2022/03/dummy-ad-top-site.png", "https://calendly.com/rohit-bhutani-lawctopus/30mins?month=2022-03");
  
  adsInsert(6, "https://www.lawctopus.com/wp-content/uploads/2022/04/iim-rohtak-admission-2022-top-banner-2.webp", "https://lawc.to/iim-rohatak-top-banner");
  
  adsInsert(3, "https://www.lawctopus.com/wp-content/uploads/2022/03/CLATapult-ad-top-site.png", "https://www.clatapult.com/?utm_source=lawctopus&utm_medium=top-banner");
  
  };

const targetNode = document.getElementById('home-posts-ad');
const config = { attributes: false, childList: true, subtree: true };
const observer = new MutationObserver(adsInsertLoop);

observer.observe(targetNode, config);