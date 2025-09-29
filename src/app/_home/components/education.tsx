import Link from '@/components/link'

const strings = {
    title: 'Education',
    items: [
        {
            institution: 'Ural Federal University',
            program: 'BSc Mathematics and Computer Science',
            period: '2015-2019'
        }
    ]
}

export default function Education() {
    return (
        <div className="flex flex-col gap-10">
            <h2>{strings.title}</h2>
            {strings.items.map(({ institution, program, period }) => (
                <span key={institution}>
                    <div className={`z-10 col-start-1 row-start-1 flex flex-col`}>
                        <h3 className="m-0 font-semibold">{institution}</h3>
                        <span className="mt-2">{program}</span>
                        <span className="text-muted-foreground mt-4">{period}</span>
                    </div>
                </span>
            ))}
        </div>
    )
}
