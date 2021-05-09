import NextDocument, {
    DocumentContext,
    DocumentProps,
    Html,
    Head,
    Main,
    NextScript
} from 'next/document';

export default class Document extends NextDocument<DocumentProps> {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await NextDocument.getInitialProps(ctx);
        return {...initialProps};
    }

    render() {
        return (
            <Html lang="ru">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
