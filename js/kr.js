let center = [42.979002908656064,47.498755465608966];
function init(){
    let map = new ymaps.Map('maps',{
        center:center,
        zoom:17,

    });



let placemark1 = new ymaps.Placemark(center,{
    balloonContent: `
     <h3> 3-й этаж, каб. 322</h3>
    <div style="align-items:flex-end;">
    <img  class="grand"width="180" height="180" src="/img/grand.jpg"/>
    <img  class="grand"width="180" height="180" src="/img/XXXL.jpg"/>
    </div>
    </div>
    </div>`
    
}, {
    iconLayout:'default#image',
    iconImageHref:'https://cdn-icons-png.flaticon.com/512/1483/1483336.png',
    iconImageSize:[50,50],
    iconImageOffset:[-10,-44]

});
//map.geoObjects.add(placemark);
map.geoObjects.add(placemark1);
}
ymaps.ready(init);


