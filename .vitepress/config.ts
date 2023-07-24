import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "备考手册",
  description: "个人的公务员考试备考手册，包括各科目知识点。",
  themeConfig: {
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
