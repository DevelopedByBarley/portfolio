import { useEffect, useState } from "react";
import Alert from "../components/Alert";
import { playOrStopSelectSound, playOrStopThemeSound } from '../helpers/PlayAudio';
import { useCookies } from "react-cookie";
import { Intro } from "../components/Intro";



export default function Welcome() {
	const [cookies, setCookies] = useCookies(['sound', 'intro', 'visited']);
	const [introCheckbox, setIntroCheckbox] = useState(false);
	const [soundCheckbox, setSoundCheckbox] = useState(false);
	const month = 30 * 24 * 60 * 60 * 1000; // 30days	

	

	useEffect(() => {
		if (cookies.intro && !cookies.visited) {
			setCookies('visited', 1, { path: '/', expires: new Date(Date.now() + month) });
		}
		// eslint-disable-next-line
	}, []);





	// Submit event and set cookies by checkboxes
	const submitOptionsAndSetCookies = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setCookies('sound', soundCheckbox ? 1 : 0, { path: '/', expires: new Date(Date.now() + month) });
		setCookies('intro', introCheckbox ? 1 : 0, { path: '/', expires: new Date(Date.now() + month) });

		// If sound accepted play select sound
		if (soundCheckbox) {
			playOrStopSelectSound('play');
		}

		// if introCheckbox doesn't accepted set visited 1 
		if (!introCheckbox) {
			setCookies('visited', 1, { path: '/', expires: new Date(Date.now() + month) });
		} else {
			setTimeout(() => {
				setCookies('visited', 1, { path: '/', expires: new Date(Date.now() + month) });
			}, 27000)
		}

		// If all checkbox accepted play sound
		if (introCheckbox && soundCheckbox) {
			playOrStopThemeSound('play');
		}


		console.log("Intro:", introCheckbox);
		console.log("Sound:", soundCheckbox);

	}

	const introCheckboxHandler = () => {
		setIntroCheckbox(!introCheckbox);
		console.log("Intro checkbox:", introCheckbox);
	}

	const soundCheckboxHandler = () => {
		setSoundCheckbox(!soundCheckbox);
		console.log("Sound checkbox:", soundCheckbox);
	}


	// If page was visited don't use welcome and intro page
	if (cookies.visited) return null;

	// If intro was accepted play intro
	if (cookies.intro) {
		return <Intro month={month} />
	}

	return (
		<div>
			<Alert title="WELCOME" bgColor="mainDark">
				<section>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, itaque. Illum adipisci aperiam atque molestiae dolore voluptatum accusamus, quas, cum inventore at nostrum. Atque voluptatum modi sunt doloribus nostrum architecto?
					</p>
					<hr className="my-5" />
					<form onSubmit={submitOptionsAndSetCookies} className="mt-5">
						<h3 className="font-bold font-pricedown text-3xl my-3">SETTINGS</h3>

						<div className="flex items-center justify-center mt-5 px-3">
							<div className="flex items-center h-5">
								<input
									id="sound-checkbox"
									aria-describedby="sound-checkbox-text"
									type="checkbox"
									value=""
									checked={soundCheckbox}
									onChange={soundCheckboxHandler}

									className="w-4 h-4 text-mainOrange bg-gray-100/50 accent-mainOrange border-gray-300 rounded focus:ring-black dark:focus:ring-mainOrange dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
							</div>
							<div className="ms-2 text-sm text-start">
								<label
									htmlFor="sound-checkbox"
									className="font-medium text-white dark:text-gray-300"
								>
									Szeretném, ha az oldal hangot és effekteket használjon.
								</label>
								<p
									id="sound-checkbox-text"
									className="text-xs font-normal text-gray-500 dark:text-gray-300"
								>
									For orders shipped from $25 in books or $29 in other categories
								</p>
							</div>
						</div>
						<div className="flex items-center justify-center mt-5 px-3">
							<div className="flex items-center h-5">
								<input
									id="intro-checkbox"
									aria-describedby="intro-checkbox-text"
									type="checkbox"
									value=""
									checked={introCheckbox}
									onChange={introCheckboxHandler}
									className="w-4 h-4 text-mainOrange bg-gray-100/50 accent-mainOrange border-gray-300 rounded focus:ring-black dark:focus:ring-mainOrange dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
							</div>
							<div className="ms-2 text-sm text-start">
								<label
									htmlFor="intro-checkbox"
									className="font-medium text-white dark:text-gray-300"
								>
									Szeretném, ha az intro lejátszódna induláskor.
								</label>
								<p
									id="intro-checkbox-text"
									className="text-xs font-normal text-gray-500 dark:text-gray-300"
								>
									For orders shipped from $25 in books or $29 in other categories
								</p>
							</div>
						</div>

						<button
							type="submit"
							className="border border-mainOrange py-1 px-3 mt-5 hover:bg-mainOrange hover:text-mainDark font-semibold"

						>
							Elküld
						</button>
					</form>
				</section>
			</Alert>


		</div>
	);
}
