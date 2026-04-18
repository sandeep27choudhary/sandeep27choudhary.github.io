import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlogPost() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 max-w-4xl mx-auto">
      <div className="space-y-8">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        {/* Article Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>April 2025</span>
            <span>•</span>
            <span>10 min read</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Building an AI-Powered SRE Platform: Architecture & Design Principles
          </h1>
          <div className="flex flex-wrap gap-2">
            {["AI Agents", "SRE", "Kubernetes", "LLM", "Automation", "RAG"].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <Button asChild variant="outline" size="sm" className="w-fit">
            <Link
              href="https://sandeep27choudhary.github.io/sre-ai-platform-distribution/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View Live Platform
            </Link>
          </Button>
        </div>

        {/* Article Content */}
        <div className="prose prose-gray max-w-none dark:prose-invert">

          <h2>Overview</h2>
          <p>
            Site Reliability Engineering has always been about reducing toil and keeping systems healthy. But as infrastructure
            grows in complexity, even experienced SRE teams struggle to correlate signals, trace root causes, and communicate
            findings quickly. The SRE-AI Platform was built to change that — not by handing the wheel to AI, but by using it
            in exactly the right place.
          </p>
          <p>
            The core design principle is simple: <strong>deterministic systems handle infrastructure logic; AI is used
            strictly for communication.</strong> This post walks through the architecture that makes that possible.
          </p>

          <h2>The Problem with AI-First SRE Tools</h2>
          <p>
            Most AI-powered ops tools make a critical mistake: they route everything through an LLM. That creates two problems.
            First, LLMs are non-deterministic — you can't rely on them to produce consistent root cause analyses across incidents.
            Second, they hallucinate. In production, a hallucinated RCA recommendation isn't just wrong — it's dangerous.
          </p>
          <p>
            The SRE-AI Platform inverts this. AI lives at the edge, generating human-readable explanations from
            structured, verified data. The core remains fully deterministic.
          </p>

          <h2>High-Level Architecture</h2>

          <h3>1. User Interaction Layer</h3>
          <p>
            Engineers interact via CLI, UI, or API. All requests route through an API Gateway that handles authentication,
            rate limiting, and routing. This layer is intentionally thin — its only job is to get requests to the right place.
          </p>

          <h3>2. NLU Layer</h3>
          <p>
            Incoming requests pass through a Natural Language Understanding layer that parses user intent and extracts entities.
            This normalizes free-text queries into structured inputs before any processing begins — keeping downstream
            components clean and predictable.
          </p>

          <h3>3. Intent Classification & Tiered Execution</h3>
          <p>
            One of the most important architectural decisions was tiered execution. Not every query needs the same treatment:
          </p>
          <ul>
            <li>
              <strong>T0/T1 Engine</strong> — handles direct cluster lookups, metrics queries, and quick checks. Zero AI
              involvement, sub-second latency. This is where the majority of requests land.
            </li>
            <li>
              <strong>RAG Engine</strong> — performs semantic search over incident history and past root cause analyses.
              When a new incident looks similar to something that happened six months ago, this engine surfaces that context
              automatically.
            </li>
            <li>
              <strong>RCA Pipeline</strong> — a deterministic multi-stage pipeline that correlates signals, validates
              hypotheses, and produces a verified root cause. No LLM in the loop here.
            </li>
          </ul>

          <h2>Evidence Layer</h2>
          <p>
            Before any response is generated, all signals pass through an Evidence Aggregation layer. This layer combines
            structured data from multiple sources, correlates it, and produces a set of verified facts. Think of it as
            the system building its case before drawing conclusions — nothing speculative makes it through.
          </p>

          <h2>The AI Boundary: LLM Gateway</h2>
          <p>
            The LLM Gateway is where AI enters the system — and it's deliberately isolated from core logic. Its responsibilities:
          </p>
          <ul>
            <li>Abstract model providers so the system isn't tied to a single LLM</li>
            <li>Handle rate limiting, retries, and fallbacks</li>
            <li>Ensure the LLM receives only verified, structured data — never raw cluster state</li>
          </ul>
          <p>
            By constraining the LLM to this boundary, the platform guarantees that AI output is always grounded in facts
            the deterministic pipeline has already validated.
          </p>

          <h2>Response Generation</h2>
          <p>
            The final layer converts structured analysis into human-readable insights and actionable explanations. This is
            where the LLM earns its place: taking a dense set of correlated signals and turning them into something an
            on-call engineer can act on at 3am without needing a PhD in distributed systems.
          </p>

          <h2>Supporting Infrastructure</h2>

          <h3>Observability Layer</h3>
          <ul>
            <li><strong>Cluster Indexer</strong> — continuously indexes cluster state for fast lookups</li>
            <li><strong>Anomaly Detection</strong> — flags deviations from baseline before they become incidents</li>
            <li><strong>Snapshot Cache</strong> — preserves point-in-time cluster state for post-incident analysis</li>
          </ul>

          <h3>Data Layer</h3>
          <ul>
            <li><strong>PostgreSQL</strong> — core relational storage for incidents, RCAs, and audit trails</li>
            <li><strong>pgvector</strong> — vector embeddings for semantic search in the RAG engine</li>
            <li><strong>Redis</strong> — caching layer for low-latency T0/T1 responses</li>
          </ul>

          <h2>Design Principles</h2>
          <ul>
            <li><strong>Deterministic first</strong> — infrastructure logic is never delegated to AI</li>
            <li><strong>AI at the edge</strong> — LLMs translate verified facts into human language, nothing more</li>
            <li><strong>Tiered execution</strong> — latency is controlled by routing queries to the right engine</li>
            <li><strong>Stateless architecture</strong> — improves resilience and simplifies horizontal scaling</li>
            <li><strong>Single data layer</strong> — one source of truth eliminates data consistency issues</li>
          </ul>

          <h2>Key Takeaway</h2>
          <blockquote>
            The system constrains AI to explanation, while deterministic pipelines handle discovery and validation of truth.
          </blockquote>
          <p>
            This is the architecture principle that makes AI safe to use in production SRE workflows. It's not about
            replacing human judgment — it's about giving engineers verified, well-explained context so they can make
            better decisions faster.
          </p>
          <p>
            If you're building AI-powered infrastructure tooling and finding it unreliable, the fix is usually architectural:
            move AI out of the decision path and into the explanation layer. The SRE-AI Platform is proof that this works.
          </p>

        </div>

        {/* CTA */}
        <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row gap-4">
          <Button asChild>
            <Link
              href="https://sandeep27choudhary.github.io/sre-ai-platform-distribution/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Try the SRE-AI Platform
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
