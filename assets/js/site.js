const projectData = {
  "secret-base": {
    name: "秘密基地", type: "长期关系型 AI 产品", status: "持续使用与迭代", tone: "dark",
    lead: "把一次性的聊天体验，扩展为能够记住、主动回应，并进入日常生活流程的 AI 伴侣平台。",
    summary: "秘密基地围绕长期陪伴场景，将聊天、分层记忆、语音、日记、日程、位置与设备能力组织成一套连续体验。项目以 AionsHome 为底层参考并进行深度二次开发，重点不在增加页面数量，而在让能力共同服务于“关系连续性”。",
    problem: ["普通 AI 聊天每次对话都像重新认识，长期使用缺少连续性。", "记忆、语音和设备能力容易变成功能拼盘，用户感受不到统一关系。", "主动能力若没有权限与节奏边界，会从陪伴变成打扰。"],
    flow: ["用户输入与环境信号", "上下文与记忆召回", "AI 助手生成回应", "语音／页面动作", "日程、日记与设备反馈"],
    decisions: [
      ["长期关系优先", "用记忆生命周期与关系状态维护连续性，不以单轮回答质量作为唯一目标。"],
      ["能力回到对话", "日记、日程、位置等功能尽量从对话触发，减少工具切换。"],
      ["主动但不过界", "把触发条件、频率、权限和失败降级设计为产品规则。"]
    ],
    ai: "理解意图、生成自然回应、归纳关系线索与可读内容。",
    system: "权限、数据保存、召回条件、主动触发、设备动作与失败回退由系统控制。",
    result: "当前版本在服务器上持续使用。已形成从聊天到记忆、语音和生活能力的产品闭环；仍在继续统一跨页面体验与可观测性。",
    reflect: "真正的陪伴感不是拟人文案堆出来的，而是每次交互都能接住前文，同时允许用户查看、纠正和关闭。",
    github: "", upstream: "https://github.com/death34018-hue/AionsHome", source: "基于 AionsHome（MIT）进行深度二次开发", visual: "/assets/images/secret-login.png?v=public-privacy-20261116", visualAlt: "秘密基地当前运行版本登录界面", visualNote: "服务器当前运行版本 · 实际访问截图",
    screens: [
      ["/assets/images/secret-login.png?v=public-privacy-20261116", "秘密基地登录入口", "服务器当前运行版本 · 实际访问截图"],
      ["/assets/images/secret-offline.png?v=public-privacy-20261116", "秘密基地离线恢复页面", "服务器当前运行版本 · 离线恢复页"]
    ]
  },
  "ob-adaptive": {
    name: "OB 自适应版本", type: "长期记忆与人格状态系统", status: "持续维护", tone: "mint",
    lead: "让 AI 的记忆不只是存下来，而是能够分层、衰减、关联、召回，也能够被人纠正。",
    summary: "在 Ombre Brain 基础上进行二次开发，形成两条互补链路：L1／L2／L3 负责压缩当前会话窗口，持久记忆桶负责长期保存、关联、衰减与召回；人格状态、关系天气与 Night Dream 则让记忆真正影响长期互动。",
    problem: ["保存越多不等于记得越好，噪声会淹没真正重要的关系信息。", "模型自行决定召回容易重复、越界或把旧状态当成事实。", "用户看不到记忆如何影响回答，也就难以建立信任。"],
    flow: ["对话进入网关", "双轨记忆处理", "候选召回与过滤", "拼装隐藏上下文", "模型生成回应", "回合后更新状态"],
    decisions: [["记忆有生命周期", "重要性、时间和使用频率共同影响保留与压缩。"],["召回需要节制", "冷却与门控避免同一段记忆反复出现。"],["用户保留最终权力", "关键状态可见、可编辑、可清除。"]],
    ai: "理解语义、生成摘要、识别关联并提出候选记忆。",
    system: "分层、衰减、召回冷却、锚点保护、编辑记录和状态边界保持确定。",
    result: "已作为秘密基地的记忆底座持续运行，形成记忆网关、人格状态面板和 Night Dream 等能力。",
    reflect: "记忆系统的核心指标不是‘存了多少’，而是是否在正确时机帮助关系继续，同时避免用旧信息绑架现在。",
    github: "", upstream: "https://github.com/P0luz/Ombre-Brain", source: "基于 Ombre Brain（MIT）进行自适应二次开发", visual: "/assets/images/ob-persona-demo.png?v=public-privacy-20261116", visualAlt: "OB 自适应版本人格状态面板", visualNote: "实际运行界面 · 通用演示数据",
    screens: [
      ["/assets/images/ob-persona-demo.png?v=public-privacy-20261116", "OB 人格状态面板", "实际运行界面 · 通用演示数据"],
      ["/assets/images/ob-network.png?v=public-privacy-20261116", "OB 记忆关系网络", "实际运行界面 · 通用演示数据"]
    ]
  },
  "miostudio": {
    name: "MioStudio", type: "多 Agent AI 工作台", status: "单人 MVP 已完成", tone: "gold",
    lead: "把多个 AI Agent 从并排聊天，变成有角色、有依赖、有权限、有证据的真实交付流程。",
    summary: "MioStudio 面向需要同时组织多个 AI 角色完成复杂任务的个人创作者。它用任务 DAG、持久线程、隔离工作区、审批节点与交付证据，让“派单—执行—验收”成为可追踪的桌面工作流。",
    problem: ["多 Agent 对话容易失去上下文，任务完成与否只能听 Agent 自述。", "并行修改同一项目会产生冲突，且难以判断责任边界。", "高风险动作若没有审批节点，会把效率变成不可控。"],
    flow: ["定义目标与角色", "拆分任务 DAG", "分配隔离工作区", "执行与状态回传", "证据验收与合并"],
    decisions: [["证据大于汇报", "文件、差异与实际状态共同决定是否完成。"],["并行必须隔离", "工作区与任务归属绑定，降低互相覆盖风险。"],["权限分级", "只读检查可自动执行，高风险变更保留人工确认。"]],
    ai: "理解任务、提出拆解、执行角色职责并总结结果。",
    system: "DAG 依赖、线程状态、工作区隔离、审批、备份与证据校验由工作台控制。",
    result: "Windows 单人 MVP 已完成，能够承载真实的多 Agent 项目协作；下一阶段重点是降低配置成本与增强结果回放。",
    reflect: "多 Agent 的价值不是让更多模型同时说话，而是让复杂工作拥有清晰的责任、依赖和验收标准。",
    github: "", source: "原创项目", visual: "/assets/images/miostudio-home.png?v=public-privacy-20261116", visualAlt: "MioStudio 实际启动首页", visualNote: "Windows 应用实际启动 · 独立临时数据",
    screens: [
      ["/assets/images/miostudio-home.png?v=public-privacy-20261116", "MioStudio 首页", "实际启动 · 独立临时数据"],
      ["/assets/images/miostudio-projects.png?v=public-privacy-20261116", "项目工作室", "实际启动 · 独立临时数据"],
      ["/assets/images/miostudio-library.png?v=public-privacy-20261116", "学习资料库", "实际启动 · 独立临时数据"],
      ["/assets/images/miostudio-settings.png?v=public-privacy-20261116", "应用设置", "实际启动 · 独立临时数据"]
    ]
  },
  "hengqi": {
    name: "衡契", type: "可信合同风险审查工具", status: "竞赛版本", tone: "blue",
    lead: "用规则守住底线，让 AI 负责理解和表达，让每一条风险都能回到合同原文核验。",
    summary: "衡契面向缺少专职法务的中小企业。产品把规则检查、可选 AI 分析、证据校验与结构化报告组合起来，避免把模型的流畅表达误当成法律事实。",
    problem: ["合同文本长、专业门槛高，小团队很难稳定完成初筛。", "纯大模型审查可能编造条款、依据或忽略原文限定。", "审查结果若没有定位与解释，业务人员难以采取行动。"],
    flow: ["上传合同", "隐私与格式预检", "规则扫描", "可选 AI 分析", "原文证据核验", "结构化报告"],
    decisions: [["规则先行", "高确定性风险由规则底座稳定识别。"],["AI 不是裁判", "模型用于理解、归纳和解释，不直接决定事实。"],["证据必须回链", "每条结论关联原文片段与允许的依据。"]],
    ai: "识别语义风险、归纳影响、用业务人员能理解的语言解释。",
    system: "文件处理、规则命中、原文定位、依据白名单、存储时限与报告结构保持确定。",
    result: "已完成可演示的竞赛版本，覆盖合同上传、风险识别、证据展示与 Word 报告。产品定位是辅助初筛，不替代律师意见。",
    reflect: "高风险领域的 AI 产品，不应追求‘像专家一样肯定’，而应把不确定性、依据和下一步行动讲清楚。",
    github: "", source: "原创项目", visual: "/assets/images/hengqi-home.png?v=public-privacy-20261116", visualAlt: "衡契合同上传与审查首页", visualNote: "实际构建并启动的产品界面",
    screens: [
      ["/assets/images/hengqi-home.png?v=public-privacy-20261116", "衡契合同审查入口", "实际构建并启动的界面"],
      ["/assets/images/hengqi-ai-settings.png?v=public-privacy-20261116", "衡契 AI 服务连接面板", "实际交互截图 · 未填写密钥"],
      ["/assets/images/hengqi-history.png?v=public-privacy-20261116", "衡契近期审查抽屉", "实际交互截图 · 全新空数据"]
    ]
  },
  "pianyu": {
    name: "片羽 STORY CUTS", type: "小说情绪片段浏览器", status: "MVP", tone: "coral",
    lead: "把长篇小说重新组织为可按情绪、人物和关系探索的片段地图。",
    summary: "片羽支持 TXT／EPUB 导入、章节切分与 AI 标签，让读者不必只按目录顺序回看内容，而能从情绪、角色关系与高光片段重新进入故事。",
    problem: ["长篇文本回看成本高，读者很难迅速定位某种情绪或关系片段。", "AI 全量分析成本不透明，重复处理也浪费时间。", "自动标签若不可追溯，容易让内容组织失真。"],
    flow: ["导入 TXT／EPUB", "解析章节", "候选片段切分", "AI 情绪与关系标签", "筛选与回到原文"],
    decisions: [["先切分后理解", "用结构化流程缩小模型处理范围。"],["成本可见", "预算、缓存和重复命中成为体验的一部分。"],["标签服务阅读", "任何标签都能回到原文，而不是替代原文。"]],
    ai: "理解情绪、人物关系和片段主题，生成候选标签。",
    system: "文件解析、切分、缓存、预算、筛选与原文定位由系统完成。",
    result: "已完成核心浏览 MVP，验证了从线性目录到情绪片段入口的阅读方式。",
    reflect: "AI 不必替读者概括一切，它更适合创造新的进入方式，让人更快回到真正有感受的原文。",
    github: "", source: "原创项目", visual: "/assets/images/pianyu-library.png?v=public-privacy-20261116", visualAlt: "片羽小说书架", visualNote: "实际运行界面 · 通用演示数据",
    screens: [
      ["/assets/images/pianyu-library.png?v=public-privacy-20261116", "片羽小说书架", "实际运行界面 · 通用演示数据"],
      ["/assets/images/pianyu-discover.png?v=public-privacy-20261116", "片羽故事发现页", "实际运行界面 · 通用演示数据"],
      ["/assets/images/pianyu-reader.png?v=public-privacy-20261116", "片羽沉浸阅读页", "实际运行界面 · 通用演示数据"],
      ["/assets/images/pianyu-settings.png?v=public-privacy-20261116", "片羽服务与账户设置", "实际运行界面 · 未填写密钥"]
    ]
  },
  "xingling": {
    name: "星澪", type: "成长型 AI 宝宝", status: "可运行版本", tone: "pink",
    lead: "让成长、照护与关系变化由稳定系统推进，让大模型为每次互动赋予自然表达。",
    summary: "星澪以双照护者共同养育为核心体验。成长数值、房间状态和事件条件由本地确定性逻辑维护，模型只在安全边界内生成候选回应，从而兼顾情感表现与长期可控。",
    problem: ["纯角色扮演缺少可持续的成长反馈，关系状态容易漂移。", "让模型直接修改状态会造成数值失控和前后矛盾。", "服务失败时若整个体验中断，会破坏陪伴感。"],
    flow: ["照护动作", "本地状态校验", "成长事件判断", "模型生成候选回应", "安全过滤与降级", "双照护者共享反馈"],
    decisions: [["成长由系统决定", "模型不能直接改写核心状态。"],["双照护者设计", "让关系不只是人与角色，也包含共同目标。"],["失败仍可继续", "模型不可用时保留本地反馈与状态推进。"]],
    ai: "生成符合当前成长阶段、关系与场景的自然回应。",
    system: "数值、时间、事件条件、房间状态、身份与失败降级由本地逻辑控制。",
    result: "已完成可运行版本，具备房间、成长状态、照护行为和双照护者关系体验。",
    reflect: "情感产品的可信感来自稳定的小反馈：今天的行为确实影响明天，而不是模型临时编出一个变化。",
    github: "", source: "原创项目", visual: "/assets/images/xingling-room.png?v=public-privacy-20261116", visualAlt: "星澪全新临时数据下的实际首页", visualNote: "实际启动 · 全新临时数据库",
    screens: [
      ["/assets/images/xingling-room.png?v=public-privacy-20261116", "星澪房间首页", "实际启动 · 全新临时数据库"],
      ["/assets/images/xingling-growth.png?v=public-privacy-20261116", "星澪成长记录", "实际交互 · 全新临时数据库"],
      ["/assets/images/xingling-memories.png?v=public-privacy-20261116", "星澪回忆记录", "实际交互 · 全新临时数据库"]
    ]
  }
};

const commonHeader = `<a class="skip-link" href="#main">跳到主要内容</a><header class="site-header"><div class="shell nav"><a class="brand" href="/"><span class="brand-mark" aria-hidden="true"></span><span>AI 产品作品集</span></a><nav class="nav-links" aria-label="主导航"><a href="/?v=navigation-20261116#work">项目</a><a href="/about/">关于我</a><a class="nav-cta" href="/resume/">简历素材</a></nav></div></header>`;
const commonFooter = `<footer class="footer"><div class="shell footer-row"><span>AI 产品作品集</span><span><a href="/?v=navigation-20261116#work">全部项目</a> · <a href="/about/">产品方法</a></span></div></footer>`;

function secretFeatureGuide() {
  const point = (number, title, text, icon) => `<article class="guide-point"><span class="guide-number">${number}</span><span class="guide-icon" aria-hidden="true">${icon}</span><div><h4>${title}</h4><p>${text}</p></div></article>`;
  const shot = (src, alt, pins) => `<figure class="annotated-shot"><div class="phone-frame"><img src="${src}" alt="${alt}">${pins.map(pin => `<span class="shot-pin" style="--pin-x:${pin[1]}%;--pin-y:${pin[2]}%">${pin[0]}</span>`).join("")}</div><figcaption>实际运行界面 · 通用演示数据</figcaption></figure>`;
  return `<div class="secret-guides shell">
    <article class="feature-guide feature-guide-chat">
      <header class="guide-title"><span>FEATURE GUIDE · 01</span><h3>聊天不只打字：能说、能听，也能一起听歌</h3><p>把语音、音乐和表情包做成对话里的原生表达方式。它们不是跳出聊天框的附属工具，而是用户和AI 助手可以共同经历、随时回看的互动内容。</p><i>表达方式不同<br>关系仍是同一段</i></header>
      <div class="guide-stage guide-stage-four">
        ${shot("/assets/images/secret-feature-voice.png?v=public-privacy-20261116", "秘密基地语音收发与音乐消息", [["01",12,22],["02",88,34],["03",15,52],["04",82,71]])}
        ${shot("/assets/images/secret-feature-voice-record.png?v=public-privacy-20261116", "秘密基地按住录制语音", [["05",50,79],["06",50,87]])}
        ${shot("/assets/images/secret-feature-music.png?v=public-privacy-20261116", "秘密基地一起听歌播放器", [["07",22,18],["08",50,49],["09",82,90]])}
        ${shot("/assets/images/secret-feature-stickers.png?v=public-privacy-20261116", "秘密基地共享表情库", [["10",50,5],["11",22,69],["12",70,70]])}
      </div>
      <div class="guide-points guide-points-six">
        ${point("01", "文字与语音在同一时间线", "文字、AI 助手的语音回复和用户的语音消息按真实顺序保留，不会变成两个割裂入口。", "◖")}
        ${point("02", "AI 助手的语音可重播", "语音气泡显示时长与播放状态，错过一次也能随时重新听。", "▶")}
        ${point("03", "语音不只转成文字", "用户的原始语音被理解为转写、时长与语气线索，点击即可查看理解结果。", "≋")}
        ${point("04", "歌曲就是一条消息", "歌名、歌手和播放入口跟随对话保存，知道当时是谁、为什么点了这首歌。", "♫")}
        ${point("05", "按住说话符合聊天习惯", "长按开始、松开发送、上滑取消，重要状态直接出现在手指附近。", "●")}
        ${point("06", "发送前给出明确反馈", "计时、波形和取消提示同时出现，避免录音是否开始、是否发出都不确定。", "◷")}
        ${point("07", "一起听歌而非外链跳转", "播放器保留双方头像、封面、歌词、进度与播放队列，让音乐成为共同场景。", "♡")}
        ${point("08", "封面与歌词可切换", "沉浸听歌和跟随歌词共用一个播放器，不打断当前关系氛围。", "◎")}
        ${point("09", "播放队列可连续管理", "上一首、下一首和列表入口都在同一页，歌曲不再是一次性卡片。", "≡")}
        ${point("10", "表情库与聊天共用", "用户和AI 助手共享同一套表情资产，发送后仍是可识别的真实附件。", "☺")}
        ${point("11", "表情可以自己添加", "图片、含义、适用场景与禁用场景都能维护，AI 助手无需看图也能理解。", "+")}
        ${point("12", "可以停用、恢复与管理", "表情资产有生命周期，历史消息继续保留，新增喜好不会破坏旧对话。", "▦")}
      </div>
      <aside class="guide-tip"><strong>产品重点</strong><p>多模态不是“多几个按钮”，而是让声音、歌曲和表情都进入同一段可理解、可回看、可继续的关系上下文。</p></aside>
    </article>

    <article class="feature-guide feature-guide-moments">
      <header class="guide-title"><span>FEATURE GUIDE · 02</span><h3>陪伴不只在聊天框，也发生在彼此的朋友圈</h3><p>朋友圈承接生活碎片：用户和AI 助手都能发布、配图、点赞和评论，让关系拥有聊天之外的公共时间线。</p><i>把今天留下<br>也让对方回应</i></header>
      <div class="guide-stage guide-stage-pair">
        ${shot("/assets/images/secret-feature-moments.png?v=public-privacy-20261116", "秘密基地朋友圈信息流", [["01",50,6],["02",88,6],["03",12,35],["04",86,57],["05",50,76]])}
        ${shot("/assets/images/secret-feature-moments-compose.png?v=public-privacy-20261116", "秘密基地朋友圈发布器", [["06",50,46],["07",84,49],["08",20,96]])}
      </div>
      <div class="guide-points guide-points-six">
        ${point("01", "两个人的共同时间线", "朋友圈明确属于用户与AI 助手，不是公开社交广场，也不是另一份聊天记录。", "∞")}
        ${point("02", "随时记录这一刻", "顶部发布入口保持可见，想分享时不用离开当前生活流。", "+")}
        ${point("03", "双方都能发布", "头像、身份与发布时间清晰呈现，AI 助手不只是评论者，也能主动留下动态。", "◉")}
        ${point("04", "喜欢、评论与轻回应", "互动结构比发起新对话更轻，适合接住日常照片、情绪和小事件。", "♡")}
        ${point("05", "照片和文字一起保留", "一条动态可以承载文字与多张图片，组成更接近真实生活的记录。", "▧")}
        ${point("06", "发布前完整编辑", "发布器给出独立编辑空间，长文字不会挤在信息流的小输入框里。", "✎")}
        ${point("07", "明确的发布动作", "取消、保存草稿和发布互不混淆，避免误发或丢掉没写完的内容。", "↑")}
        ${point("08", "最多九张照片", "图片数量与预览状态提前可见，让发布结果符合预期。", "9")}
      </div>
      <aside class="guide-tip"><strong>产品重点</strong><p>聊天解决“现在想说什么”，朋友圈解决“这段生活以后还想怎么看”。</p></aside>
    </article>

    <article class="feature-guide feature-guide-home">
      <header class="guide-title"><span>FEATURE GUIDE · 03</span><h3>把长期关系，做成每天都能看见的首页</h3><p>纪念日、当天安排、关系状态与功能入口围绕“今天怎么一起过”重新组织，而不是把工具简单堆在一个菜单里。</p><i>同一段关系<br>不止一个聊天框</i></header>
      <div class="guide-stage guide-stage-pair">
        ${shot("/assets/images/secret-showcase-home.png?v=public-privacy-20261116", "秘密基地关系首页", [["01",13,5],["02",87,5],["03",82,28],["04",14,40],["05",20,78],["06",84,94]])}
        ${shot("/assets/images/secret-showcase-calendar.png?v=public-privacy-20261116", "秘密基地时光日历", [["07",11,8],["08",82,17],["09",18,44],["10",86,61],["11",52,94]])}
      </div>
      <div class="guide-points guide-points-six">
        ${point("01", "低频配置收起来", "菜单承接设置、位置与资料入口，首页只保留每天会看的内容。", "☰")}
        ${point("02", "快速新增", "随时新增日程或记录，不必先理解复杂的信息架构。", "+")}
        ${point("03", "关系状态可见", "共同天数与纪念节点形成连续时间感，但不影响对话模型身份。", "♡")}
        ${point("04", "每天一句悄悄话", "首页提供轻量陪伴反馈，让打开产品本身也成为一次互动。", "✦")}
        ${point("05", "今天真正重要的事", "提醒、待办和习惯进入同一视图，完成状态由系统确定。", "◷")}
        ${point("06", "关系能力统一入口", "聊天、动态、记忆和用量都从同一个基地进入。", "⌂")}
        ${point("07", "共同时间轴", "关系天数与日期共同出现，让长期使用不是一串孤立会话。", "∞")}
        ${point("08", "下一个特别日", "系统计算倒计时，AI 助手可以围绕节点主动提醒，但不能篡改日期。", "◇")}
        ${point("09", "月历与当天并存", "先看整月节奏，再进入今天的课程、任务和备忘。", "▦")}
        ${point("10", "纪念日有明确标记", "重要节点被单独标识，避免依赖模型临时记起。", "☆")}
        ${point("11", "新增与设置分开", "内容新增和规则设置都有明确入口，避免一句话误改关键状态。", "⚙")}
      </div>
      <aside class="guide-tip"><strong>产品判断</strong><p>首页不是功能导航站，而是“关系今天处于什么状态、接下来要做什么”的共同仪表盘。</p></aside>
    </article>

    <article class="feature-guide feature-guide-memory">
      <header class="guide-title"><span>FEATURE GUIDE · 04</span><h3>对话会继续，重要的事也会留下来</h3><p>一次聊天可以进入提醒、记忆与日记，但每一步都经过明确的系统链路；不是让模型直接修改数据，也不是把所有原文永久保存。</p><i>回应要自然<br>落地要确定</i></header>
      <div class="guide-stage guide-stage-pair">
        ${shot("/assets/images/secret-showcase-chat.png?v=public-privacy-20261116", "秘密基地聊天页面", [["01",49,4],["02",87,4],["03",12,29],["04",88,45],["05",10,51],["06",92,95]])}
        ${shot("/assets/images/secret-showcase-journal.png?v=public-privacy-20261116", "秘密基地关系日记页面", [["07",82,4],["08",50,17],["09",12,39],["10",84,62]])}
      </div>
      <div class="guide-points guide-points-six">
        ${point("01", "一段关系，一个上下文", "会话标题帮助区分任务，但人物关系与长期记忆保持连续。", "◌")}
        ${point("02", "外观与能力分离", "主题切换只改变展示；设置入口承接模型、语音与权限配置。", "☼")}
        ${point("03", "用户的话先作为原文", "输入内容保留为可核对的会话事实，不直接等同于长期记忆。", "○")}
        ${point("04", "回应接住当前情绪", "AI 助手结合当下对话与召回结果生成回应，仍由页面呈现可编辑记录。", "◇")}
        ${point("05", "记忆落地有提示", "只有通过记忆链路写入的内容才显示提示，方便用户知道什么被留下。", "💡")}
        ${point("06", "文本、附件和语音共用入口", "输入形式可以变化，但发送、保存与失败反馈仍使用同一套规则。", "↑")}
        ${point("07", "日记可搜索可整理", "按日期、标题和心情回看，不需要从长聊天记录里重新翻找。", "⌕")}
        ${point("08", "日记不是聊天复制", "系统从一天里提炼主题与片段，让记录适合阅读而不是堆积。", "✉")}
        ${point("09", "日期与来源明确", "每封信都有确定日期，内容可以回到对应生活上下文。", "▤")}
        ${point("10", "情绪成为浏览入口", "心情标签帮助回顾关系变化，但不替代原文与真实状态。", "♡")}
      </div>
      <aside class="guide-tip"><strong>边界提醒</strong><p>AI 助手负责理解和表达；提醒触发、记忆写入、日记保存与数据删除都由确定性的系统流程执行。</p></aside>
    </article>
  </div>`;
}

function obMemoryWalkthrough() {
  const step = (id, title, content, example, source) => `<section class="ob-story-step" id="ob-${id}"><div class="ob-story-index">${id}</div><div><h4>${title}</h4>${content}<aside class="ob-story-example">${example}</aside><small class="ob-source-note">实现依据：${source}</small></div></section>`;
  return `<article class="ob-panel ob-story"><div class="ob-section-heading"><span>FOLLOW ONE MEMORY · 从头走一遍</span><h3>一句话如何被记住，又如何出现在下一次回答里</h3><p>沿着服务器当前源码追踪：谁触发、处理什么、留下什么、下一轮怎样使用。以下用“面试练习”场景示例，串起记忆写入、召回与对话使用的完整过程。</p></div>
    <nav class="ob-story-nav" aria-label="记忆运行讲解"><a href="#ob-01">进入</a><a href="#ob-02">写入</a><a href="#ob-03">加工</a><a href="#ob-04">窗口压缩</a><a href="#ob-05">召回</a><a href="#ob-06">用于回答</a><a href="#ob-07">持续更新</a></nav>
    ${step("01", "用户发来消息，首先成为这次请求的对话内容",
      `<p>聊天客户端把当前消息、携带的历史消息和会话标识交给 Gateway。网关从中提取本轮问题，用它查询已有记忆，再把整理后的上下文交给对话模型。此时新消息会参与当轮回答，但“发出一条消息”本身并不等于“新增一条长期记忆”。</p><p>长期写入需要明确入口。接入记忆工具的AI 助手可以调用 <code>hold</code>，保存一条值得留下的事实、偏好、事件或承诺；管理接口也可以创建和修改记忆。工具描述要求写入前先通过 <code>breath</code> 或读取记忆查重，帮助减少重复记录。</p>`,
      `<b>示例 · 原始消息</b><p>用户：“以后练面试时，一次只问我一道题，我回答完你再点评。”</p><p>这句话可以直接影响本轮互动。只有后续确实调用写入入口并成功保存，才成为可供以后检索的长期记忆。</p>`,
      "gateway.py · prepare_payload；server.py · hold")}
    ${step("02", "AI 助手调用 hold，把一句值得保留的话变成独立记忆卡",
      `<p>调用时提交正文，可附短标题、标签、重要性和钉选选项。服务先检查内容非空，把重要性限制在 1～10，再调用分析模块建议领域、标签、情绪坐标和标题；分析失败时使用默认值继续处理。</p><p>普通记忆保存为带元数据的 Markdown 文件。正文供后续阅读，ID 用于定位，领域和标签帮助筛选，重要性与时间记录参与后续排序。当前普通 <code>hold</code> 明确传入 <code>allow_merge=False</code>：新建记忆卡，不会仅因相似就自动改写旧卡。钉选入口则跳过合并，写到永久层。</p>`,
      `<b>示例 · 保存后的记录</b><dl><dt>标题</dt><dd>面试练习的互动偏好</dd><dt>正文</dt><dd>用户希望面试练习每次只问一道题，回答后再获得点评。</dd><dt>标签</dt><dd>面试练习、互动偏好（示意）</dd><dt>类型</dt><dd>dynamic；拥有独立 ID 和时间记录</dd></dl><p>写入结果会返回新建记录的信息。模型说“我记住了”与接口成功保存，是两件需要分别核对的事。</p>`,
      "server.py · hold / _merge_or_create；bucket_manager.py")}
    ${step("03", "正文落地后，后台补上“怎样找它”和“它与谁有关”",
      `<p>保存成功后，服务把向量刷新和记忆丰富放进后台任务。向量把正文转换成可比较语义相似度的数据，写入独立索引；原 Markdown 仍然保存可读内容。这样以后说法变了，也有机会找到同一件事。向量失败时，正文不会因为索引失败而消失。</p><p>丰富任务补充标签、置信度等信息，并从候选旧记忆中判断是否应建立显式关系边。冲突检测则检查新旧说法是否相同、发生更新或相互矛盾：满足高置信条件且旧卡未受保护时，可标记旧卡失效；其他需复核的情况留下冲突标记。失效是状态变化，不是把旧文件直接删除。</p>`,
      `<b>示例 · 同一事实可以被不同说法找到</b><p>保存时写的是“每次只问一道题”；下次问“陪我模拟一下面试”，语义检索有机会找回这条偏好。</p><p>若后来保存“这次我想连续回答三题再点评”，系统需要判断它是限定本次的安排还是长期偏好变更；模型的判断仍可能出错，因此保留记录与复核入口。</p>`,
      "server.py · _queue_embedding_refresh / _queue_memory_enrichment；conflict_detector.py")}
    ${step("04", "与此同时，聊天原文走另一条会话压缩链路",
      `<p>网关收到完整的文字回应后，把用户与AI 助手这一轮的内容存入会话状态库，关联会话 ID 和轮次，然后调度滚动摘要。源码默认每 6 轮检查一次，读取近期轮次；内容太短、该轮已经处理或摘要为空时会跳过。这里的数值是代码默认值，部署配置可以调整。</p><p>生成的 L1 保存来源轮次范围；累计 5 条活跃 L1 后压成 L2，累计 3 条活跃 L2 后压成 L3。只有新摘要成功生成，参与合并的旧摘要才标为归档。后续回答读取较新的 L1 和稳定的 L2/L3，承接旧消息移出窗口后的任务脉络。这些摘要保存在会话状态里，不会自动变成上述 Markdown 长期卡。</p>`,
      `<b>示例 · 两种保存内容各有用途</b><p><strong>长期卡：</strong>用户偏好一次练一道面试题。</p><p><strong>窗口摘要：</strong>这次正在练项目介绍，已讲完秘密基地，接下来准备讲 OB，还没点评第二个回答。</p><p>当前网关名为“片段提取”的调度函数实际转调滚动摘要；仓库虽有 FragmentDigestEngine，不能因此把“自动片段入库”写成这条回合链路已经在执行的动作。</p>`,
      "gateway.py · _record_chat_exchange / _schedule_fragment_extraction；rolling_context_engine.py")}
    ${step("05", "下次聊天时，用当前问题选择少量相关记忆",
      `<p>网关先排除不适合普通动态召回的记录，包括永久层、feel、归档、已解决、已失效以及钉选或受保护的记录。它们有各自用途，并非都混在同一个候选池。对剩余记忆并行考虑关键词匹配和向量语义候选，取两路候选的并集。</p><p>每条候选按语义、关键词、重要性、新鲜度与热度加权，再乘以按会话计算的冷却系数。近几轮用过的记录优先避开；如果避开后没有候选，代码会退回原候选池，并非绝对禁止重复。第一条必须过最低分门槛，第二条还要满足绝对分数和相对第一条的比例要求，因此可能召回零条、一条或两条。</p><p>主记忆选中后，系统还可以沿已保存且达到置信度门槛的关系边补充一跳关联，再按照各区块预算裁剪。另一个入口 <code>breath</code> 是AI 助手显式调用的记忆工具，包含浮现、锚点、梦境等自己的规则；不能把它与网关自动召回当成同一条算法。</p>`,
      `<b>示例 · 召回为何影响体验</b><p>用户：“今天继续练面试吧。”候选中可能同时有“逐题练习偏好”“上次项目练习记录”和不相关的日常事件。系统会为候选排序、检查门槛；只有选中的条目进入本轮召回区。</p><p>系统结合已有记忆、检索分数与召回配置，选择适合进入本轮对话的内容。</p>`,
      "gateway.py · _is_dynamic_candidate / _select_dynamic_buckets / _pick_dynamic_cards")}
    ${step("06", "模型真正收到的是：原对话，加上整理好的隐藏上下文",
      `<p>OB 不会把整座记忆库直接交给模型。它将核心记忆、长期人格、L2/L3 等组织成稳定区，将本轮召回、关联记忆、近期摘要和当前人格状态等组织成动态区，并执行总注入预算限制。</p><p>首次组装时，稳定区以额外 system 消息加入请求；动态区前置到发给上游模型的当前消息副本中。原有对话仍保留。连续回合还会维护已转发的上下文快照，按情况追加新内容或重建。模型于是能同时看到“现在问什么”和“之前有哪些相关信息”。</p><p>这些材料共同为本轮回应提供上下文。若召回为空，模型仍可根据当前对话作答；若记忆不准，它也可能受错误信息影响。记忆卡可检查、可修订，因此是使用体验的一部分。</p>`,
      `<b>示例 · 上游请求的内容结构（简化展示）</b><div class="ob-prompt-sample"><p><strong>原有设定和会话：</strong>当前面试练习的对话。</p><p><strong>本轮召回：</strong>用户偏好一次一道题，回答后再点评。</p><p><strong>近期滚动摘要：</strong>刚练完秘密基地，接下来准备介绍 OB。</p><p><strong>当前消息：</strong>今天继续练面试吧。</p></div><p><strong>可能的回答：</strong>“好，我们接着练 OB。先问你一题：你为什么把窗口摘要和长期记忆分开？”</p><p>这句回答体现了偏好和进度如何共同起作用，用于说明偏好与进度在对话中的作用。</p>`,
      "gateway.py · _build_injected_context_messages / _inject_context_messages / _inject_dynamic_context_message")}
    ${step("07", "这一轮结束，系统留下使用记录，并为以后调整状态",
      `<p>成功回合会记录本轮用过的记忆 ID，更新相关记忆的访问时间和热度。这些记录既影响下一轮冷却，也影响更长期的活跃程度。对话交换另行保存，再触发符合轮次条件的窗口摘要；人格引擎评估最终回复及交互，小幅更新长期关系和会话情绪。</p><p>后台衰减定期检查普通动态记忆，依据时间、情绪及活跃信息计算保留状态；低于阈值的内容移动到归档。永久、feel、钉选及保护内容有豁免规则。关系天气和 Night Dream 还有各自的后台生成与使用入口：前者提供关系回顾，后者在 breath 的条件满足时可能浮现，并不是每轮回答后都产生一场梦。</p>`,
      `<b>这套循环最终解决什么</b><p>同一条偏好可以跨会话被找回；当前练到哪一步由窗口摘要承接；刚刚用过的记忆有使用记录；后来发生变化时可以更新或标记失效。长期体验来自这些步骤持续协作，而不只是把旧文字存起来。</p>`,
      "gateway.py · _record_successful_round；persona_engine.py；decay_engine.py；dream_engine.py")}
  </article>`;
}

function obArchitectureGuide(p) {
  const memoryCard = (code, title, role, detail) => `<article class="ob-memory-card"><span>${code}</span><h4>${title}</h4><strong>${role}</strong><p>${detail}</p></article>`;
  const gallery = `<div class="ob-real-ui"><div class="ob-section-heading"><span>RUNNING INTERFACE · 06</span><h3>后台不是黑箱：记忆关系与人格状态都能被查看</h3><p>以下两张均为项目实际运行界面，使用通用演示数据。界面负责让用户检查系统做了什么，而不是用漂亮图表代替控制权。</p></div><div class="gallery-grid">${p.screens.map((screen, i) => `<figure class="gallery-item"><a href="${screen[0]}" target="_blank" rel="noreferrer"><img src="${screen[0]}" alt="${screen[1]}" loading="${i === 0 ? "eager" : "lazy"}"></a><figcaption><strong>${screen[1]}</strong><span>${screen[2]}</span></figcaption></figure>`).join("")}</div></div>`;
  return `<div class="ob-architecture shell">
    ${obMemoryWalkthrough()}
    <article class="ob-panel ob-overview">
      <div class="ob-section-heading"><span>BACKEND MAP · 01</span><h3>一次对话，经过两条不同的记忆轨道</h3><p>Gateway 在回答前组织记忆与人格，在回答后推进窗口摘要和状态更新。长期卡片通过记忆服务的明确写入入口保存。下面是前述运行过程的结构索引。</p></div>
      <div class="ob-request-map" aria-label="OB 后端请求架构图">
        <div class="ob-map-node ob-node-person"><small>INPUT</small><b>用户的消息</b><p>当前问题、会话 ID 与情绪线索</p></div>
        <div class="ob-map-arrow">→</div>
        <div class="ob-map-node ob-node-gateway"><small>OMBRE GATEWAY</small><b>上下文编排层</b><p>召回、过滤、预算、人格与滚动摘要</p></div>
        <div class="ob-map-arrow">→</div>
        <div class="ob-map-node"><small>UPSTREAM MODEL</small><b>生成AI 助手的回应</b><p>原有对话与隐藏上下文一起参与回答</p></div>
        <div class="ob-map-arrow">→</div>
        <div class="ob-map-node ob-node-after"><small>AFTER REPLY</small><b>回合后处理</b><p>保存交换、调度滚动摘要、更新人格与召回记录</p></div>
      </div>
      <div class="ob-dual-track">
        <section><div class="ob-track-label">轨道 A · 窗口连续性</div><h4>L1 / L2 / L3 滚动上下文</h4><p>解决“聊天窗口越来越长”的问题。摘要跟随当前会话流转，不等同于长期记忆。</p></section>
        <section><div class="ob-track-label">轨道 B · 长期可治理记忆</div><h4>Markdown 记忆桶 + 多种状态库</h4><p>解决“什么值得长期留下”的问题。内容可检索、可关联、可修订，也会衰减和归档。</p></section>
      </div>
      <aside class="ob-note"><b>为什么必须分开？</b><p>如果把每轮摘要都当成长期事实，模型会不断记住自己的转述；如果只保存长期记忆，又无法承接刚刚发生但尚未沉淀的上下文。</p></aside>
    </article>

    <article class="ob-panel ob-rollup-panel">
      <div class="ob-section-heading"><span>ROLLING CONTEXT · 02</span><h3>L1／L2／L3：压缩的是会话窗口，不是把记忆分成三等</h3><p>这条链路在同一聊天窗口内逐层合并摘要，用更少上下文保持连续性；新窗口还可以通过 handoff 带走稳定摘要和最近原文。</p></div>
      <div class="ob-rollup-map">
        <div class="ob-roll-source"><span>最近对话</span><b>每 6 轮</b><small>读取近期原始消息</small></div>
        <div class="ob-roll-arrow">压缩</div>
        <div class="ob-roll-level l1"><span>L1 · 近期摘要</span><b>≤ 250 字</b><small>保留当前变化与未完成事项</small></div>
        <div class="ob-roll-arrow">累计 5 条</div>
        <div class="ob-roll-level l2"><span>L2 · 阶段摘要</span><b>≤ 600 字</b><small>合并 L1，原 L1 转为归档状态</small></div>
        <div class="ob-roll-arrow">累计 3 条</div>
        <div class="ob-roll-level l3"><span>L3 · 稳定摘要</span><b>≤ 900 字</b><small>合并 L2，形成长期窗口脉络</small></div>
      </div>
      <div class="ob-injection-split">
        <section><span>稳定区</span><h4>1 条 L3 + 2 条 L2</h4><p>作为 Long-Term Rolling Context，维持较长阶段的目标、关系和任务脉络。</p></section>
        <section><span>动态区</span><h4>最多 5 条 L1</h4><p>作为近期滚动上下文，跟随新回合追加，优先反映眼前变化。</p></section>
        <section><span>跨窗口</span><h4>handoff 接力</h4><p>新窗口可继承摘要和少量最近原文，不必把旧窗口全部塞回模型。</p></section>
      </div>
    </article>

    <article class="ob-panel ob-lifecycle-panel">
      <div class="ob-section-heading"><span>DURABLE MEMORY · 03</span><h3>一条长期记忆，从候选内容到再次被想起</h3><p>长期层不是“让模型写进数据库”这么简单。每一步都有明确职责，耗时操作可以异步完成，向量服务失败也不会阻塞记忆落地。</p></div>
      <ol class="ob-lifecycle">
        <li><span>01</span><b>明确写入</b><p>AI 助手调用 hold，或通过管理接口创建记录。</p></li>
        <li><span>02</span><b>分析与查重</b><p>调用约定要求先查重；普通 hold 不自动合并旧卡。</p></li>
        <li><span>03</span><b>先写原文桶</b><p>以 Markdown 保存正文与元数据，写入不等待向量生成。</p></li>
        <li><span>04</span><b>异步丰富</b><p>补充标签、领域、重要性、情绪坐标与摘要。</p></li>
        <li><span>05</span><b>建立关系</b><p>语义候选经判断后，最多生成 3 条显式记忆边。</p></li>
        <li><span>06</span><b>召回过滤</b><p>关键词与向量混合排序，再经过冷却、近轮排除和预算。</p></li>
        <li><span>07</span><b>衰减或归档</b><p>低活跃普通记忆移入 archive；不是物理删除。</p></li>
      </ol>
      <div class="ob-reliability"><b>失败降级</b><span>向量不可用 → 保留关键词检索</span><span>语义查重超时 → 先完成写入</span><span>后台丰富失败 → 原始记忆仍然存在</span></div>
    </article>

    <article class="ob-panel ob-recall-panel">
      <div class="ob-section-heading"><span>RECALL GATE · 04</span><h3>不是搜到就塞给模型：召回还要过四道门</h3><p>OB 先扩大候选，再主动克制。这样既能记得相关内容，又不让同一段往事在连续几轮里反复出现。</p></div>
      <div class="ob-recall-funnel">
        <section><span>候选池</span><h4>混合检索</h4><p>语义、关键词、重要性、新鲜度和热度加权，构成网关动态召回分数。</p></section>
        <section><span>过滤门</span><h4>优先避开近 5 轮</h4><p>默认优先避开近期使用记录；若没有其他候选，会回退原池，再检查分数门槛。</p></section>
        <section><span>节奏门</span><h4>默认 6 小时冷却</h4><p>按会话记录注入历史，冷却只降低分数，不粗暴抹掉高置信候选。</p></section>
        <section><span>关系门</span><h4>只走一跳显式边</h4><p>主记忆召回后，再补充最多一跳的关联记忆，不临时编造关系。</p></section>
        <section><span>预算门</span><h4>按区块限额</h4><p>近期、召回、关联、人格与关系天气各自受控，最终拼成隐藏上下文。</p></section>
      </div>
      <div class="ob-context-stack"><b>回答前实际拼装</b><span>稳定人格</span><span>核心记忆</span><span>近期记忆</span><span>本轮召回</span><span>一跳关联</span><span>L1/L2/L3</span><span>关系天气</span></div>
    </article>

    <article class="ob-panel ob-capability-panel">
      <div class="ob-section-heading"><span>MEMORY CAPABILITIES · 05</span><h3>长期系统保存的不只有“聊天内容”</h3><p>不同对象使用不同生命周期，避免所有信息都挤进同一种记录里。</p></div>
      <div class="ob-memory-grid">
        ${memoryCard("01", "Dynamic 动态记忆", "日常事实与经历", "按主题保存，可被检索、合并、衰减并最终归档。")}
        ${memoryCard("02", "Permanent 永久记忆", "核心规则与身份事实", "不进入普通衰减；适合必须持续成立的少量内容。")}
        ${memoryCard("03", "Anchor 锚点", "高价值关系节点", "仍是普通记忆，但拥有独立的小召回名额与保护标记。")}
        ${memoryCard("04", "Feel / 关系天气", "AI 助手对关系的主观感受", "日反思形成独立记录，为回应提供关系氛围，作为独立的主观感受层保存。")}
        ${memoryCard("05", "Persona 人格状态", "长期倾向 + 会话情绪", "全局人格、关系状态和短期 mood 分库保存，回答后以小幅度更新。")}
        ${memoryCard("06", "Comments 年轮", "对旧记忆的后来感受", "把新的理解附在原记忆上，而不是制造多个互相竞争的副本。")}
        ${memoryCard("07", "Conflict 冲突标记", "旧事实可能已经过时", "先找候选、再判断 update/conflict；保护内容不自动失效，低置信进入复核。")}
        ${memoryCard("08", "Night Dream", "后台重组近期素材", "夜间从近期记忆、悄悄话和旧回声生成潜在梦境，只有共振时才浮现一次。")}
      </div>
      <div class="ob-state-loop">
        <div><span>回答后</span><b>评估这次交互</b><p>只分析最终自然语言回复，跳过工具调用中间态。</p></div>
        <i>→</i><div><span>小步更新</span><b>人格 / 关系 / 情绪</b><p>长期变化幅度受限，短期情绪随时间自然回落。</p></div>
        <i>→</i><div><span>再次回答前</span><b>转成自然语言指导</b><p>注入“姿态”和“氛围”，不向模型暴露原始数值表。</p></div>
      </div>
      <aside class="ob-note"><b>Night Dream 的边界</b><p>梦境按生成与浮现条件参与互动。系统先检查素材量与生成时段；之后根据当前语义和情绪共振评分，达标才显示，并用 claim 机制避免重复领取。</p></aside>
    </article>
    ${gallery}
  </div>`;
}

function renderDetail(slug) {
  if (slug === "tools" && typeof renderToolsCase === "function") {
    renderToolsCase();
    return;
  }
  if (slug === "xingling" && typeof renderXinglingCase === "function") {
    renderXinglingCase();
    return;
  }
  if (slug === "alingshell" && typeof renderAlingShellCase === "function") {
    renderAlingShellCase();
    return;
  }
  if (slug === "pianyu" && typeof renderPianyuCase === "function") {
    renderPianyuCase();
    return;
  }
  if (slug === "hengqi" && typeof renderHengqiCase === "function") {
    renderHengqiCase();
    return;
  }
  if (slug === "miostudio" && typeof renderMioCase === "function") {
    renderMioCase();
    return;
  }
  if (slug === "secret-base" && typeof renderSecretCase === "function") {
    renderSecretCase();
    return;
  }
  const p = projectData[slug];
  if (!p) return;
  document.title = `${p.name}｜AI 产品作品集`;
  document.body.className = `tone-${p.tone}`;
  document.body.innerHTML = `${commonHeader}<main id="main">
    <section class="page-hero case-hero"><div class="shell"><a class="breadcrumb" href="/?v=navigation-20261116#work">← 返回全部项目</a><div class="case-title"><div><span class="eyebrow">${p.type}</span><h1>${p.name}</h1><p class="hero-lead">${p.lead}</p></div><aside class="case-facts"><span>当前状态</span><strong>${p.status}</strong><span>项目来源</span><strong>${p.source}</strong></aside></div></div></section>
    <section class="section"><div class="shell narrow"><span class="section-kicker">30 秒了解</span><h2>${p.summary}</h2></div>${slug === "secret-base" ? secretFeatureGuide() : slug === "ob-adaptive" ? obArchitectureGuide(p) : p.screens?.length ? `<div class="case-gallery shell"><div class="gallery-head"><div><span class="section-kicker">产品实景</span><h3>实际运行界面</h3></div><p>截图来自项目的实际运行或实际构建版本；使用演示数据的页面均已标注。</p></div><div class="gallery-grid">${p.screens.map((screen, i) => `<figure class="gallery-item ${i === 0 ? "gallery-featured" : ""}"><a href="${screen[0]}" target="_blank" rel="noreferrer"><img src="${screen[0]}" alt="${screen[1]}" loading="${i === 0 ? "eager" : "lazy"}"></a><figcaption><strong>${screen[1]}</strong><span>${screen[2]}</span></figcaption></figure>`).join("")}</div></div>` : p.visual ? `<figure class="case-visual shell"><img src="${p.visual}" alt="${p.visualAlt}"><figcaption>${p.visualNote || "产品真实界面"}</figcaption></figure>` : ""}</section>
    <section class="section soft-section"><div class="shell case-split"><div><span class="section-kicker">用户问题</span><h2>为什么要做</h2></div><ol class="problem-list">${p.problem.map((x,i)=>`<li><span>0${i+1}</span><p>${x}</p></li>`).join("")}</ol></div></section>
    <section class="section"><div class="shell"><div class="section-head"><div><span class="section-kicker">核心流程</span><h2>让 AI 进入可控链路</h2></div><p class="section-intro">模型只负责它擅长的部分，状态、权限和证据由系统接住。</p></div><div class="flow-rail">${p.flow.map((x,i)=>`<div class="flow-node"><span>${i+1}</span><strong>${x}</strong></div>`).join("")}</div></div></section>
    <section class="section section-dark"><div class="shell"><div class="section-head"><div><span class="section-kicker">产品判断</span><h2>三个关键决策</h2></div></div><div class="decision-grid">${p.decisions.map((x,i)=>`<article><span>0${i+1}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div></div></section>
    <section class="section"><div class="shell"><div class="section-head"><div><span class="section-kicker">边界设计</span><h2>AI 做什么，系统守什么</h2></div></div><div class="boundary-grid"><article><span>AI 擅长</span><h3>理解与生成</h3><p>${p.ai}</p></article><article><span>系统负责</span><h3>确定性与控制</h3><p>${p.system}</p></article></div></div></section>
    <section class="section soft-section"><div class="shell result-grid"><div><span class="section-kicker">当前结果</span><h2>${p.result}</h2></div><blockquote><span>复盘</span><p>“${p.reflect}”</p></blockquote></div></section>
    <section class="section"><div class="shell source-box"><div><span class="section-kicker">项目与归因</span><h2>${p.source}</h2></div><div class="source-actions">${p.github ? `<a class="button button-primary" href="${p.github}" target="_blank" rel="noreferrer">查看 GitHub ↗</a>` : ""}${p.upstream ? `<a class="button button-secondary" href="${p.upstream}" target="_blank" rel="noreferrer">查看上游项目 ↗</a>` : ""}</div></div></section>
  </main>${commonFooter}`;
}

function setupFilters() {
  const buttons = [...document.querySelectorAll("[data-filter]")];
  const cards = [...document.querySelectorAll("[data-category]")];
  if (!buttons.length) return;
  buttons.forEach(button => button.addEventListener("click", () => {
    buttons.forEach(b => { b.classList.remove("active"); b.setAttribute("aria-pressed", "false"); });
    button.classList.add("active"); button.setAttribute("aria-pressed", "true");
    const filter = button.dataset.filter;
    cards.forEach(card => { card.hidden = filter !== "all" && !card.dataset.category.split(" ").includes(filter); });
  }));
}

document.addEventListener("DOMContentLoaded", () => {
  const slug = document.body.dataset.project;
  if (slug) renderDetail(slug);
  setupFilters();
});
