import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o,c as g,a as t,e as n,b as e,f as i}from"./app-vnPuxhQ8.js";const p={},d=i('<h2 id="天气系统机制" tabindex="-1"><a class="header-anchor" href="#天气系统机制" aria-hidden="true">#</a> <strong>天气系统机制</strong></h2><h3 id="_1-天气的预报与变化" tabindex="-1"><a class="header-anchor" href="#_1-天气的预报与变化" aria-hidden="true">#</a> <strong>1.天气的预报与变化</strong></h3><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>气质槽中央预告着将要发动的天气，当天气结束后会再随机选一个天气重新开始计时预报。</p><p>在这个过程中出现以下任意一种情况，预报的天气就会按照一定的顺序改变一次。</p><ol><li>角色倒地、弹地或弹墙；</li><li>使用SC符卡成功发生暗转（发生光圈特效、游戏画面暂停）。</li></ol></div><h3 id="_2-天气预报会按下表的顺序循环变化" tabindex="-1"><a class="header-anchor" href="#_2-天气预报会按下表的顺序循环变化" aria-hidden="true">#</a> <strong>2.天气预报会按下表的顺序循环变化</strong></h3><figure><img src="https://bu.dusays.com/2024/01/21/65acd8d5199a2.webp" alt="天气循环" width="950" tabindex="0" loading="lazy"><figcaption>天气循环</figcaption></figure><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>对局中合理的观察和利用预报是十分重要的</p><p>除了要有意识控制倒地弹墙的次数外，必要时还可以使用SC改变预报，或者使用系统卡「绯想之剑」直接发动预报中的天气。</p><figure><img src="https://bu.dusays.com/2024/01/21/65acd908a5f32.webp" alt="俗称 天气剑" width="400" tabindex="0" loading="lazy"><figcaption>俗称 天气剑</figcaption></figure></div><h3 id="_3-天气槽读数的变化条件" tabindex="-1"><a class="header-anchor" href="#_3-天气槽读数的变化条件" aria-hidden="true">#</a> <strong>3.天气槽读数的变化条件</strong></h3><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>通常情况，天气的读数在天气发动前只会增加，在天气发动后只会减少，倾向于互相转化。<br><strong>无天气时的一套连段会加快天气发动，有天气时的一套连段会加快天气消失</strong></p><p>天气读数的变化条件有以下几个：</p><ol><li>随时间经过逐渐变化，天气发动前每1F增加0.1读数（从0到99.9需要16.6秒），发动后每2F减少0.1读数（从99.9到0需要33.2秒）</li><li>角色受到连段的第一击、在霸体状态受到任何攻击、倒地、弹墙，又或是被破防，此时会散落天气玉使数字变化</li><li>角色受到攻击导致自己的弹幕消失变成天气玉，加速天气变化</li><li>天气发动后，某些利用天气性质的行动会使读数减少</li><li>天子的SC  天気「绯想天促」击中对手时会强制散落天气玉，加速天气变化</li><li>天子的SC「全人類の緋想天」发动时会使读数减少，无论当时是否已经发动天气</li><li>在无天气状态下使用系统卡「绯想之剑」将立即发动当前预报的天气，并且天气读数固定从 99.9 开始倒数</li><li>在有天气状态下使用系统卡「绯想之剑」将加速天气结束，读数变化速度变为七倍速（每2F减少0.7读数）</li><li>在单局结束到下一局开始前，天气读数最低只会减少至 00.1，天气不会消失；最高会增加至  99.9，天气不会发动。</li></ol><p>有多次弹墙/弹地效果的招式对天气切换的影响尤其明显（如19的原236钻头、妖梦的蓝刀等）</p><p>有时故意丢大量弹幕再被打也能够达到加速天气变化以控制天气的效果（如西瓜的C系弹幕、16的原214和236改离剑等）</p><p>红色水晶即是天气玉，消失时发出哒哒声</p><p><img src="https://bu.dusays.com/2024/01/21/65acd9368d559.webp" alt="天气玉1" height="200" loading="lazy"> <img src="https://bu.dusays.com/2024/01/21/65acd96f3d5db.webp" alt="天气玉2" height="200" loading="lazy"></p></div><h3 id="_4-天气发动后" tabindex="-1"><a class="header-anchor" href="#_4-天气发动后" aria-hidden="true">#</a> <strong>4.天气发动后</strong></h3><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>天气发动后对双方都会产生效果，此时画面中央将出现文字提醒，激活颜色、发出音效</p><p>室外场景会出现相应的天气特效，如下雨、飘雪、刮风、彩虹等（可使用 MemoryPatch 补丁关闭）</p><p>室内场景如图书馆、红魔馆、玄云海、地下等则不会出现天气特效</p><p>天子的二卡SC 非想「非想非非想の剣」 命中对手后会有个“封”的特效，可让对手不受到天气效果影响</p></div><hr><h2 id="天气详情" tabindex="-1"><a class="header-anchor" href="#天气详情" aria-hidden="true">#</a> <strong>天气详情</strong></h2><h3 id="_1-快晴-sunny" tabindex="-1"><a class="header-anchor" href="#_1-快晴-sunny" aria-hidden="true">#</a> <strong>1.快晴 Sunny</strong></h3><figure><img src="https://bu.dusays.com/2024/01/21/65acd9ab106bd.webp" alt="适合在天上飞行程度的天气" width="200" tabindex="0" loading="lazy"><figcaption>适合在天上飞行程度的天气</figcaption></figure><div style="text-align:center;"><p><strong>起始读数：99.9</strong><br><strong>读数减少条件：无</strong></p><p><strong>效果：飞翔消耗灵力减半，飞翔的回转性能增加（对于拥有回转性能的角色而言），使用 DD 不会爆灵（当然也不会回灵）</strong></p></div><figure><img src="https://bu.dusays.com/2024/01/21/65acd9c390c27.webp" alt="回转性能" width="300" tabindex="0" loading="lazy"><figcaption>回转性能</figcaption></figure><div class="hint-container info"><p class="hint-container-title">点评</p><p><strong>对于压制的进攻方来说很有利</strong></p><p>立回中对于飞翔性能好的角色会比较有利，能更容易操纵 6D2, 6D8, 3D6 等操作 （6D2即为在6D启动后，按住D不松，按键6转按2，角色飞翔速度不变，但是方向改变）</p><p>因为对手被压制时最需要的就是DD并回复灵力，现在DD不能回灵，DD到空中被抓到后依然会面临没灵破防的威胁</p></div><div class="hint-container warning"><p class="hint-container-title">特例</p><p><strong>早苗</strong>的效果为风行速度增加为2倍</p><p><strong>青蛙</strong>则是不受影响，飞翔耗灵不变(包括J2D，依然固定消耗1灵)</p><p><strong>蕾咪</strong>的飞翔耗灵由固定1灵减半为0.5灵。</p></div><figure><img src="https://bu.dusays.com/2023/09/01/64f0dab94d5d5.gif" alt="普通的飞翔回转" tabindex="0" loading="lazy"><figcaption>普通的飞翔回转</figcaption></figure><figure><img src="https://bu.dusays.com/2023/09/01/64f0dab9d3f66.gif" alt="快晴buff下的飞翔回转" tabindex="0" loading="lazy"><figcaption>快晴buff下的飞翔回转</figcaption></figure><h3 id="_2-雾雨-drizzle" tabindex="-1"><a class="header-anchor" href="#_2-雾雨-drizzle" aria-hidden="true">#</a> <strong>2.雾雨 Drizzle</strong></h3><figure><img src="https://bu.dusays.com/2023/08/21/64e3281270911.png" alt="符卡火力提高程度的天气" width="255" tabindex="0" loading="lazy"><figcaption>符卡火力提高程度的天气</figcaption></figure><div style="text-align:center;"><p><strong>起始读数：99.9</strong><br><strong>读数减少条件：符卡成功暗转使用时减少剩余读数的25%</strong></p><p><strong>效果：SC造成的伤害上升25%，只对天气激活时间内造成的伤害有加成</strong><br><strong>（对无直接伤害的SC无效果，UU小无寿和兔子毒烟幕所造成的烧血效果也不受此天气影响）</strong></p></div><div class="hint-container info"><p class="hint-container-title">点评</p><p>简单明了，谁手上有 SC 用出去打伤害了谁就获利</p></div><h3 id="_3-云天-cloudy" tabindex="-1"><a class="header-anchor" href="#_3-云天-cloudy" aria-hidden="true">#</a> <strong>3.云天 Cloudy</strong></h3><figure><img src="https://bu.dusays.com/2023/08/21/64e32879908c8.png" alt="能够灵活使用符卡程度的天气" width="255" tabindex="0" loading="lazy"><figcaption>能够灵活使用符卡程度的天气</figcaption></figure><div style="text-align:center;"><p><strong>起始读数：99.9</strong><br><strong>读数减少条件：消耗任何卡片时天气立即结束</strong></p><p><strong>效果：消耗量大于1的SC消耗量-1，符力增加量翻倍（不包括被打增加的符力和伊吹瓢效果）</strong></p></div><div class="hint-container info"><p class="hint-container-title">点评</p><p><strong>神一般的战略资源天气！</strong></p><p><strong>总体来说是对主动方有利的天气。</strong></p><p>天气持续时间极长，无论是有卡的人还是没卡的人，都能趁机在这个天气大赚一笔，卡片资源优势迅速e拉开。</p><p>由于攒卡翻倍，SC消耗量还减一，原本打一套连段或者压制一套只能得一张卡，很可能什么都用不了<br> 而现在打一套连段或者压制一套就能攒起两张甚至三张卡，可以随后立即出手四卡SC，甚至五卡SC都是唾手可得！</p></div><figure><img src="https://bu.dusays.com/2023/08/24/64e7132f0f7fd.gif" alt="起手一张卡，连段途中攒两张卡，直接出手四卡SC" tabindex="0" loading="lazy"><figcaption>起手一张卡，连段途中攒两张卡，直接出手四卡SC</figcaption></figure><h3 id="_4-苍天-bluesky" tabindex="-1"><a class="header-anchor" href="#_4-苍天-bluesky" aria-hidden="true">#</a> <strong>4.苍天 BlueSky</strong></h3><figure><img src="https://bu.dusays.com/2023/08/21/64e3291d38912.png" alt="连续技变得犀利程度的天气" width="255" tabindex="0" loading="lazy"><figcaption>连续技变得犀利程度的天气</figcaption></figure><div style="text-align:center;"><p><strong>起始读数：99.9</strong><br><strong>读数减少条件：每取消一次必杀技时减少剩余读数的10%</strong></p><p><strong>效果：必杀技之间可以相互上位取消，灵力消耗依次减半，即第一次1，第二次1/2，第三次1/4以此类推(显然一套必杀取消下来只需要两个灵)</strong></p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p><strong>一条取消链中，同种键位必杀只能出现一次。</strong></p><p><strong>原本不能被SC取消的升龙系必杀级，也不能在苍天取消</strong></p><p><strong>吃卡用出来的必杀技可以被手搓必杀技取消，手搓必杀技不能被吃卡必杀技取消</strong></p><p><strong>而且，必杀技取消等级的系统卡并不是必杀技，只是取消等级相同，不能参与取消必杀技或者被其取消</strong></p><p><strong>BUG：如果你的剩余灵力不足一个满灵，那就会被程序认为不够灵力使用后续必杀，即使你的下一次必杀取消按理只需要消耗1/2或者更少的灵</strong></p></div><div class="hint-container info"><p class="hint-container-title">点评</p><p><strong>总体来说是对主动方有利的天气。</strong></p><p>通常情况下只能用SC取消的必杀技变得可以用普通的必杀技互相取消，非常适合连携压制</p><p>可以组合出各种强力压制套路和苍天限定连段，起手多，高伤害，高攒卡。</p><p>注意天气快结束时就提前收敛一点，否则大责任招放出去来不及取消，苍天就结束了，可就送确反了</p></div><figure><img src="https://bu.dusays.com/2023/08/25/64e861e563ce5.gif" alt="一个妖梦板边苍天连" tabindex="0" loading="lazy"><figcaption>一个妖梦板边苍天连</figcaption></figure><h3 id="_5-雹天-hail" tabindex="-1"><a class="header-anchor" href="#_5-雹天-hail" aria-hidden="true">#</a> <strong>5.雹天 Hail</strong></h3><figure><img src="https://bu.dusays.com/2023/08/21/64e3299c0614b.png" alt="灵力增强程度的天气" width="255" tabindex="0" loading="lazy"><figcaption>灵力增强程度的天气</figcaption></figure><div style="text-align:center;"><p><strong>起始读数：99.9</strong><br><strong>读数减少条件：使用必杀技时减少剩余读数的10%</strong></p><p><strong>效果：灵力回复速度加倍，必杀技和人魂灯的伤害上升25%</strong><br> （与系统卡「西洋魔法书」的灵力回复加速并不是简单的乘算或加算关系，请参考系统卡解说一节）</p></div><div class="hint-container info"><p class="hint-container-title">点评</p><p><strong>注意防御方的灵力回复速度也有加快噢</strong></p><p>由于必杀技伤害提升，磨血也会提升，磨血特化的必杀技会更有威力（如兔子的原236火箭弹，19的236改弹幕钻头，小爱的22人偶阵）</p><p>灵力回复的加速也使得某些在连段途中回灵的连段成立。</p></div><h3 id="_6-花云-springhaze" tabindex="-1"><a class="header-anchor" href="#_6-花云-springhaze" aria-hidden="true">#</a> <strong>6.花云 SpringHaze</strong></h3><figure><img src="https://bu.dusays.com/2023/08/21/64e329df52446.png" alt="能避开打击程度的天气" width="255" tabindex="0" loading="lazy"><figcaption>能避开打击程度的天气</figcaption></figure><div style="text-align:center;"><p><strong>起始读数：49.9</strong><br><strong>读数减少条件：无（但是天气效果触发会造成很多天气玉掉落而加快结束）</strong></p><p><strong>效果：体术和投技可以被擦弹回避(0.25灵/F)，普通弹幕会附加磨耗属性(0.02灵/F)，磨耗弹幕的磨耗效果增强(0.05灵/F)。</strong></p></div><div class="hint-container info"><p class="hint-container-title">点评</p><p><strong>进攻方的压制瞬间被瓦解，被压制方能轻松摆脱压制，双方回到均势立回</strong></p><p>大跳和6D逃压会变得几乎毫无风险，无脑2DD 6DD轻松逃压<br> 但注意不能胡乱擦弹，灵力不足以擦弹磨耗时会被命中或打防破防(要有拉防指令)<br><strong>强磨耗属性的 SC（如高达的核炮、图书的皇家烈焰、早苗的小开海、灵梦的梦想封印等）</strong><br><strong>长持续的体术（如16的原623、妖梦西瓜的JA、兔子西瓜的DC、早苗的J2A、紫的原623转伞、各种滑铲和突进等）</strong><br> 能几乎瞬间磨耗掉对手的全部灵力，此时避开或防御并趁机DD回灵（DD途中也是擦弹状态），继续周旋才是正确的选择。</p><p>被擦弹躲避的体术算作挥空<br> 不可使用弹幕无敌属性来躲避体术<br> 不可使用擦弹躲避特射（天子的六震、天地之压、魔理沙的五卡彗星、大鲶鱼等）<br><strong>紫的火车是体术</strong>，依然按照0.25灵/F来磨耗； <strong>UU的大无寿爆炸是体术</strong>，但是擦弹无法避免(也不耗灵)</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>注意空中飞翔本身也需要消耗灵力</p><p>注意天气即将开始和即将结束时提前做好准备<br> 如天气恰好开始时直接6DD擦掉对手的体术并确反，天气即将结束前停止擦弹防止天气一结束然后被打</p></div><figure><img src="https://bu.dusays.com/2023/08/25/64e867944aef9.gif" alt="大跳擦弹，被文 214C 追击瞬间磨光五灵，此时应该防御" tabindex="0" loading="lazy"><figcaption>大跳擦弹，被文 214C 追击瞬间磨光五灵，此时应该防御</figcaption></figure><h3 id="_7-浓雾-heavyfog" tabindex="-1"><a class="header-anchor" href="#_7-浓雾-heavyfog" aria-hidden="true">#</a> <strong>7.浓雾 HeavyFog</strong></h3><figure><img src="https://bu.dusays.com/2023/08/21/64e32a41adaae.png" alt="吸血鬼附体程度的天气" width="255" tabindex="0" loading="lazy"><figcaption>吸血鬼附体程度的天气</figcaption></figure><div style="text-align:center;"><p><strong>起始读数：99.9</strong><br><strong>读数减少条件：无</strong></p><p><strong>效果：造成的伤害的50%转化为自身血量回复（包括磨血和自残，不包括特殊烧血）。</strong></p></div><div class="hint-container info"><p class="hint-container-title">点评</p><p><strong>不可小觑的战略资源天气，翻盘可能就在一次反击连段</strong></p><p><strong>简单明了，占据主动权的一方能在此天气获利</strong></p><p>占据主动权的一方要保持自己的压制和立回优势，一是可以自己吸血获利，二是防止对手吸血<br> 被压制方要尽量不被直接命中打连段，并找机会夺回主动权</p><p>血量占优势的一方可以控走浓雾，或使用如天气剑、冻青蛙等拖时间方法让浓雾天尽快过去以防止对手偷得吸血机会<br> 血量占劣势的一方可以控来浓雾，甚至使用天气剑提前激活浓雾天来得到吸血翻盘的机会</p></div><h3 id="_8-雪天-snow" tabindex="-1"><a class="header-anchor" href="#_8-雪天-snow" aria-hidden="true">#</a> <strong>8.雪天 Snow</strong></h3><figure><img src="https://bu.dusays.com/2023/08/21/64e32a7e84798.png" alt="幽灵附体程度的天气" width="255" tabindex="0" loading="lazy"><figcaption>幽灵附体程度的天气</figcaption></figure><div style="text-align:center;"><p><strong>起始读数：99.9</strong><br><strong>读数减少条件：破坏卡片时减少剩余读数的25%</strong></p><p><strong>效果：被打的一方原先掉血获得符力(卡槽红色积攒部分)的效果消失，反而减少符力，具体为：防御时削减进攻方因此增加的1/4，命中时削减进攻方因此增加的1/2</strong><br><strong>无多余符力可削减只剩下卡片时，便破坏卡片返还即将满的卡槽，破坏的卡片从卡组内消失（且角色身边产生黄色掉卡特效）</strong><br><strong>若剩下的卡组只剩五张时，破坏一张卡片后不会继续破坏下一张卡片，还是会和平常一样，对手打你攒了两张卡，你才会掉一张卡</strong></p></div><div class="hint-container warning"><p class="hint-container-title">强调纠正误区</p><p><strong>纠正误区！ 雪天不是挨打就掉卡，而是攻击方攒了卡，挨打的一方才会掉卡！</strong></p></div><div class="hint-container tip"><p class="hint-container-title">效果举例</p><p>比如对手打你一套连段攒了一张卡，你就会损失1/2的卡槽；</p><p>对手打你压制攒了一张卡，你就会损失1/4的卡槽；</p><p>你手里只剩四张牌，刚好被打掉了一张还剩三张加上一个将满的卡槽，此时对手要继续打你攒两张卡，才能清空你的卡槽并破坏你下一张卡；</p><p><strong>对手用 SC 或者系统卡打你没攒卡，你不会损失卡槽；</strong></p><p><strong>使用 SC 之后一段时间内，卡槽会暂停积攒一段时间，此时攻击对手也不会有破坏卡片和削减符力的效果。</strong></p><p><strong>冷知识：雪天里，如果在丢弹幕或必杀技攒卡（实际耗灵的时候）的同时被对手命中，此时会计算符力增减再决定是否掉卡，而不是满卡了就一定会掉卡</strong> 【举例如下：】<br> 如图书用火球命中你-50符力，而你同时使用一个+50符力的招数，最终结果就是既不攒卡也不掉卡；<br> 如妖梦用升龙命中你-60符力，而你同时使用一个+50符力的招数，最终结果就是-10会触发掉卡；<br> 如图书用J6C水泡命中你4次-40符力，而你同时使用一个+50符力的招数，最终结果就是+10，不但不掉卡反而卡槽会增加</p><figure><img src="https://bu.dusays.com/2023/11/18/655824c953b96.gif" alt="注意妖梦被火球命中的同时启动了2C掉了一灵+50符力与图书的火球-50相抵消" tabindex="0" loading="lazy"><figcaption>注意妖梦被火球命中的同时启动了2C掉了一灵+50符力与图书的火球-50相抵消</figcaption></figure><figure><img src="https://bu.dusays.com/2023/11/18/655826e9bae40.gif" alt="同上" tabindex="0" loading="lazy"><figcaption>同上</figcaption></figure></div><div class="hint-container info"><p class="hint-container-title">点评</p><p><strong>不受欢迎的天气之一</strong></p><p><strong>对进攻方较为有利的天气，攻击的同时能削弱对手卡片资源； 也可能会出现露破绽被反击然后忘记切卡而损失关键卡片的情况</strong></p><p>同时限制双方卡片使用效率(不敢把关键卡片放在首位而不便于第一时间使用)，手牌已满或快满的情况下尤甚（快满的时候丢个弹幕，攒出一张卡，被打掉后又攒出一张，又掉卡）</p><p>自己手卡不好想换新卡时也可以趁机借用此天气丢掉废卡获得新卡</p><p>当剩余的卡片小于五张且全部在手头时，破坏卡片后虽然看不见多余的符力但也存在等同于满符力的耐久度，不会把卡连续爆掉</p></div><figure><img src="https://bu.dusays.com/2023/10/03/651ba5ae81bcb.gif" alt="手牌已满或快满的情况下，就要避免出现这种情况(被打掉卡又攒卡，再被摸到又会掉卡)" tabindex="0" loading="lazy"><figcaption>手牌已满或快满的情况下，就要避免出现这种情况(被打掉卡又攒卡，再被摸到又会掉卡)</figcaption></figure><h3 id="_9-天气雨-sunshower" tabindex="-1"><a class="header-anchor" href="#_9-天气雨-sunshower" aria-hidden="true">#</a> <strong>9.天气雨 SunShower</strong></h3><figure><img src="https://bu.dusays.com/2023/08/21/64e32b2eae8f4.png" alt="防御变得怪异程度的天气" width="255" tabindex="0" loading="lazy"><figcaption>防御变得怪异程度的天气</figcaption></figure><div style="text-align:center;"><p><strong>起始读数：74.9</strong><br><strong>读数减少条件：无(但是角色破防会散落大量天气玉)</strong></p><p><strong>效果：防御错误时直接破防（不破坏灵力珠，也不会回灵），不过空防不存在错防</strong><br><strong>已破损的灵力珠修复速度大幅加快，意味着 DD 近乎无损，还能回灵，搭配铜钱</strong></p></div><div class="hint-container info"><p class="hint-container-title">点评</p><p><strong>关键的战略天气！</strong></p><p><strong>针锋相对加速游戏节奏的天气，仅次于台风的死神，双方都需要集中 120% 的注意力</strong></p><p>天气雨的情况下 DD 无损甚至有利，会催使 DD 使用倾向增加，有人利用 DD，也会有人对策 DD</p><p>修正连：连段中停下然后继续择对手，很容易打破防，然后继续连段</p><p>五灵红光也会很快就会全都修好，所以强破灵打法要避免天气雨</p></div><figure><img src="https://bu.dusays.com/2023/08/29/64eccdad9552d.gif" alt="天气雨打破防修正示意 1458+2472 攒卡两张半 开个小幽冥继续压起身 如果对手不善于防御，可继续打破防，直到天气雨结束" width="400" tabindex="0" loading="lazy"><figcaption>天气雨打破防修正示意 1458+2472 攒卡两张半 开个小幽冥继续压起身 如果对手不善于防御，可继续打破防，直到天气雨结束</figcaption></figure><h3 id="_10-疏雨-sprinkle" tabindex="-1"><a class="header-anchor" href="#_10-疏雨-sprinkle" aria-hidden="true">#</a> <strong>10.疏雨 Sprinkle</strong></h3><figure><img src="https://bu.dusays.com/2023/08/21/64e32bc69e106.png" alt="必杀技全开程度的天气" width="255" tabindex="0" loading="lazy"><figcaption>必杀技全开程度的天气</figcaption></figure><div style="text-align:center;"><p><strong>起始读数：99.9</strong><br><strong>读数减少条件：使用必杀技时减少剩余读数的10%</strong></p><p><strong>效果：所有必杀技都暂时视为满级，至少相当于必杀技提升 40% 的伤害（必杀技等级依然保留且可以正常升级）</strong></p></div><div class="hint-container info"><p class="hint-container-title">点评</p><p>天气效益因角色而异，总体来说对必杀技升级性能提升高的角色更为有利。<br> （如各种升龙无敌、高级必杀技特殊增益、小爱增加人偶上限等）</p></div><h3 id="_11-风雨-tempest" tabindex="-1"><a class="header-anchor" href="#_11-风雨-tempest" aria-hidden="true">#</a> <strong>11.风雨 Tempest</strong></h3><figure><img src="https://bu.dusays.com/2023/08/21/64e32c26ecb0e.png" alt="借助风之力程度的天气" width="255" tabindex="0" loading="lazy"><figcaption>借助风之力程度的天气</figcaption></figure><div style="text-align:center;"><p><strong>起始读数：49.9</strong><br><strong>读数减少条件：无</strong></p><p><strong>效果：空中Dash和飞翔的使用次数增加为3次，斜向跳跃、空中Dash、地面走路、Dash的横向移动速度增加 40%</strong><br><strong>（飞翔速度和跳跃高度和 DA 等招式本身的移动速度不变）</strong></p><p>天气效果与文的 SC風符「天狗報即日限」效果不叠加，取最高值SC的2倍速<br> 系统卡「天狗团扇」是固定每级加 0.5dot/F 的速度，是加法关系，与天气或SC的效果可叠加</p></div><div class="hint-container info"><p class="hint-container-title">点评</p><p><strong>空中Dash次数的增加和移动速度的增加使得立回范围更小，适合摸奖的天气</strong></p><p>对某些角色来说进攻能力会大幅加强<br> （如蕾咪29 J44 J66等能掠过很大一片区域，文的移动和攻击范围更大，妖梦地面Dash瞬间跑到地图另一边无人追得上）</p><p>由于空中Dash的速度变快，某些带有空中Dash的连段会变得苛刻甚至连不上而需要转变连段，但也有可能实现平时连不上的连段。</p></div><h3 id="_12-晴岚-mountainvapor" tabindex="-1"><a class="header-anchor" href="#_12-晴岚-mountainvapor" aria-hidden="true">#</a> <strong>12.晴岚 MountainVapor</strong></h3><figure><img src="https://bu.dusays.com/2023/08/21/64e32c808e3a1.png" alt="看不见符卡程度的天气" width="255" tabindex="0" loading="lazy"><figcaption>看不见符卡程度的天气</figcaption></figure><div style="text-align:center;"><p><strong>起始读数：99.9</strong><br><strong>读数减少条件：消耗任意卡片时天气马上结束</strong></p><p><strong>效果：将手上的卡片重新洗牌并隐藏双方的卡槽，符力和卡片照常积攒，切卡依然有效</strong><br><strong>持有SC时可无视消耗发动SC（若SC消耗小于现有卡片量则正常消耗，若大于现有卡片则清空手头的卡片和符力）</strong></p></div><div class="hint-container info"><p class="hint-container-title">点评</p><p><strong>对准备用卡的一方不利，对手上卡片不满意想洗牌的人有利</strong></p><p>很容易演变成完全不可能得知双方卡片的情况，基本等同无法使用卡片，强行使用卡片可能会有很大风险</p><p><strong>小技巧</strong></p><ul><li><p>按住方向键左和右再用卡，会使用不出SC，但可以使用其他系统卡和吃必杀卡升级</p></li><li><p>注意按住方向键下再用卡，会使用出SC</p></li><li><p>不能主动使用的卡只能是铜钱和羽衣，部分必杀级或SC可以空中使用所以可以在空中尝试用卡，一些招数只能被SC取消，发现卡片用不出来即可排查，切卡依然有效（如果你不止一张卡的话）</p></li></ul></div><div class="hint-container info"><p class="hint-container-title">偷梁换柱 BUG</p><p>在晴岚快要发动时使用SC，在SC耗卡前让天气切换为晴岚，SC将继续进行但按照晴岚随机后的第一张手卡来耗卡和显示名字，原本的SC卡会被洗牌而不会被消耗</p><p>类似的用卡BUG还有雪天使用霸体类SC被打、台风被腐蚀药和兔子碎卡SC打等</p></div><h3 id="_13-川雾-rivermist" tabindex="-1"><a class="header-anchor" href="#_13-川雾-rivermist" aria-hidden="true">#</a> <strong>13.川雾 RiverMist</strong></h3><figure><img src="https://bu.dusays.com/2023/08/21/64e32d29a8af4.png" alt="距离变得诡异程度的天气" width="255" tabindex="0" loading="lazy"><figcaption>距离变得诡异程度的天气</figcaption></figure><div style="text-align:center;"><p><strong>起始读数：74.9</strong><br><strong>读数减少条件：无</strong></p><p><strong>效果：在自由移动的基础上，双方的距离会不停地在一定时间内拉近与推远（在使用必杀技和SC时不会受影响）</strong><br> 引力的场合，双方要靠到最近，又或者经过一定时间才会转化为斥力<br> 斥力的场合，双方要拉开约4/5个版的距离，又或者经过一定时间才会转化为引力</p></div><div class="hint-container info"><p class="hint-container-title">点评</p><p><strong>坑爹的天气，川雾降临后游戏节奏迅速下降，意味着俩人基本要原地丢弹幕干等着天气结束</strong></p><p><strong>天气启动后不利于压制，不利于连段，但是有利于逃压和摸奖，双方倾向于回到均势立回</strong></p><p>由于距离一直在不受控制的偏移，立回会变得更保守</p><p>由于容易拉开距离的关系，某些大责任招式会恰好变得难以反击。</p><p>如果你处于劣势需要逃压，那就可以控来川雾；如果处于优势需要追击压制，那就需要控走川雾</p></div><h3 id="_14-台风-typhoon" tabindex="-1"><a class="header-anchor" href="#_14-台风-typhoon" aria-hidden="true">#</a> <strong>14.台风 Typhoon</strong></h3><figure><img src="https://bu.dusays.com/2023/08/21/64e32d78d495f.png" alt="使决斗变得疯狂程度的天气" width="255" tabindex="0" loading="lazy"><figcaption>使决斗变得疯狂程度的天气</figcaption></figure><div style="text-align:center;"><p><strong>起始读数：74.9</strong><br><strong>读数减少条件：无</strong></p><p><strong>效果：双方强制进入霸体状态且不能防御，投技和 Hitstop 硬直依然有效，某些招数将在霸体状态下失效(如妖梦的未来、六根、美铃的五卡大鹏、文的幻想风靡等)</strong></p></div><div class="hint-container info"><p class="hint-container-title">点评</p><p><strong>极其重要的战略天气，死神一号，残血梦魇</strong></p><p><strong>通常会演变成互相拼血偷决，或者垂死跑跑与围追堵截，或者双方原地丢弹幕等天气结束的情况</strong></p><p>台风下，多hit弹幕粘人很好用，大范围体术(如妖梦蓝刀、蝙蝠三卡恶女、⑨大冰锤、早苗妈突、高达小飞机、美铃天龙脚等)也意味着难以躲避的直伤</p><p>控来台风，控走台风，绝对值得牺牲一点时间和收益去观察算计</p></div><h3 id="_15-无风-calm" tabindex="-1"><a class="header-anchor" href="#_15-无风-calm" aria-hidden="true">#</a> <strong>15.无风 Calm</strong></h3><figure><img src="https://bu.dusays.com/2023/08/21/64e32df905d06.png" alt=" 能使伤口愈合程度的天气" width="255" tabindex="0" loading="lazy"><figcaption> 能使伤口愈合程度的天气</figcaption></figure>',84),c={style:{"text-align":"center"}},l=t("p",null,[t("strong",null,"起始读数：99.9"),t("br"),t("strong",null,"读数减少条件：回复开始，或者回复效果转移时减少剩余读数的10%")],-1),h=t("strong",null,"效果：倒地或被命中的一方，的对手，可持续回复体力。回复效果转移时会增大单位回复量（初始是每10F即0.5读数回8血，转移一次再加3，最多加到20即转移4次）",-1),f=t("br",null,null,-1),u={href:"https://www.bilibili.com/video/BV1Tz4y1X76t/",target:"_blank",rel:"noopener noreferrer"},b=i('<div class="hint-container info"><p class="hint-container-title">点评</p><p>随缘回血，不知道什么时候又被对面夺得机会了</p><p>全程带着回血效果来压制对手或龟防对手保持回血能获得 1000+ 回血</p><p>双方同时互相命中而回复效果消失时也算一次转移</p></div><h3 id="_16-钻石尘-diamonddust" tabindex="-1"><a class="header-anchor" href="#_16-钻石尘-diamonddust" aria-hidden="true">#</a> <strong>16.钻石尘 DiamondDust</strong></h3><figure><img src="https://bu.dusays.com/2023/08/21/64e32e51d6c57.png" alt="睡着就会死程度的天气" width="255" tabindex="0" loading="lazy"><figcaption>睡着就会死程度的天气</figcaption></figure><div style="text-align:center;"><p><strong>起始读数：99.9</strong><br><strong>读数减少条件：天气效果触发时减少10.0读数</strong></p><p><strong>效果：起身时追加 500 伤害(无视无敌，但不致死)，并且不能异地起身</strong></p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p><strong>注意天气效果是在起身时判定，而不是倒地时判定</strong></p><p>若倒地时是钻石尘，起身时天气结束，将不受伤害且可以异地起身<br> 若倒地时不是钻石尘，起身前天气来临，还是会受到伤害且不可以异地起身，很容易误按异地起身导致起身没有拉防被打</p></div><div class="hint-container info"><p class="hint-container-title">点评</p><p><strong>危险的天气</strong></p><p>简单明了，对压制方绝对有利，被压制方的压力会非常大，很容易陷入被连续压制的绝境</p><p>进攻方可以从对手倒地中获利且压起身更容易，还可以趁机提前设置不可防御或者暴力削灵的招式，又或是故意让对方可以受身并用空防不可的招数抓受身</p><p>对应的防守方要注意不要为了避免倒地而盲目空中受身，倒地起身时要更集中注意观察对手的压制套路，版中时还需要注意原地起身的打逆</p></div><figure><img src="https://bu.dusays.com/2023/09/01/64f0d695324fc.gif" alt="钻石尘连续压制，兔子惨被UU无伤" width="400" tabindex="0" loading="lazy"><figcaption>钻石尘连续压制，兔子惨被UU无伤</figcaption></figure><figure><img src="https://bu.dusays.com/2023/09/01/64f0d6a67c40e.gif" alt="钻石尘针对原地起身的打逆" width="400" tabindex="0" loading="lazy"><figcaption>钻石尘针对原地起身的打逆</figcaption></figure><h3 id="_17-黄砂-duststorm" tabindex="-1"><a class="header-anchor" href="#_17-黄砂-duststorm" aria-hidden="true">#</a> <strong>17.黄砂 DustStorm</strong></h3><figure><img src="https://bu.dusays.com/2023/08/21/64e32ebcbe21c.png" alt="反击程度的天气" width="255" tabindex="0" loading="lazy"><figcaption>反击程度的天气</figcaption></figure><div style="text-align:center;"><p><strong>起始读数：99.9</strong><br><strong>读数减少条件：出现Counter Hit时减少剩余读数的25%</strong></p><p><strong>效果：能打康的招式任何情况下(甚至包括破防后，不包括连段中途)命中都会触发打康 CounterHit</strong><br><strong>且打康的追击时间从原来的 1.5倍 变为 2倍</strong></p></div><div class="hint-container info"><p class="hint-container-title">点评</p><p>黄砂天气下，DD 小跳 44 后摇硬直 等地方被抓到也会吃康，失误的代价会更大</p><p>此外，依靠额外的追击时间还有可能进行特殊限定连段</p></div><div class="hint-container warning"><p class="hint-container-title">区分美铃的虎劲状态与黄砂天气</p><p>黄砂与美铃的虎劲状态不同，美铃的虎劲状态是“所有打击技附加打康效果”，黄砂则是“带打康效果的招式一定可以打康”</p><p>举个例子，美铃的虎劲状态不能让C弹幕打康，黄砂不能让4A打康，不过这两者的效果可以重叠。</p></div><figure><img src="https://bu.dusays.com/2023/09/01/64f0ca6752ff1.gif" alt="黄砂打康追击时间长，限定连段" width="350" tabindex="0" loading="lazy"><figcaption>黄砂打康追击时间长，限定连段</figcaption></figure><figure><img src="https://bu.dusays.com/2023/09/01/64f0ca6604417.gif" alt="普通打康，对手落地前可以受身" width="350" tabindex="0" loading="lazy"><figcaption>普通打康，对手落地前可以受身</figcaption></figure><h3 id="_18-烈日-scorchingsun" tabindex="-1"><a class="header-anchor" href="#_18-烈日-scorchingsun" aria-hidden="true">#</a> <strong>18.烈日 ScorchingSun</strong></h3><figure><img src="https://bu.dusays.com/2023/08/21/64e32f2496075.png" alt="烧尽一切程度的天气" width="255" tabindex="0" loading="lazy"><figcaption>烧尽一切程度的天气</figcaption></figure><div style="text-align:center;"><p><strong>起始读数：99.9</strong><br><strong>读数减少条件：无</strong></p><p><strong>效果：在高空血量会不断减少，符力会不断增加，攻击力也会增加</strong><br><strong>（攒卡与加伤互相之间没有关联，均独立与角色高度有关）</strong></p></div><div class="hint-container info"><p class="hint-container-title">点评</p><p>空中的立回和压制等行动会被天气稍微影响一下，有利有弊，另外就算是无敌的情况血量也会被削减</p><p>某些从高空攻击招式能显著增加伤害（如文的五卡 幻想风靡）</p><p>体力削减在小跳高度顶端就会开始，最低时1HP/F，最高时10HP/F<br> 攻击力增加的效果在场景高度一半的位置约为1.15倍，在场景最高处约为1.35倍</p><p>攒卡大约是损失1150HP获得500符力（即一张卡），差不多是普通损血攒卡的10倍（10000血攒一张卡）<br> 必要时可以考虑减少自己的HP来换取卡片资源（空血时可以白嫖无损攒卡）</p><p>小技巧：中途拿本时可以高飞蹭一会儿，一般能攒1张卡，注意在血量回复前回到地面上，否则下回合的血会被扣掉不划算</p></div><figure><img src="https://bu.dusays.com/2023/09/01/64f0cdcad08d5.gif" alt="阴险小套路——烈日高飞攒卡，打逆双重日" width="400" tabindex="0" loading="lazy"><figcaption>阴险小套路——烈日高飞攒卡，打逆双重日</figcaption></figure><h3 id="_19-梅雨-monsoon" tabindex="-1"><a class="header-anchor" href="#_19-梅雨-monsoon" aria-hidden="true">#</a> <strong>19.梅雨 Monsoon</strong></h3><figure><img src="https://bu.dusays.com/2023/08/21/64e32fa9f3e47.png" alt="会被大地弹起程度的天气" width="255" tabindex="0" loading="lazy"><figcaption>会被大地弹起程度的天气</figcaption></figure><div style="text-align:center;"><p><strong>起始读数：99.9</strong><br><strong>读数减少条件：弹地或弹墙时减少剩余读数的25%</strong></p><p><strong>效果：第一次倒地或弹墙时强制追加特大等级攻击的弹墙弹地回转效果（增加追击时间7F，即使已经没有追击时间了也会增加）</strong><br><strong>部分招式（比如JA、J8A、升龙等）打康在此天气下也会触发弹墙，有利有弊</strong></p></div><div class="hint-container info"><p class="hint-container-title">点评</p><p><strong>容易被忽视的连段特化天气</strong></p><p>所有招式命中后都会追加回转反弹的效果，部分原有连段需要做出改变，而且此天气下有很多特化的强力限定连。</p><p>对于能打出圈的连段，该天气可以增加连段后的有利时间<br> 对于不能打出圈的连段，该天气可能可以让对手有机会受身而不倒地</p><p>虽然说追击变得容易，但是招式总体的追击时间是不变的，超过追击时间对手即可受身<br> 若是对手不受身，我们就可以利用倒地反弹时给的7F追击时间继续进行追击（称之为伪连）</p><p>回转反弹的高度与招式的攻击等级有关，轻攻击的反弹小，重攻击的反弹大</p></div><figure><img src="https://bu.dusays.com/2023/09/01/64f0cff45ebc9.gif" alt="一个妖梦板边A起手 梅雨限定连" width="400" tabindex="0" loading="lazy"><figcaption>一个妖梦板边A起手 梅雨限定连</figcaption></figure><figure><img src="https://bu.dusays.com/2023/09/01/64f0d0924bd4f.gif" alt="一个妖梦近板空转地带入SC 梅雨限定连" width="400" tabindex="0" loading="lazy"><figcaption>一个妖梦近板空转地带入SC 梅雨限定连</figcaption></figure><h3 id="_20-极光-aurora" tabindex="-1"><a class="header-anchor" href="#_20-极光-aurora" aria-hidden="true">#</a> <strong>20.极光 Aurora</strong></h3><figure><img src="https://bu.dusays.com/2023/08/21/64e3300752dcf.png" alt="不知会发生什么程度的天气" width="255" tabindex="0" loading="lazy"><figcaption>不知会发生什么程度的天气</figcaption></figure><div style="text-align:center;"><p><strong>起始读数：因随机天气而定</strong><br><strong>读数减少条件：因随机天气而定</strong></p><p><strong>效果：随机发动前面 19 种天气中的一种，读数和效果都完全等同于随机到的天气</strong></p></div><div class="hint-container info"><p class="hint-container-title">点评</p><p><strong>天气版晴岚，对局中的不稳定因素</strong></p></div><div class="hint-container tip"><p class="hint-container-title">极光速查</p><p><strong>【一、看天气起始读数】 （注意天气剑激活是固定99.9开始）</strong></p><p><strong>花云、风雨</strong> 的起始读数是 <strong>49.9</strong><br><strong>天气雨、台风、川雾</strong> 的起始读数是 <strong>74.9</strong><br> 其余天气 的起始读数是 <strong>99.9</strong></p><p><strong>【二、从明显到隐蔽，警惕观察对局内情况】</strong></p><p>卡组被隐藏，是<strong>晴岚</strong></p><p>移速变快，是<strong>风雨</strong></p><p>双方位置自动变化，是<strong>川雾</strong></p><p>防御和擦弹时掉落大量天气玉，是<strong>花云</strong></p><p>攒卡速度变快或 SC 闪光卡片数减少，是<strong>云天</strong></p><p>无法防御、防御中被直接击中呈霸体，是<strong>台风</strong></p><p>DD或原先破损的灵力珠极速修复是<strong>天气雨</strong></p><p>DD不爆灵也不回灵或发现飞翔性能提升，是<strong>快晴</strong></p><p>输出方回血，是<strong>浓雾</strong></p><p>有人符力减少甚至掉卡，是<strong>雪天</strong></p><p>发现必杀呈满级效果，是<strong>疏雨</strong></p><p>触发回血，是<strong>无风</strong></p><p>发现弹墙弹地，是<strong>梅雨</strong></p><p>发现倒地不能异地且损血，是<strong>钻石尘</strong></p><p>本不该打康的时候康了，是<strong>黄砂</strong></p><p>高空掉血涨符力，是<strong>烈日</strong></p><p>回灵速度加快，是<strong>雹天</strong></p><p>最后只剩下一个不易直接发现的只增加SC伤害的，<strong>雾雨</strong></p></div><figure><img src="https://bu.dusays.com/2024/01/21/65acd9ff771ca.webp" alt="" width="400" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://bu.dusays.com/2024/01/21/65acda13b5204.webp" alt="" width="400" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://bu.dusays.com/2024/01/21/65acda2387929.webp" alt="解锁成就：控天小子" width="400" tabindex="0" loading="lazy"><figcaption><s>解锁成就：控天小子</s></figcaption></figure><p>感谢你看完整篇文章</p>',35);function y(m,v){const r=a("ExternalLinkIcon");return o(),g("div",null,[d,t("div",c,[l,t("p",null,[h,f,n(" 具体可参考这个视频： "),t("a",u,[n("【东方非想天则】投技与凪的机制详解 - 伪翔十字凤"),e(r)])])]),b])}const w=s(p,[["render",y],["__file","weather.html.vue"]]);export{w as default};
