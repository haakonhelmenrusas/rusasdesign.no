import { groq } from 'next-sanity';
import client from './sanity.client';

export async function getProfile() {
	return client.fetch(
		groq`*[_type == "profile"]{
      _id,
      fullName,
      headline,
      profileImage {alt, "image": asset->url},
      shortBio,
      location,
      fullBio,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      skills
    }`
	);
}

export async function getExperience() {
	return client.fetch(
		groq`*[_type == "experience"]{
      _id,
      name,
      jobTitle,
      "logo": logo.asset->url,
      url,
      description,
      startDate,
      endDate,
    }`
	);
}
