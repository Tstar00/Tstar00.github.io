---
title: 练习模式使用教程

# 标题
icon: fa-solid fa-lightbulb
# 图标
order: 2
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2023-12-08
#文章编辑日期
---
## 原版练习模式功能
::: info 原版练习模式功能
- **F1 木桩减 1000 血（满血10000）**
- **F2 卡槽补满**
- **F3 卡槽清空且卡组重置为20张卡**
- **木桩的卡组是你 1P 自己机签的卡组**（原版是 2P 机签的卡组）

::: warning 按F1、F2、F3这些键都没有效果可能是因为Fn Lock问题

部分**笔记本键盘**按热键无效的话，请检查是否有**Fn锁定**

[**百度搜索“Fn锁定”**](https://www.baidu.com/s?ie=UTF-8&wd=Fn%E9%94%81%E5%AE%9A)

一般按 Fn+ESC 或者 Fn+空格 可以解除锁定，或者按 Fn+F2，Fn+F3 来使用热键
:::

## PracticeEX
<!--
::: tip  2023-12-8 已更新 PracticeEX 高级练习模式汉化版

[**【非想天则 Mod】发布 Practice-EX 高级练习模式汉化版**](https://www.bilibili.com/video/BV1894y177s6/)    
**https://www.bilibili.com/video/BV1894y177s6/**
:::
-->
::: info PracticeEX 默认快捷键

**可以看到“快捷键设置”，你可以在那个页面查看和修改各个热键**

- 默认按 `ESC` 或`“机签的暂停键”`调出高级菜单

![默认按 `ESC` 或`“机签的暂停键”`调出高级菜单](https://bu.dusays.com/2024/02/29/65e0a4e773202.png =400x)

- 默认是按 `HOME` 键录制动作
- 按 `INSERT` 键播放动作
- 按 `DELETE` 键新建一个空白动作并切换过去
- 按 `PAGE UP` 键切换下一个动作
- 也可以在`“录制的动作”`这一页中上下选择然后按 `确认键（体术攻击键？默认是 Z）` 来切换到那个动作


![默认按 ESC 可以打开高级练习模式菜单，可以看到“快捷键设置”，你可以在那个页面查看和修改各个热键](https://bu.dusays.com/2024/02/02/65bd0d6f4b3c6.png =450x)

:::
::: tip 给木桩录制动作和播放
一般情况下，右上角没有指示或者是显示黑色背景的“就绪”

黑色“就绪”时，按 **录制动作键（HOME）**，右上角会显示黄色背景的“控制木桩中”，就可以开始控制木桩的角色
黑色“就绪”时，或者切换到想要的动作按**播放动作键（INSERT）**，右上角变为绿色，并且木桩开始执行动作

黄色“控制木桩中”时，再按 **录制动作键（HOME）**，右上角就会变成红色“录制中”并开始记录时间（帧数）和按键；
黄色“控制木桩中”时，按 **播放动作键（INSERT）**，就会取消控制木桩，返回黑色背景“就绪”控制 1P 角色

红色“录制中”时，按 **录制动作键（HOME）**，就会**结束录制并保存覆盖**，返回黑色背景“就绪”控制 1P 角色
红色“录制中”时，按 **播放动作键（INSERT）**，会结束录制**不保存**，并返回【黄色“控制木桩中”】，方便录制失误时重新录制动作

![可以在“录制的动作”这一页中上下选择然后按 确认键（体术攻击键？默认是 Z） 来切换到那个动作](https://bu.dusays.com/2024/02/02/65bd100e0750a.png =450x)
:::

::: warning  BUG 注意
- **注意在录制木桩动作操作2P的时候，不要按F7**
**F5、F6、F7在原本练习模式中就是用来给手柄2P录制重播动作的，F5开始录制 F6结束录制 F7播放动作，所以在用插件录制时按F7会导致无法移动，此时按F5或F6即可恢复**

- ~~`不要设置随机空中受身 Random Airtech，会让游戏崩溃`~~ **练习模式汉化 2.1.1 版本已修复 “空中受身为Random随机时崩溃” 的 BUG，可以正常使用随机受身了**

- **木桩设置一直大跳或者一直做某些动作，而无法进入空闲待机状态时，木桩不会回复血量。**
**`【解决办法：此时可以让木桩在浮空时按大键盘2保存木桩位置，然后再按1恢复位置，可以让木桩落地前处于待机状态而回血】`**

- **偶尔会出现右上角有控制栏但是却调不出菜单的情况，重开游戏**

- **偶尔会出现菜单卡住，然后过一会儿恢复，按的按键一次性全出来的情况，忍受一下**

- **不要既设置防御时DD又设置防御后执行动作（如灵击、4A等），否则会在防御瞬间触发DD又触发动作**
:::

::: info 使用技巧 - 逐帧操作

![默认按 `ESC` 或`“机签的暂停键”`调出高级菜单](https://bu.dusays.com/2024/02/29/65e0a4e773202.png =400x)

**把 开关菜单键(默认 ESC) 改为其他按键，或者按“机签的暂停键”，就可以在 F11 暂停逐帧的同时，调出练习菜单来设置**

比如你用妖梦 AAA 6A打木桩防御，你想让木桩在 6A 之前的那个缝里做动作，而不想在 AAA 这个缝里做动作，两个缝都是 1F 的缝，也没法设置木桩延迟
这个时候就可以先设置木桩不执行任何动作，然后按 AAA，木桩防御第三下A时，按 F11 暂停，然后按自己修改的开关菜单键就可以在暂停时打开菜单，给木桩设置最速升龙或 44 等动作，在关掉菜单，按 F12 下一帧或者按 F11 取消暂停，即可实现目标了

**此外这样做也可以在 ESC 时调出原版菜单，方便快速返回主菜单**
:::

::: tip 使用技巧 - 录制木桩最速执行动作（如升龙等）

**自带的那个 “防御后执行动作” 会有点问题，做用卡和执行动作会慢 1F ；**
**此时我们想要最速，可以使用防御时刷键的方法：**

**就是切换到 “防御时执行动作”，并搭配木桩延迟，可以实现模拟防御后刷键预输入的情景，通过预输入我们就可以让木桩最速了**

[**配套教程视频 传送门： 【非想天则】新则 - 练习模式 EX - 让木桩最速出招的录制技巧**](https://www.bilibili.com/video/BV11p4y177Ng/)

::: tabs

@tab 情况一：最速 5A、用卡 等（需要一帧输入）

操作方法举例 —— 录制 5A 或者 用卡：
1. 按 ==录制热键（默认是 HOME）== 切换到操控木桩模式，此时右上角显示==黄条==
2. 按 ==F11== 暂停，然后按 ==录制热键（默认是 HOME）==，然后右上角显示==红条==
3. 按住 A 或者 `用卡键`，然后在此基础上，按 ==F12== 下一帧
4. 按 ==F11== 取消暂停，不要按键，差不多走到十几帧的时候就可以再按一次 ==录制热键（默认是 HOME）==，就是结束录制并保存
5. 按 ==播放热键== 让它播放一次看看，一般是没问题的
6. 在 ==木桩触发设置菜单==里，选择 ==地面防御后 -> 动作==，Delay 设置为 ==**0F**==

@tab 情况二：最速 623 或 236 等（需要三帧输入）

操作方法举例 —— 录制 623B：
1. 按 ==录制热键（默认是 HOME）== 切换到操控木桩模式，此时右上角显示==黄条==
2. 按 ==F11== 暂停，然后按 ==录制热键（默认是 HOME）==，然后右上角显示==红条==
3. 按住 6，然后在此基础上，按 ==F12== 下一帧
4. 按住 2，然后在此基础上，按 ==F12== 下一帧
5. 按住 3 和 B，然后在此基础上，按 ==F12== 下一帧 `（或者3 和 B 分开，这样需要录四帧，下面的 Delay 值也要调到 4F）`
6. 按 ==F11== 取消暂停，不要按键，差不多走到 十几F 的时候就可以再按一次 ==录制热键（默认是 HOME）==，就是结束并保存录制了
7. 按 ==播放热键== 让它播放一次看看，一般是没问题的
8. 在 ==木桩触发设置菜单==里，选择 ==地面防御后 -> 动作==，Delay 设置为 ==**3F**==


@tab 情况三：最速 DA DB DC 等（需要三帧输入）

操作方法举例 —— 录制 DA(66A)：
1. 按 ==录制热键（默认是 HOME）== 切换到操控木桩模式，此时右上角显示==黄条==
2. 按 ==F11== 暂停，然后按 ==录制热键（默认是 HOME）==，然后右上角显示==红条==
3. 按住 6，然后在此基础上，按 ==F12== 下一帧
4. **什么都不按**，然后在此基础上，按 ==F12== 下一帧
5. 按住 6 和 A，然后在此基础上，按 ==F12== 下一帧
6. 按 ==F11== 取消暂停，不要按键，差不多走到 十几F 的时候就可以再按一次 ==录制热键（默认是 HOME）==，就是结束并保存录制了
7. 按 ==播放热键== 让它播放一次看看，一般是没问题的
8. 在 ==木桩触发设置菜单==里，选择 ==地面防御后 -> 动作==，Delay 设置为 ==**3F**==
:::



## Labtool


![](https://bu.dusays.com/2024/01/21/65aceba6bc3b4.webp =600x)

:::: info Labtool说明
- **注意这些热键都是大键盘上的数字**

1. ==按 1 可恢复双方位置==
==控制 1P 时，按住← ↙ ↓ ↘ → 五个方向的同时，再按 1 ，可以移动至五等份点位置== `注意，角色被某些招式和击飞或演出时复位会出现角色卡住的情况`

1. ==按 2 可记录双方当前位置==，练习连段和微调位置(逐帧走路卡距离)等用非常方便！ `最好不要在角色非静止时保存位置`

1. ==按 4 可将 1P 的必杀恢复为初始默认状态==

1. ==按 5 可启用状态颜色显示（可被康状态红色，擦弹状态透明，硬直状态紫色，无敌状态蓝色）==

::: tip 黑框内信息举例说明

- **没显示Gap说明是无缝或是缝太大**
- `Gap：0F` 表示 1P的两次攻击之间有 1F 缝，非无缝 `（以0为1，以此类推）`
- `P1 is +5F` 表示 1P有利 5F，最速出手7F招中间有2F缝
- `P1 is -6F` 表示 1P不利 6F，可被6F的招确反
- `P1 is [+24F]` 表示 1P大跳取消后有利 24F
:::
::: caution
- **注意不要点窗口右上角的X关掉这个LabTool的程序框，他是和游戏程序共生的<br>你点了X游戏也会被关掉，你不想看它可以点最小化，或者关掉 Labtool 这个 mod**

- **若有时候切回游戏发现莫名卡住操作不了，很有可能是因为 LabTool 的控制台窗口的”属性“里开启了“快速编辑模式”<br>然后你选中了窗口出现光标闪烁会导致窗口不能刷新显示新的文字，游戏就会卡住等待<br><br>解决办法：右键取消光标选中，在标题栏右键-属性-关闭快速编辑模式，即可恢复正常**

:::
::::

## ReplayInputView


![F6 数据含义](https://bu.dusays.com/2024/01/21/65acec0c1ddb1.webp =600x)

::: info 使用说明
**单机和观战下才能使用，网战中不能使用**

- ==F4== 显示 **判定框** 以及 **受身时间条**
- ==F6== 显示帧数、位置、速度等**信息** 
- ==F7== 显示**按键输入**（继续按F7可以调整布局；观战下按键识别有点小瑕疵，需要花点耐心调整）
- ==F11== 暂停，**F12**下一帧（**逐帧操作**） ==（不要在观战时按）==
- ==**绿框是受击判定**==，绿框变蓝色代表此时**可被康**，绿框变空心代表此时有体术无敌状态（不一定是完全无敌，也不是所有无敌状况都会- 空心显示）
- ==**红框是攻击判定**==（某些招数或者弹幕会有判定残留显示或者假判定）
- ==**黄框是占位判定**==（相当于投技的受击判定）
:::
::: tip 如何逐帧输入指令
**在暂停状态下，按住某个键再按F12即可逐帧输入按键（注意三键冲突，可能会导致按不下去F12）**
::: tabs
@tab 例如逐帧输入623B时
先按住 6 不松，再按下 F12 下一帧
接着按住 2 不松，再按下 F12 下一帧
随后按住 3 以及 B 不松，再按下 F12 下一帧（若冲突键位了可按住 3 下一帧再按 B 下一帧）

@tab 逐帧输入22B时
先按住 2 不松，再按下 F12 下一帧
接着什么都不按，再按下 F12 下一帧
随后按住 2 以及 B 不松，再按下 F12 下一帧
:::
::: caution
**不要在开启 giuroll 的同时，在“观战”或“观看 Rep”时打开 F6，其与 giuroll 共存时触发内存泄漏 bug，会使游戏崩溃**

:::

<!--
![F6 数据含义-英文](https://bu.dusays.com/2023/10/30/653e91c4c5846.png =640x)
-->
::: details 关于"1hst"和"2hst"这个值
```
hst 是 hit state 的 缩写，暂时只知道触发和变化的规律，并不知道有什么实际意义

"1hst"和"2hst"值变化规律：
- 游戏初始状态为“0”；
- 变成“0”的条件：开始出招；体术挥空；进入防御（但是破防和挨打不变）；
- 变成“1”的条件：体术命中；成功丢出弹幕；青蛙成功遁地；
- 变成“2”的条件：对手防御了自己的体术；
- 一些例外情况，尤其是SC，如：青蛙四卡蛙狩，启动时会置0，但是后续无论如何也不会变成1或2；

青蛙L姿水蛙神不能取消的Bug：
当"1hst"或"2hst"值为“0”的时候，1P或2P青蛙L姿（荷叶）214改水蛙神炸弹就不能跳跃取消或者出招取消，为“1”或“2”时可正常取消
```
:::

## 另一个MOD-可联机的练习模式-AdvancedPracticeMode
::: info
[**可联机的练习模式 - AdvancedPracticeMode**](/mods/AdvancedMods/AdvancedPracticeMode.html)
:::
