import "./main.scss";
import { FaInstagram, FaSearch } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { CgFacebook } from "react-icons/cg";
import UrbanAgePolygon from "../../assets/images/urban-age-properties-polygons--large.svg";
import { GoArrowUpRight } from "react-icons/go";
import { useState } from "react";

function Main() {
	const [input, setInput] = useState("");

	return (
		<main className="urban-age-prop__hero">
			{/* Small screen add */}
			<div className="urban-age-prop__hero-right-heading-small">
				{/* heading__two */}
				<h2 className="urban-age__hero-right-heading">
					Find your next <br />
					Perfect place to live
				</h2>
			</div>

			{/* small screen add end */}
			{/* urban-age-prop-hero_left-side */}
			<div className="urban-age-prop__hero-left">
				{/* hero-left-top */}
				<div className="hero-left__top">
					{/* urban-age-prop-hero_icons */}
					<div className="urban-age-prop__hero-social-icons-container">
						<FaInstagram className="urban-age-prop__hero-social-icons" />
						<CgFacebook className="urban-age-prop__hero-social-icons" />
						<FaLinkedinIn className="urban-age-prop__hero-social-icons" />
						<FaXTwitter className="urban-age-prop__hero-social-icons" />
					</div>
					{/* location */}
					<div className="urban-age-prop__hero-location">
						{/* circles */}
						<span className="location__indicator-container">
							<span className="location__indicator"></span>
						</span>
						{/* location */}
						<span className="location__name">
							Area 2, Katoto, Mzuzu
						</span>
					</div>
				</div>
				{/* hero-left-bottom */}
				<div className="hero-left__bottom-container">
					{/* Property type card */}
					<div className="urban-age-prop__quick-action-card">
						{/* image */}
						<GoArrowUpRight className="quick-action__up-right-arrow" />
						<img
							src={UrbanAgePolygon}
							alt=""
							className="quick-action__img"
						/>
						{/* title */}
						<h2 className="quick-action__heading">Property Type</h2>
						{/* description */}
						<p className="quick-action__description">
							Discover the properties that best suite your needs
							from our selection list.
						</p>
					</div>
					{/* Recommended card */}
					<div className="urban-age-prop__quick-action-card">
						{/* image */}
						<GoArrowUpRight className="quick-action__up-right-arrow" />
						<img
							src={UrbanAgePolygon}
							alt=""
							className="quick-action__img"
						/>
						{/* title */}
						<h2 className="quick-action__heading">Recommended</h2>
						{/* description */}
						<p className="quick-action__description">
							Check out our featured property list for your best
							experience.
						</p>
					</div>
					{/* Pricing card */}
					<div className="urban-age-prop__quick-action-card quick-action-card--pricing">
						{/* image */}
						<GoArrowUpRight className="quick-action__up-right-arrow" />
						<img
							src={UrbanAgePolygon}
							alt=""
							className="quick-action__img"
						/>
						{/* title */}
						<h2 className="quick-action__heading">Pricing</h2>
						{/* description */}
						<p className="quick-action__description">
							Check out our pricing.
						</p>
					</div>
				</div>
			</div>
			{/* urban-age-prop-hero__right */}
			<div className="urban-age-prop__hero-right">
				{/* urban-age-prop__hero-right--top-container */}
				<div className="urban-age-prop__hero-right-heading-search">
					{/* heading__two */}
					<h2 className="urban-age__hero-right-heading">
						Find your next <br />
						Perfect place to live
					</h2>
					{/* search */}
					{/* urban-age-prop-search_tab */}
					<span className="search_container--hero-right">
						<input
							type="text"
							name="seacrh-input-main"
							value={input}
							onChange={function (event) {
								setInput(event.target.value);
							}}
							className="urban-age-prop-search_box--hero-right"
						/>
						<FaSearch className="urban-age-prop-search_icon--hero-right" />
					</span>
				</div>
				{/* urban-age-prop__hero-right--middle-container */}
				<div className="urban-age-prop__logo-caption-container">
					<div className="temp-cont">
						<img
							src={UrbanAgePolygon}
							className="urban-age-prop__logo--hero-right"
						/>
					</div>
					<h2 className="urban-age-prop__hero-right-heading">
						<span className="urban-age-prop__heading-large">
							Mbumba
						</span>
						<br />
						<span className="add-bg"> Urban Age </span> Properties
					</h2>
				</div>
				{/* urban-age-prop__hero-right--bottom-container */}
				<div className="urban-age-prop__stats">
					{/* urban-age-prop-action_btn */}
					<button className="btn btn--stats">Get in touch</button>
					<div className="stats stats--happy-customers">
						<p>
							10K&#43;
							<br />
							<span>happy customers</span>
						</p>
					</div>
					<div className="stats stats--property-collection">
						<p>
							150&#43;
							<br />
							<span>property collection</span>
						</p>
					</div>
					<div className="stats stats--experience">
						<p>
							5 years&#43;
							<br />
							<span>Real Estate experience</span>
						</p>
					</div>
					<GoArrowUpRight className="arrow-right-bottom" />
				</div>
			</div>
		</main>
	);
}

export default Main;
