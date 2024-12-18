'use client';

import React, { useState } from "react";

export function Demo() {
	return (
		<div className="bg-gray-900 text-gray-100 min-h-screen p-6">
			<main className="space-y-12">
				<Section title="Button">
					<Button />
				</Section>

				<Section title="Card">
					<Card />
				</Section>

				<Section title="Input Field">
					<InputField />
				</Section>

				<Section title="Textarea field">
					<TextArea />
				</Section>

				<Section title="Modal">
					<ModalExample />
				</Section>

				<Section title="Badge">
					<Badge />
				</Section>

				<Section title="Alert">
					<Alert />
				</Section>

				<Section title="Navbar">
					<Navbar />
				</Section>

				<Section title="Dropdown">
					<Dropdown />
				</Section>

				<Section title="Progress Bar">
					<ProgressBar />
				</Section>

				<Section title="Table">
					<Table />
				</Section>

				<Section title="Accordion">
					<Accordion />
				</Section>
			</main>
		</div>
	);
}

function Section({ title, children }) {
	return (
		<section className="p-6 bg-gray-800 rounded-lg shadow-md">
			<h2 className="text-xl font-semibold mb-4">{title}</h2>
			{children}
		</section>
	);
}

function Button() {
	return (
		<div className="space-x-4">
			<button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg">
				Primary
			</button>
			<button className="bg-gray-700 hover:bg-gray-800 text-white font-medium px-4 py-2 rounded-lg">
				Secondary
			</button>
		</div>
	);
}

function Card() {
	return (
		<div className="bg-gray-700 p-6 rounded-lg shadow-lg">
			<h3 className="text-lg font-semibold">Card Title</h3>
			<p className="text-gray-300 mt-2">This is a simple card description.</p>
			<button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
				Learn More
			</button>
		</div>
	);
}

function InputField() {
	return (
		<form>
			<label className="block text-gray-400 mb-2">Email</label>
			<input
				type="email"
				placeholder="Enter your email"
				className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
			/>
		</form>
	);
}

function ModalExample() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<button
				className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
				onClick={() => setIsOpen(true)}
			>
				Open Modal
			</button>

			{isOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
					<div className="bg-gray-800 p-6 rounded-lg shadow-lg">
						<h3 className="text-lg font-semibold">Modal Title</h3>
						<p className="text-gray-300 mt-2">
							This is a simple modal description.
						</p>
						<button
							className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
							onClick={() => setIsOpen(false)}
						>
							Close
						</button>
					</div>
				</div>
			)}
		</>
	);
}

function Badge() {
	return (
		<div className="space-x-2">
			<span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
				New
			</span>
			<span className="bg-green-600 text-white text-sm font-medium px-3 py-1 rounded-full">
				Active
			</span>
		</div>
	);
}

function Alert() {
	return (
		<div className="bg-red-600 text-white px-4 py-2 rounded-lg">
			<p className="text-sm font-medium">Error: Something went wrong!</p>
		</div>
	);
}

function Navbar() {
	return (
		<nav className="bg-gray-800 p-4 rounded-lg shadow-md">
			<ul className="flex justify-between items-center">
				<li className="text-white font-semibold">Brand</li>
				<li>
					<a href="/" className="text-gray-400 hover:text-white">
						Home
					</a>
				</li>
			</ul>
		</nav>
	);
}

function Dropdown() {
	return (
		<div className="relative">
			<button className="bg-gray-700 text-white px-4 py-2 rounded-lg">
				Dropdown
			</button>
			<ul className="absolute bg-gray-800 rounded-lg shadow-lg mt-2 w-40">
				<li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Option 1</li>
				<li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Option 2</li>
			</ul>
		</div>
	);
}

function ProgressBar() {
	return (
		<div>
			<div className="bg-gray-700 w-full rounded-lg overflow-hidden">
				<div className="bg-blue-600 h-4 w-3/5"></div>
			</div>
			<p className="text-gray-400 mt-2">60% Complete</p>
		</div>
	);
}

function Table() {
	return (
		<table className="w-full text-left table-auto">
			<thead className="bg-gray-700">
				<tr>
					<th className="px-4 py-2 text-gray-300">Name</th>
					<th className="px-4 py-2 text-gray-300">Role</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className="px-4 py-2">John Doe</td>
					<td className="px-4 py-2">Developer</td>
				</tr>
				<tr>
					<td className="px-4 py-2">Jane Smith</td>
					<td className="px-4 py-2">Designer</td>
				</tr>
			</tbody>
		</table>
	);
}
function TextArea() {
	return (
		<form>
			<label className="block text-gray-400 mb-2">Message</label>
			<textarea
				placeholder="Write your message"
				className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
				rows="4"
			></textarea>
		</form>
	);
}

// Accordion Component
function Accordion() {
	const [activeIndex, setActiveIndex] = useState(null);

	const toggleAccordion = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	const accordionData = [
		{ title: "Accordion 1", content: "Content for Accordion 1" },
		{ title: "Accordion 2", content: "Content for Accordion 2" },
		{ title: "Accordion 3", content: "Content for Accordion 3" },
	];

	return (
		<div>
			{accordionData.map((item, index) => (
				<div key={index} className="mb-4">
					<button
						onClick={() => toggleAccordion(index)}
						className="w-full text-left px-4 py-2 bg-gray-700 rounded-lg text-gray-100 hover:bg-gray-600"
					>
						{item.title}
					</button>
					{activeIndex === index && (
						<div className="px-4 py-2 bg-gray-800 rounded-lg mt-2">
							{item.content}
						</div>
					)}
				</div>
			))}
		</div>
	);
}
