export interface LearningStep {
  step: number
  title: string
  description: string
  resources?: string[]
}

export interface Release {
  id: string
  date: string
  title: string
  product: 'claude' | 'claude-code' | 'api'
  version?: string
  summary: string
  fullDescription: string
  learningPlan: LearningStep[]
  links: { official?: string }
}

export const releases: Release[] = [
  {
    id: 'claude-3-launch',
    date: '2024-03-04',
    title: 'Claude 3 Family Launch',
    product: 'claude',
    version: '3',
    summary: 'Anthropic launches Claude 3 with Haiku, Sonnet, and Opus — setting new benchmarks across reasoning, math, and coding.',
    fullDescription: `## Claude 3 Family Launch

Anthropic released the Claude 3 model family on March 4, 2024:

- **Claude 3 Haiku** — fastest and most compact
- **Claude 3 Sonnet** — balances intelligence and speed
- **Claude 3 Opus** — most intelligent model, outperforming GPT-4 on many benchmarks

### Key Improvements
- Vision capabilities — analyze photos, charts, documents
- 200K context window on all models
- Significantly reduced hallucination rates vs Claude 2`,
    learningPlan: [
      { step: 1, title: 'Understand the model tiers', description: 'Read the Claude 3 model card to learn the tradeoffs between Haiku, Sonnet, and Opus.', resources: ['https://www.anthropic.com/news/claude-3-family'] },
      { step: 2, title: 'Try vision capabilities', description: 'Send an image to Claude 3 via the API. Try uploading a chart and asking questions about it.' },
      { step: 3, title: 'Test the 200K context window', description: 'Feed a long document and ask detailed questions that require reading the whole thing.' },
      { step: 4, title: 'Compare models for your use case', description: 'Run the same prompt on Haiku, Sonnet, and Opus. Measure quality vs latency.' },
    ],
    links: { official: 'https://www.anthropic.com/news/claude-3-family' },
  },
  {
    id: 'claude-35-sonnet',
    date: '2024-06-20',
    title: 'Claude 3.5 Sonnet',
    product: 'claude',
    version: '3.5 Sonnet',
    summary: 'Claude 3.5 Sonnet surpasses Opus on most benchmarks while being faster and cheaper. Artifacts feature launched alongside.',
    fullDescription: `## Claude 3.5 Sonnet

Released June 20, 2024, Claude 3.5 Sonnet outperforms Claude 3 Opus across most evaluations.

### What Changed
- Ranked #1 on SWE-bench (real-world software engineering)
- Exceptional instruction following
- Faster and cheaper than Opus

### Artifacts Feature
A side panel in Claude.ai that lets Claude generate and preview code and interactive content in real time.`,
    learningPlan: [
      { step: 1, title: 'Explore coding capabilities', description: 'Give Claude 3.5 Sonnet a real bug from your codebase. Notice the accuracy and depth.' },
      { step: 2, title: 'Try Artifacts in Claude.ai', description: 'Ask Claude to build a small interactive app. Watch it render live in the Artifacts panel.' },
      { step: 3, title: 'Test instruction following', description: 'Give Claude a complex multi-part instruction with specific formatting requirements.' },
    ],
    links: { official: 'https://www.anthropic.com/news/claude-3-5-sonnet' },
  },
  {
    id: 'computer-use',
    date: '2024-10-22',
    title: 'Computer Use (Beta)',
    product: 'api',
    summary: 'Claude can now control a computer — viewing the screen, moving the mouse, and typing — to complete multi-step tasks autonomously.',
    fullDescription: `## Computer Use (Beta)

Released October 22, 2024 — the first AI model that can use a computer the way humans do.

### How It Works
Claude 3.5 Sonnet can take screenshots, move the mouse, click, and type to complete tasks.

### Use Cases
- Automated browser testing
- Data entry across legacy software
- Multi-app workflows
- Web research and scraping`,
    learningPlan: [
      { step: 1, title: 'Read the computer use docs', description: 'Understand the tool definitions (screenshot, click, type).', resources: ['https://docs.anthropic.com/en/docs/build-with-claude/computer-use'] },
      { step: 2, title: 'Run the reference implementation', description: 'Clone the Anthropic quickstart repo and run the Docker-based demo.' },
      { step: 3, title: 'Build a simple automation', description: 'Write a script that asks Claude to open a browser and extract information.' },
    ],
    links: { official: 'https://www.anthropic.com/news/3-5-models-and-computer-use' },
  },
  {
    id: 'claude-35-haiku',
    date: '2024-11-05',
    title: 'Claude 3.5 Haiku',
    product: 'claude',
    version: '3.5 Haiku',
    summary: 'Claude 3.5 Haiku brings 3.5-class intelligence at Haiku speed and price — the fastest model in the family.',
    fullDescription: `## Claude 3.5 Haiku

Released November 5, 2024, Claude 3.5 Haiku matches Claude 3 Opus performance at Haiku speed and price.

### Key Points
- Optimized for low-latency tasks: chat, autocomplete, data extraction
- Available via API with vision support
- Best price-to-performance ratio in the Claude lineup`,
    learningPlan: [
      { step: 1, title: 'Profile latency', description: 'Measure response times for Haiku vs Sonnet on your most common prompt.' },
      { step: 2, title: 'Build a real-time feature', description: 'Use Haiku to power a feature needing near-instant responses, like a chat widget or autocomplete.' },
    ],
    links: { official: 'https://www.anthropic.com/news/3-5-models-and-computer-use' },
  },
  {
    id: 'claude-37-sonnet',
    date: '2025-02-24',
    title: 'Claude 3.7 Sonnet + Extended Thinking',
    product: 'claude',
    version: '3.7 Sonnet',
    summary: 'Extended thinking lets Claude reason step-by-step before answering, dramatically improving performance on hard problems.',
    fullDescription: `## Claude 3.7 Sonnet

Released February 24, 2025 — introduces extended thinking.

### Extended Thinking
When enabled, Claude thinks through problems before responding. You can read the full reasoning trace.

### Performance
- #1 on SWE-bench Verified
- Top scores on GPQA (graduate-level science)
- Best-in-class math and reasoning

### How to Use
Set \`thinking: { type: "enabled", budget_tokens: N }\` in your API request.`,
    learningPlan: [
      { step: 1, title: 'Try a hard reasoning problem', description: 'Send a multi-step math or logic problem with extended thinking enabled. Read the thinking output.' },
      { step: 2, title: 'Tune the thinking budget', description: 'Try budget_tokens at 1000, 5000, and 10000. Notice how more thinking affects accuracy and cost.' },
      { step: 3, title: 'Apply to a real coding task', description: 'Use 3.7 Sonnet on a real bug. Compare with and without extended thinking.' },
    ],
    links: { official: 'https://www.anthropic.com/news/claude-3-7-sonnet' },
  },
  {
    id: 'claude-code-launch',
    date: '2025-02-24',
    title: 'Claude Code Launch',
    product: 'claude-code',
    summary: 'Claude Code launches as an agentic coding tool — runs in your terminal, reads your codebase, and executes multi-step tasks end-to-end.',
    fullDescription: `## Claude Code

Launched February 24, 2025 — an agentic AI coding assistant for the terminal.

### What It Does
- Reads your entire codebase to understand context
- Edits files, runs tests, executes shell commands
- Handles multi-step tasks end-to-end
- Supports MCP (Model Context Protocol) servers

### Philosophy
Describe the task — Claude figures out the steps.`,
    learningPlan: [
      { step: 1, title: 'Install and authenticate', description: 'Run npm install -g @anthropic-ai/claude-code, then claude to log in.' },
      { step: 2, title: 'Explore your codebase', description: 'Navigate to a project and ask "explain how this codebase works".' },
      { step: 3, title: 'Try an end-to-end task', description: 'Ask Claude Code to fix a real bug or add a small feature.' },
      { step: 4, title: 'Set up CLAUDE.md', description: 'Create a CLAUDE.md with coding conventions. See how Claude respects them.' },
    ],
    links: { official: 'https://www.anthropic.com/news/claude-code' },
  },
  {
    id: 'claude-code-ga',
    date: '2025-05-22',
    title: 'Claude Code GA + Claude 4',
    product: 'claude-code',
    summary: 'Claude Code becomes generally available with sub-agents, GitHub Actions, IDE extensions, and Plan mode. Claude 4 (Sonnet 4 + Opus 4) launches alongside.',
    fullDescription: `## Claude Code GA + Claude 4

Released May 22, 2025 — Claude Code GA and the Claude 4 model family.

### Claude Code New Features
- **Sub-agents**: Spawn parallel agents for different parts of a task
- **GitHub Actions**: Run Claude Code in CI or on PR comments
- **VS Code & JetBrains extensions**: Use Claude Code natively in your IDE
- **Plan mode**: Claude proposes a plan before executing

### Claude 4 Models
- **Claude Sonnet 4** — best coding model at launch
- **Claude Opus 4** — frontier intelligence, expert-level science/math/coding`,
    learningPlan: [
      { step: 1, title: 'Install the VS Code extension', description: 'Install Claude Code from the VS Code marketplace for inline use.' },
      { step: 2, title: 'Try Plan mode', description: 'Prefix a complex task with /plan. Review proposed steps before approving.' },
      { step: 3, title: 'Set up a GitHub Action', description: 'Add a Claude Code GitHub Action to auto-review PRs or fix failing tests.' },
    ],
    links: { official: 'https://www.anthropic.com/news/claude-code-general-availability' },
  },
  {
    id: 'claude-46-launch',
    date: '2025-07-15',
    title: 'Claude 4.5 / 4.6 Models',
    product: 'claude',
    version: '4.5/4.6',
    summary: 'Anthropic releases Claude 4.5 (Haiku) and Claude 4.6 (Sonnet, Opus) — the current generation with improved speed, reasoning, and agentic capabilities.',
    fullDescription: `## Claude 4.5 and 4.6

The latest Claude generation, featuring:

- **Claude Haiku 4.5** — fastest and most affordable, optimized for high-volume tasks
- **Claude Sonnet 4.6** — best balance of intelligence and speed, powers Claude Code
- **Claude Opus 4.6** — most intelligent, for the hardest reasoning and research tasks

### Key Improvements Over Claude 4
- Faster response times across all tiers
- Improved agentic performance for multi-step tasks
- Better tool use reliability
- Enhanced instruction following`,
    learningPlan: [
      { step: 1, title: 'Update your model strings', description: 'Migrate from older models to claude-sonnet-4-6 or claude-haiku-4-5-20251001. Test for regressions.' },
      { step: 2, title: 'Benchmark on your workload', description: 'Run the new models on your most important prompts. Compare quality and latency.' },
      { step: 3, title: 'Explore agentic use cases', description: 'Use Sonnet 4.6 for multi-step agentic tasks. Notice improvements in tool use reliability.' },
    ],
    links: { official: 'https://www.anthropic.com/news' },
  },
]
