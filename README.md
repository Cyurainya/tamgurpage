# icon NewAPI Homepage

一个使用 Vite、React 和 TypeScript 构建的动态 NewAPI 首页。生产构建会将脚本、样式和 Logo 全部内嵌到单个 HTML 文件。

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

最终文件为 `dist/index.html`。将它部署到 HTTPS 地址，然后把该地址配置为 NewAPI 自定义首页。

## 修改链接

所有导航和按钮地址都集中在 `src/config.ts`：

```ts
links: {
  models: '/pricing',
  pricing: '/pricing',
  docs: '/docs',
  status: '/status',
  console: '/console',
  login: '/login',
}
```

## 主题接入

页面不提供独立的主题按钮，而是跟随 NewAPI 导航栏。同步顺序为：

1. 同源 NewAPI 父页面的 `.light` / `.dark` 类
2. 宿主页面发送的 `postMessage`
3. URL 参数：`?theme=light` 或 `?theme=dark`
4. 系统 `prefers-color-scheme`

跨域宿主可以发送：

```js
iframe.contentWindow.postMessage(
  { type: 'newapi-theme', theme: 'dark' },
  'https://your-homepage.example.com',
);
```

页面加载后还会向父页面发送 `{ type: 'icon-theme-ready' }`，宿主可在收到消息后返回当前主题。

## 语言接入

支持简体中文、English、Français、Русский、日本語和 Tiếng Việt。页面不显示独立语言菜单，而是读取 NewAPI 使用的 `i18nextLng`。

语言按同源 NewAPI 的 `localStorage.i18nextLng`、`postMessage`、URL、浏览器语言的顺序解析。URL 可使用：

```text
?lang=zh-CN
?lang=en
?lang=fr
?lang=ru
?lang=ja
?lang=vi
```

跨域宿主可以发送：

```js
iframe.contentWindow.postMessage(
  { type: 'newapi-language', language: 'ja' },
  'https://your-homepage.example.com',
);
```

页面加载后会向父页面发送 `{ type: 'icon-locale-ready' }`，宿主可据此返回当前语言。

> NewAPI 使用 iframe 加载外部首页。若首页与 NewAPI 不同域，浏览器会禁止读取父页面的主题和语言；此时需要 NewAPI 通过 `postMessage` 传递状态，或把首页部署在 NewAPI 同一域名下。
