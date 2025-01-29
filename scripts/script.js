function menu(pagina) {
  $('#conteudo').hide(200,()=>{
    $("#conteudo").load("../components/" + pagina + ".html",()=>{
      $('#conteudo').show(200,);
    });
  });
  /*...................*/
  $('footer').animate(100, String);

}

