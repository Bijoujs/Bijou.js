import resolve from "@rollup/plugin-node-resolve";

export default {
	input: "bijou.js",
	output: {
		file: "bijou-rollup.js",
		format: "esm",
	},
	plugins: [resolve()],
};
