<template>
	<div>
		<transition name="router-fade" mode="out-in">
			<keep-alive>
			    <router-view></router-view>
			</keep-alive>
    	</transition>
    	<!-- <transition name="router-fade" mode="out-in">
			<router-view></router-view>
		</transition> -->
	
    </div>
</template>

<script>

  	export default {
    	components:{

        },
  	}

</script>

<style lang="scss">

	.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .3s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
	*{
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
	}
</style>
