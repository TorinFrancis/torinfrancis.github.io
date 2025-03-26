const prettierConfig = {
	plugins: [
		'@trivago/prettier-plugin-sort-imports',
		/** Jsdoc plugin will not work if it's not last */
		'prettier-plugin-jsdoc',
	],
	proseWrap: 'preserve',
	singleQuote: true,
	trailingComma: 'all',
	tsdoc: true,
	importOrder: [
		'^node:',
		'<THIRD_PARTY_MODULES>',
		'^@torin.foo',
		'^[./].*(?<!\\.s?css)$',
		'\\.s?css$',
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
};

export default prettierConfig;
