import "./header.scss";
import UrbanAgePropLogo from "../../assets/images/urban-age-properties-temp-logo.svg";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Header() {
	const navLinks = [
		{ id: 1, linkName: "Home", linkUrl: "#", active: true },
		{ id: 2, linkName: "Property", linkUrl: "#", active: false },
		{ id: 3, linkName: "Pricing", linkUrl: "#", active: false },
		{ id: 4, linkName: "Contact", linkUrl: "#", active: false },
		{ id: 5, linkName: "About Us", linkUrl: "#", active: false },
	];

	const [toggled, setToggleIcon] = useState(false);
	// const [input, setInput] = useState("");

	function handleNavToggle() {
		if (toggled === false) {
			setToggleIcon(true);
		} else {
			setToggleIcon(false);
		}
	}

	return (
		<header
			className={
				toggled
					? "urban-age-prop__header active"
					: "urban-age-prop__header"
			}
		>
			{/* urban-age-prop-logo */}
			<div className="urban-age-prop__logo-container">
				<img
					className="urban-age-prop__logo"
					src={UrbanAgePropLogo}
					alt="urban-age-properties-temp-logo"
				/>
			</div>
			{/* urban-age-prop-nav_links */}
			<nav className="urban-age-prop__nav-links">
				<ul
					className={
						toggled ? "nav-links__ul active" : "nav-links__ul"
					}
				>
					{navLinks.map((link) => {
						return (
							<li className="nav-links__li" key={link.id}>
								<a
									href={link.linkUrl}
									className={
										link.active
											? "nav-links__anchor active"
											: "nav-links__anchor"
									}
								>
									{link.linkName}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
			{/* urban-age-prop-search_tab */}
			<span className="urban-age-prop-search_container">
				{/* <input
					type="text"
					name="seacrh-input-main"
					value={input}
					onChange={function (event) {
						setInput(event.target.value);
					}}
					className="urban-age-prop-search_box"
				/> */}
				<FaSearch className="urban-age-prop-search_icon" />
			</span>
			{/* urban-age-prop-action_btn */}
			<button className="urban-age-prop__action-btn btn">
				Get in touch
			</button>
			{/* urban-age-prop-bars */}
			<div
				className="urban-age-prop-nav_bars-container"
				onClick={handleNavToggle}
			>
				<span>
					{toggled ? (
						<IoClose className="urban-age-prop-nav_bars" />
					) : (
						<FaBars className="urban-age-prop-nav_bars" />
					)}
				</span>
			</div>
		</header>
	);
}

export default Header;
