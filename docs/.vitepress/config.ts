import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
// @ts-ignore
export default defineConfig({
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '关于', link: '/about/' },
            { text: '文章',
                items: [
                    { text: '技术', link: '/articles/tech/' },
                    { text: '生活', link: '/articles/life/' }
                ]
            },
            { text: 'GitHub', link: 'https://github.com/zjzjzjzj1874' }
        ],
        sidebar: [ // see more at:https://vitepress.dev/reference/default-theme-sidebar
            {
                text: '博客',
                items: [
                    { text: '如何安装vitepress', link: '/install' },
                ]
            }
        ]
    }
})
