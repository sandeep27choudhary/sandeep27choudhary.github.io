import Link from "next/link"
import { ArrowRight, Server, Cloud, GitBranch, Bot, ExternalLink, ShieldAlert } from "lucide-react"
import { Button } from "@/components/ui/button"
import ParticlesBackground from "@/components/particles-background"
export default function Home() {
  return (
    <div className="relative">
      <ParticlesBackground />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Cloud Infrastructure & DevOps Engineer
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Building Scalable, Secure, and Automated Cloud Solutions
            </p>
            <div className="space-x-4 pt-4">
              <Button asChild size="lg">
                <Link href="/experience">
                  Explore Experience
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-12 md:py-20 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border border-border/40 bg-background p-6 text-center shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Cloud className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">AWS Cloud Infrastructure</h3>
              <p className="text-muted-foreground">
                Expert in EKS, ECS, S3, RDS, CloudFront, Route 53, and more AWS services
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border border-border/40 bg-background p-6 text-center shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Kubernetes & Containerization</h3>
              <p className="text-muted-foreground">
                Specialized in Kubernetes, Helm, Docker, and container orchestration
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border border-border/40 bg-background p-6 text-center shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <GitBranch className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">CI/CD Automation</h3>
              <p className="text-muted-foreground">Streamlined workflows with GitHub Actions, Terraform, and IaC</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-10">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Products</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-lg">
              Tools I've built to solve real engineering problems with AI, automation, and security.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="rounded-lg border border-border/40 bg-card p-8 space-y-5 flex flex-col">
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-primary/10 p-3">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">SRE-AI Platform</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed flex-1">
                An AI-powered SRE platform that automates incident detection, root cause analysis, and remediation using intelligent agents.
                Built to reduce MTTR and bring reliability engineering into the AI era.
              </p>
              <div className="flex flex-wrap gap-2">
                {["AI Agents", "SRE", "Kubernetes", "LLM", "Automation"].map((tag) => (
                  <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {tag}
                  </span>
                ))}
              </div>
              <Button asChild variant="outline" className="w-fit">
                <Link href="https://sandeep27choudhary.github.io/sre-ai-platform-distribution/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View SRE-AI Platform
                </Link>
              </Button>
            </div>
            <div className="rounded-lg border border-border/40 bg-card p-8 space-y-5 flex flex-col">
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-primary/10 p-3">
                  <ShieldAlert className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">TRTE — Top Risk Triage Engine</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Turn scanner noise into an ordered, LLM-enriched action list. Ingests findings from any scanner, scores them with a transparent deterministic rule engine, and delivers a ranked "fix this first" list. Open-source and self-hosted.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Security", "Open Source", "FastAPI", "LLM", "DevSecOps"].map((tag) => (
                  <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {tag}
                  </span>
                ))}
              </div>
              <Button asChild variant="outline" className="w-fit">
                <Link href="https://sandeep27choudhary.github.io/trte-engine/#integrate" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View TRTE Engine
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Ready to Optimize Your Cloud Infrastructure?
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Let's discuss how I can help you build scalable, secure, and automated cloud solutions.
            </p>
            <div className="mt-6">
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

