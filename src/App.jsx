import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Clock3,
  Globe2,
  Layers3,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

const metrics = [
  { value: "6+", label: "plataformas suportadas" },
  { value: "24/7", label: "automações monitoradas" },
  { value: "100%", label: "visibilidade do fluxo operacional" },
];

const features = [
  {
    icon: Bot,
    title: "Gestão de robôs",
    description: "Cadastre bots por plataforma, acompanhe status e organize o objetivo de cada operação.",
  },
  {
    icon: Workflow,
    title: "Fluxo de tarefas",
    description: "Monte rotinas de postagem, interação, comentários e mensagens com prioridade e repetição.",
  },
  {
    icon: BarChart3,
    title: "Visão analítica",
    description: "Acompanhe atividade recente, taxa de sucesso e andamento das execuções em um único painel.",
  },
  {
    icon: ShieldCheck,
    title: "Controle operacional",
    description: "Centralize permissões, pausas, retomadas e logs para reduzir falhas na rotina da equipe.",
  },
];

const platforms = ["Instagram", "TikTok", "X", "Facebook", "LinkedIn", "YouTube"];

const steps = [
  {
    title: "Configure os robôs",
    description: "Defina plataforma, finalidade, responsáveis e status de cada automação.",
  },
  {
    title: "Agende as ações",
    description: "Crie tarefas com tipo, prioridade, conteúdo, URL alvo e frequência de execução.",
  },
  {
    title: "Acompanhe os resultados",
    description: "Visualize logs, progresso, falhas e histórico para ajustar a operação rapidamente.",
  },
];

const benefits = [
  "Interface moderna com foco em operação rápida",
  "Organização por bots, tarefas e logs",
  "Experiência preparada para times de marketing e social media",
  "Base ideal para evoluir com integrações reais e dashboards avançados",
];

function SectionTitle({ badge, title, description }) {
  return (
    <div className="max-w-2xl">
      <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-violet-200">
        <Sparkles className="h-3.5 w-3.5" />
        {badge}
      </span>
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>
    </div>
  );
}

function App() {
  return (
    <div id="top" className="min-h-screen bg-[#050816] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_28%),linear-gradient(180deg,#050816_0%,#090b18_45%,#050816_100%)]" />

      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 shadow-lg shadow-violet-950/50">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.18em] text-violet-200 uppercase">Fluxo de Rede Social</p>
              <p className="text-xs text-slate-400">Automação e monitoramento de operações sociais</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#recursos" className="transition hover:text-white">Recursos</a>
            <a href="#fluxo" className="transition hover:text-white">Fluxo</a>
            <a href="#beneficios" className="transition hover:text-white">Benefícios</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-200">
              <CheckCircle2 className="h-4 w-4" />
              Site institucional do projeto pronto para apresentação
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Centralize bots, tarefas e execução de campanhas em redes sociais.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              O Fluxo de Rede Social transforma a operação de automação em uma experiência clara,
              visual e organizada para equipes que precisam planejar, executar e acompanhar ações em múltiplas plataformas.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#recursos"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-violet-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
              >
                Explorar recursos
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#beneficios"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Ver benefícios
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {metrics.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-3xl font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-violet-500/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-black/40 backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm font-medium text-slate-300">Painel operacional</p>
                  <p className="text-xs text-slate-500">Visão resumida do produto</p>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">
                  Online
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-300">Bots ativos</p>
                    <Bot className="h-4 w-4 text-violet-300" />
                  </div>
                  <p className="mt-4 text-3xl font-semibold">18</p>
                  <p className="mt-2 text-xs text-emerald-300">+4 esta semana</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-300">Tarefas em execução</p>
                    <PlayCircle className="h-4 w-4 text-cyan-300" />
                  </div>
                  <p className="mt-4 text-3xl font-semibold">42</p>
                  <p className="mt-2 text-xs text-cyan-300">Distribuídas por prioridade</p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-300">Atividade recente</p>
                  <Clock3 className="h-4 w-4 text-slate-400" />
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    "Publicação agendada para Instagram concluída com sucesso",
                    "Bot de engajamento no TikTok pausado para revisão",
                    "Novo fluxo de comentários criado para campanha de lançamento",
                  ].map((item, index) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-950/50 p-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300" />
                      <div>
                        <p className="text-sm text-slate-200">{item}</p>
                        <p className="mt-1 text-xs text-slate-500">Evento {index + 1}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {platforms.map((platform) => (
                  <span
                    key={platform}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="recursos" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            badge="Recursos"
            title="Um site claro para explicar o valor do projeto."
            description="A nova página apresenta o sistema, destaca funcionalidades e facilita a demonstração do produto para clientes, professores ou avaliadores."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {features.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="fluxo" className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <SectionTitle
              badge="Fluxo"
              title="Como o sistema organiza a automação."
              description="O site resume o processo principal do projeto em etapas simples, deixando mais fácil entender a proposta da aplicação."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {steps.map((step, index) => (
                <article key={step.title} className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/15 text-sm font-semibold text-cyan-200">
                    0{index + 1}
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="beneficios" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionTitle
              badge="Benefícios"
              title="Apresentação pronta para demonstrar o projeto."
              description="Além de deixar o repositório com uma interface mais profissional, o novo site comunica rapidamente o objetivo, o diferencial e o potencial de evolução da solução."
            />

            <div className="grid gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-300">
                    <Layers3 className="h-5 w-5" />
                  </div>
                  <p className="text-sm leading-7 text-slate-200">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-violet-600/20 via-slate-900 to-cyan-500/20 p-8 sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-100">
                  <Globe2 className="h-3.5 w-3.5" />
                  Presença web do projeto
                </div>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Seu projeto agora tem uma vitrine digital clara, moderna e objetiva.
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-200/85">
                  Use esta página para apresentar a ideia, demonstrar o fluxo principal e servir como base para futuras integrações com dados reais.
                </p>
              </div>

              <a
                href="#top"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Voltar ao início
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
