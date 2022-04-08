//this code is for the slide show
let $slideshow = $(".cycle-slideshow");
$slideshow.click(function() {
if ($slideshow.is(".cycle-paused"))
    $slideshow.cycle("resume");                
else
   $slideshow.cycle("pause");
});
//functioning the gallery button
let $clickme = $("#btn_gallery");
let count = 0;
$clickme.click(function() {
   if((count % 2) == 1){
      $("#gallery").hide();
   }
   else{
      $("#gallery").show();
   }
   count++;
});
//this code is for button in biography, hobby, and education
$("#bio-btn").click(function(){
   $("#mybio").show();
   $("#myhob").hide();
   $("#myedu").hide();
});
$("#hob-btn").click(function(){
   $("#mybio").hide();
   $("#myhob").show();
   $("#myedu").hide();
});
$("#edu-btn").click(function(){
   $("#mybio").hide();
   $("#myhob").hide();
   $("#myedu").show();
});