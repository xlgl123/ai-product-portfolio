function renderMioCase() {
  const stages = [
    ["产品", "把目标变成可判断的范围", "用户提出“给阅读清单加标签筛选”。产品 Agent 先澄清筛选规则、空结果、取消筛选和验收标准。它的输出要让后续角色知道什么算完成，避免前后端各自理解需求。", "输入：目标与限制", "输出：需求范围、流程、验收标准", "后续：产品节点完成，架构节点才就绪"],
    ["架构", "先看现有项目，再决定怎么接入", "架构 Agent 接收产品结论，调查现有源码，确定标签数据从哪里来、接口如何传递、前端如何表达状态。工作台将前置任务的报告附给下游任务，代码也沿前置分支继续。", "输入：产品报告与项目源码", "输出：技术方案、接口与修改边界", "后续：前端和后端进入可并行阶段"],
    ["前后端", "并行处理彼此独立的实现", "前端实现标签选择、选中态和空结果；后端处理标签查询与筛选逻辑。固定流程让两者都依赖架构任务，但彼此没有先后依赖。是否能实际并行还取决于运行资源和角色是否启用。", "输入：共同架构结论", "输出：各自的修改、测试与报告", "后续：必须等两个前置节点都完成，审查才就绪"],
    ["代码审查", "把两份结果放在一起检查", "审查任务依赖前后端结果。工作台准备下游工作区时会汇总前置分支；若合并冲突，任务准备失败并记录原因。审查 Agent 再检查功能闭环、回归风险与证据。它的判断仍需要负责人审阅。", "输入：前后端报告与合并后的分支", "输出：审查结论、风险与未完成项", "后续：用户按验收标准检查交付"],
    ["负责人验收", "确认功能可用，再决定是否接纳", "负责人在这一阶段进行交付验收。用户查看目标分支、实际差异和测试结果，并亲自验证标签能筛选、清除后恢复列表、空结果有反馈。任务显示 completed 不能替代这些检查。", "输入：交付分支、报告、差异与测试结果", "输出：接纳、继续修改，或要求补充证据", "边界：任务分支不会因此自动合并到主分支"]
  ];
  const head=(n,t,p)=>`<header class="mio-heading"><span>${n}</span><h2>${t}</h2><p>${p}</p></header>`;
  const text=(t,p)=>`<article class="mio-copy"><h3>${t}</h3><p>${p}</p></article>`;
  const shot=(file,title,note)=>`<figure class="mio-shot"><a href="/assets/images/${file}.png?v=public-privacy-20261116" target="_blank" rel="noreferrer"><img src="/assets/images/${file}.png?v=public-privacy-20261116" alt="${title}" loading="lazy"></a><figcaption><strong>${title}</strong><span>${note} · 点击查看原图</span></figcaption></figure>`;
  document.title="MioStudio · 把多 Agent 协作推进到交付｜AI 产品作品集";
  document.body.className="mio-case";
  document.body.innerHTML=`${commonHeader}<main id="main">
    <section class="mio-hero"><div class="shell"><a href="/?v=navigation-20261116#work" class="mio-back">← 全部项目</a><div class="mio-hero-grid"><div><span class="mio-kicker">MIOSTUDIO / AI WORKSPACE</span><h1>一个人的项目，<br>一支有分工的 AI 团队。</h1><p>把目标交给主管，让产品、架构、前端、后端和代码审查分别工作。进展、审批与文件变化留在同一个工作台，最后由负责人验收。</p><div class="mio-tags"><span>Windows 桌面工作台</span><span>持久 Agent 会话</span><span>任务依赖与隔离分支</span></div><a class="mio-action" href="#mio-workflow">跟着一个任务走一遍 ↓</a></div><aside class="mio-thesis"><span>核心产品问题</span><blockquote>多个 Agent 都说完成了，<br>我该相信什么？</blockquote><p>让执行过程、报告与文件证据彼此对应，才有条件判断交付。</p></aside></div></div></section>
    <nav class="shell mio-nav" aria-label="案例章节"><a href="#mio-room">工作现场</a><a href="#mio-workflow">任务怎么推进</a><a href="#mio-context">上下文交接</a><a href="#mio-control">审批与失败</a><a href="#mio-delivery">交付与验收</a></nav>
    <section class="mio-section shell" id="mio-room">${head("01 / 工作现场", "先有项目边界，再有一群 Agent", "项目绑定本地目录，房间承接一个话题或阶段，每位 Agent 在房间里拥有自己的会话。这样，角色、讨论记录与真正操作的项目才能对应起来。")}
      ${shot("miostudio-case-room","阅读清单演示项目 · 项目大厅","实际运行界面 · 演示项目")}
      <div class="mio-three">${text("左侧：确定在哪工作", "项目目录与房间给出归属，固定工作流提供新功能、修 Bug、代码审查等入口。切换房间意味着切换一套独立历史，而不是让所有任务挤在同一段聊天中。")}${text("中间：提出目标与跟进", "群聊承接用户的目标、成员报告和工作事件。点名路由由程序识别 @Agent、多角色或 @全体；主管模式、手动模式和评审模式决定如何组织这一轮工作。")}${text("右侧：查看能力与结果", "成员、任务、变更、文件、终端与用量分别有入口。角色的启用、提示词和权限可以配置；任务状态与文件变化也不必埋在聊天长文里寻找。")}</div>
      <p class="mio-footnote">截图展示真实界面与操作入口。演示环境没有提交模型任务，因此不将空任务面板包装为已完成的协作案例。</p>
    </section>
    <section class="mio-section mio-soft" id="mio-workflow"><div class="shell">${head("02 / 从目标到依赖", "给阅读清单加一个“标签筛选”功能", "以下为按源码解释的任务示例。点击不同阶段，查看它需要谁的结果、完成什么，以及何时允许下一步开始。")}
      <div class="mio-demo"><div class="mio-demo-label">流程讲解 · 前四项对应固定工作流，最后一项为人工验收</div><div class="mio-stage-buttons" role="group" aria-label="选择任务阶段">${stages.map((s,i)=>`<button type="button" data-mio-stage="${i}" aria-pressed="${i===0}"><span>0${i+1}</span>${s[0]}</button>`).join("")}</div><div class="mio-stage-content" id="mio-stage-content" aria-live="polite"></div></div>
      <div class="mio-two">${text("依赖怎样真正约束执行", "任务以节点与依赖持久化。调度器检查前置状态：前置全部完成才允许启动；前置失败、中断、取消或阻断，会阻断下游。固定新功能流程是产品 → 架构 → 前后端并行 → 代码审查，并非把几位 Agent 同时叫来后等待大家自行协调。")}${text("谁负责拆分和派单", "固定工作流提供可重复的角色依赖；主管也可以规划派工。专业 Agent 在自己的线程执行并本人发言。当前实现中，任务全部完成后不强制再生成主管总结，异常时才组织收尾，减少重复报告。")}</div>
    </div></section>
    <section class="mio-section shell" id="mio-context">${head("03 / 交接与并行", "下一个 Agent，怎样接住上一个人的工作", "仅把产品、架构和开发放进同一个群聊，并不能保证彼此使用的是同一份上下文。MioStudio 同时处理语言交接与代码交接。")}
      <div class="mio-two">${text("语言交接：独立线程 + 前置报告", "每个项目、房间和 Agent 固定复用自己的 Codex Thread，保留角色历史。派单时，工作台将前置任务报告附到下游目标里，并明确当前工作目录。新线程或恢复失败的线程还会接收房间上下文。这样后端能知道架构已经决定什么，而不用只靠群聊里碰巧看见的片段。")}${text("代码交接：沿前置分支继续", "对干净的 Git 项目，每项任务准备独立 Worktree 与分支。下游以前置分支为起点；多个前置节点则在下游工作区汇总分支。前后端因此可以各自修改，再在审查阶段检查组合结果。当前项目非 Git 时使用共享目录，并明确提示这一限制。")}</div>
      <div class="mio-rule"><b>什么时候不能开始？</b><p>Git 项目存在未提交改动时，代码会拒绝创建任务 Worktree，避免漏带现有工作；汇总分支发生冲突时中止合并并记录失败。隔离不等于永远没有冲突，而是让冲突有明确位置和处理状态。</p></div>
      <p class="mio-source">实现依据：conversation-service.ts · startAgentTurn / startTask；workspace-manager.ts · prepare</p>
    </section>
    <section class="mio-section mio-night" id="mio-control"><div class="shell">${head("04 / 人保留决策权", "需要批准时停下来，出错时说明卡在哪里", "审批、提问和失败是工作过程中的正常状态。负责人需要知道正在等待什么，回答之后又会从哪里继续。")}
      <div class="mio-three">${text("命令与文件审批", "当所用权限策略触发审批，工作台展示对应命令或文件修改请求。用户的决定会回传到原请求，并更新审批状态。审批随 Agent 的权限策略按需触发。")}${text("结构化提问", "需要补充条件时，以问题卡收集答案，再在原线程继续。运行中也支持向当前 Agent 追加指令；新消息可进入持久队列，避免它在另一个任务仍运行时失去归属。")}${text("重试与下游阻断", "任务记录运行次数、失败原因和起止时间。失败时在配置的次数内自动重试，面板也提供手动重试和取消。前置失败不会被当成成功继续传播，下游会等待处理。")}</div>
      <p class="mio-source">实现依据：resolveApproval / answerUserQuestion / completeWorkerTurn / scheduleWorkflow；任务与审批面板</p>
    </div></section>
    <section class="mio-section shell" id="mio-delivery">${head("05 / 真正的交付边界", "执行结束之后，还有一份结果需要验收", "这是这个产品最值得讲清楚的地方：它已经提供检查证据的工作台，但还不能把任务状态直接当成质量保证。")}
      <div class="mio-two">${text("代码现在怎样判定任务结束", "Worker 回合结束后，工作台读取 Agent 的报告，尝试保存工作区变化，并记录任务结果。可用的隔离工作区内，有修改时自动提交到任务分支，计算相对起点的 diff stat；保存失败会将任务标成失败。但没有文件修改时也可能记录“没有文件变更”，并不会自动因缺少交付物而判失败。")}${text("负责人因此要看哪三件事", "先看具体目标路径与分支是否存在预期文件；再看差异是否实现了需求；最后按验收标准实际运行。对标签筛选示例，应检查选中后列表变化、空结果提示和清除后恢复。Agent 的文字报告提供线索，文件和行为才能支持验收结论。")}</div>
      <div class="mio-evidence"><div><span>执行证据</span><b>Thread / 回合 / 任务状态</b><p>证明一次执行发生了，并有可追踪的状态。</p></div><div><span>变更证据</span><b>路径 / 分支 / diff</b><p>证明在哪改了什么，不自动等同于功能正确。</p></div><div><span>验收证据</span><b>测试 / 实际操作结果</b><p>回答预期功能是否真正可用，需要独立检查。</p></div></div>
      <aside class="mio-rule"><b>交付不会自动进入主分支</b><p>任务修改保留在隔离分支，代码不会因为任务完成就自动合并主分支。Worktree 清理会保留分支，并拒绝清理仍有未提交修改的工作区。接纳结果与清理环境是不同操作。</p></aside>
      <p class="mio-source">实现依据：completeWorkerTurn；GitWorkspaceManager.capture / cleanup。这里描述当前实现，不宣称已具备自动业务验收系统。</p>
    </section>
    <section class="mio-section mio-soft"><div class="shell">${head("06 / 产品复盘", "把协作成本变成看得见、能处理的状态", "MioStudio 面向单人项目负责人，把角色、依赖、权限、上下文与文件变化组织在一起。产品价值需要通过真实任务交付继续验证。")}
      <div class="mio-three">${text("已经形成的能力", "Windows 桌面多窗口、项目与房间隔离、角色持久线程、固定任务流程、权限审批、Git Worktree 与变更记录，以及消息、文件和用量入口。本文已核对本地实现与实际房间界面。")}${text("围绕实际工作的界面组织", "项目大厅承接目标与成员协作，任务面板跟进依赖与进度，变更、文件和终端入口支持交付验收。")}${text("下一步值得衡量", "从下达目标到得到可验收交付的时间、每次需要负责人介入的次数、重试与阻断原因、以及报告和实际文件不一致的比例。作为后续产品评估的观察维度。")}</div>
      <div class="mio-credit"><p>界面采用 Animal Island UI，组件库协议为 CC BY-NC 4.0；角色插画与温暖视觉服务于工作台的可辨识性。商业使用遵循组件库许可。</p></div>
    </div></section>
  </main>${commonFooter}`;
  function selectStage(index) {
    const s=stages[index];
    document.querySelectorAll('[data-mio-stage]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.mioStage)===index)));
    document.getElementById('mio-stage-content').innerHTML=`<span>阶段 0${index+1} / ${s[0]}</span><h3>${s[1]}</h3><p>${s[2]}</p><ul>${s.slice(3).map(t=>`<li>${t}</li>`).join('')}</ul>`;
  }
  document.querySelectorAll('[data-mio-stage]').forEach(b=>b.addEventListener('click',()=>selectStage(Number(b.dataset.mioStage))));
  selectStage(0);
}
