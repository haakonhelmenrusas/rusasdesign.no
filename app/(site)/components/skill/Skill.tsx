interface SkillProps {
	skill: string;
}

const Skill = ({ skill }: SkillProps) => {
	return <div>{skill}</div>;
};

export default Skill;
