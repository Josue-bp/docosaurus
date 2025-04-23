import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docusaurus/blog',
    component: ComponentCreator('/docusaurus/blog', 'bf3'),
    exact: true
  },
  {
    path: '/docusaurus/blog/archive',
    component: ComponentCreator('/docusaurus/blog/archive', '33c'),
    exact: true
  },
  {
    path: '/docusaurus/blog/authors',
    component: ComponentCreator('/docusaurus/blog/authors', 'd06'),
    exact: true
  },
  {
    path: '/docusaurus/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/docusaurus/blog/authors/all-sebastien-lorber-articles', '834'),
    exact: true
  },
  {
    path: '/docusaurus/blog/authors/yangshun',
    component: ComponentCreator('/docusaurus/blog/authors/yangshun', '00d'),
    exact: true
  },
  {
    path: '/docusaurus/blog/first-blog-post',
    component: ComponentCreator('/docusaurus/blog/first-blog-post', '73e'),
    exact: true
  },
  {
    path: '/docusaurus/blog/long-blog-post',
    component: ComponentCreator('/docusaurus/blog/long-blog-post', '05f'),
    exact: true
  },
  {
    path: '/docusaurus/blog/mdx-blog-post',
    component: ComponentCreator('/docusaurus/blog/mdx-blog-post', '5c8'),
    exact: true
  },
  {
    path: '/docusaurus/blog/tags',
    component: ComponentCreator('/docusaurus/blog/tags', 'd3e'),
    exact: true
  },
  {
    path: '/docusaurus/blog/tags/docusaurus',
    component: ComponentCreator('/docusaurus/blog/tags/docusaurus', '7b8'),
    exact: true
  },
  {
    path: '/docusaurus/blog/tags/facebook',
    component: ComponentCreator('/docusaurus/blog/tags/facebook', '184'),
    exact: true
  },
  {
    path: '/docusaurus/blog/tags/hello',
    component: ComponentCreator('/docusaurus/blog/tags/hello', 'a4f'),
    exact: true
  },
  {
    path: '/docusaurus/blog/tags/hola',
    component: ComponentCreator('/docusaurus/blog/tags/hola', '51d'),
    exact: true
  },
  {
    path: '/docusaurus/blog/welcome',
    component: ComponentCreator('/docusaurus/blog/welcome', '522'),
    exact: true
  },
  {
    path: '/docusaurus/docs',
    component: ComponentCreator('/docusaurus/docs', 'a95'),
    routes: [
      {
        path: '/docusaurus/docs',
        component: ComponentCreator('/docusaurus/docs', '9d7'),
        routes: [
          {
            path: '/docusaurus/docs',
            component: ComponentCreator('/docusaurus/docs', 'b89'),
            routes: [
              {
                path: '/docusaurus/docs/devtools',
                component: ComponentCreator('/docusaurus/docs/devtools', '23e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/intro',
                component: ComponentCreator('/docusaurus/docs/intro', '626'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/tutorial-basics/aplicacion',
                component: ComponentCreator('/docusaurus/docs/tutorial-basics/aplicacion', '55e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/tutorial-basics/consola',
                component: ComponentCreator('/docusaurus/docs/tutorial-basics/consola', '9cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/tutorial-basics/elementos',
                component: ComponentCreator('/docusaurus/docs/tutorial-basics/elementos', '206'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/tutorial-basics/fuentes',
                component: ComponentCreator('/docusaurus/docs/tutorial-basics/fuentes', '248'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/tutorial-basics/grabadora',
                component: ComponentCreator('/docusaurus/docs/tutorial-basics/grabadora', 'e56'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/tutorial-basics/lighthouse',
                component: ComponentCreator('/docusaurus/docs/tutorial-basics/lighthouse', 'b47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/tutorial-basics/memoria',
                component: ComponentCreator('/docusaurus/docs/tutorial-basics/memoria', '139'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/tutorial-basics/red',
                component: ComponentCreator('/docusaurus/docs/tutorial-basics/red', 'c83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/tutorial-basics/rendimiento',
                component: ComponentCreator('/docusaurus/docs/tutorial-basics/rendimiento', '89f'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docusaurus/',
    component: ComponentCreator('/docusaurus/', 'c25'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
