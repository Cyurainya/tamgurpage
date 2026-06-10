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

页面提供浅色、深色、自动三种模式。自动模式按以下优先级解析：

1. URL 参数：`?theme=light`、`?theme=dark` 或 `?theme=auto`
2. 宿主页面发送的 `postMessage`
3. 同源父页面的 `data-theme`、`data-color-mode`、`.dark` 或 `color-scheme`
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

支持简体中文、English、Français、Русский、日本語和 Tiếng Việt。

语言按 URL、`postMessage`、同源父页面、本页保存值、浏览器语言的顺序解析。URL 可使用：

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
