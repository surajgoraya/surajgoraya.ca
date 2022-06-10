const Errors = {
	404: {
		error_code: 404,
		error_desc: 'Not Found.',
		error_top: 'I might have mistyped a URL',
		error_detail:
			'Looks like whatever page or resource you were requesting cannot be found. Spooky Eh?',
		year: new Date().getFullYear().toString(),
	},
	410: {
		error_code: 410,
		error_desc: 'Gone.',
		error_top: 'Poof.',
		error_detail:
			"The page or resource you were requesting is gone and is unlikely to return. I'm sorry :((. If you think this is a mistake please get in contact!",
		year: new Date().getFullYear().toString(),
	},
};

export default Errors;
