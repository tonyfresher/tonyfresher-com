import posthog from 'posthog-js'

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: 'https://an.tonyfresher.com',
    ui_host: 'https://us.i.posthog.com',
    defaults: '2026-01-30',
    person_profiles: 'always',
    debug: process.env.NODE_ENV === 'development'
})
