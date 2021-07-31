import data from "./json/people.json";
const allAmounts = [];
// Sort based on amount function
function sortFun(objA, objB) {
	const isA_Grtr = objA.balance < objB.balance;
	if (isA_Grtr) return -1;
	else if (!isA_Grtr) return 1;
	else return 0;
}
function prepareData(data) {
	data.forEach((each, i) => {
		let balStr = each.balance;
		balStr = balStr.replace("$", "").replaceAll(",", "");
		data[i].balance = parseFloat(balStr);
	});
	data.sort(sortFun);
	//
	for (let i = 0; i < data.length; i++) {
		const obj = data[i];
		allAmounts.push(obj.balance);
	}
}
if (typeof data[0].balance !== "number") prepareData(data);
// a function which will use binary search algo to locate the index for range selection - ie max amount to display
function processRangeAmount(amount) {
	let low = 0,
		high = data.length - 1,
		mid = 0;
	while (low <= high) {
		mid = Math.floor(low + (high - low) / 2);
		// when current index+1's balance is greator than the amount
		if (allAmounts[mid] > amount) high = mid - 1;
		else if (allAmounts[mid] < amount) low = mid + 1;
	}
	return data.slice(0, low);
}
// processRangeAmount(2955);
export { processRangeAmount };
