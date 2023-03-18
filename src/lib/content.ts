const WORD_REGEXP = /[a-zа-яё]+/gi;
const WORDS_PER_MINUTE = 200;

export function computeReadTime(content: string) {
    const wordCount = content.match(WORD_REGEXP)?.length ?? 0;

    return Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
}
