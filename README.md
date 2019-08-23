# 一个微信小程序

> 河南博物馆

## 目录结构


```
miniprograme
|- components // 可复用组件
|- pages // 由页面分开各自组件
|  |- index (首页)
|  |- cangpin (藏品阁)
|     |- cangpin.js //基本逻辑
|     |- cangpin.json //配置文件
|     |- cangpin.wxml //模板
|     |- cangpin.wxss //样式
|  |- jingcui (藏品详细)
|  |- zhanlan (展览)
|  |- chuangzuo (创作台)
|  |- journey (制作之旅)
|  |- share (分享)
|  |- images (静态资源暂时存储)
|- utils // 脚本
|- app.js //全局状态管理
|- app.json //app基本配置
|- app.wxss //全局样式
```

## Pages list

+ [x] 藏品阁&藏品详细 ( over )
+ [x] 展览 ( 待测... )
+ [ ] 创作台 ( await )


## Todo list

+ [x] 正在展览
+ [x] 展览回顾
+ [x] 优化藏品阁
+ [x] 优化choose-bar样式
+ [ ] 创作台 nav-bar 替换
+ [ ] 创作台 base64 替换