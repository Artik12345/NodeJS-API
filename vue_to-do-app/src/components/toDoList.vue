<template>
	<div>
		{{toDoList}}
	</div>
</template>

<script>
import toDoList from '@/components/toDoList'

export default {
	name: 'toDoList',
	components: {
		
    },
    data() {
        return {
            toDoList: []
        }
    },
    mounted() {
        this.$api.toDoList()
            .then(data => {
                console.log(data)
                this.toDoList = data
            })
    }
}
</script>

<style>
	
</style>
