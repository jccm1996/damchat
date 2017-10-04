// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider)
{
    $ionicConfigProvider
        .backButton.previousTitleText(false)
        .text('');
    
    $stateProvider        
        .state('DamChat', {
        url:'',
        templateUrl: 'templates/DamChat.html',
        controller: 'DamChatCtrl'
    })
        .state('DamMiChat', {
        url:'/DamMiChat/:id',
        templateUrl: 'templates/DamMiChat.html',
        controller: 'DamMiChatCtrl'
    })
        .state('acercaDe', {
        url: '/acercaDe',
        templateUrl: 'templates/acercaDe.html',
        controller: 'acercaDeCtrl'        
    })
        .state('ajustes', {
        url: '/ajustes',
        templateUrl: 'templates/ajustes.html',
        controller: 'ajustesCtrl'        
    })
        .state('autores', {
        url: '/autores',
        templateUrl: 'templates/autores.html',
        controller: 'autoresCtrl'        
    })
        .state('autor', {
        url: '/autor/:id',
        templateUrl: 'templates/autor.html',
        controller: 'autorCtrl'        
    });
    $urlRouterProvider.otherwise('');
})

.controller('acercaDeCtrl', function($scope)
{
    $scope.home = 'Juan Carlos, Franco, Dani y Antonio';
})
.controller('DamChatCtrl', function($scope, chatService)
{
    $scope.chats = chatService.getChats();
})
.controller('DamMiChatCtrl', function($scope, $stateParams, chatService)
{
    var chatId = $stateParams.id;
    $scope.chat = chatService.getChat(chatId);
})
.controller('ajustesCtrl', function()
{
    
})
.controller('autoresCtrl', function($scope, autorService)
{
    $scope.autores = autorService.getAutores();
})
.controller('autorCtrl', function($scope, $stateParams, autorService)
{
    var autorId = $stateParams.id;
    $scope.autor = autorService.getAutor(autorId);
})


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.factory('chatService', function() {
    /*aqui hay que conseguir a traves de una conexión a la BDD con una select, un array de los chat del usuario*/
    var chats = [ 
                    { imagen: 'img/ionic.png', usuario: 'Antonio', mensaje: 'hola esto es una pruebattttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt' },
                    { imagen: 'img/ionic.png', usuario: 'Dani', mensaje: 'hola esto es la segunda prueba' }                  
                ];
    
    return {
        getChats: function() {
            return chats;
        },
        getChat: function(id) {
            return chats[id];
        },
    }
})

.factory('autorService', function() {
    var autores = [  
                        {nombre: 'Juan Carlos', email: 'mail@gmail.com', twitter: '@twitter', phone: '900 900 900', 
                         experiencia: 'hola hola'},
                        {nombre: 'Franco', email: 'mail@gmail.com', twitter: '@twitter', phone: '900 900 900', 
                        experiencia: 'probando'},
                        {nombre: 'Dani', email: 'mail@gmail.com', twitter: '@twitter', phone: '900 900 900', 
                        experiencia: 'prueba prueba'},
                        {nombre: 'Antonio', email: 'mail@gmail.com', twitter: '@twitter', phone: '900 900 900',
                         experiencia: 'campo de prueba'}
                ];
    
    return {
        getAutores: function() {
            return autores;
        },
        getAutor: function(id) {
            return autores[id];
        },
    }
})
