import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "备考手册",
  description: "个人的公务员考试备考手册，包括各科目知识点。",
  lang: 'zh-CN',
  // 存储 Markdown 页面的目录，相对于项目根目录
  srcDir: 'src',
  // 网站构建的输出位置
  outDir: 'public',
  // 静态文件的目录
  assetsDir: 'static',
  // 是否启用深色模式
  appearance: false,
  // 是否显示上次更新时间
  lastUpdated: true,
  themeConfig: {
    // 本地搜索
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '行测', link: '/行测/简述' },
      { text: '申论', link: '/申论/简述' }
    ],
    sidebar: {
      '/行测/': [
        { text: '简述', link: '/行测/简述' },
        {
          text: '资料分析',
          items: [
            { text: '术语', link: '/行测/资料分析/术语' },
            { text: '增长量', link: '/行测/资料分析/增长量' },
            { text: '现期量', link: '/行测/资料分析/现期量' },
            { text: '基期量', link: '/行测/资料分析/基期量' },
          ]
        },
        {
          text: '判断推理',
          items: [
            { text: '图形判断', link: '/行测/判断推理/图形判断' },
            { text: '逻辑判断', link: '/行测/判断推理/逻辑判断' },
          ]
        }
      ],
      '/申论/': [
        { text: '简述', link: '/申论/简述' },
        { text: '读题', link: '/申论/读题' },
      ]
    }
  }
})
