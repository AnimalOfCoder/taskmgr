# 项目目录

├─e2e
└─src
    ├─app
    │  ├─core 核心模块（仅加载一次的模块。可以用于装载一些图标字体等）
    │  │  ├─footer  
    │  │  ├─header 
    │  │  ├─sliderbar 侧边栏菜单组件
    │  │  └─core.module.ts 
    │  ├─shared 共享模块（模块导入导出）
    │  ├─login 登录模块
    │  │  ├─login 登录组件
    │  │  ├─register 注册组件
    │  │  ├─login-routing.module 登录模块路由文件
    │  │  └─login.module.ts 
    │  ├─project 项目模块
    │  │  ├─invite 邀请组员组件
    │  │  ├─new-project 新建项目（弹窗）组件
    │  │  ├─project-list 项目list组件
    │  │  ├─project-item 项目item组件
    │  │  ├─project-routing.module 项目模块路由文件
    │  │  └─project.module.ts
    │  ├─task 任务模块
    │  │  ├─task-header 任务列表头部组件
    │  │  ├─task-home  任务主页
    │  │  ├─task-list 任务list
    │  │  ├─task-item 任务item组件
    │  │  ├─task-routing.module   
    │  │  └─task.module.ts
    │  ├─utils 工具
    │  │  └─svg.utils.ts SVG图片加载
    ├─assets
    └─environments
