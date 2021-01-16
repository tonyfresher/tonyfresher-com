import fs from 'fs';

export function getAllPostIds(): string[] {
    return fs.readdirSync('content/posts');
}
