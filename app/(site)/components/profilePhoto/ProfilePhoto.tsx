import Image from 'next/image';
import styles from './ProfilePhoto.module.css';

interface ProfilePhotoProps {
	image: string;
	alt: string;
	size?: number;
}

const ProfilePhoto = ({ image, alt, size }: ProfilePhotoProps) => {
	return (
		<Image
			className={styles.profilePhoto}
			src={image}
			width={size ? size : 200}
			height={size ? size : 200}
			quality={100}
			alt={alt}
		/>
	);
};

export default ProfilePhoto;
