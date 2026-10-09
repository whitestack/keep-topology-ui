import React from "react";

const nodes = [
	{ id: "gateway", label: "Gateway", x: 220, y: 55, color: "#2563eb" },
	{ id: "api", label: "API Service", x: 100, y: 165, color: "#7c3aed" },
	{ id: "worker", label: "Worker", x: 340, y: 165, color: "#7c3aed" },
	{ id: "database", label: "Database", x: 220, y: 275, color: "#059669" },
];

const connections = [
	["gateway", "api"],
	["gateway", "worker"],
	["api", "database"],
	["worker", "database"],
];

/** A small, self-contained example topology diagram. */
export default function TopologyModule() {
	const nodeById = Object.fromEntries(nodes.map((node) => [node.id, node]));

	return (
		<section
			aria-label="Sample service topology"
			style={{
				maxWidth: 560,
				padding: 20,
				border: "1px solid #e2e8f0",
				borderRadius: 12,
				background: "#fff",
				color: "#0f172a",
				fontFamily: "system-ui, sans-serif",
			}}
		>
			<h2 style={{ margin: "0 0 16px", fontSize: 18 }}>Service topology</h2>
			<svg
				role="img"
				aria-label="Gateway connected to API Service and Worker, both connected to Database"
				viewBox="0 0 440 330"
				style={{ display: "block", width: "100%", height: "auto" }}
			>
				{connections.map(([fromId, toId]) => {
					const from = nodeById[fromId];
					const to = nodeById[toId];

					return (
						<line
							key={`${fromId}-${toId}`}
							x1={from.x}
							y1={from.y + 24}
							x2={to.x}
							y2={to.y - 24}
							stroke="#cbd5e1"
							strokeWidth="2"
						/>
					);
				})}
				{nodes.map((node) => (
					<g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
						<rect
							x="-68"
							y="-24"
							width="136"
							height="48"
							rx="10"
							fill="#fff"
							stroke={node.color}
							strokeWidth="2"
						/>
						<circle cx="-49" cy="0" r="5" fill={node.color} />
						<text
							x="4"
							y="5"
							textAnchor="middle"
							fill="#0f172a"
							fontSize="13"
							fontWeight="600"
						>
							{node.label}
						</text>
					</g>
				))}
			</svg>
		</section>
	);
}
