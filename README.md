# Contentful CMS

<div align="center">
  <img src="./public/screenshot.png" alt="demo screenshot">
  <a href="https://contentful-cms-iota.vercel.app/">Demo</a>
</div>

## SVG Resource

[Undraw](https://undraw.co/)

## Headless CMS

> Content management system that does not have built-in frontend.

Headless CMS 是一种仅用于后端的内容管理系统，为内容创建者提供创建和管理内容的直观界面，而前端展示层则由单独的系统或平台处理。这种方法具有更大的灵活性和可扩展性，因为内容可以轻松地分发到多个渠道和设备，而不会受到特定前端系统的限制。

Headless CMS 将数据存储在云端，用图形化界面（GUI）管理数据，可以快速重用内容（content）并在不同的平台或设备中共享。

### Headless CMS Platform

- [Contentful](https://www.contentful.com/)
- [Strapi](https://strapi.io/)
- [Ghost](https://ghost.org/)
- ...

### Contentful

1. Sign Up Contentful
1. Create Data Structure (Content Type)
2. Create Content

#### Contentful API
   
为了使用 Contentful API，在 settings 下点击 API Key，找到2个值
  - Space ID
  - Access Token

#### API Docs

1. [Contentful and JavaScript tutorial](https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/?utm_source=docs-sidebar&utm_medium=webapp&utm_content=Contentful%20and%20JavaScript%20tutorial) -[View JavaScript SDK on GitHub](https://github.com/contentful/contentful.js)
2. [Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/) - Entries

#### Contentfull SDK

1. Install
    ```sh
    npm install contentful
    ```
2. Get Entries
    ```jsx
    import { createClient } from 'contentful';

    const client = createClient({
      space: 'qz00uzgg3leh',
      environment: 'master', // defaults to 'master' if not set
      accessToken: import.meta.env.VITE_API_KEY,
    });

    client
      .getEntries({ content_type: 'projects' })
      .then((response) => console.log(response.items))
      .catch(console.error);
    ```

## Webhooks

> Allowing us to dynamically build our application on {Netlify} every time we make come changes to our data in Contentful

1. 在已经部署到 Netlify 或 Vercel 的网站设置中，找到 Build Hooks / Deploy Hooks
2. 创建 Build Hooks / Deploy Hooks 会得到一个 Unique URL，复制
3. 在 Contentful 的 settings 中找到 Webhooks，把刚刚复制的链接填入 URL