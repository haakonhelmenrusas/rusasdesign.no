import { PortableTextBlock } from 'sanity';

export type ProfileType = {
	_id: string;
	fullName: string;
	headline: string;
	profileImage: {
		alt: string;
		image: string;
	};
	shortBio: string;
	email: string;
	fullBio: PortableTextBlock[];
	location: string;
	resumeURL: string;
	socialLinks: string[];
	skills: string[];
};

export type ExperienceType = {
	_id: string;
	name: string;
	jobTitle: string;
	logo: string;
	url: string;
	description: string;
	startDate: Date;
	endDate: Date;
};
