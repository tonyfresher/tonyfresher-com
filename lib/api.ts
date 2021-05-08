import fs from 'fs';

export function getAllWritingIds(): string[] {
    return fs.readdirSync('content/writing');
}
