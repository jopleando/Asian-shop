<template>
<section class="row">
		<div class="col-sm-12 col-md-6">
			<h3 class=" title-1 text-center">Menu</h3>
			<table class="table table-hover mt-5 ">
				<thead class="thead-default pt-3">
					<tr>
						<th> Nombre </th>
						<th> Precio</th>
						<th> Piezas</th>
						<th>Añadir</th>
					</tr>
				</thead >
				<tbody  v-for="item in menuItems"> 
					<tr>
						<td><strong> {{item.name}}</strong></td>
					</tr>
					<tr v-for="option in item.options">
						<td> {{option.name2}}</td>
						<td> {{ `${option.price} $` }}</td>
						<td> {{option.size }}</td>
						<td><button class="btn btn-sm btn-outline-success" 
												type="button"
												@click="addToBasket(item, option)"
												>Añade al carrito</button></td>
					</tr>
				</tbody>
			</table>
		</div>

<!--basket-->

	<div class="col-md-6 col-sm-12">
		<div v-if="basket.length > 0">
			<table class="table mt-5">
				<thead class="thead-default">
					<tr>
						<th> Cantidad</th>
						<th> Nombre </th>
						<th>Piezas</th>
						<th> Precio</th>
					</tr>
				</thead>
				<tbody  v-for="item in basket"> 
					<tr>
						<td>

							<button class="btn btn-sm btn-outline-danger" 
														type="button" 
														@click="decreaseQuantity(item)"
														>-</button>

							<span> {{item.quantity}} </span>

							<button class="btn btn-sm btn-outline-success" 
														type="button"
														@click="increaseQuantity(item)"
														>+</button>

						</td>
						<td>{{ item.name }}</td>
						<td>{{item.size}}</td>
						<td>{{ (item.price * item.quantity).toFixed(2)}}</td>
					</tr>
				</tbody>
			</table>
			<p>Pedido total: </p>
			<button class="btn btn-success btn-block" type="button">Comprar </button>
			</div>

	<!--Parte del carrito fijo-->
	<div v-else>
		<h3 class="text-center">Carrito</h3>
		<table class="table mt-5 ">
		<thead class="thead-default">
			<tr>
				<th> Cantidad</th>
					
				<th> Nombre </th>
				<th>Piezas</th>
				<th> Precio</th>
			</tr>
		</thead>
		<td> {{basketText}}</td>
		<td> </td>
		<td></td>
		<td></td>
			</tr>
		</tbody>
	</table>


</div>
</div>
</section>
</template>

<script>
	export default {
		data(){
			return{
				basketText:'Aun no has añadido nada',
				basket:[],
				menuItems : {
					1: {
					  'name': 'Sushi',
					  'description': 'Lorem ipsum dolor sit amet',
					  'options': [{
					    'size': 9,
					    'price': 6.95,
					    'name2':'Sushi de salmon'
					  }, {
					    'size': 12,
					    'price': 10.95,
					    'name2':'Sushi de pez mantequilla'
					  }]
					},
					2: {
					  'name': 'Nigiri',
					  'description': 'A delicious tomato based pizza topped with mozzarella and pepperoni',
					  'options': [{
					    'size': 10,
					    'price': 7.95,
					    'name2':'Nigiri de salmon'
					  }, {
					    'size': 20,
					    'price': 12.95,
					    'name2':'Nigiri de pez mantequilla'
					  }]
					},
					3: {
					  'name': 'Shashimi',
					  'description': 'A delicious tomato based pizza topped with mozzarella, ham and pineapple',
					  'options': [{
					    'size': 10,
					    'price': 7.95,
					    'name2':'Shasimi de salmon'
					  }, {
					    'size': 20,
					    'price': 12.95,
					    'name2':'Shasimi de pez mantequilla'
					  }]
					},
					4: {
					  'name': 'Make-sushi',
					  'description': 'A delicious tomato based pizza topped with mozzarella, ham and pineapple',
					  'options': [{
					    'size': 10,
					    'price': 7.95,
					    'name2':'Make de salmon'
					  }, {
					    'size': 20,
					    'price': 12.95,
					    'name2':'Make de pez mantequilla'
					  }]
					}
				}
			}
		},
		methods:{
			addToBasket(item, option) {
				this.basket.push({
					name: option.name2,
					price: option.price,
					size : option.size,
					quantity: 1
				})
			},

			decreaseQuantity(item){
				item.quantity--;
				if(item.quantity===0){
					this.removeFromBasket(item)

				}
			},
			increaseQuantity(item){
				item.quantity++
			},
			removeFromBasket(item){
				this.basket.splice(this.basket.indexOf(item), 1)
			} 

		}
	}
	
</script>

