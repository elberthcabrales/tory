<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Angular-Laravel Authentication</title>
        <!--<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.css">-->
         <!-- Compiled and minified CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/css/materialize.min.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
          <!-- Compiled and minified JavaScript -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/js/materialize.min.js"></script>
    </head>
    <body ng-app="authApp">
       <div ng-controller="NavController as nav">
           <nav ng-if="nav.isAuthenticated()"> 
            <div class="nav-wrapper">
              <a href="#" class="brand-logo">Casino</a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li ng-class="{active: nav.isActive('/registros')}"><a href="#/registros">Registros</a></li>
                <li ng-class="{active: nav.isActive('/users')}"><a href="badges.html">canjeos</a></li>
                <li ng-class="{active: nav.isActive('/link')}"><a href="collapsible.html">fichas</a></li>
                <li ng-class="{active: nav.isActive('/link')}"><a href="collapsible.html">usuarios</a></li>
                <li ng-class="{active: nav.isActive('/link')}"><a href="collapsible.html">Jugadores</a></li>
                <li ng-click="nav.logOut()"><a href="#">Salir</a></li>
              </ul>
            </div>
          </nav>
      </div>
        	<div ui-view></div>
    
     
    </body>

    <!-- Application Dependencies -->
   
    <script src="node_modules/angular/angular.js"></script>
    <script src="node_modules/angular-ui-router/build/angular-ui-router.js"></script>
    <script src="node_modules/satellizer/satellizer.js"></script>

    <!-- Application Scripts -->
    <script src="scripts/app.js"></script>
    <script src="scripts/authController.js"></script>
     <script src="scripts/registroController.js"></script>
    <script src="scripts/userController.js"></script>
    <script src="scripts/navController.js"></script>
</html>