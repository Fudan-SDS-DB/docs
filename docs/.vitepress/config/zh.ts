import { defineConfig, type DefaultTheme } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh-CN',
  description: '',

  themeConfig: {
    nav: nav(),

    sidebar: sidebarGuide(),

    editLink: {
      pattern: 'https://github.com/Fudan-SDS-DB/docs',
      text: '在 GitHub 上编辑此页面'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    // {
    //   text: '关于我们',
    //   link: '/team',
    //   activeMatch: '/team'
    // }
  ]
}

function sidebarGuide(): DefaultTheme.Sidebar {
  return [
    { text: "前言", link: "/introduction"},
    {
      text: "开发工具",
      collapsible: true,
      collapsed: false,
      items: [
        { text: "MySQL", link: "/tools/mysql"},
        { text: "VSCode", link: "/tools/vscode"},
        { text: "Git & GitHub", link: "/tools/git-and-github" }
      ],
    },
    {
      text: "项目示例",
      collapsible: true,
      collapsed: false,
      items: [
        { text: "框架概览", link: "/example/overview"},
        { text: "项目起步", link: "/example/initialization"},
        { text: "数据库配置", link: "/example/setting"},
      ]
    },
    { text: "注意事项", link: "/caution" },
  ]
}
