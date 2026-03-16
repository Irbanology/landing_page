export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin/', '/test/'],
        },
        sitemap: 'https://wibeit.co/sitemap.xml',
    }
}