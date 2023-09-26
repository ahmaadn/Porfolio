import type { iconPaths } from "./lib/icon-path";

export interface Site {
	title: string;
	description: string;
	author: string;
}

export interface Education {
	from: string;
	to: string;
	institute: string;
	course: string;
	location: string;
}

export interface Certificates {
	issued: string;
	title: string;
	org: string;
	url: string;
	description: string;
}

export interface Link {
	label: string;
	url: string;
	external?: boolean;
	icon?: keyof typeof iconPaths;
}

export interface Project {
	name: string;
	date: string;
	description: string;
	tags?: string[];
	sourceUrl?: string;
	demoUrl?: string;
	articleUrl?: string;
}
