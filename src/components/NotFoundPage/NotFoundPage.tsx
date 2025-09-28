import Page from 'components/Page';
import PageMenu from 'components/PageMenu';

const strings = {
    text: '404 — Page not found'
};

export default function NotFoundPage() {
    return (
        <Page>
            <PageMenu />
            <h1 className="col-[2/-2] m-0 text-[length:var(--h1-font-size)] leading-[var(--header-line-height)] text-[color:var(--color-content-secondary)]">
                {strings.text}
            </h1>
        </Page>
    );
}
