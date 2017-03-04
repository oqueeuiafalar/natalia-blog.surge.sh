(function(){
  "use strict";

  angular.module("oquequeeuiafalar").config(function($FrontPressProvider, $locationProvider, PublicidadeModelProvider){      


      var publicidades = [{ image: "http://natalia.blog.br/wp-content/uploads/2017/02/editora-planeta-2017-parceiros.png", 
          imageAlt: "Logotipo dos parceiros 2017 da Editora Planeta", 
          href:"http://www.planetadelivros.com.br/"
      },{
        image: "http://natalia.blog.br/wp-content/uploads/2016/03/2016_Parceria_Selo-Biruta.png",
        imageAlt: "Selo parceria Biruta 2016",
        href: "http://www.editorabiruta.com.br"
      },{
        image: "http://natalia.blog.br/wp-content/uploads/2016/03/2016_Parceria_Selo-Gaivota.png",
        imageAlt: "Selo parceria Editora Gaivota 2016",
        href: "http://www.editoragaivota.com.br"
      }];

      PublicidadeModelProvider.configure.setItems(publicidades);

      $FrontPressProvider.configure.load({
          "restApiUrl": "http://natalia.blog.br/wp-json",
          "apiVersion": "v2",
          "pageSize": 10,
          "infiniteScroll": true,
          "routes": {
              "post": "/:postSlug",
              "home.pagination": "/pagina/:pageNumber"
          },
          "titles": {
              "post": ":postTitle - :siteName",
              "home": "Home - :siteName"
          },
          disqusShortname: "oquequeeuiafalar",
          templateUrl: {
            "views.home": "/src/javascript/templates/home.template.html",
            "components.listposts": "/src/javascript/templates/list-posts.template.html",
            "components.fullpost": "/src/javascript/templates/full-post.template.html"
          }
      });
  });  
})();