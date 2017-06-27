
$(_=>{
  $.getJSON('http://laboratoria.cuadra.co:9339/api/v1/students/',function(data){
    console.log(data);
    for(var i in data){
        $('ol.lista').append('<li class="alumna"></li>');}
    jQuery.each(data,function(i,val){
      $('li.alumna').eq(i).text(val.name);
      $('li.alumna').eq(i).append('<input type="checkbox"/>');
    });
  });
});
