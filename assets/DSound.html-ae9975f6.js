import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as t,f as s}from"./app-11d58f2b.js";const n={},c=s('<h2 id="提示-dsound初始化失败-弹窗" tabindex="-1"><a class="header-anchor" href="#提示-dsound初始化失败-弹窗" aria-hidden="true">#</a> <strong>提示 <code>DSound初始化失败</code> 弹窗</strong></h2><h3 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> <strong>解决方法</strong></h3><p>请检查电脑音频设备是否连接正常，声卡驱动是否正常</p><blockquote><p>右下角任务栏音量喇叭需要正常工作，如果存在红叉图标，可以尝试插一个耳机激活音频设备，或安装任意虚拟声卡软件例如<code>Voicemeeter</code></p></blockquote><p>开启插件 <code>DSoundFix</code><sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup> ，此插件可修复音频设备切换导致的问题</p><p>若<strong>未开启</strong>上述插件，打开游戏后<strong>不要再次插拔耳机</strong>，因为这将会改变音频设备</p><blockquote><p>依然存在Bug的话暂时没有解决办法，尚不清楚原因</p></blockquote><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>此插件<strong>默认关闭</strong>，原因是：部分电脑启用此插件时存在未知的原因无法打开游戏，任务管理器会显示一个未完成初始化的<code>th123.exe</code> <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>',9),r=[c];function a(d,f){return e(),t("div",null,r)}const h=o(n,[["render",a],["__file","DSound.html.vue"]]);export{h as default};
