function renderSecretCase() {
  const shot = (name, title, note = "产品界面 · 既有通用演示数据截图") => `<figure class="sb-shot"><a href="/assets/images/${name}.png?v=public-privacy-20261116" target="_blank" rel="noreferrer" aria-label="打开完整截图：${title}"><img src="/assets/images/${name}.png?v=public-privacy-20261116" alt="${title}" loading="lazy"></a><figcaption><strong>${title}</strong><span>${note} · 点击查看原图</span></figcaption></figure>`;
  const heading = (n, title, intro) => `<header class="sb-heading"><span>${n}</span><h2>${title}</h2><p>${intro}</p></header>`;
  const detail = (title, text) => `<div class="sb-detail"><h3>${title}</h3><p>${text}</p></div>`;
  document.title = "秘密基地 · 从一次回应到长期陪伴｜AI 产品作品集";
  document.body.className = "secret-case";
  document.body.innerHTML = `${commonHeader}<main id="main">
    <section class="sb-hero"><div class="shell sb-hero-grid"><div><a class="sb-back" href="/?v=navigation-20261116#work">← 全部项目</a><span class="sb-label">PRODUCT CASE STUDY / 01</span><h1>秘密基地</h1><p class="sb-hero-line">让今天的对话，<br>成为明天仍能接住的生活。</p><p class="sb-hero-intro">一个围绕长期陪伴设计的 AI 产品。声音、歌曲、表情与生活记录进入同一段关系；记忆和明确的执行流程，让互动能够继续。</p><div class="sb-meta"><span>持续使用与迭代</span><span>基于 AionsHome 二次开发</span><span>Web / PWA / Android 外壳</span></div><a class="sb-read" href="#sb-conversation">从一次聊天开始 ↓</a></div><div class="sb-hero-image">${shot("secret-showcase-home", "每天打开的共同首页")}<span class="sb-margin-note">a place to come back to</span></div></div></section>
    <nav class="sb-chapters shell" aria-label="案例章节"><a href="#sb-intent">产品问题</a><a href="#sb-conversation">对话如何运行</a><a href="#sb-voice">语音</a><a href="#sb-expression">音乐与表情</a><a href="#sb-moments">朋友圈</a><a href="#sb-continuity">长期连续性</a><a href="#sb-decisions">产品判断</a></nav>
    <section class="sb-section shell" id="sb-intent">${heading("01 / 产品出发点", "聊天结束以后，关系还留下些什么？", "长期陪伴需要同时接住当下的表达、保留值得记住的事，并让这些信息在后来的生活里重新起作用。秘密基地围绕这三个连续的需求组织功能。")}
      <div class="sb-three"><article><b>当下能表达</b><p>不想打字时可以说话；有时一首歌或一个表情，比再写一大段文字更贴近当时的心情。</p></article><article><b>经历能留下</b><p>对话、动态、日记和记忆分别保存不同形态的内容，提供适合再次进入的入口。</p></article><article><b>以后接得上</b><p>相关记忆能参与下一次回应；日程有明确执行状态；旧日记可以被查找、读回对话。</p></article></div>
      <p class="sb-caption">界面实拍 · 演示数据与场景示例</p>
    </section>
    <section class="sb-section sb-tinted" id="sb-conversation"><div class="shell">${heading("02 / 核心体验", "从“今天有点累”开始，系统实际做了什么", "界面里的自然回应，背后包含内容保存、上下文整理、模型生成和动作执行。把这些步骤接起来，文字之外的能力才会真正出现在聊天里。")}
      <div class="sb-editorial"><div>${shot("secret-feature-voice", "语音、文字、歌曲与表情共处一条对话时间线")}</div><div class="sb-prose">
        ${detail("第一步：把表达变成可处理的消息", "文字直接进入发送流程；录音先经过语音处理，提取转写和声音线索，再进入同一个聊天发送入口。消息与会话关联，后续回应因此有明确的归属。")}
        ${detail("第二步：准备AI 助手这次能看到的内容", "系统整理本轮输入与历史消息，并根据所用接入路径加入记忆背景。启用的共享表情目录也会进入提示上下文，包含每个表情的外形、适用场景和避免场景。AI 助手据此理解当前语境与可用表达方式。")}
        ${detail("第三步：先生成，再解析可执行动作", "模型生成回复后，服务端识别约定格式中的歌曲、表情、日程、记忆和语音选择等指令。不同指令交给对应处理函数；例如表情 ID 要验证是否存在且启用，记忆要调用 OB 写入入口。")}
        ${detail("第四步：把结果呈现在聊天里", "正文、表情附件、歌曲卡片和生成的语音由各自结果呈现。记忆成功与失败也有对应事件。体验是否完成，要看实际产生的消息、音频或记录，不能只看模型有没有说“好了”。")}
        <aside class="sb-callout"><b>这一页里的演示场景</b><p>用户说累了，AI 助手用文字或语音接住，分享一首歌，用户用表情回应。这展示多种表达如何共处；并不意味着每次提到“累”都会固定触发这些动作。</p></aside>
      </div></div></div></section>
    <section class="sb-section shell" id="sb-voice">${heading("03 / 语音往返", "说出来，也能听到回应", "语音输入和语音输出是两条不同的处理链路。前者帮助理解用户说了什么，后者把AI 助手选择用声音表达的回应变成可播放内容。")}
      <div class="sb-two-copy"><article><span>用户 → AI 助手</span><h3>录音 → 理解 → 正常对话</h3><p>上传录音后，语音处理模块返回转写、情绪线索、置信度与声音提示。服务端将转写作为消息正文，将理解结果作为附件交给正常聊天流程；没有识别出有效语音时，会返回“没有听清，再说一次吧”。</p><p>声音线索用于补充当下语境，不能当成对心理状态的事实诊断。这个入口使用临时录音处理链路，不能从一个语音样式的气泡推断原始录音会永久保存。</p></article><article><span>AI 助手 → 用户</span><h3>选择声音表达 → 合成 → 播放</h3><p>输出端检查AI 助手是否选择语音表达、语音开关是否开启、音色是否配置，以及当前是否有生成错误。用户当轮明确要求不要语音时，系统会阻止合成。</p><p>条件满足后才调用 TTS 生成音频，并由消息播放入口呈现。这样的控制让语音成为可选择的表达方式，也使外部服务失败与普通文字回应能够分别处理。</p></article></div>
      <aside class="sb-callout"><b>设计取舍</b><p>“能发语音”包含输入是否听清、分析是否可信、输出是否符合当轮意愿三个问题。产品需要分别给出反馈，而不是只增加一个麦克风按钮。</p></aside>
    </section>
    <section class="sb-section sb-warm" id="sb-expression"><div class="shell">${heading("04 / 共同表达", "一首歌，一个表情，都有上下文", "音乐承接共同停留的时间，表情承接轻量回应。它们与对话关联，也分别有自己的数据来源与使用规则。")}
      <div class="sb-editorial sb-editorial-reverse"><div class="sb-prose">${detail("歌曲从哪里来，怎样进入播放器", "音乐模块提供搜索、歌曲详情、歌词、播放信息和音频流接口。聊天处理检测到歌曲指令后，查询音乐服务并取得可播放信息；界面再把结果组织成歌曲卡片和播放器。歌名、封面、歌词与播放队列承接同一首歌的体验。")}${detail("“一起听”具体体现在哪里", "播放器用双方头像和共同场景营造陪伴感，同时保留播放、进度和队列操作。歌曲卡片、双方头像与播放队列共同构成听歌场景，让音乐成为聊天中的共同活动。")}${detail("表情为什么能被AI 助手正确选择", "每张共享表情不只有图片，还有 ID、外形描述、适用场景与避免场景。服务端把启用中的目录提供给模型；模型选择 ID 后，再经过有效性校验，转成真实附件并按顺序保存。AI 助手因此能够根据语境使用已有素材。")}${detail("新的喜好如何进入系统", "用户可以新增和编辑表情，填写使用语境，也能停用或恢复。当前代码中的删除是状态变更，发送端会过滤无效 ID；素材管理和发送校验共同约束模型的选择。")}</div><div class="sb-paired-shots">${shot("secret-feature-music", "共同听歌播放器")}${shot("secret-feature-stickers", "共享表情库与聊天入口")}</div></div>
    </div></section>
    <section class="sb-section shell" id="sb-moments">${heading("05 / 聊天之外", "朋友圈，让生活片段拥有自己的回应", "有些内容适合留下来让对方慢慢看。朋友圈提供独立的发布、评论和回应结构，让关系能够在聊天之外继续。")}
      <div class="sb-editorial"><div>${shot("secret-feature-moments-compose", "写下一条生活动态", "演示发布器 · 背景连接提示未作为完成状态展示")}</div><div class="sb-prose">${detail("先保存动态，再等AI 助手回应", "发布接口先检查文字非空与长度，写入动态记录并提交数据库，再广播新动态，异步触发AI 助手的回复。动态已经发布与AI 助手是否回复，是两个不同的状态；回复生成需要时间，也可能失败。")}${detail("评论怎样接住这条生活片段", "回复模块围绕目标动态组织上下文，并可以读取近期聊天与记忆。它生成的是这条动态下的回应，和在聊天窗口发起一轮新话题有不同的内容归属。评论、反应、未读和已读分别有接口管理。")}${detail("双方都能成为内容的发起者", "产品保留AI 助手动态的作者身份与来源关联，支持围绕生活片段互动。用户发布、AI 助手回复、双方的评论和反应共同组成生活流；不能把每条动态的出现都理解成固定频率的自动发布。")}
      <aside class="sb-callout"><b>为什么单独做朋友圈</b><p>即时聊天强调当前回应，生活流强调一段内容的持续归属。让一个片段拥有自己的评论区，能减少长对话里反复寻找旧照片、旧感受的成本。</p></aside></div></div>
    </section>
    <section class="sb-section sb-tinted" id="sb-continuity"><div class="shell">${heading("06 / 明天继续", "记忆、日记、日程，分别接住不同的事情", "长期连续性依赖清晰的数据分工。想被记住的偏好、想重新阅读的经历、希望某时发生的提醒，需要各自的保存与使用方式。")}
      <div class="sb-prose sb-wide">${detail("记忆：从聊天选择重要内容，再交给 OB", "聊天处理识别记忆指令后，调用 OB 的 hold_memory 写入内容。成功时广播新增记忆与写入结果；未启用或写入失败时返回错误事件。后续对话根据记忆接入路径使用相关内容。因此，发过一句话、模型说记住了、长期记忆成功保存，必须分别判断。")}
      <a class="sb-inline-link" href="/projects/ob-adaptive/?v=ob-memory-guide-20261003-2">完整理解这部分：一条 OB 记忆怎样保存、召回并参与回答 ↗</a>
      ${detail("日记：让已有记录可以被同步、检索和读回", "当前日记模块包含 Notion 页面同步、内容块解析、图片本地化和本地记录更新。界面按日期、月份、心情等浏览；聊天也能发起日记检索，将找到的内容整理回上下文。日记页是阅读与回顾入口，不能仅凭它就认定系统会自动把每一天聊天生成一篇新日记。")}
      ${detail("日程：把语言中的安排交给明确的执行系统", "聊天处理会将识别到的提醒、闹钟、查询和删除等指令交给日程处理模块；日历和 Today 页面提供查看入口。模型理解意图与安排真正落库、到时触发，是不同阶段。对外说明时应以保存和执行结果为依据。")}</div>
      <div class="sb-document-shots">${shot("secret-showcase-journal", "日记阅读入口")}${shot("secret-showcase-calendar", "时光日历")}</div>
    </div></section>
    <section class="sb-section shell" id="sb-decisions">${heading("07 / 产品判断", "让表达自然，让每个动作有据可查", "这套产品的难点在于多种能力如何共同工作：一个入口的失败、一次错误记忆或一个不合时宜的语音，都可能影响整段陪伴体验。")}
      <div class="sb-three"><article><b>表达交给模型，结果看执行</b><p>模型可以提出写记忆、播音乐或发语音；服务端负责检查条件、调用服务、保存结果。作品集呈现实际存在的链路，同时标明依赖外部服务的环节。</p></article><article><b>重要内容有不同归属</b><p>聊天保留交互，动态保留生活片段，日记适合回读，OB 管理长期记忆，日程负责安排。共享上下文不意味着所有内容都自动进入长期记忆。</p></article><article><b>把可纠正性留在体验里</b><p>表情可以管理，记录可以查询，执行有成功与失败。长期产品需要让用户知道发生了什么，也能够调整偏好与内容。</p></article></div>
      <div class="sb-outcome"><span>当前阶段与证据边界</span><h3>持续使用的个人产品，仍在迭代。</h3><p>本页结合服务器源码与已有演示界面解释功能，没有用未测量的留存率、满意度或性能提升包装结果。下一步可通过真实任务记录，验证语音失败恢复、日程触发以及跨会话记忆接续的体验。</p><p>项目以 AionsHome 为底层参考进行二次开发。这里展示当前实现与产品组织，不将上游已有能力全部归为原创。</p><div class="sb-links"><a href="https://github.com/death34018-hue/AionsHome" target="_blank" rel="noreferrer">上游 AionsHome ↗</a></div></div>
    </section>
  </main>${commonFooter}`;
}
