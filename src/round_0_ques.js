const arr = [1, 0, 2, 4, 0, 5, 1];
function findZeros(arr) {
	// get clone
	const cloneArr = [];
	const freq = [];
	//
	arr.forEach((element) => {
		const isFoundInClone = cloneArr.indexOf(element);
		if (isFoundInClone !== -1) {
			freq[isFoundInClone] += 1;
		} else {
			const pushedAtLen = cloneArr.push(element);
			freq[pushedAtLen - 1] = 1;
		}
	});
	cloneArr.forEach((each, index) => {
		console.log(each, freq[index]);
	});
}
findZeros(arr);
