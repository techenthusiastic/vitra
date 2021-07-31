import React, { Component } from "react";
import { processRangeAmount } from "./helpers.js";
class MyApp extends Component {
	constructor() {
		super();
		this.state = {
			rangeVal: 1200,
			action: 0,
			displayArr: [],
			hideNonActive: false,
		};
		this.refRange = React.createRef();
	}
	formHandler = (event) => {
		event.preventDefault();
		const arr = processRangeAmount(parseInt(this.refRange.current.value));
		this.setState({ action: 1, displayArr: arr });
	};
	sortNonActive = () => {
		const { displayArr } = this.state;
		const nArr = displayArr.filter((each) => each.isActive === true);
		this.setState({ displayArr: nArr });
	};
	rangeChangeHandler = (event) => {
		const ele = event.target;
		this.setState({ rangeVal: parseInt(ele.value) });
	};
	render() {
		const { rangeVal, action, displayArr } = this.state;
		return (
			<center>
				<form id="formCont" onSubmit={this.formHandler}>
					<label htmlFor="rngSel">
						Select the Amount -{" "}
						<span style={{ color: "gainsboro" }}>{rangeVal}</span>
					</label>
					<br></br>
					<input
						ref={this.refRange}
						type="range"
						min="1000"
						max="4000"
						id="rngSel"
						value={rangeVal}
						onChange={this.rangeChangeHandler}
					></input>
					<br></br>
					<button type="submit">Submit</button>
				</form>
				<br></br>
				<br></br>
				<button type="button" onClick={this.sortNonActive}>
					Click to Hide Non-Active
				</button>
				{action === 1 ? (
					displayArr.length ? (
						<table>
							<thead>
								<tr>
									<th colSpan="6">Total Count - {displayArr.length}</th>
								</tr>
								<tr>
									<th>ID</th>
									<th>Name</th>
									<th>Email</th>
									<th>Phone</th>
									<th>Balance</th>
									<th>Is Active</th>
								</tr>
							</thead>
							<tbody>
								{displayArr.map((each, i) => (
									<tr key={i}>
										<td>{each._id}</td>
										<td>{each.name}</td>
										<td>{each.email}</td>
										<td>{each.phone}</td>
										<td>{each.balance}</td>
										<td>{each.isActive ? "Yes" : "No"}</td>
									</tr>
								))}
							</tbody>
						</table>
					) : (
						<h4>No Data Found</h4>
					)
				) : null}
			</center>
		);
	}
}
export default MyApp;
