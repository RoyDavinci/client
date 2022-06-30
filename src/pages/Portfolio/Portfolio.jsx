import React from "react";
import { Footer, PortfolioContainer, Header } from "../../components";
import Jekawin from "../../images/jekawin.png";
import ChurchVest from "../../images/churchvest.png";
import { defaultState } from "../../features/state/stateSlice";
import { useSelector } from "react-redux";

export const Portfolio = () => {
	const initial = useSelector(defaultState);

	return (
		<div className=''>
			<Header></Header>
			<div
				className={`${
					!initial
						? "itemPortfolio__container p-8 md:p-12 bg-[#fff]"
						: "itemPortfolio__container p-8 md:p-12 bg-[#040C28]"
				}`}
			>
				<PortfolioContainer
					link='https://jekawin.com'
					image={Jekawin}
					title='Jekawin Mobile Application'
					overview='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet varius aliquam cursus sed amet sem vestibulum neque. Sapien tristique in rhoncus at vivamus nulla sed elit placerat. Et tellus volutpat, tempus consequat eget fringilla aliquam venenatis.'
					overview2='Urna magna ornare cursus sem in adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet varius aliquam cursus sed amet sem vestibulum neque. Sapien tristique in rhoncus at vivamus nulla sed elit placerat. Et tellus volutpat, tempus consequat eget fringilla aliquam venenatis. Urna magna ornare cursus sem in adipiscing  '
				></PortfolioContainer>
				<PortfolioContainer
					link='https://www.churchvest.com'
					image={ChurchVest}
					title='ChurchVest Mobile Application'
					overview='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet varius aliquam cursus sed amet sem vestibulum neque. Sapien tristique in rhoncus at vivamus nulla sed elit placerat. Et tellus volutpat, tempus consequat eget fringilla aliquam venenatis.'
					overview2='Urna magna ornare cursus sem in adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet varius aliquam cursus sed amet sem vestibulum neque. Sapien tristique in rhoncus at vivamus nulla sed elit placerat. Et tellus volutpat, tempus consequat eget fringilla aliquam venenatis. Urna magna ornare cursus sem in adipiscing  '
				></PortfolioContainer>
			</div>
			<Footer></Footer>
		</div>
	);
};
