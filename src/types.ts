import type { iconPaths } from "./lib/icon-path";

export type Site = {
	title: string;
	description: string;
	author: string;
};

export type Education = {
	from: string;
	to: string;
	institute: string;
	course: string;
	location: string;
}[];

export type Certificates = {
	issued: string;
	title: string;
	org: string;
	url: string;
	description: string;
}[];

export type Link = {
	label: string;
	href: string;
	external?: boolean;
	icon?: keyof typeof iconPaths;
};

export type Project = {
	name: string;
	links?: Link[];
	date: string;
	description: string;
	tags?: string[];
};
