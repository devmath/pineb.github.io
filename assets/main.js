function preloadImages(e){preloadImages.list||(preloadImages.list=[]);for(var s=preloadImages.list,a=0;a<e.length;a++){var l=new Image;l.onload=function(){var e=s.indexOf(this);-1!==e&&s.splice(e,1)},s.push(l),l.src=e[a]}}preloadImages(["assets/profile.jpg","assets/bg.jpg"]);