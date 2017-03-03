(function(){
  "use strict";

  angular.module("oquequeeuiafalar").config(function($FrontPressProvider, $locationProvider){      

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