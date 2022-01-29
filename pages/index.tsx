import classNames from "classnames";

const Home = () => {
	const background = classNames(
		"flex justify-center select-none h-screen w-screen bg-[#2C2F33]",
		"text-white font-['Whitney']"
	);

	const buttonStyles = classNames(
		"bg-black font-['Whitney'] font-white p-4 rounded shadow-2xl text-xl",
		"transition-all duration-150 hover:shadow-sm hover:-translate-y-1",
		"flex justify-center items-center"
	)

	return (
		<div className={background}>
			<div>
				<h1 className="text-center font-['Montserrat'] mt-10 text-5xl sm:text-6xl md:text-8xl">Unban.gg</h1>
				<p className="text-center font-['Whitney'] text-3xl mt-8 max-w-xs sm:max-w-lg">A niche unban system built for Discord.</p>

				<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 max-w-xs mx-auto gap-5">
					<a href="https://discord.com/invite/DxjyWk8kWB" className={buttonStyles}>
						Discord
					</a>
					<a href="https://github.com/ibx34/bottle" className={buttonStyles}>
						Github
					</a>
				</div>
			</div>
		</div>
	)
}

export default Home
