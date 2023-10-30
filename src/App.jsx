import { useState } from 'react'

function App() {
	const [selected, setSelected] = useState(null)
	const markers = [
		{ id: 1, category: 'Facilities', x: 1180, y: 410 },
		{ id: 2, category: 'Library', x: 1380, y: 650 },
		{ id: 3, category: 'Restaurants', x: 1190, y: 400 },
		{ id: 4, category: 'Student Areas', x: 1240, y: 340 },
		{ id: 5, category: 'Classrooms', x: 1300, y: 450 },
		{ category: 'Classrooms', x: 1150, y: 300 },
		{ category: 'Classrooms', x: 1150, y: 380 },
		{ category: 'Classrooms', x: 1310, y: 600 },
		{ category: 'Classrooms', x: 1255, y: 500 },
		{ id: 6, category: 'Lockers', x: 1180, y: 700 },
		{ id: 7, category: 'Study Areas', x: 1120, y: 510 },
		{ id: 8, category: 'Staff Areas', x: 1230, y: 510 },
	];


	function color(category) {
		const categoryColors = {
			Facilities: '#238AEA',
			Library: '#23EA43',
			Restaurants: '#6F23EA',
			'Student Areas': '#EABE23',
			Classrooms: '#EA8E23',
			Lockers: '#DBDBDB',
			'Study Areas': '#23DEEA',
			'Staff Areas': '#EA2347',
		}

		return categoryColors[category] || '#000000'
	}

	const uniqueCategories = [...new Set(markers.map((marker) => marker.category))];

	return (
		<div className="">
			<div className="relative">
				<div className="bg-[#191A1B] w-[20%] absolute min-h-screen">
					<div className="relative">
						<img src="/ubc/cover.png" alt="cover" className="w-full" />
						<h1 className="text-white text-2xl absolute bottom-0 left-0 right-0 p-2 pl-5">
							Sauder School of Business
						</h1>
					</div>
					<div className="bg-[#494949] h-12 p-3 pl-5">
						<p className="text-white text-xl">Categories</p>
					</div>
					{uniqueCategories.map((category, index) => (
						<button
							key={index}
							className="flex text-white items-center px-5 pt-5"
							onClick={() => setSelected(category)}
						>
							<div
								style={{
									backgroundColor: color(category),
									width: '40px',
									height: '40px',
									borderRadius: '50%',
									marginRight: '1rem',
								}}
							></div>
							<p className="text-2xl">{category}</p>
						</button>
					))}
				</div>
				<div className="absolute top-0 right-0 bg-[#091F3F] text-white w-[80%] h-16 text-2xl flex">
					<img src="/ubc/logo.png" alt="UBC" className="h-12 mt-2" />
					<div className="mt-2">
						<div className="text-xl">
							<span className="text-[#C3D7F5]">UBC</span>Way
						</div>
						<p className="text-base leading-3">Vancouver Campus</p>
					</div>
				</div>
			</div>
			<img
				src="/ubc/map.png"
				alt="map"
				className="object-cover w-screen h-screen"
			/>
			{markers.map((marker, index) =>
				selected === marker.category && (
					<div
						key={index}
						className="absolute"
						style={{
							left: marker.x,
							top: marker.y,
							transform: 'translate(-50%, -50%)',
						}}
					>
						<div
							style={{
								backgroundColor: color(marker.category),
								width: '40px',
								height: '40px',
								borderRadius: '50%',
								marginRight: '1rem',
								border: 'solid',
							}}
						></div>
						<p className="text-2xl">{marker.category}</p>
					</div>
				)
			)}
		</div>
	)
}

export default App