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

## 自动部署到宝塔

仓库包含 `.github/workflows/deploy.yml`。启用后，每次推送 `main` 都会构建并通过 SSH 上传 `dist/index.html`。

在 GitHub 仓库的 **Settings → Secrets and variables → Actions** 中添加：

- `SERVER_HOST`：服务器公网 IP
- `SERVER_PORT`：SSH 端口，通常是 `22`
- `SERVER_USER`：部署用户
- `SERVER_SSH_KEY`：部署用户私钥全文
- `DEPLOY_PATH`：例如 `/www/wwwroot/tamgur-home`

然后添加 Repository variable：

- `DEPLOY_ENABLED`：设置为 `true`

建议在 NewAPI 对应站点的 Nginx 配置中将 `/home/` 映射到 `/www/wwwroot/tamgur-home/`，并把 NewAPI 自定义首页地址设置为：

```text
https://api.tamgur.tech/home/index.html
```

## GitHub 自动部署到宝塔

项目包含 `.github/workflows/deploy-baota.yml`。每次代码 push 到 GitHub 的
`main` 分支后，GitHub Actions 会自动构建项目，并把单文件页面上传为
宝塔站点目录中的 `homepage.html`。

### 1. 在宝塔中准备站点

假设站点域名是 `home.example.com`，站点根目录是：

```text
/www/wwwroot/home.example.com
```

在宝塔的“网站”中创建该站点并申请 SSL 证书。部署完成后，页面地址为：

```text
https://home.example.com/homepage.html
```

将这个完整地址填入 NewAPI 的自定义首页配置。

### 2. 为 GitHub 创建服务器 SSH 密钥

在本地终端生成一套专用于部署的密钥：

```bash
ssh-keygen -t ed25519 -C "github-actions-tamgurpage" -f ~/.ssh/tamgurpage_deploy
```

命令询问私钥密码时直接按两次回车，不要为这套自动部署密钥设置密码。

把公钥安装到宝塔服务器。将下面的 `root` 和服务器地址替换成实际值：

```bash
ssh-copy-id -i ~/.ssh/tamgurpage_deploy.pub -p 22 root@服务器IP
```

先确认密钥能够正常登录：

```bash
ssh -i ~/.ssh/tamgurpage_deploy -p 22 root@服务器IP
```

### 3. 配置 GitHub Secrets

进入 GitHub 仓库：

```text
Settings → Secrets and variables → Actions → New repository secret
```

添加以下 5 个 Secrets：

| Secret | 示例值 | 说明 |
| --- | --- | --- |
| `BT_HOST` | `1.2.3.4` | 宝塔服务器公网 IP 或域名 |
| `BT_PORT` | `22` | SSH 端口，不是宝塔面板端口 |
| `BT_USER` | `root` | SSH 登录用户 |
| `BT_DEPLOY_PATH` | `/www/wwwroot/home.example.com` | 宝塔站点根目录 |
| `BT_SSH_KEY` | `-----BEGIN OPENSSH PRIVATE KEY-----...` | `~/.ssh/tamgurpage_deploy` 的完整内容 |

查看私钥内容：

```bash
cat ~/.ssh/tamgurpage_deploy
```

私钥只能放入 GitHub Secret，不要提交到仓库。

### 4. 触发部署

提交代码并 push：

```bash
git add .
git commit -m "Configure automatic Baota deployment"
git push origin main
```

在 GitHub 仓库的 `Actions` 页面可以查看部署进度。以后每次 push 到
`main`，`homepage.html` 都会自动更新。也可以在 Actions 页面选择
`Deploy homepage to Baota`，点击 `Run workflow` 手动部署。

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
