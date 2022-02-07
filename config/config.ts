// import { menus } from './menus';

// const packages = require('../packages/hooks/package.json');

export default {
  // ssr: {},
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  mode: 'doc',
  title: 'ahooks 3.0',
  favicon: '/simple-logo.svg',
  logo: '/logo.svg',
  dynamicImport: {},
  manifest: {},
  hash: true,
  resolve: {
    includes: ['docs', 'packages/hooks/src',],
  },
  links: [
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/@alifd/theme-design-pro@0.6.2/dist/next-noreset.min.css',
    },
    { rel: 'stylesheet', href: '/style.css' },
  ],
  navs: {
    'zh-CN': [
      { title: '指南', path: '/zh-CN/guide' },
      { title: 'Hooks', path: '/zh-CN/hooks' },
      {
        title: '历史版本',
        children: [
          {
            title: 'v2.x',
            path: 'https://ahooks-v2.surge.sh/',
          },
          {
            title: 'v1.x',
            path: 'http://hooks.umijs.org/',
          },
        ],
      },
      { title: '更新日志', path: 'https://github.com/alibaba/hooks/releases' },
      { title: '国内镜像', path: 'https://ahooks.gitee.io/zh-CN' },
      { title: 'GitHub', path: 'https://github.com/alibaba/hooks' },
    ],
    'en-US': [
      { title: 'Guide', path: '/guide' },
      { title: 'Hooks', path: '/hooks' },
      {
        title: 'Legacy Versions',
        children: [
          {
            title: 'v2.x',
            path: 'https://ahooks-v2.surge.sh/',
          },
          {
            title: 'v1.x',
            path: 'http://hooks.umijs.org/',
          },
        ],
      },
      { title: 'Releases', path: 'https://github.com/alibaba/hooks/releases' },
      { title: '国内镜像', path: 'https://ahooks.gitee.io/zh-CN' },
      { title: 'GitHub', path: 'https://github.com/alibaba/hooks' },
    ],
  },
  menus: {
    '/': [
      {
        title: '主页',
        path: 'index',
      },
    ],  
    // '/zh-CN': [
    //   {
    //     title: '首页',
    //     path: 'index',
    //   },
    // ],
    // '/guide': [
    //   {
    //     title: 'Intro',
    //     path: '/guide',
    //   },
    //   {
    //     title: 'v2 to v3',
    //     path: '/guide/upgrade',
    //   },
    //   {
    //     title: 'Hooks of dom specification',
    //     path: '/guide/dom',
    //   },
    //   {
    //     title: 'Blog',
    //     children: [
    //       {
    //         title: 'ahooks function specification',
    //         path: '/guide/blog/function',
    //       },
    //       {
    //         title: 'React Hooks & SSR',
    //         path: '/guide/blog/ssr',
    //       },
    //       {
    //         title: 'React Hooks & react-refresh（HMR）',
    //         path: '/guide/blog/hmr',
    //       },
    //       {
    //         title: 'React Hooks & strict mode',
    //         path: '/guide/blog/strict',
    //       },
    //     ],
    //   },
    // ],
    // '/zh-CN/guide': [
    //   {
    //     title: '介绍',
    //     path: '/guide',
    //   },
    //   {
    //     title: 'v2 to v3',
    //     path: '/guide/upgrade',
    //   },
    //   {
    //     title: 'DOM 类 Hooks 使用规范',
    //     path: '/guide/dom',
    //   },
    //   {
    //     title: 'Blog',
    //     children: [
    //       {
    //         title: 'ahooks 输入输出函数处理规范',
    //         path: '/zh-CN/guide/blog/function',
    //       },
    //       {
    //         title: 'React Hooks & SSR',
    //         path: '/zh-CN/guide/blog/ssr',
    //       },
    //       {
    //         title: 'React Hooks & react-refresh（HMR）',
    //         path: '/zh-CN/guide/blog/hmr',
    //       },
    //       {
    //         title: 'React Hooks & strict mode',
    //         path: '/zh-CN/guide/blog/strict',
    //       },
    //     ],
    //   },
    // ],
    // '/hooks': menus,
    // '/zh-CN/hooks': menus,
  },
  scripts:[]
};
