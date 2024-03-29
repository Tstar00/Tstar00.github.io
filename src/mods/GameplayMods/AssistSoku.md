---
title: AssistSoku援助Mod

# 标题
icon: circle-info
# 图标
order: 10
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2023-08-01
#文章编辑日期
---

::: warning
**注意，此 mod 需要双方一起使用且版本相同**

**同时，把 giuroll 禁用，giuroll 的回滚会使援助mod不同步**

**也不能使用 SokuRoll**
:::

::: info
**这是一个让你在原本游戏的基础上，可以选择援助角色并释放援助招数的Mod，没有修改游戏招数数据**

【游玩视频】  https://space.bilibili.com/357511007/channel/collectiondetail?sid=382168

*很好玩（确信）*
:::

![](https://bu.dusays.com/2023/08/24/64e6ffe880994.gif =285x)

![](https://bu.dusays.com/2023/08/24/64e6fffd49511.gif)


::: info 下载与安装援助Mod

**[**可以在我的网盘或mod群的群文件内找到 “Mod 先行版” 这个文件夹，就在里面了**](/about/)**
:::

![下载资源：mod先行版](https://bu.dusays.com/2024/01/21/65acdf98aee92.webp =400x)

::: info 安装mod：
使用110A版本则（新则），
把 AssistSoku 文件夹放到modules文件夹内
在 SWRStoys.ini 配置文件内添加以下语句，**放到最底端**
`AssistSoku=Modules/AssistSoku/AssistSoku.dll`
:::

::: info 援助Mod使用方法
确保双方使用同版本援助mod，选人界面先按 **F8** 来选择援助（会有选择音效），然后再去正常选人（按Z）
游戏内按 22/214/236/623/624(SC) + A或D 来召唤援助，在防御硬直、受击硬直、倒地(受身)时无法召唤
召唤后有一定的cd时间，援助角色可受到攻击(1 HP)，因被攻击而消失，会有额外15秒cd，每回合开始时cd会刷新
每轮开始时会有援助等级变化：一灯一级，二灯二级，三灯满级
:::

::: warning
rep 里不能使用 mod，所以保存 rep 没用，只能直接现场边玩边录屏
:::

::: info 编辑，DIY援助招数
在 `AssistSoku\assets` 文件夹里随便打开一个文件，有样学样，自己折腾下看。
动作ID可在 FramedataEditor 编辑器内查询，游戏内按 F6 也可以查询动作ID。
现在没人来群里玩我就暂时不写详细

当然，俩人文件要一样才能正常联机玩
:::

