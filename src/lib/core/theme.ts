import { writable } from 'svelte/store';

export type MauvesThemeBase = 'dark' | 'light';
export type MauvesTheme = 'auto' | MauvesThemeBase;
export type VariatedColor = {
	1: string;
	2: string;
	3: string;
	4: string;
	5: string;
	6: string;
	7: string;
	8: string;
	9: string;
};
export type StateColor = {
	default: string;
	hover: string;
	active: string;
};
export type GroundColor = {
	background: string;
	foreground: string;
};

export type MauvesColorPalette = {
	base: VariatedColor;
	primary: StateColor;
	secondary: StateColor;
	text: StateColor;
	green: StateColor;
	yellow: StateColor;
	red: StateColor;
	blue: StateColor;
	divider: string;
	disabled: GroundColor;
	[key: string]: VariatedColor | StateColor | GroundColor | string;
};

export type MauvesColors = {
	[key in MauvesThemeBase]: MauvesColorPalette;
};

export type MauvesTypographySize = 'h1' | 'h2' | 'h3' | 'h4' | 'st1' | 'st2' | 'b1' | 'b2' | 'ht';

export type MauvesTypography = {
	sans: string[];
	mono: string[];
	fontSize: {
		[key in MauvesTypographySize]: string;
	};
	lineHeight: {
		[key in MauvesTypographySize]: string;
	};
};

export type MauvesSize = 'sm' | 'md' | 'lg' | 'xl';

export type MauvesBreakpoints = {
	[key in MauvesSize]: string;
};

export type MauvesShadows = {
	[key in MauvesSize]: string;
};

export type MauvesSpacing = {
	[key in MauvesSize]: string;
};

export type Theme = {
	theme: MauvesTheme;
	colors: MauvesColors;
	typography: MauvesTypography;
	breakpoints: MauvesBreakpoints;
	shadows: MauvesShadows;
};

const createTheme = (initialState: Theme) => {
	const { update, subscribe } = writable<Theme>(initialState);

	return {
		subscribe,
		setTheme: (theme: MauvesTheme) =>
			update((v) => {
				v.theme = theme;
				return v;
			})
	};
};

const theme = createTheme({
	theme: 'auto',
	colors: {
		dark: {
			base: {
				1: '#222731',
				2: '#393d47',
				3: '#52555e',
				4: '#6b6e76',
				5: '#86898f',
				6: '#a2a4a9',
				7: '#bec0c3',
				8: '#dcddde',
				9: '#fafafa'
			},
			primary: {
				default: '#6366f1',
				hover: '#5754eb',
				active: '#4f46e5'
			},
			secondary: {
				default: '#3d3c4d',
				hover: '#44425c',
				active: '#484666'
			},
			text: {
				default: '#f2f2f3',
				hover: '#d7d7db',
				active: '#bcbcc2'
			},
			green: {
				default: '#10b981',
				hover: '#0aa875',
				active: '#059669'
			},
			yellow: {
				default: '#facc15',
				hover: '#f8c308',
				active: '#eab308'
			},
			red: {
				default: '#f43f5e',
				hover: '#ec2d52',
				active: '#e11d48'
			},
			blue: {
				default: '#3b82f6',
				hover: '#3073f1',
				active: '#2563eb'
			},
			divider: 'base.5',
			disabled: {
				background: 'base.4',
				foreground: 'base.6'
			}
		},
		light: {
			base: {
				1: '#fafafa',
				2: '#dcddde',
				3: '#bec0c3',
				4: '#a2a4a9',
				5: '#86898f',
				6: '#6b6e76',
				7: '#52555e',
				8: '#393d47',
				9: '#222731'
			},
			primary: {
				default: '#4f46e5',
				hover: '#5754eb',
				active: '#6366f1'
			},
			secondary: {
				default: '#ecebff',
				hover: '#e0dff2',
				active: '#d9d8f2'
			},
			text: {
				default: '#4b4a64',
				hover: '#6c6b80',
				active: '#a5a4b2'
			},
			green: {
				default: '#059669',
				hover: '#0aa875',
				active: '#10b981'
			},
			yellow: {
				default: '#eab308',
				hover: '#f8c308',
				active: '#facc15'
			},
			red: {
				default: '#e11d48',
				hover: '#ec2d52',
				active: '#f43f5e'
			},
			blue: {
				default: '#2563eb',
				hover: '#3073f1',
				active: '#3b82f6'
			},
			divider: 'base.5',
			disabled: {
				background: 'base.4',
				foreground: 'base.6'
			}
		}
	},
	typography: {
		sans: [
			'Inter',
			'system-ui',
			'-apple-system',
			'BlinkMacSystemFont',
			'Segoe UI',
			'Roboto',
			'Oxygen',
			'Ubuntu',
			'Cantarell',
			'Open Sans',
			'Helvetica Neue',
			'sans-serif'
		],
		mono: ['monospace'],
		fontSize: {
			h1: '3rem',
			h2: '2.5rem',
			h3: '2rem',
			h4: '1.5rem',
			st1: '1.5rem',
			st2: '1.25rem',
			b1: '1.25rem',
			b2: '1rem',
			ht: '0.875rem'
		},
		lineHeight: {
			h1: '3.5rem',
			h2: '3rem',
			h3: '2.5rem',
			h4: '2rem',
			st1: '2rem',
			st2: '1.75rem',
			b1: '1.5rem',
			b2: '1.25rem',
			ht: '1.125rem'
		}
	},
	breakpoints: {
		sm: '480px',
		md: '768px',
		lg: '1000px',
		xl: '1280px'
	},
	shadows: {
		sm: '0 2px 8px rgba(var(--theme-secondary-default-rgb), 0.25)',
		md: '0 4px 8px rgba(var(--theme-secondary-default-rgb), 0.25)',
		lg: '0 6px 8px rgba(var(--theme-secondary-default-rgb), 0.25)',
		xl: '0 8px 8px rgba(var(--theme-secondary-default-rgb), 0.25)'
	}
});

export default theme;
