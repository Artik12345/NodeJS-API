<template>
	<div id="app">
		<div class="app-wrapper">
			<to-do-list />
		</div>
	</div>
</template>

<script>
import toDoList from '@/components/toDoList'

export default {
	name: 'app',
	components: {
		toDoList
	}
}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
	}

	#app {
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgb(93, 178, 250);
	}

	.app-wrapper {
		width: 900px;
		height: 500px;
		margin: 0 auto;
	}
</style>
