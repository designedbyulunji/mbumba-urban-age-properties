import "./header.scss";
import UrbanAgePropLogo from "../../assets/images/urban-age-properties-temp-logo.svg";
import { FaBars } from "react-icons/fa6";

function Header() {
	const navLinks = [
		{ id: 1, linkName: "Home", linkUrl: "" },
		{ id: 2, linkName: "Property", linkUrl: "" },
		{ id: 3, linkName: "Pricing", linkUrl: "" },
		{ id: 4, linkName: "Contact", linkUrl: "" },
		{ id: 5, linkName: "About Us", linkUrl: "" },
	];

	return (
		<header className="urban-age-prop__header">
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
				<ul className="nav-links__ul">
					{navLinks.map((link) => {
						return (
							<li className="nav-links__li" key={link.id}>
								<a
									href={link.linkUrl}
									className="nav-links__anchor"
								>
									{link.linkName}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
			{/* urban-age-prop-action_btn */}
			<button className="urban-age-prop__action-btn btn">
				Get in touch
			</button>
			{/* urban-age-prop-bars */}
			<div className="urban-age-prop-nav_bars-container">
				<FaBars className="urban-age-prop-nav_bars" />
			</div>
		</header>
	);
}

export default Header;
