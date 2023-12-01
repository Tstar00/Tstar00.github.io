import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as g,c as a,a as t,d as e,f as n,b as i}from"./app-f6ff9d7e.js";const c={},p=n('<h2 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明" aria-hidden="true">#</a> 使用说明</h2><div class="hint-container info"><p class="hint-container-title">简介</p><p><strong>可以同时配合 ReplayInputView 和 Labtool 同时使用</strong></p><p>F4查看判定，F11暂停，F12逐帧，让木桩在 防御/异地/起身/挨打 时做动作（擦弹、DD、Dash、凹、抢）、让木桩执行自己录制的动作、不耗卡、早苗无CD，以及保存角色位置、恢复角色位置、查看缝隙帧数、有利不利帧数等</p></div><div class="hint-container info"><p class="hint-container-title">菜单图文翻译</p><figure><img src="https://bu.dusays.com/2023/08/29/64edb574ded32.png" alt="practice1.png" width="650" tabindex="0" loading="lazy"><figcaption>practice1.png</figcaption></figure><figure><img src="https://bu.dusays.com/2023/08/29/64edb572ec964.jpg" alt="practice2.jpg" width="650" tabindex="0" loading="lazy"><figcaption>practice2.jpg</figcaption></figure><figure><img src="https://bu.dusays.com/2023/08/29/64edb56cf0e98.jpg" alt="practice3.jpg" width="650" tabindex="0" loading="lazy"><figcaption>practice3.jpg</figcaption></figure><figure><img src="https://bu.dusays.com/2023/08/29/64edb56eec620.jpg" alt="practice4.jpg" width="650" tabindex="0" loading="lazy"><figcaption>practice4.jpg</figcaption></figure><figure><img src="https://bu.dusays.com/2023/10/16/652ccb274e11a.png" alt="practice5.png" width="650" tabindex="0" loading="lazy"><figcaption>practice5.png</figcaption></figure><figure><img src="https://bu.dusays.com/2023/08/29/64edb56d65538.jpg" alt="practice6.jpg" width="650" tabindex="0" loading="lazy"><figcaption>practice6.jpg</figcaption></figure><figure><img src="https://bu.dusays.com/2023/08/29/64edb56e1320a.jpg" alt="practice7.jpg" width="650" tabindex="0" loading="lazy"><figcaption>practice7.jpg</figcaption></figure><figure><img src="https://bu.dusays.com/2023/08/29/64edb95560226.jpg" alt="practice8.jpg" width="650" tabindex="0" loading="lazy"><figcaption>practice8.jpg</figcaption></figure><figure><img src="https://bu.dusays.com/2023/08/29/64edbcb098a24.png" alt="practice9.png" width="650" tabindex="0" loading="lazy"><figcaption>practice9.png</figcaption></figure><figure><img src="https://bu.dusays.com/2023/08/29/64edb56e6723c.png" alt="practice-2.1.0.png" width="650" tabindex="0" loading="lazy"><figcaption>practice-2.1.0.png</figcaption></figure><p><strong>图7木桩反应 Triggers 选项翻译：</strong></p><p><strong>防御时：</strong><br><strong>NONE</strong> 即为无动作<br><strong>HANGEKI</strong> -羽衣<br><strong>BORDER ESCAPE</strong> 即回避结界，一般称DD； [UP]即为2DD， [UPBACK]即为1DD， [BACK]即为4DD， [FORWARD] 即为6DD<br><strong>MACRO</strong> 是执行宏，即录制下来的动作<br><strong>RANDOM MACRO</strong> 是随机执行一个录下来的动作<br><strong>SELECT CARD</strong> 是指使用手上的卡片</p><p><strong>防御后：</strong><br><strong>DP</strong> - 升龙(部分角色才有)<br><strong>SPIRITUAL STRIKE TALISMAN</strong> - 灵击<br><strong>4A，2A</strong><br><strong>JUMP</strong> - 小跳<br><strong>HJ</strong> - 大跳<br><strong>DASH</strong> - 向前66<br><strong>BACK DASH</strong> - 向后44</p></div><div class="hint-container warning"><p class="hint-container-title">BUG 注意</p><p><strong>注意在录制木桩动作操作2P的时候，不要按F7</strong><br><strong>F5、F6、F7在原本练习模式中就是用来给手柄2P录制重播动作的，F5开始录制 F6结束录制 F7播放动作，所以在用插件录制时按F7会导致无法移动，此时按F5或F6即可恢复</strong></p><p><strong>【不要设置随机空中受身 Random Airtech，会让游戏崩溃】</strong></p></div><h2 id="录制技巧" tabindex="-1"><a class="header-anchor" href="#录制技巧" aria-hidden="true">#</a> 录制技巧</h2>',5),l={class:"hint-container tip"},d=t("p",{class:"hint-container-title"},"让木桩最速执行动作，如防御后用卡，或者执行宏（macro，录制些 623 或者 236 什么的）",-1),h=t("p",null,[i("自带的那个 AFTER BLOCK（防御后执行动作）会有点问题，做用卡和执行宏会慢 1F ；"),t("br"),i(" 此时我们想要最速，可以使用防御时刷键的方法：")],-1),f=t("p",null,[t("strong",null,"就是切换到 ON BLOCK（防御时执行动作），并搭配木桩延迟，可以实现模拟防御后刷键预输入的情景，通过预输入我们就可以让木桩最速了")],-1),b={href:"https://www.bilibili.com/video/BV11p4y177Ng/",target:"_blank",rel:"noopener noreferrer"},u=t("strong",null,"配套教程视频 传送门： 【非想天则】新则 - 练习模式 EX - 让木桩最速出招的录制技巧",-1),m=n('<div class="hint-container info"><p class="hint-container-title">情况一：最速 5A、用卡等（只需要一帧输入）</p><p>操作方法举例—————录制 5A 或者 用卡：</p><ol><li>按 <strong>录制热键（默认是 HOME）</strong> 切换到操控木桩模式，此时右上角显示<strong>黄条</strong></li><li>按 F11 暂停，然后按 <strong>录制热键（默认是 HOME）</strong>，然后右上角显示<strong>红条</strong></li><li><strong>按住</strong> A 或者 用卡键，然后在此基础上，按 F12 下一帧</li><li>按 F11 取消暂停，不要按键，差不多走到 十几F 的时候就可以再按一次 <strong>录制热键（默认是 HOME）</strong>，就是结束并保存录制了</li><li>按 <strong>播放热键</strong> 让它播放一次，一般是没问题的</li><li>在 <strong>Triggers 菜单</strong>里，选择 <strong>ON BLOCK -&gt; MACRO</strong>，<strong>Delay 设置为 0F</strong></li></ol></div><div class="hint-container info"><p class="hint-container-title">情况二：最速 DA 或 623 或 236 等（需要三帧预输入）</p><p>操作方法举例—————录制 623B：</p><ol><li>按 <strong>录制热键（默认是 HOME）（默认是 HOME）</strong> 切换到操控木桩模式，此时右上角显示<strong>黄条</strong></li><li>按 F11 暂停，然后按 <strong>录制热键（默认是 HOME）</strong>，然后右上角显示<strong>红条</strong></li><li><strong>按住</strong> 6，然后在此基础上，按 F12 下一帧</li><li><strong>按住</strong> 2，然后在此基础上，按 F12 下一帧</li><li><strong>按住</strong> 3 和 B，然后在此基础上，按 F12 下一帧<br><strong>（或者3 和 B 分开，这样需要录四帧，下面的 Delay 值也要调到 4F）</strong></li><li>按 F11 取消暂停，不要按键，差不多走到 十几F 的时候就可以再按一次 <strong>录制热键（默认是 HOME）</strong>，就是结束并保存录制了</li><li>按 <strong>播放热键</strong> 让它播放一次，一般是没问题的</li><li>在 <strong>Triggers 菜单</strong>里，选择 <strong>ON BLOCK -&gt; MACRO</strong>，<strong>Delay 设置为 3F</strong></li></ol></div>',2);function _(F,y){const r=s("ExternalLinkIcon");return g(),a("div",null,[p,t("div",l,[d,h,f,t("p",null,[t("a",b,[u,e(r)])])]),m])}const E=o(c,[["render",_],["__file","PracticeEX.html.vue"]]);export{E as default};
