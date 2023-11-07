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

	const [sidebarOpen, setSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};

	return (
		<>
			<div>
				<div className={`relative z-50 lg:hidden ${sidebarOpen ? '' : 'hidden'}`} role="dialog" aria-modal="true">
					<div className="fixed inset-0 bg-gray-900/80"></div>
					<div className="fixed inset-0 flex">
						<div className={`relative mr-16 flex w-full max-w-xs flex-1 ${sidebarOpen ? '' : 'hidden'}`}>
							<div className="absolute left-full top-0 flex w-16 justify-center pt-5">
								<button type="button" className="-m-2.5 p-2.5" onClick={toggleSidebar}>
									<span className="sr-only">Close sidebar</span>
									<svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
										<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>
							</div>
							<div className="flex grow flex-col overflow-y-auto bg-[#191A1B] pb-4">
								<div className="flex h-16 shrink-0 flex-col items-center text-white mb-5">
									<img className="absolute left-0 top-5" src="/logo.png" alt="Your Company" />
									<div className="text-xl absolute left-20 top-5">
										<span className="text-[#C3D7F5]">UBC</span>Way
									</div>
									<p className="text-base leading-3 absolute left-20 top-12">Vancouver Campus</p>
								</div>
								<div className="relative">
									<img src="/cover.png" alt="cover" className="w-full" />
									<h1 className="text-lg absolute bottom-0 left-0 right-0 p-2 pl-5 text-white">
										Sauder School of Business
									</h1>
								</div>
								<div className="bg-[#494949] h-10 pl-5 flex items-center mb-4 text-white">
									<p className="text-base">Categories</p>
								</div>
								<nav className="flex flex-1 flex-col">
									<ul role="list" className="flex flex-1 flex-col gap-y-7 px-6">
										<li>
											<ul role="list" className="-mx-2 space-y-1">
												{uniqueCategories.map((category, index) => (
													<button
														key={index}
														className="w-full"
														onClick={() => setSelected(category)}
													>
														<div className='text-white hover:text-indigo-600 hover:bg-gray-50 group flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
														>
															<span className='w-8 h-8 rounded-full'
																style={{
																	backgroundColor: color(category),
																}}></span>
															{category}
														</div>
													</button>
												))}
											</ul>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>

				<div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
					<div className="flex grow flex-col overflow-y-auto bg-[#191A1B] pb-4">
						<div className="flex h-16 shrink-0 items-center text-white mb-5">
							<img className="absolute left-0 top-5" src="/logo.png" alt="Your Company" />
							<div className="text-xl absolute left-20 top-5">
								<span className="text-[#C3D7F5]">UBC</span>Way
							</div>
							<p className="text-base leading-3 absolute left-20 top-12">Vancouver Campus</p>
						</div>
						<div className="relative">
							<img src="/cover.png" alt="cover" className="w-full" />
							<h1 className="text-lg absolute bottom-0 left-0 right-0 p-2 pl-5 text-white">
								Sauder School of Business
							</h1>
						</div>
						<div className="bg-[#494949] h-10 pl-5 flex items-center mb-4 text-white">
							<p className="text-base">Categories</p>
						</div>
						<nav className="flex flex-1 flex-col">
							<ul role="list" className="flex flex-1 flex-col gap-y-7 px-6">
								<li>
									<ul role="list" className="-mx-2 space-y-1">
										{uniqueCategories.map((category, index) => (
											<button
												key={index}
												className="w-full"
												onClick={() => setSelected(category)}
											>
												<div className='text-white hover:text-indigo-600 hover:bg-gray-50 group flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
												>
													<span className='w-8 h-8 rounded-full'
														style={{
															backgroundColor: color(category),
														}}></span>
													{category}
												</div>
											</button>
										))}
									</ul>
								</li>
							</ul>
						</nav>
					</div>
				</div>

				<div className="absolute lg:pl-72 bg-white w-full border-b border-gray-200">
					<div className="sticky top-0 z-40 lg:mx-auto lg:max-w-7xl lg:px-8">
						<div className="flex h-16 items-center gap-x-4 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none">
							<button type="button" className="-m-2.5 p-2.5 text-white lg:hidden" onClick={toggleSidebar}>
								<span className="sr-only">Open sidebar</span>
								<svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
								</svg>
							</button>

							<div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true"></div>

							<div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
								<form className="relative flex flex-1" action="#" method="GET">
									<label htmlFor="search-field" className="sr-only">Search</label>
									<svg className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
										<path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
									</svg>
									<input id="search-field" className="block h-full w-full border-0 py-0 pl-8 pr-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm" placeholder="Search..." type="search" name="search" />
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			<img
				src="/map.png"
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
						<p className="text-2xl text-black">{marker.category}</p>
					</div>
				)
			)}
		</>
	)
}

export default App