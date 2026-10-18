# 杨博 · 南京信息工程大学人工智能学院个人主页

本仓库保存教师个人主页，包含中英文切换、浅色／深色主题、代表论文、科研成果、招生说明与学生去向。

网站启用 GitHub Pages 后，学生直接访问固定网址即可，无需下载文件，也无需登录 GitHub。

## 日常更新

请先看 [更新指南](UPDATE-GUIDE.md)。可以直接在 GitHub 网页上修改文字并保存；发布来源为 `main` 分支根目录时，保存到 `main` 后网站会自动重新发布。

| 想更新的内容 | 对应文件 |
| --- | --- |
| 简介、地址、论文、专利、项目、竞赛、学生去向 | [data.js](data.js) |
| 中文招生说明、研究方向、科研平台 | [index.html](index.html) |
| 英文正文、英文项目与竞赛、英文学校名称 | [i18n.js](i18n.js) |
| 人物照片、论文架构图、平台照片 | [assets](assets) |

修改中文信息后，请按需要同步英文内容。论文列表的标题、作者、年份、图片和链接由两种语言共用。

## 首次启用 GitHub Pages

仓库所有者进入 **Settings → Pages**，在 **Build and deployment** 中选择 **Deploy from a branch**，分支选 **main**，目录选 **/(root)**，保存。

以 Pages 设置页面显示的实际网址为准；在首次发布成功前，网址可能暂时无法访问。

无需安装软件或额外构建，网站入口是根目录的 `index.html`。`.nojekyll` 文件用于按原样发布静态文件，请保留。

部署文件不包含本地研究笔记、桌面 PDF、演示素材或压缩包。

## 维护与归属

账号所有者可以通过仓库 **Settings → Collaborators** 邀请老师参与维护；以后也可以将仓库转移到老师自己的账号。页面不存在访客可写入的后台，只有有仓库写权限的维护者能更新正式内容。

官方说明：[GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)、[发布来源设置](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)、[在线编辑文件](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files)。
