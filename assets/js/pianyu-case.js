function renderPianyuCase() {
 const stages=[
 ['导入','先留住一本书，再改变进入它的方式。','读者导入有权使用的 TXT 或 EPUB，默认大小上限 30 MB。解析器得到书名、章节和规范化正文；原文件、整理后的文本和章节数据都会保留在部署端。同内容文件通过哈希识别，避免重复导入。','输入：小说文件','输出：书籍、章节、原文','从自己的书库开始探索。'],
 ['切分','先找适合停顿的地方，不按固定字数截一刀。','系统先把段落组织成带编号的文本单元。引号未闭合、问句后紧跟回答、连续对话等情况会尽量合并；章节结束、时间与地点变化、分隔符和长度共同参与边界评分。之后再把单元组成分析批次。','输入：章节正文','输出：文本单元与候选边界','结合段落、对话与章节线索保护片段完整性。'],
 ['标注','让模型判断边界与情绪，不让模型重写小说。','AI 分支把带编号的文本单元交给模型，要求返回片段的起止编号、主要情绪、情节标签、强度等结构化信息。正文由服务器按原文编号拼接。演示采用确定性切分与关键词标签。','输入：原文单元、边界提示、标签口径','输出：起止编号与标签','正式 AI 分析会发送正文给所选服务商，需要先同意。'],
 ['校验','检查编号、重叠和覆盖，再生成可读片段。','后端拒绝不存在的编号、倒置或重叠范围；符合限制的短缺口可以修补，无法完整覆盖则报错。过长片段还会按原子边界再切分。最终保存的是原文内容与标签的关联，而非模型生成的故事。','输入：模型返回的片段草稿','输出：校验后的片段、标签、全文索引','结构正确不等于标签准确；修补缺口或再切分也可能影响标签适配。'],
 ['阅读','同一份原文，拥有多种进入路径。','完成分析的书籍进入书架与发现流。可以顺序阅读、按情绪或情节筛选，也可以稳定乱序浏览；同一轮顺序由随机种子保持，换一批才换种子。支持按正文、书名与章节搜索。','输入：已完成分析的片段','输出：发现卡片、完整阅读、收藏与阅读位置','顺序、随机与标签筛选提供不同的阅读入口。']
 ];
 const head=(n,t,p)=>`<header class="py-heading"><span>${n}</span><h2>${t}</h2><p>${p}</p></header>`;
 const card=(n,t,p)=>`<article class="py-copy"><span>${n}</span><h3>${t}</h3><p>${p}</p></article>`;
 const shot=(n,t,p)=>`<figure class="py-shot"><a href="/assets/images/pianyu-mobile-${n}.png?v=public-privacy-20261116" target="_blank" rel="noreferrer" aria-label="查看原图：${t}"><img src="/assets/images/pianyu-mobile-${n}.png?v=public-privacy-20261116" alt="${t}" loading="lazy" width="390" height="844"></a><figcaption><strong>${t}</strong><span>${p} · 点击查看原图</span></figcaption></figure>`;
 document.title='片羽 STORY CUTS · 从一句心动，重新走进故事｜AI 产品作品集';document.body.className='py-case';
 document.body.innerHTML=`${commonHeader}<main id="main">
 <section class="py-hero"><div class="shell"><a class="py-back" href="/?v=navigation-20261116#work">← 全部项目</a><div class="py-hero-grid"><div><span class="py-kicker">片羽 · STORY CUTS / 阅读体验设计</span><h1>有时候，想读的<br>不是下一章，<em>而是某一种心情。</em></h1><p>把自己的小说整理成有情绪、有情节、有来处的片段。先偶遇一句打动人的台词，再走进它所在的故事。</p><div class="py-pills"><span>私人小说书库</span><span>情绪片段发现</span><span>原文阅读与回看</span></div><a class="py-link" href="#py-discover">从一次偶遇开始 ↓</a></div><aside class="py-cover"><span>晚风替我说 / 原创演示文本</span><blockquote>“我以为你正好有两把。”<br><br>“我在雨里走回去的。”</blockquote><div><span>♡ 甜</span><span>∿ 暧昧</span></div><p>一句话是入口，完整的情节才是阅读。<br>演示数据 · 规则标签。</p></aside></div></div></section>
 <nav class="shell py-nav" aria-label="案例章节"><a href="#py-discover">发现故事</a><a href="#py-read">进入阅读</a><a href="#py-context">补回上下文</a><a href="#py-pipeline">片段怎样产生</a><a href="#py-cost">等待与成本</a><a href="#py-review">产品复盘</a></nav>
 <section class="shell py-section" id="py-discover">${head('01 / 从“想看什么”出发','不记得章节，也能重新遇见那段故事。','传统目录按书和章节组织内容，片羽增加了另一条路径：我现在想看甜的、紧张的，或只想随机读一段。发现页在已导入且分析完成的书中浏览，不从互联网抓取小说。')}
 <div class="py-mobile-gallery">${shot('discover','01 / 带着心情，遇见故事','手机视口实拍 · 发现与搜索')}${shot('cards','02 / 一句台词，成为入口','手机视口实拍 · 原文卡片')}${shot('tags','03 / 选择现在想读的内容','手机视口实拍 · 标签与阅读顺序')}</div>
 <div class="py-three">${card('01','先给一个可感知的入口','卡片呈现一段原文台词、简短预览、情绪和章节，让读者决定是否进入。卡片摘句从原文选择，保留故事本来的表达。')}${card('02','把筛选写成阅读语言','“甜、虐、搞笑”等情绪与“暧昧、冲突、高能”等情节提供不同入口。搜索框匹配角色名、台词等文本；不存在专门的人物实体检索系统。')}${card('03','偶遇，但不反复打乱','同一随机种子保持本轮排序，分页继续取后续内容；点击换一批才改变顺序。精选卡片按标签与强度等规则挑选，为读者提供进入故事的线索。')}</div>
 </section>
 <section class="py-section py-rose" id="py-read"><div class="shell">${head('02 / 从一句话进入一段情节','打开之后，读到的是原文，不是摘要。','发现页负责激起兴趣，阅读页负责承接兴趣。情绪封面、正文纸页、收藏与前后文分开组织，减少读者在阅读中处理控制项的负担。')}
 <div class="py-reading"><div class="py-phone">${shot('mobile-reader','手机阅读实拍：正文与操作分层','已实际点击收藏')}</div><div><div class="py-reading-intro"><span>同一个片段 / 两种深度</span><h3>卡片让我想读，<br>正文让我留下。</h3><p>打开“你六年前就想把伞借给我？”所在的片段，能读到两人的完整互动。当前例子有 592 字；阅读页同时保留书名、章节、情绪标签和情绪强度提示。</p></div>${card('①','正文有自己的阅读空间','长内容在正文区域阅读，片段之间还能继续浏览。标签提供定位线索，不替代原文。封面颜色帮助辨识阅读氛围。')}${card('②','阅读方式随时可切换','快捷标签适合常用选择；更多面板把情绪、情节和精选标签分组，并提供顺序、乱序及换一批入口。顺序阅读依原文片段顺序，发现入口则支持跨书混合。')}${card('③','收藏与阅读位置分别保存','收藏用于主动留下喜欢的片段，阅读位置用于继续上次浏览。位置按书籍或发现范围、标签、收藏筛选、排序与搜索条件区分，不把不同阅读列表混成一个进度。')}</div></div>
 </div></section>
 <section class="shell py-section" id="py-context">${head('03 / 片段化，不等于切断上下文','“为什么说这句话？”应该有地方可以回去看。','随机读到告白、争执或反转时，读者可能缺少前因。片羽保留文本单元的位置，点击前后文会取回当前片段与邻近单元，并高亮当前部分。')}
 <div class="py-mobile-story">${shot('context','补回上下文，不打断阅读','手机视口实拍 · 当前片段高亮')}<div class="py-mobile-notes">${card('设计意图','让偶遇可以回到叙事','读者不必从片段页退出后再猜它属于哪里。前后文弹层保留章节标题与原文高亮，降低重新定位的成本，也让读者有机会核对片段的真实语境。')}${card('当前边界','随时回看片段前后文','默认展示前后各 2 个文本单元，并高亮当前片段；沿原文位置补充情节，让偶遇的片段有上下文可循。')}</div></div>
 </section>
 <section class="py-section py-night" id="py-pipeline"><div class="shell">${head('04 / AI 在哪里发挥作用','读者看到一张卡片之前，原文经历了什么？','点击下面的阶段，逐步查看输入、处理与输出。这里解释当前实现，不会上传文件或调用模型。')}
 <div class="py-tabs" role="group" aria-label="片段生成流程">${stages.map((s,i)=>`<button data-py-stage="${i}" aria-pressed="${i===0}" aria-controls="py-stage-panel">0${i+1} ${s[0]}</button>`).join('')}</div><div id="py-stage-panel" class="py-stage-panel" aria-live="polite"></div>
 <div class="py-taxonomy"><div><span>主要情绪 / 只能选一个</span><p>甜 · 虐 · 搞笑 · 紧张<br>热血 · 治愈 · 压抑 · 平静</p></div><div><span>情节标签 / 最多两个</span><p>暧昧 · 日常 · 冲突 · 悬疑<br>烧脑 · 反转 · 高能 · 成长</p></div><div><span>精选标记 / 可为空</span><p>名场面 · 关键剧情</p><small>另有情绪强度与置信度字段</small></div></div>
 <aside class="py-note"><strong>给标签定义判断口径，而不只是提供一串词。</strong><p>正式 AI 提示词区分“笑了”与“搞笑”、“争吵”与“虐”、“动作场面”与“热血”，试图降低标签漂移。演示采用关键词模式，AI 模式按这套口径进行语义标注。</p></aside>
 </div></section>
 <section class="shell py-section" id="py-cost">${head('05 / 等待、费用和复用也是体验','一本长小说的分析，不应该是一个没有解释的转圈。','导入先得到书籍与预估费用，再决定是否分析。后台 Worker 处理批次，任务记录进度、花费和错误，前端呈现分析状态；失败与预算暂停有明确状态，不伪装成已完成。')}
 <div class="py-mobile-gallery py-mobile-pair">${shot('library','自己的书，自己的阅读入口','手机视口实拍 · 私人书架首页')}${shot('books','导入之后，留在书架里','手机视口实拍 · 原创样本与分析结果')}</div>
 <div class="py-three">${card('成本保护','调用前检查预算，调用后记录费用','单任务预算默认 5 元，暂停阈值默认 4.5 元；批次开始前检查累计费用。OpenRouter 返回实际 cost 时使用它，否则回退估算。阈值不是支付硬限额，单次请求可能跨过阈值。')}${card('结果复用','让已完成的工作尽量不白做','文件哈希用于识别重复上传；分析签名记录解析器、切分器、提示词、标签体系及模型等版本。失败或暂停任务可复用符合条件的批次响应；匹配的结果可以复用，减少重复分析。')}${card('数据边界','私人书库，也需要明确授权','原文件与分析结果保存在部署端，便于持续阅读和复用。正式分析会把正文发送给服务商；上传者需要拥有相应使用权限。')}</div>
 </section>
 <section class="py-section py-paper" id="py-review"><div class="shell">${head('06 / 产品判断与验证','从情绪出发，发现一种新的重读方式。','片羽把已有小说从“按目录找”扩展为“按情绪遇见”，同时保留原文、章节和回看路径。它的产品价值在发现与阅读的连接处，而不只在模型标签上。')}
 <div class="py-three">${card('内容组织','用情绪与情节重组入口','一本书可以同时出现在顺序阅读、随机发现、标签筛选与收藏中，不需要生成多份正文。标签结构服务于阅读选择，而不是把文本分析结果原样堆到页面上。')}${card('体验取舍','轻量发现与完整理解之间找平衡','卡片降低开始阅读的门槛，完整片段与前后文保留理解空间。围绕片段完整度、预览信息量与标签可理解性持续优化。')}${card('下一步评估','衡量读者有没有真正读下去','待测指标包括卡片打开率、片段读完率、前后文使用率、收藏后回访率；内容侧要评估边界完整度和标签一致性。用于后续评估阅读体验。')}</div>
 
 <div class="py-credit"><p>截图与引用均来自项目提供的原创演示文本。</p></div>
 </div></section></main>${commonFooter}`;
 function select(i){const s=stages[i];document.querySelectorAll('[data-py-stage]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.pyStage)===i)));document.getElementById('py-stage-panel').innerHTML=`<span>阶段 0${i+1} / ${s[0]}</span><h3>${s[1]}</h3><p>${s[2]}</p><div class="py-io"><span>${s[3]}</span><span>${s[4]}</span></div><small>${s[5]}</small>`;}
 document.querySelectorAll('[data-py-stage]').forEach(b=>b.addEventListener('click',()=>select(Number(b.dataset.pyStage))));select(0);
}
