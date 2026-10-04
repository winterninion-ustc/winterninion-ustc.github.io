# 丁杰瑞的个人网站

这是可直接发布到 GitHub Pages 的静态网站，包含个人介绍、研究兴趣、求学轨迹、荣誉、资源分享和个人爱好。

## 发布步骤

1. 登录 GitHub，创建一个名为 `你的用户名.github.io` 的公开（Public）仓库。请把“你的用户名”替换为实际 GitHub 用户名，并使用小写字母。
2. 解压网站压缩包，在仓库中选择 **Add file → Upload files**。
3. 上传解压后的所有文件及 `resources` 文件夹。`index.html` 必须直接位于仓库最外层；不要只上传 ZIP，也不要再包一层文件夹。将修改提交到 `main` 分支。
4. 打开 **Settings → Pages**。在 **Build and deployment** 中，选择 **Deploy from a branch**，分支选 `main`，目录选 `/(root)`，然后保存。
5. 等待发布完成，在同一页面点击 **Visit site**。访问地址为 `https://你的用户名.github.io/`。

GitHub Free 使用公开仓库发布 Pages。发布后，任何人都可以访问网站及资源分享中的 PDF。

## 文件说明

- `index.html`：网页内容
- `styles.css`：页面样式
- `script.js`：导航、研究方向切换及动画
- `quantum-concept.png`：量子主题概念图
- `resources/atomic-physics-cover.png`：译稿封面
- `resources/atomic-physics-zh.pdf`：《原子物理学》中文译稿
- `.nojekyll`：让 GitHub Pages 直接发布静态文件

之后更新网页或增加资源时，将相应文件提交到 `main` 分支即可重新发布。页面中的资源路径均为相对路径，也适用于 GitHub 项目网站。

## 官方帮助

- [创建 GitHub Pages 网站](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [配置发布来源](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [上传文件](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
