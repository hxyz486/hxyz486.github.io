# 郝杏芸的博客

这是一个 GitHub Pages 静态博客模板，风格参考 Argon 美化博客布局。

## 本地预览

直接双击 `index.html` 即可预览。

也可以在当前目录运行：

```powershell
python -m http.server 8080
```

然后访问 `http://localhost:8080`。

## 发布到 GitHub Pages

目标仓库：

```text
https://github.com/haoxingyun-cppuisa/haoxingyun-cppuisa.github.io
```

发布步骤：

1. 把本目录内的文件上传到仓库根目录
2. 打开仓库 `Settings -> Pages`
3. Source 选择 `Deploy from a branch`
4. Branch 选择 `main` / `/root`

几分钟后访问博客：

```text
https://haoxingyun-cppuisa.github.io/
```

站点域名已经写入 `index.html` 的 `canonical` 和 `og:url`。

## 修改内容

- 头像：替换 `assets/avatar.jpg`
- 站点标题：修改 `index.html` 中的 `郝杏芸的博客`
- 文章列表：编辑 `index.html` 里的 `.post-card`
- 配色与布局：编辑 `styles.css`
