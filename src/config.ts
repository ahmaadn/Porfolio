import type { Site, Education, Certificates, Link, Project } from "@/types";

export const SITE: Site = {
	title: "Ahmaadn",
	description: "Welcome to my website",
	author: "aa",
};

export const ABOUT_ME =
	"Halo, saya Ahmad Nur Sahid, biasa dipanggil Ahmad. Saya lahir pada tanggal 5 Agustus. Hobi utama saya adalah bermain game mobile dan coding. Saat ini, saya merupakan mahasiswa Teknik  Informatika di Institut Teknologi Garut. Minat saya terhadap bahasa pemrograman muncul sejak remaja, dan awalnya saya belajar pemrograman ketika masih di sekolah menengah kejuruan (SMK). Bahasa pertama yang saya pelajari adalah Python.";

export const EDUCATION: Education = [
	{
		from: "2019",
		to: "2022",
		institute: "SMKS AL-Farisi Leles",
		course: "Teknik Komputer Dan Jaringan",
		location: "Leles, Garut",
	},
	{
		from: "2022",
		to: "Now",
		institute: "Institut Teknologi Garut",
		course: "Teknik Informatika",
		location: "Garut, Jawa Barat",
	},
];

export const CERTIFICATES: Certificates = [
	{
		issued: "2020",
		title: "Cyber Security Training",
		org: "Infra Digital Nusantara",
		url: "cv/cyber-security.pdf",
		description:
			"As a participant of Cyber Security Training and has succesfully complated Modul CompTIA Security +",
	},
	{
		issued: "2021",
		title: "MTCNA",
		org: "Mikrotik",
		url: "cv/MTCNA.pdf",
		description:
			"having successfully completed the appropriate training and certification requirements, is hereby recognised as a MikroTik Certified Network Associate",
	},
];

export const LINKS: Link[] = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/me" },
	{ label: "Project", href: "/project" },
	{ label: "Contact", href: "mailto:ahmadnursahid12345@gmail.com", icon: "mail", external: true },
];

export const SOSIAL: Link[] = [
	{ label: "Github", href: "https://github.com/ahmaadn", icon: "github", external: true },
];

export const PROJECTS: Project[] = [
	{
		name: "Youtube Downloader",
		date: "2022",
		description: "Aplikasi dekstop sederhana menggunakan python.",
		tags: ["python"],
		links: [
			{ label: "github", href: "https://github.com/ahmaadn/Youtube-Downloader", icon: "github" },
		],
	},
];
