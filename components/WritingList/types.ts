import {Writing} from 'types';

export type WritingPreviewProps = Pick<
    Writing,
    'id' | 'title' | 'description' | 'date' | 'image'
>;

export interface WritingListProps {
    items: Writing[];
}
