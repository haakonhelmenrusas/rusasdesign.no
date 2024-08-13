import { PortableText } from "@portabletext/react";

import WorkExperience from "@/app/(site)/components/workExperience/WorkExperience";
import { getProfile } from "@/sanity/query";
import type { ProfileType } from "@/types";
import ProfilePhoto from "../components/profilePhoto/ProfilePhoto";
import Skill from "../components/skill/Skill";
import styles from "./About.module.css";

export default async function About() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main>
      {profile &&
        profile.map((profile) => (
          <div key={profile._id}>
            <section>
              <div className={styles.header}>
                <ProfilePhoto
                  image={profile.profileImage.image}
                  alt={profile.profileImage.alt}
                />
                <h1 className={styles.title}>
                  Hei! Jeg heter {profile.fullName}.
                </h1>
              </div>
              <PortableText value={profile.fullBio} />
            </section>
            <section>
              <h2>Arbeidserfaring</h2>
              <p>
                Jeg har brukt noen år på å utvikle mine ferdigheter. Her er noen
                av dem, i tilfeldig rekkefølge.
              </p>
              {profile.skills.map((skill, id) => (
                <Skill key={id} skill={skill} />
              ))}
            </section>
          </div>
        ))}
      <WorkExperience />
    </main>
  );
}
