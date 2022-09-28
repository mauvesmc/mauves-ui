const buildClass = (...classes: (string | boolean | number)[]) => {
	return classes.filter(Boolean).join(' ');
};

export default buildClass;
