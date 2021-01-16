import {QueryKey, useQuery, UseQueryResult} from 'react-query';

import {getPost} from '../utils/content';
import {Post} from '../types';

function getPostKey(slug: string): QueryKey {
    return ['post', slug];
}

export function usePost(slug: string): UseQueryResult<Post> {
    return useQuery(getPostKey(slug), async () => getPost(slug));
}
