import "./footer.scss";
import UrbanAgePropLogo from "../../assets/images/urban-age-properties-temp-logo.svg";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
	const estDate = 2018;
	const currDate = new Date().getFullYear();

	return (
		<footer className="urban-age-prop__footer">
			{/* urban-age-prop-logo */}
			<div className="urban-age-prop__logo-container urban-age-prop__logo-container--footer">
				<img
					className="urban-age-prop__logo"
					src={UrbanAgePropLogo}
					alt="urban-age-properties-temp-logo"
				/>
			</div>
			{/* copyright */}
			<div className="urban-age-prop__footer-copyright-container">
				<h3 className="urban-age-prop__footer-copyright">
					&copy;Mbumba <br /> Urban Age Properties {estDate} &#45;{" "}
					{currDate}
				</h3>
			</div>

			{/* urban-age-prop-hero_icons */}
			<div className="urban-age-prop__hero-social-icons-container-footer">
				<FaInstagram className="urban-age-prop__hero-social-icons--footer" />
				<CgFacebook className="urban-age-prop__hero-social-icons--footer" />
				<FaLinkedinIn className="urban-age-prop__hero-social-icons--footer" />
				<FaXTwitter className="urban-age-prop__hero-social-icons--footer" />
			</div>
		</footer>
	);
}

export default Footer;
