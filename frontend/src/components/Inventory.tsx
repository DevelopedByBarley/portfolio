import { useEffect, useState } from "react";
import axios from "axios";
import { playOrStopHoverSound, playOrStopSelectSound } from "../helpers/PlayAudio";
import { Spinner } from "./Spinner";
import { useCookies } from "react-cookie";

interface Skill {
	title: string;
	percent: number;
	content: string;
	icon: string;
}

export const Inventory = () => {
	const [skills, setSkills] = useState<Skill[]>([]);
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [pending, setPending] = useState(true);
	const [cookies] = useCookies(['sound']);

	const selectCurrentSkill = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
		e.preventDefault();
		setCurrentIndex(index);
	}

	useEffect(() => {
		axios.get<{ skills: Skill[] }>(import.meta.env.VITE_API_BASE_URL + "/skills").then(res => {
			setSkills(res.data.skills);
		}).finally(() => {
			setTimeout(() => {
				setPending(false)
			}, 1000)
		})
	}, []);



	return (
		<div className="bg-mainLightDark mt-20 text-white">
			{pending ? <Spinner size={25} bgClass="h-96" /> : (
				<div className="container mx-auto min-h-56 p-3">
					<h3 className="title text-center xl:text-start xl:px-40 mt-3 font-pricedown text-5xl [text-shadow:0_5px_8px_rgb(0,0,0)]">Inventory</h3>
					<div className="grid lg:grid-cols-2">
						<div className="grid grid-cols-3 lg:grid-cols-5 max-h-52 overflow-y-auto md:overflow-hidden md:max-h-none md:h-max  w-max mx-auto mt-5">
							{skills.map((skill, index) => (
								<button
									key={index} // Ajánlott egyedi kulcsot használni
									className={`skill-box transition-all duration-200 h-20 w-20 m-2 bg-white/50 ${currentIndex === index ? 'border-2  border-mainOrange' : 'hover:border-2 hover:border-mainOrange border-2 border-white '} `}
									onClick={(e) => {
										selectCurrentSkill(e, index);
										if(cookies.sound) playOrStopSelectSound('play');
									}}
									onMouseEnter={() => {
										if(cookies.sound) playOrStopHoverSound('play')
									}}>
									<img src={`/api/backend/public/resources/uploads/icons/${skill.icon}`} className="w-12 mx-auto" alt="" />
								</button>
							))}
						</div>

						<div className="mt-10">
							{currentIndex !== undefined && skills[currentIndex] && (
								<>
									<h3 className="title text-center lg:text-start mt-3 font-pricedown text-4xl [text-shadow:0_5px_8px_rgb(0,0,0)]">
										{skills[currentIndex].title}
									</h3>

									<div className="w-full mt-5 bg-white/50 rounded-full h-2.5 dark:bg-gray-700">
										<div className="bg-mainOrange h-2.5 rounded-full transition-all duration-500" style={{ width: `${skills[currentIndex]?.percent}%` }}></div>
									</div>

									<p className="mt-5 p-2">
										{skills[currentIndex].content}
									</p>
								</>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
