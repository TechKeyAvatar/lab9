function init(){
//add your javascrip between these two lines of code

//  function DoForMe() {                    // nem mukodott, mikor a ()-t nem kozvetlenul a DoForMe utan irtam.
//    alert(d4);
//  }

  var d1 = document.getElementById('entrybutton');
  var d2 = document.getElementById('textoutput');
  var d3 = document.getElementById('entryinput');

//  d1.addEventListener('click', DoForMe);
// d1 = addEventListener('click', DoForMe);     -> syntax fontos! Mikor igy irtam, akkor barhova klikkeltem a lapon, megcsinalta.

  d1.addEventListener('click', function(){
    var d4 = "Well done Dude! You just tested by typing: " + d3.value;
    alert(d4);
    d2.innerHTML = d3.value;
  });


}
window.addEventListener('load', init);
