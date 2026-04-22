import Link from "next/link"
import { ExternalLink, Bot, ShieldAlert } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    name: "SRE-AI Platform",
    description:
      "An AI-powered SRE platform that automates incident detection, root cause analysis, and remediation using intelligent agents. Built to reduce MTTR and bring reliability engineering into the AI era.",
    tags: ["AI Agents", "SRE", "Kubernetes", "LLM", "Automation"],
    url: "https://sandeep27choudhary.github.io/sre-ai-platform-distribution/",
    icon: <Bot className="h-6 w-6 text-primary" />,
  },
  {
    name: "TRTE — Top Risk Triage Engine",
    description:
      "Turn scanner noise into an ordered, LLM-enriched action list. Ingests findings from any scanner (Snyk, Trivy, Grype, Semgrep), scores them with a transparent deterministic rule engine, correlates related vulnerabilities, and delivers a ranked \"fix this first\" list. Open-source and self-hosted.",
    tags: ["Security", "Open Source", "FastAPI", "LLM", "Python", "DevSecOps"],
    url: "https://sandeep27choudhary.github.io/trte-engine/#integrate",
    icon: <ShieldAlert className="h-6 w-6 text-primary" />,
  },
]

export default function MyProductsPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 max-w-5xl mx-auto">
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Products</h1>
          <p className="text-muted-foreground md:text-lg max-w-2xl">
            Tools and platforms I've designed and built — focused on solving real engineering problems with AI and automation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {products.map((product) => (
            <div
              key={product.name}
              className="rounded-lg border border-border/40 bg-card p-6 space-y-4 flex flex-col"
            >
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-primary/10 p-2">{product.icon}</div>
                <h2 className="text-xl font-bold">{product.name}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed flex-1">{product.description}</p>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button asChild variant="outline" className="w-fit">
                <Link href={product.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Product
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
