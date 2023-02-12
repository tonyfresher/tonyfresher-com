import type {Experience} from 'types';

export interface ExperienceProps<T extends Experience> {
    experience: T;
}
