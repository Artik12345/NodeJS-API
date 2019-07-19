
exports.mapIds = arr => arr.map(item => renameObjProp(item, '_id', 'id'))

const renameObjProp = (obj, oldPropName, newPropName) => {
	if (!obj.hasOwnProperty(oldPropName)) {
		return "dont have prop to rename"
	}
	obj[newPropName] = obj[oldPropName]
	delete obj[oldPropName]
	return obj
}

