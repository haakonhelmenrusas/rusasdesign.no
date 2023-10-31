import { getExperience } from '@/sanity/query';
import type { ExperienceType } from '@/types';
import Image from 'next/image';

import styles from './WorkExperience.module.css';

export default async function Job() {
	const job: ExperienceType[] = await getExperience();

	return (
		<section className={styles.container}>
			<div className={styles.title_section}>
				<h2 className='font-semibold text-4xl mb-4'>Work Experience</h2>
			</div>

			<div className={styles.work_experience}>
				{job.map((data) => (
					<div key={data._id} className={styles.work_experience_card}>
						<div className={styles.header}>
							<Image src={data.logo} className={styles.logo} width={64} height={64} alt={`${data.name} logo`} />
							<div>
								<h3 className={styles.work_name}>{data.name}</h3>
								<p className={styles.work_title}>{data.jobTitle}</p>
								<small className={styles.work_date}>
									{data.startDate.toString()} - {data.endDate.toString()}
								</small>
							</div>
						</div>
						<p className={styles.description}>{data.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}
