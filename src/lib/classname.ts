import {cn as bemClassName, ClassNameFormatter} from '@bem-react/classname';

export function cn(
    blockName: string,
    styles: {[key: string]: string}
): ClassNameFormatter {
    const blockClassName = bemClassName(blockName);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return (...params: Parameters<ClassNameFormatter>) => {
        return blockClassName(...params)
            .split(' ')
            .map(className => styles[className])
            .join(' ');
    };
}
