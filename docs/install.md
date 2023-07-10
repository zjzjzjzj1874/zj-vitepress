
## 使用vitepress搭建自己的博客

[中文官方网站](https://vitejs.cn/vitepress/)

[官方网站](https://vitepress.dev/)

[参考文档](https://vitepress.dev/reference/site-config)
1. 确保自己环境中有Node和npm(yarn也行)
2. 初始化项目
```shell
npx create-vitepress my-blog
# 或者使用 yarn：
# yarn create vitepress my-blog
```
3. 进入新生成的文件夹 
```shell
cd my-blog
```
4. 在文件夹下安装依赖
```shell
npm install # yarn install # 也是可以的
```
5. 启动本地开发服务器 
```shell
npm run dev   
```
然后访问http://localhost:3000

6. 接下来，你可以根据需要进行进一步的自定义和编辑，包括样式、布局、主题、插件等
7. 构建静态站点:
```shell
npm run build
```
将生成的dist目录放到你个人博客即可.

9. 您还可以集成CI/CD流程到项目中.后续将会慢慢介绍.