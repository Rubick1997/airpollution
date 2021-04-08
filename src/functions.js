export const getCity = (array) => {
	let city = "";
	for (let index = 0; index < array.length; index++) {
		if (
			array[index].types[0] &&
			"administrative_area_level_2" === array[index].types[0]
		) {
			city = array[index].long_name;
			return city;
		}
	}
};

export const getArea = (array) => {
	let area = "";
	for (let index = 0; index < array.length; index++) {
		if (array[index].types[0]) {
			for (let j = 0; j < array.length; j++) {
				if (
					"sublocality_level_1" === array[index].types[j] ||
					"locality" === array[index].types[j]
				) {
					area = array[index].long_name;
					return area;
				}
			}
		}
	}
};

export const getState = (array) => {
    let region = ""
	array.filter(item=> { 
        if(item.types[0] ==="administrative_area_level_1"){
            region = item.long_name
        }
    })
    return region;
};
