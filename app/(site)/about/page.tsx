import { PortableText } from '@portabletext/react';
import { BiEnvelope } from 'react-icons/bi';

import WorkExperience from '@/app/(site)/components/WorkExperience';
import { getProfile } from '@/sanity/query';
import type { ProfileType } from '@/types';
import ProfilePhoto from '../components/profilePhoto/ProfilePhoto';

export default async function About() {
	const profile: ProfileType[] = await getProfile();

	return (
		<main className='lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6'>
			{profile &&
				profile.map((profile) => (
					<div key={profile._id}>
						<section>
							<div>
								<h1 className='lg:text-5xl text-4xl lg:leading-tight basis-1/2 font-bold mb-8'>
									I&apos;m {profile.fullName}. I work in {profile.location}, where I design the future.
								</h1>
								<div className='flex flex-col gap-y-3 text-zinc-400 leading-relaxed'>
									<PortableText value={profile.fullBio} />
								</div>
							</div>
							<div className='flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12'>
								<ProfilePhoto image={profile.profileImage.image} alt={profile.profileImage.alt} />
								<ul>
									<li>
										<a
											href={`mailto:${profile.email}`}
											className='flex items-center gap-x-2 hover:text-purple-400 duration-300'
										>
											<BiEnvelope className='text-lg' />
											{profile.email}
										</a>
									</li>
								</ul>
							</div>
						</section>
						<section className='mt-24 max-w-2xl'>
							<h2 className='font-semibold text-4xl mb-4'>Expertise</h2>
							<p className='text-zinc-400 max-w-lg'>
								I&apos;ve spent few years working on my skills. In no particular order, here are a few of them.
							</p>
							<ul className='flex flex-wrap items-center gap-3 mt-8'>
								{profile.skills.map((skill, id) => (
									<li
										key={id}
										className='bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1'
									>
										{skill}
									</li>
								))}
							</ul>
						</section>
					</div>
				))}
			<div>
				<WorkExperience />
			</div>
		</main>
	);
}
