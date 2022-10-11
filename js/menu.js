var t1 = new TimelineMax({paused: true});

t1.to(".one", 0.2, {
     y: 6,
     rotation: 45,
     ease: Expo.easeInOut
});
t1.to(".two", 0.2, {
     y: -6,
     rotation: -45,
     ease: Expo.easeInOut,
});


t1.to(".nav-container", 0.3, {
     top: "0%",
     ease: Expo.easeInOut,
     delay: -0.4
});


t1.staggerFrom(".nav-container div", 0.4, {x: -100, opacity: 0, ease:Expo.easeOut}, 0.2);

t1.reverse();
$(document).on("click", ".menu-open", function() {
     t1.reversed(!t1.reversed());
});

// событие на закрытие вкладки при нажатии на пунк 
  /* $(document).on("click", "a", function() { 
     t1.reversed(!t1.reversed());
})*/
