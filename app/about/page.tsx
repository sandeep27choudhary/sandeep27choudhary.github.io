import Link from "next/link"
import Image from "next/image"
import { FileDown, Award, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 max-w-5xl mx-auto">
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h1>
          <div className="flex items-center space-x-4">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-primary/20">
              <Image 
                src="/profile-photo.jpeg" 
                alt="Sandeep Choudhary - DevOps Engineer" 
                width={200}
                height={200}
                className="h-full w-full object-cover" 
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Sandeep Choudhary</h2>
              <p className="text-muted-foreground">Cloud Infrastructure & DevOps Engineer</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Professional Summary</h2>
          <p className="text-muted-foreground leading-relaxed">
            4+ years in DevOps, with deep hands-on experience in cloud infrastructure, CI/CD, and Kubernetes-based systems.
            What sets my work apart: a growing focus on building AI agent architectures that automate complex, real-world
            engineering problems. I care about systems that scale cleanly, fail gracefully, and need minimal hand-holding.
          </p>
          <div className="pt-4">
            <Button asChild variant="outline">
              <Link href="https://docs.google.com/document/d/e/2PACX-1vTQOkYZW0e9A6UhROME4YKC8pw5G-Gx0y7HHQTdIeR0b_oD-O3mRY5s_cUsHrcmAQpWtC6BIG6qR6nC/pub" target="_blank" rel="noopener noreferrer">
                <FileDown className="mr-2 h-4 w-4" />
                View Resume
              </Link>
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Core Expertise</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border/40 bg-card p-6">
              <h3 className="flex items-center text-xl font-bold">
                <Award className="mr-2 h-5 w-5 text-primary" />
                Cloud Infrastructure
              </h3>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>• AWS (ECS, EC2, Lambda, RDS, S3)</li>
                <li>• Kubernetes & container orchestration</li>
                <li>• Infrastructure as Code (Terraform)</li>
                <li>• IAM, networking & security</li>
                <li>• CloudWatch, alerting & observability</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border/40 bg-card p-6">
              <h3 className="flex items-center text-xl font-bold">
                <Award className="mr-2 h-5 w-5 text-primary" />
                DevOps & Automation
              </h3>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>• CI/CD pipeline design & optimization</li>
                <li>• Docker & Kubernetes deployments</li>
                <li>• Scripting & workflow automation</li>
                <li>• GitOps & release engineering</li>
                <li>• Monitoring, logging & incident response</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border/40 bg-card p-6">
              <h3 className="flex items-center text-xl font-bold">
                <Award className="mr-2 h-5 w-5 text-primary" />
                AI Agent Systems
              </h3>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>• Designing multi-agent architectures</li>
                <li>• LLM integration & prompt engineering</li>
                <li>• Agentic workflows for DevOps tasks</li>
                <li>• RAG pipelines & knowledge systems</li>
                <li>• AI-driven infrastructure automation</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border/40 bg-card p-6">
              <h3 className="flex items-center text-xl font-bold">
                <Award className="mr-2 h-5 w-5 text-primary" />
                Scalability & Reliability
              </h3>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>• High-availability system design</li>
                <li>• Performance tuning & cost optimization</li>
                <li>• Fault tolerance & disaster recovery</li>
                <li>• Load balancing & auto-scaling</li>
                <li>• SLO/SLA definition & enforcement</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Education & Certifications</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="rounded-full bg-primary/10 p-2">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">B.Tech in Computer Science</h3>
                <p className="text-muted-foreground">College of Engineering & Technology, Bikaner</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="rounded-full bg-primary/10 p-2">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">AWS Solutions Architect Associate</h3>
                <p className="text-muted-foreground">Amazon Web Services</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="rounded-full bg-primary/10 p-2">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Google Cloud Platform Fundamentals</h3>
                <p className="text-muted-foreground">Google Cloud</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Personal Interests</h2>
          <p className="text-muted-foreground leading-relaxed">
            When I'm not immersed in cloud technologies, I enjoy expressing my creativity through sketching and painting.
            Art provides me with a different perspective and helps me maintain a balanced approach to problem-solving
            in my technical work.
          </p>
        </div>

        <div className="pt-6">
          <Button asChild>
            <Link href="/contact">Let's Connect</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

