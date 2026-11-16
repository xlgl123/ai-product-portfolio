function renderHengqiCase() {
  const cases = [
    {label:'验收与尾款',id:'text-p7',title:'交付了，不代表尾款有了时间表。',quote:'合同总价为人民币100,000元。合同签订后支付20%，系统上线并经甲方验收合格后支付剩余80%。',impact:'对方可能长期不确认验收，从而推迟尾款或要求持续修改。',ideal:'约定收到验收材料后5个工作日内反馈，逾期未书面异议视为通过。',compromise:'约定10个工作日内一次性书面反馈，逾期视为通过。',bottom:'验收必须有固定期限。',talk:'当前验收没有时间边界，会影响双方项目结项，建议增加明确反馈期限。',note:'规则汇总含“验收”等关键词的文本，检查是否存在期限或逾期处理约定。本例引用的是付款关联段落；核对时还要阅读第四条验收，不能只看高亮的一段。'},
    {label:'知识产权',id:'text-p13',title:'卖的是定制成果，还是全部技术积累？',quote:'本项目形成的全部成果、源代码、通用组件、开发工具及相关知识产权均归甲方所有，乙方不得再次使用。',impact:'我方可能失去复用通用代码和既有技术资产的权利。',ideal:'客户取得已付费定制成果权利；我方既有技术、通用组件和工具仍归我方。',compromise:'对定制成果转让，但为我方保留通用能力和非客户专属部分的复用权。',bottom:'既有技术与通用组件不得无偿整体转让。',talk:'为区分本项目定制成果与我方既有技术，建议补充知识产权边界。',note:'这里展示的是系统对资产边界的风险提示，不是宣布条款无效。负责人需要核对哪些既有能力也被写进了转让范围。'},
    {label:'单方解除',id:'text-p17',title:'项目可以停，已经投入的成本怎么办？',quote:'甲方有权根据经营需要随时单方解除本合同，无需承担违约责任。合同解除后的结算由甲方另行决定。',impact:'我方前期投入可能无法回收，项目资源安排也会受到影响。',ideal:'仅在重大违约且整改期届满后解除；无过错解除应结算已完成工作并补偿承诺成本。',compromise:'允许提前通知解除，但必须支付已完成工作和不可撤销成本。',bottom:'解除时已完成工作必须结算。',talk:'可以保留项目调整空间，但建议同步明确终止时的工作量确认和结算。',note:'系统把“是否可以解除”和“解除后如何结算”放在一起提示。是否接受解除权、怎样调整补偿，需要结合交易背景人工判断。'}
  ];
  const head=(n,t,p)=>`<header class="hq-heading"><span>${n}</span><h2>${t}</h2><p>${p}</p></header>`;
  const card=(n,t,p)=>`<article class="hq-card"><span class="hq-number">${n}</span><h3>${t}</h3><p>${p}</p></article>`;
  const shot=(name,t,p)=>`<figure class="hq-shot"><a href="/assets/images/${name}.png?v=public-privacy-20261116" target="_blank" rel="noreferrer" aria-label="查看原图：${t}"><img src="/assets/images/${name}.png?v=public-privacy-20261116" alt="${t}" loading="lazy"></a><figcaption><strong>${t}</strong><span>${p} · 点击查看原图</span></figcaption></figure>`;
  document.title='衡契 · 从风险提示到签约前行动｜AI 产品作品集';
  document.body.className='hq-case';
  document.body.innerHTML=`${commonHeader}<main id="main">
    <section class="hq-hero"><div class="shell"><a href="/?v=navigation-20261116#work" class="hq-back">← 全部项目</a><div class="hq-hero-grid"><div><span class="hq-kicker">衡契 / CONTRACT LENS</span><h1>签字之前，<br>看清风险，也知道怎么谈。</h1><p>面向缺少专职法务的中小企业，把一份合同变成有原文依据、有经营后果、有修改方案的风险清单。AI 辅助理解，规则提供基础检查，人保留最后的判断。</p><div class="hq-tags"><span>合同审查辅助</span><span>规则 + 可选 AI</span><span>原文可追溯</span></div><a class="hq-action" href="#hq-example">用一份合同走完审查过程 ↓</a></div><aside class="hq-cover"><div class="hq-file-label">一份待签的技术服务合同 <span>示例</span></div><h2>项目总价 ¥100,000</h2><p>20% 签约支付<br><mark>80% 验收后支付</mark></p><div class="hq-cover-note"><span>需要问清的问题</span><strong>谁来验收？多久反馈？<br>一直不确认，又怎么办？</strong></div><footer>产品的起点，是把模糊的不安变成具体的问题。</footer></aside></div></div></section>
    <nav class="shell hq-nav" aria-label="案例章节"><a href="#hq-example">真实工作台</a><a href="#hq-intake">合同如何进入</a><a href="#hq-engine">规则与 AI</a><a href="#hq-evidence">逐项核对</a><a href="#hq-action">协商与交付</a><a href="#hq-boundary">边界与复盘</a></nav>
    <section class="hq-section shell" id="hq-example">${head('01 / 从真实场景出发','不止问“能不能签”，还要知道先改哪里。','假设一家软件工作室准备承接客户管理系统开发。合同约定 60 日上线，却把验收、成果归属和解除后的结算留给对方决定。负责人需要在签约前找出影响回款与交付的关键问题。')}
      <div class="hq-summary"><div><b>我方立场</b><span>乙方 / 服务提供方</span></div><div><b>示例结果</b><span>7 项风险 · 5 高 / 2 中</span></div><div><b>示例模式</b><span>本地规则 · 未调用外部 AI</span></div></div>
      ${shot('hengqi-case-workspace','实际运行：选择一项风险，原文和建议同步切换','项目自带演示合同')}
      <div class="hq-three">${card('①','先决定看什么','左侧是按优先级排列的风险。可以按等级、处理状态筛选，或搜索风险和条款，不必先读完一整篇分析。')}${card('②','立即回到原文','中间保留本次合同全文，选中风险会定位到对应文本块。负责人可以连同前后条款一起核对，不只相信结论。')}${card('③','看到下一步行动','右侧解释经营后果，并给出理想修改、折中方案、底线与沟通话术。风险识别连接到实际协商，而不是停在红色警告。')}</div>
    </section>
    <section class="hq-section hq-soft" id="hq-intake"><div class="shell">${head('02 / 输入与解析','先明确站在哪一方，再把合同变成可定位的文本。','支持文件上传或粘贴文本。关键不是多一个上传框，而是从进入系统开始就保留“这一条判断来自哪里”。')}
      <div class="hq-two"><div>${shot('hengqi-case-entry','真实入口：我方身份、合同输入与 AI 模式','截图来自隔离演示环境')}</div><div class="hq-steps"><article><span>1</span><div><h3>选择我方身份</h3><p>服务提供方、客户方、销售方或采购方。身份会进入审查上下文；当前本地规则的立场适配仍有限，不能理解成四套完整的专业审查模型。</p></div></article><article><span>2</span><div><h3>检查格式与大小</h3><p>支持 DOCX、文本型 PDF、TXT；默认上传上限 10 MB，解析文本上限 12 万字符。旧版 DOC 和扫描 PDF 需要先转换，当前没有 OCR 能力。</p></div></article><article><span>3</span><div><h3>拆成带位置的文本块</h3><p>解析器保留段落、表格或页码等来源信息，并分配文本块编号。规则和 AI 都基于这些块工作，风险引用也用同一套编号。</p></div></article></div></div>
      <aside class="hq-note"><strong>合同全文不入库，不等于合同永远不离开本机。</strong><p>文件在内存中解析；连接外部 AI 后，合同文本块会发送给所选服务商。本地规则模式不调用外部模型。使用真实合同前，仍要确认数据授权、部署环境和供应商的数据处理政策。</p></aside>
    </div></section>
    <section class="hq-section shell" id="hq-engine">${head('03 / 审查逻辑','规则先检查，AI 再补充，结果不能直接照单全收。','两种能力有不同的任务和约束：规则负责已知问题的基础检查，AI 被要求补充跨条款矛盾和语义模糊；之后再经过结构、引用和合并处理。')}
      <div class="hq-engine"><article><span>基础检查 · 无密钥也可运行</span><h3>本地规则</h3><p>查找付款、验收、知识产权、责任、解除等相关文本，结合关键词与模式判断触发条件。例如找到验收关联条款后，再检查有没有反馈期限或逾期处理约定。</p><p>输出是结构化风险：原文位置、经营后果、修改方案，以及可绑定的依据编号。覆盖常见经营风险，供负责人开展初筛与复核。</p></article><article><span>可选补充 · 需要外部模型</span><h3>AI 审查</h3><p>模型接收我方立场、带编号的合同文本和已发现的规则风险。提示词要求不重复既有问题，最多补充 5 项重要风险，并输出固定结构。</p><p>合同内容被视作不可信输入；提示词明确要求不要执行合同内的指令。AI 不能自行添加法条编号，并由后处理校验输出。</p></article></div>
      <div class="hq-gates">${card('01','检查结构','逐项解析和归一字段，单条格式问题不拖垮整份报告。JSON 异常时尝试一次精简重试；调用失败则退回规则结果，并明确提示降级。')}${card('02','核对原文','已有条款风险必须引用真实块编号，且规范化后的引用必须出现在对应文本中；无法核对就忽略。缺失条款允许空引用，引导负责人进一步核对合同约定。')}${card('03','限制法律结论','AI 风险的法条绑定会被清空，默认作为商业风险提示。后端对标题、风险说明和经营后果中的特定法律断言做匹配处理，将输出聚焦于商业风险提示。')}${card('04','去重与排序','按风险领域和首个引用块合并；部分领域优先保留本地规则。先按高、中、低排序，再考虑付款、数据、知识产权等经营领域。让重要问题优先进入处理视野。')}</div>
      <div class="hq-engine-foot"><strong>界面必须让人分得清：规则演示 / 规则 + AI / AI 失败后降级。</strong><p>本页界面采用规则演示模式，展示完整的原文核对与处置流程。</p></div>
    </section>
    <section class="hq-section hq-ink" id="hq-evidence"><div class="shell">${head('04 / 一项风险，如何被理解','把“有风险”展开成可以核对的理由。','下面可切换三项案例。原文与建议摘自本次实际规则输出，标题和说明为作品集讲解；这是案例浏览，不会运行新的合同分析。')}
      <div class="hq-case-switch" role="group" aria-label="选择风险案例">${cases.map((c,i)=>`<button type="button" data-hq-case="${i}" aria-pressed="${i===0}" aria-controls="hq-case-content">0${i+1} ${c.label}</button>`).join('')}</div><div id="hq-case-content" class="hq-case-content" aria-live="polite"></div>
      <p class="hq-disclaimer">示例用于解释产品交互与输出结构，不构成针对真实交易的法律意见。建议中的期限是协商方案，不是统一法定期限。</p>
    </div></section>
    <section class="hq-section shell">${head('05 / 两种依据，不能混在一起','原文支持“合同写了什么”；法条支持“如何理解它”。','前者检验引用是否真实，后者仍要核对来源、适用条件和维护日期。将原文定位、来源与适用条件放在一起，支持负责人复核。')}
      ${shot('hengqi-case-basis','实际运行：展开法律依据，查看适用说明与边界','展示项目内置依据库；项目内置依据库')}
      <div class="hq-two">${card('原文证据','保留上下文，不只截取一句话','在当前会话中可以定位和高亮全文。缺失型风险不伪造引用位置，而是提示需要补充条款。本例验收风险引用了付款关联段，仍需回看验收条款；后续应改进多条款证据聚合。')}${card('法律依据','由维护的依据库提供，不让模型自由引用','本地规则通过依据编号关联条文摘要、适用说明、限制、官方来源和人工核验日期。没有直接依据时明确说明是经营风险。依据库保留版本与核验日期，便于持续维护。')}</div>
    </section>
    <section class="hq-section hq-soft" id="hq-action"><div class="shell">${head('06 / 从阅读到处置','给出的不只是一份分析，还有可以带去沟通的材料。','经营负责人往往不能要求对方接受全部理想条件。因此产品同时保留“想争取什么”“可以退到哪里”和“怎样说”，把风险提示转成协商准备。')}
      <div class="hq-three">${card('方案','理想修改与折中方案','建议文本可以复制，但不会自动改写原合同。人需要结合真实交付能力、议价空间和专业意见决定是否使用。')}${card('行动','采用、沟通或暂时忽略','点击处置按钮后，单项状态与整体进度同步更新；忽略前需要确认，风险仍保留。已处理不等于对方已同意，也不等于风险已消失。')}${card('交付','生成可继续办公的 Word 报告','导出总览、逐项原文、经营后果、协商方案、法律依据与处理状态。报告带有辅助识别用途说明，可继续交给负责人或专业人员复核。')}</div>
      ${shot('hengqi-case-handled','实际运行：采用验收建议后，处置进度从 0/7 变为 1/7','处置进度与 Word 报告联动')}
      <div class="hq-report"><div><span>报告示例</span><h3>看看离开工作台之后的交付物</h3><p>示例包含 7 项规则风险与“验收建议已采用”的处置状态。没有私人合同或 API 密钥。</p></div><a href="/assets/downloads/hengqi-sample-report.docx" download>下载示例 Word 报告 ↗</a></div>
      <aside class="hq-note"><strong>当前的保存边界</strong><p>数据库只保存结构化结果，不保存合同全文；结果里仍包含证据摘录，按敏感内容管理。默认保留期为 24 小时，清理在创建或列出记录时触发，按记录操作触发清理。历史记录不能恢复全文定位。处置状态目前保存在页面内，导出时随请求传递，刷新或重新打开历史不会恢复这些状态。</p></aside>
    </div></section>
    <section class="hq-section shell" id="hq-boundary">${head('07 / 产品取舍与验证','可信不是一个标签，而是一组明确的取舍。','衡契当前是一套可运行的合同风险审查 MVP。围绕发现风险、核对原文、形成修改方案与交付报告组织工作流。')}
      <div class="hq-three">${card('产品设计','把审查变成经营决策的准备','围绕回款、交付、技术资产和退出成本组织问题。三栏工作台减少结论与原文之间的查找；多档协商方案让输出更接近签约前的真实行动。')}${card('AI 产品设计','让模型做有约束的补充','将识别、证据校验、法律依据和最终决策分开。规则可独立运行，模型失败可降级；通过原文引用与模式标识，为负责人复核提供依据。')}${card('下一步验证','围绕真实审查任务持续评估','待衡量：专业复核确认的风险比例、重要风险漏检率、原文定位准确性、建议可用性，以及完成一次审查的时间。需要授权样本与评审标准，作为后续评估的标准。')}</div>
      
      <div class="hq-credit"><p>项目业务代码、审查规则、示例合同与界面按项目声明为原创；第三方依赖见仓库说明。作品集截图使用隔离的通用示例，不涉及真实合同。</p></div>
    </section>
  </main>${commonFooter}`;
  function select(index) {
    const c=cases[index];
    document.querySelectorAll('[data-hq-case]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.hqCase)===index)));
    document.getElementById('hq-case-content').innerHTML=`<header><span>本地规则输出 / ${c.label}</span><h3>${c.title}</h3></header><div class="hq-example-grid"><article class="hq-quote"><span>01 · 回到原文 <small>${c.id}</small></span><blockquote>${c.quote}</blockquote><p>${c.note}</p></article><article class="hq-consequence"><span>02 · 理解经营后果</span><h4>${c.impact}</h4><p>提示的是需要判断与协商的问题，不是自动替你做出签约决定。</p></article></div><div class="hq-options"><article><span>03 · 理想修改</span><p>${c.ideal}</p></article><article><span>04 · 可接受折中</span><p>${c.compromise}</p></article><article><span>05 · 谈判底线</span><p>${c.bottom}</p></article></div><div class="hq-talk"><span>06 · 如何开口沟通</span><p>“${c.talk}”</p></div>`;
  }
  document.querySelectorAll('[data-hq-case]').forEach(b=>b.addEventListener('click',()=>select(Number(b.dataset.hqCase))));
  select(0);
}
