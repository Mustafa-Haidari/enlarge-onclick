document.querySelector('.grid').addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.tagName === 'IMG') {
        var myElemnt = document.createElement('div');
        myElemnt.classList = 'newClass';
        e.target.parentNode.appendChild(myElemnt);
        
        var myImg = document.createElement('img');
        var imgLoc = e.target.src;
        myImg.src = imgLoc.substr(0, imgLoc.length);
        
        myElemnt.style.left = e.offsetX + 15 + 'px';
        myElemnt.style.top = e.offsetY + 15 + 'px';
        
        myElemnt.appendChild(myImg);
        
        e.target.addEventListener('mouseout', function handler(d){
            var myNode = e.target.parentNode.querySelector('div.newClass');
            myNode.parentNode.removeChild(myNode);
            e.target.removeEventListener('mouseout', handler, false)
        }, false);
        
        e.target.addEventListener('mousemove', function(f){
            myElemnt.style.left = f.offsetX + 15 + 'px';
            myElemnt.style.top = f.offsetY + 15 + 'px';
        })
    }
}, false);