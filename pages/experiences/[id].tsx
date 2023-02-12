import type {GetStaticPaths, GetStaticProps} from 'next';
import {NextSeo} from 'next-seo';

import type {Experience} from 'types';

import {getExperienceIds} from 'lib/api';
import {getExperience} from 'lib/content';

import ExperienceComponent from 'components/Experience';

interface ExperiencePageProps {
    experience: Experience;
}

export default function ExperiencePage({experience}: ExperiencePageProps) {
    return (
        <>
            <NextSeo
                title={experience.company}
                openGraph={{
                    title: experience.company,
                    site_name: 'Anton Fresher',
                    type: 'article',
                    locale: 'en_US'
                }}
            />
            <ExperienceComponent experience={experience} />
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const experienceIds = getExperienceIds();

    return {
        paths: experienceIds.map(id => ({params: {id}})),
        fallback: false
    };
};

export const getStaticProps: GetStaticProps<ExperiencePageProps> = async ({
    params: {id}
}) => {
    const experience = await getExperience(id as string);

    return {
        revalidate: 60 * 60,
        props: {experience}
    };
};
