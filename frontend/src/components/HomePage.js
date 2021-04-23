import React, { useState } from "react";
import styles from "../css/HomePage.module.css";
import { Button, Modal } from "antd";
import { getColleges } from "./backendApis";
import Institutes from './Institutes';

const HomePage = () => {
	const [visible, setVisible] = useState(false);
	const [colleges, setclgs] = useState([]);
	const getClgs = () => {
		getColleges()
			.then((response) => setclgs(response))
			.catch((err) => console.log(err));
	};
	let clgs = [];
	if (colleges.length > 0) {
		colleges.forEach((ele) => {
			clgs.push(
				<p
					style={{ cursor: "pointer" }}
					onClick={() => (window.location = `/institute/${ele._id}`)}
				>
					{ele.Name}
				</p>
			);
		});
	}
	return (
		<div style={{ margin: "60px auto", paddingBottom: 60 }}>
			{colleges.length > 0 && (
				<Modal
					title="List of all colleges"
					visible={visible}
					onOk={() => setVisible(false)}
					onCancel={() => setVisible(false)}
				>
					{clgs}
				</Modal>
			)}
			<div className={styles.home}>
				<div className={styles.institutes}>
					<div>
						<h1>Search colleges</h1>
						<h2 style={{ color: "#4141ac" }}>
							find among various colleges across countries which will suits you best !!!
						</h2>
						<Button
							type="danger"
							onClick={() => {
								setVisible(true);
								getClgs();
							}}
						>
							LIST OF COLLEGES
						</Button>
					</div>
				</div>
			</div>
			<Institutes/>
		</div>
	);
};

export default HomePage;
