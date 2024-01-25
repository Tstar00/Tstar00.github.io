import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as g,c as a,a as t,b as n,w as c,d as i,f as p,e as s}from"./app-_3iL6aB_.js";const h={},d={class:"hint-container info"},u=t("p",{class:"hint-container-title"},"原版练习模式功能",-1),_=t("ul",null,[t("li",null,[t("strong",null,"F1 木桩减 1000 血（满血10000）")]),t("li",null,[t("strong",null,"F2 卡槽补满")]),t("li",null,[t("strong",null,"F3 卡槽清空且卡组重置为20张卡")])],-1),F={class:"hint-container warning"},b=t("p",{class:"hint-container-title"},"注意",-1),f=t("strong",null,"按F1、F2、F3这些键都没有效果可能是因为Fn Lock 跳转链接",-1),v=t("h2",{id:"practiceex",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#practiceex","aria-hidden":"true"},"#"),i(" PracticeEX")],-1),m={class:"hint-container tip"},w=t("p",{class:"hint-container-title"},"2023-12-8 已更新 PracticeEX 高级练习模式汉化版",-1),B={href:"https://www.bilibili.com/video/BV1894y177s6/",target:"_blank",rel:"noopener noreferrer"},L=t("strong",null,"【非想天则 Mod】发布 Practice-EX 高级练习模式汉化版",-1),P=t("br",null,null,-1),E={href:"https://www.bilibili.com/video/BV1894y177s6/",target:"_blank",rel:"noopener noreferrer"},O=s('<div class="hint-container warning"><p class="hint-container-title">BUG 注意</p><ul><li><p><strong>注意在录制木桩动作操作2P的时候，不要按F7</strong><br><strong>F5、F6、F7在原本练习模式中就是用来给手柄2P录制重播动作的，F5开始录制 F6结束录制 F7播放动作，所以在用插件录制时按F7会导致无法移动，此时按F5或F6即可恢复</strong></p></li><li><p><strong>【不要设置随机空中受身 Random Airtech，会让游戏崩溃】</strong></p></li><li><p><strong>木桩设置一直大跳或者一直做某些动作，而无法进入空闲待机状态时，木桩不会回复血量。</strong><br><strong>此时可以让木桩在浮空时按大键盘2保存木桩位置，然后再按1恢复位置，可以让木桩落地前处于待机状态而回血。</strong></p></li><li><p><strong>偶尔会出现右上角有控制栏但是却调不出菜单的情况，重开游戏</strong></p></li><li><p><strong>偶尔会出现菜单卡住，然后过一会儿恢复，按的按键一次性全出来的情况，忍受一下</strong></p></li><li><p><strong>不要既设置防御时DD又设置防御后执行动作（如灵击、4A等），否则会在防御瞬间触发DD又触发动作</strong></p></li></ul></div><div class="hint-container tip"><p class="hint-container-title">使用技巧-逐帧操作</p><p><strong>把开关菜单键(默认ESC)改为其他按键，就可以在F11暂停逐帧操作时调出菜单并进行设置。</strong></p><p><strong>此外这样做也可以在ESC时调出默认菜单，方便快速退出练习模式</strong></p></div>',2),x={class:"hint-container tip"},y=t("p",{class:"hint-container-title"},"使用技巧-如何录制木桩最速执行动作（如升龙等）",-1),C=t("p",null,[t("strong",null,"自带的那个 AFTER BLOCK（防御后执行动作）会有点问题，做用卡和执行宏会慢 1F ；"),t("br"),t("strong",null,"此时我们想要最速，可以使用防御时刷键的方法：")],-1),M=t("p",null,[t("strong",null,"就是切换到 ON BLOCK（防御时执行动作），并搭配木桩延迟，可以实现模拟防御后刷键预输入的情景，通过预输入我们就可以让木桩最速了")],-1),k={href:"https://www.bilibili.com/video/BV11p4y177Ng/",target:"_blank",rel:"noopener noreferrer"},q=t("strong",null,"配套教程视频 传送门： 【非想天则】新则 - 练习模式 EX - 让木桩最速出招的录制技巧",-1),A=s('<div class="hint-container info"><p class="hint-container-title">情况一：最速 5A、用卡等（只需要一帧输入）</p><p>操作方法举例—————录制 5A 或者 用卡：</p><ol><li>按 <strong>录制热键（默认是 HOME）</strong> 切换到操控木桩模式，此时右上角显示<strong>黄条</strong></li><li>按 F11 暂停，然后按 <strong>录制热键（默认是 HOME）</strong>，然后右上角显示<strong>红条</strong></li><li><strong>按住</strong> A 或者 用卡键，然后在此基础上，按 F12 下一帧</li><li>按 F11 取消暂停，不要按键，差不多走到 十几F 的时候就可以再按一次 <strong>录制热键（默认是 HOME）</strong>，就是结束并保存录制了</li><li>按 <strong>播放热键</strong> 让它播放一次，一般是没问题的</li><li>在 <strong>Triggers 菜单</strong>里，选择 <strong>ON BLOCK -&gt; MACRO</strong>，<strong>Delay 设置为 0F</strong></li></ol></div><div class="hint-container info"><p class="hint-container-title">情况二：最速 DA 或 623 或 236 等（需要三帧预输入）</p><p>操作方法举例—————录制 623B：</p><ol><li>按 <strong>录制热键（默认是 HOME）（默认是 HOME）</strong> 切换到操控木桩模式，此时右上角显示<strong>黄条</strong></li><li>按 F11 暂停，然后按 <strong>录制热键（默认是 HOME）</strong>，然后右上角显示<strong>红条</strong></li><li><strong>按住</strong> 6，然后在此基础上，按 F12 下一帧</li><li><strong>按住</strong> 2，然后在此基础上，按 F12 下一帧</li><li><strong>按住</strong> 3 和 B，然后在此基础上，按 F12 下一帧<br><strong>（或者3 和 B 分开，这样需要录四帧，下面的 Delay 值也要调到 4F）</strong></li><li>按 F11 取消暂停，不要按键，差不多走到 十几F 的时候就可以再按一次 <strong>录制热键（默认是 HOME）</strong>，就是结束并保存录制了</li><li>按 <strong>播放热键</strong> 让它播放一次，一般是没问题的</li><li>在 <strong>Triggers 菜单</strong>里，选择 <strong>ON BLOCK -&gt; MACRO</strong>，<strong>Delay 设置为 3F</strong></li></ol></div><h2 id="labtool" tabindex="-1"><a class="header-anchor" href="#labtool" aria-hidden="true">#</a> Labtool</h2><div class="hint-container info"><p class="hint-container-title">相关信息</p><figure><img src="https://bu.dusays.com/2024/01/21/65aceba6bc3b4.webp" alt="Labtool说明" width="600" tabindex="0" loading="lazy"><figcaption>Labtool说明</figcaption></figure><p>注意这些热键都是 <strong>大键盘</strong> 上的数字</p><p><strong>按 1 可恢复双方位置。按住 1P 的方向键再按 1 可以移动至默认预设好的五等份点位置</strong><br><strong>注意，角色被某些招式和击飞或演出时复位会出现角色卡住的情况</strong></p><p><strong>按 2 可记录双方当前位置</strong>，练习连段和微调位置(逐帧走路卡距离)等用非常方便！【<strong>最好不要在角色非静止时保存位置</strong>】</p><p>按 4 可将 1P 的必杀恢复为初始默认状态</p><p>按 5 可启用状态颜色显示（可被康状态红色，擦弹状态透明，硬直状态紫色，无敌状态蓝色）</p><p><strong>信息举例：</strong><br><strong>Gap：0F</strong> 表示 1P的两次攻击之间有 1F 缝，非无缝 （以0为1，以此类推）<br><strong>P1 is +5F</strong> 表示 1P有利 5F，最速出手7F招中间有2F缝<br><strong>P1 is -6F</strong> 表示 1P不利 6F，可被6F的招确反<br><strong>P1 is [+24F]</strong> 表示 1P大跳取消后有利 24F</p><p><strong>没显示Gap说明是无缝或是缝太大</strong></p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><ul><li><p><strong>注意不要点窗口右上角的X关掉这个LabTool的程序框，他是和游戏程序共生的（你点了X游戏也会被关掉，你不想看它可以点最小化，或者关掉 Labtool 这个 mod）</strong></p></li><li><p><strong>若有时候切回游戏发现莫名卡住操作不了，很有可能是因为 LabTool 的控制台窗口的属性里开启了快速编辑模式，然后你选中了窗口出现光标闪烁会导致窗口不能刷新显示新的文字，游戏就会卡住等待</strong><br><strong>解决办法：右键取消光标选中，或者在标题栏右键-属性-关闭快速编辑模式即可恢复正常</strong></p></li></ul></div><h2 id="replayinputview" tabindex="-1"><a class="header-anchor" href="#replayinputview" aria-hidden="true">#</a> ReplayInputView</h2><div class="hint-container info"><p class="hint-container-title">相关信息</p><figure><img src="https://bu.dusays.com/2024/01/21/65acec0c1ddb1.webp" alt="F6 数据含义" width="800" tabindex="0" loading="lazy"><figcaption>F6 数据含义</figcaption></figure><p><strong>单机和观战下才能使用，网战中不能使用</strong></p><p><strong>F4</strong>显示<strong>判定框</strong>以及受身时间条</p><p><strong>F6</strong>显示帧数、位置、速度等<strong>信息</strong></p><p><strong>F7</strong>显示<strong>按键输入</strong>（继续按F7来调整布局；观战下按键识别有点小瑕疵，需要花点耐心调整）</p><p><strong>F11</strong>暂停，<strong>F12</strong>下一帧（<strong>逐帧操作</strong>） （不要在观战时按）</p><p><strong>绿框是受击判定</strong>，绿框变蓝色代表此时<strong>可被康</strong>，绿框变空心代表此时有体术无敌状态（不一定是完全无敌，也不是所有无敌状况都会空心显示）</p><p><strong>红框是攻击判定</strong>（某些招数或者弹幕会有判定残留显示或者假判定）</p><p><strong>黄框是占位判定</strong>（相当于投技的受击判定）</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p><strong>不要在观战或 Rep 下打开 F6，与 giuroll 之间有内存泄漏 bug，会使游戏崩溃</strong></p></div><div class="hint-container tip"><p class="hint-container-title">如何逐帧输入指令</p><p><strong>在暂停状态下，按住某个键再按F12即可逐帧输入按键（注意三键冲突，可能会导致按不下去F12）</strong></p><p><strong>例如逐帧输入623B时：</strong><br><strong>可先按住6后下一帧，接着按住2后下一帧，随后按住3以及B后下一帧，若冲突键位了可按住3下一帧再按B下一帧</strong></p><p><strong>逐帧输入22B时：</strong><br><strong>先按住2后下一帧，什么都不按后下一帧，再按住2和B后下一帧</strong></p></div>',9),V=s('<div class="hint-container info"><p class="hint-container-title">关于1hst&quot;和&quot;2hst&quot;这个值</p><p>hst 是 hit state 的 缩写，暂时只知道触发和变化的规律，并不知道有什么实际意义</p><p>&quot;1hst&quot;和&quot;2hst&quot;值<strong>变化规律</strong>：</p><ul><li>游戏初始状态为“0”；</li><li>变成“0”的条件：开始出招；体术挥空；进入防御（但是破防和挨打不变）；</li><li>变成“1”的条件：体术命中；成功丢出弹幕；青蛙成功遁地；</li><li>变成“2”的条件：对手防御了自己的体术；</li><li>一些例外情况，尤其是SC，如：青蛙四卡蛙狩，启动时会置0，但是后续无论如何也不会变成1或2；</li></ul><p>青蛙L姿水蛙神不能取消的Bug：<br> 当&quot;1hst&quot;或&quot;2hst&quot;值为“0”的时候，1P或2P青蛙L姿（荷叶）214改水蛙神炸弹就不能跳跃取消或者出招取消，为“1”或“2”时可正常取消</p></div>',1);function N(D,R){const l=r("RouterLink"),o=r("ExternalLinkIcon");return g(),a("div",null,[t("div",d,[u,_,t("div",F,[b,t("p",null,[n(l,{to:"/FAQ/In-Games/FnLock.html"},{default:c(()=>[f]),_:1})])])]),v,t("div",m,[w,t("p",null,[t("a",B,[L,n(o)]),P,t("strong",null,[t("a",E,[i("https://www.bilibili.com/video/BV1894y177s6/"),n(o)])])])]),O,t("div",x,[y,C,M,t("p",null,[t("a",k,[q,n(o)])])]),A,p(`
![F6 数据含义-英文](https://bu.dusays.com/2023/10/30/653e91c4c5846.png =640x)
`),V])}const X=e(h,[["render",N],["__file","PracticeMods.html.vue"]]);export{X as default};
