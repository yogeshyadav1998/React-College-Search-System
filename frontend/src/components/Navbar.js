import React, { Component } from "react";
import styles from "../css/Navbar.module.css";
import {StockOutlined} from '@ant-design/icons';

class NavBar extends Component {
	state = {};
	render() {
		return (
			<header className={styles.navbar}>
				
				<h1 className={styles.logo} onClick={() => (window.location = "/")}>
					<StockOutlined style={{fontSize: "1em", margin:"2px"}} />
					College Search System
				</h1>
			</header>
		);
	}
}

export default NavBar;
