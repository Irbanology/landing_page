export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/admin/',
            disallow: '/test/',
        },
        sitemap: 'https://wibeit.co/sitemap.xml',
    }
}