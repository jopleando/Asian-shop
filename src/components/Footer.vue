<template>
<div class="row">
	<div class="col-md-12 mt-4 mb-3">
		<ul class="nav">
			<a href="/" class="navbar-brand">Asian Food</a>
			<router-link :to="{name :'homeLink'}" tag="li" class="nav-item pt-3 "><a class="nav-link" href="">Inicio</a></router-link>
			<router-link :to="{name :'menuLink'}" tag="li" class="nav-item pt-3 "><a class="nav-link" href="">Menú</a></router-link>
				<router-link :to="{name :'aboutLink'}" tag="li" class="nav-item pt-3 "><a class="nav-link" href="">Acerca de nosotros</a></router-link>

		</ul>

	</div>
	
</div>	
</template>

<style>

a {
	color:black;
}



</style>