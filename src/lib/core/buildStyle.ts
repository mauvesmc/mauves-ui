const buildStyle = (...styles: string[]) => {
	return styles.filter(Boolean).join(';');
};

export default buildStyle;
