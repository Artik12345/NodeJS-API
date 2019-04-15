export default api => {
    api.toDoList = {
        getToDoList() {
            return api.instance.request({
                method: 'get',
				url: '/todolist/getToDoList.actions',
            })
        }
    }
}