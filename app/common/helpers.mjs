module.exports = {

	mapIds: (arr) => {
		return arr.map(item => renameObjProp(item, '_id', 'id'))
	},

	renameObjProp: (obj, oldPropName, newPropName) => {
		if (!obj.hasOwnProperty(oldPropName)) {
			return false
		}
		obj[newPropName] = obj[oldPropName]
		delete obj[oldPropName]
		return true
	}

}
