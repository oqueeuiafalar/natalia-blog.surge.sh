(function(){
  "use strict";

  angular.module("oquequeeuiafalar").config(function($FrontPressProvider){

      var coisas = {
            "views.home": "/js/views/home/templates/home.template.html",
            "views.post": "/js/views/post/templates/post.template.html",
            "components.fullpost": "/js/components/full-post/templates/full-post.template.html",
            "components.fullpost.categories": "/js/components/full-post/templates/full-post-categories-list.template.html",
            "components.fullpost.tags": "/js/components/full-post/templates/full-post-tags-list.template.html",
            "components.fullpost.authorname": "/js/components/full-post/templates/full-post-author-name.template.html",
            "components.listposts": "/js/components/list-posts/templates/list-posts.template.html",
            "components.pagehead": "/js/components/page-head/templates/page-head.template.html",
            "components.postdate": "/js/components/post-date/templates/post-date.template.html",
            "components.featuredimage": "/js/components/featured-image/templates/featured-image.template.html",
            "components.pagination": "/js/components/pagination/templates/pagination.template.html",
            "components.share": "/js/components/share/templates/share.template.html",
            "components.fullpost.content":"/js/components/full-post/templates/full-post-content-v2.template.html",
            "components.fullpost.title":"/js/components/full-post/templates/full-post-title-v2.template.html",
            "components.listposts.excerpt":"/js/components/list-posts/templates/list-posts-excerpt-v2.template.html",
            "components.listposts.title":"/js/components/list-posts/templates/list-posts-title-v2.template.html"
          };


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
          templateUrl: {
            "views.home": "/tema/home.template.html",
            "components.listposts": "/tema/list-posts.template.html"
          }
      });
  });  
})();