<template>
	<div class="row">
		<div class="col-md-12 mt-3 mb-5">
			<nav class="navbar navbar-toggleable-md">
				<ul class="nav">
					<a href="/" class="navbar-brand">Asian Food</a>
					<router-link :to="{name :'homeLink'}" tag="li" class="nav-item pt-3 "><a class="nav-link" href="">Inicio</a></router-link>
					<router-link :to="{name :'menuLink'}" tag="li" class="nav-item pt-3 "><a class="nav-link" href="">Menú</a></router-link>
					<router-link :to="{name :'aboutLink'}" tag="li" class="nav-item pt-3 "><a class="nav-link" href="">Acerca de nosotros</a></router-link>
				</ul>
			</nav>
		</div>
	</div>	
</template>

<style>

a {
	color:black;
	font-weight: bold;
}

.navbar-brand {
	font-size: 34px;
	font-family: 'Black Han Sans', sans-serif;
	color:#c12f2f;
}


</style>