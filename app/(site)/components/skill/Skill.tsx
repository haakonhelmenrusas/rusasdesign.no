import styles from './Skill.module.css';

interface SkillProps {
	skill: string;
}

const Skill = ({ skill }: SkillProps) => {
	return <div className={styles.container}>{skill}</div>;
};

export default Skill;
