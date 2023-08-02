import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as t,f as a}from"./app-0b138a25.js";const n={},o=a('<h2 id="打开游戏后任务栏有显示-但是桌面找不到游戏窗口-任务栏预览图为全黑" tabindex="-1"><a class="header-anchor" href="#打开游戏后任务栏有显示-但是桌面找不到游戏窗口-任务栏预览图为全黑" aria-hidden="true">#</a> <strong>打开游戏后任务栏有显示，但是桌面找不到游戏窗口，任务栏预览图为全黑</strong></h2><p>原因：窗口到屏幕外面了，窗口位置坐标和窗口大小被莫名其妙错误记录了（位置为负数，窗口大小异常）</p><h3 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> <strong>解决方法</strong></h3><p>方法一：关闭游戏，双击重置窗口的bat即可</p><figure><img src="https://img.514.live/img/202307230115658.png" alt="新版本的整合包内才有这个bat" tabindex="0" loading="lazy"><figcaption>新版本的整合包内才有这个bat</figcaption></figure><p>方法二：关闭游戏，打开 <code>th123/modules/WindowResizer/WindowResizer.ini</code><br> 参考图片进行设置</p><figure><img src="https://img.514.live/img/202307222352172.png" alt="WindowResizer设置示例" tabindex="0" loading="lazy"><figcaption>WindowResizer设置示例</figcaption></figure>',7),r=[o];function s(d,c){return e(),t("div",null,r)}const l=i(n,[["render",s],["__file","WindowMissing.html.vue"]]);export{l as default};