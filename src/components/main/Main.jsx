import "./main.scss";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { CgFacebook } from "react-icons/cg";
import UrbanAgePolygon from "../../assets/images/urban-age-properties-polygons--large.svg";
import { GoArrowUpRight } from "react-icons/go";

function Main() {
	return (
		<main className="urban-age-prop__hero">
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
			<div className="urban-age-prop__hero-right">right</div>
		</main>
	);
}

export default Main;
