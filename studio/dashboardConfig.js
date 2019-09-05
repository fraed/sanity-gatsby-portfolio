export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d70d0e3e8f19d656aa09a0f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-s93qrfmr',
                  apiId: '5b267d9a-37ab-4a9d-9297-f996e2bcb182'
                },
                {
                  buildHookId: '5d70d0e32f783ee26347c1ab',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-uryuydcs',
                  apiId: 'a69ec124-1a0e-400f-9167-5b25dcea16a7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fraed/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-uryuydcs.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
