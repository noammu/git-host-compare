import { Badge } from "~/components/ui/badge/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card/card";
import { Button } from "~/components/ui/button/button";
import { GitBranch, Users, Shield, Zap, Code, Package, Check, X } from "lucide-react";
import type { Route } from "./+types/home";
import styles from "./home.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GitHub vs GitLab - Comprehensive Platform Comparison" },
    { name: "description", content: "An objective, detailed comparison between GitHub and GitLab, plus alternative code hosting platforms to help you choose the right tool for your team." },
  ];
}

const comparisonFeatures = [
  {
    category: "Repository Management",
    github: {
      features: ["Unlimited public & private repos", "Advanced code search", "GitHub Codespaces", "Dependency graph"],
      rating: "excellent",
    },
    gitlab: {
      features: ["Unlimited public & private repos", "Advanced search & filtering", "Web IDE", "Dependency scanning"],
      rating: "excellent",
    },
  },
  {
    category: "CI/CD & DevOps",
    github: {
      features: ["GitHub Actions", "Third-party integrations", "Self-hosted runners", "Reusable workflows"],
      rating: "very-good",
    },
    gitlab: {
      features: ["Built-in CI/CD pipelines", "Auto DevOps", "Kubernetes integration", "Pipeline templates"],
      rating: "excellent",
    },
  },
  {
    category: "Security & Compliance",
    github: {
      features: ["Dependabot alerts", "Code scanning", "Secret scanning", "Security advisories"],
      rating: "excellent",
    },
    gitlab: {
      features: ["SAST/DAST scanning", "Container scanning", "License compliance", "Vulnerability management"],
      rating: "excellent",
    },
  },
  {
    category: "Collaboration",
    github: {
      features: ["Pull requests", "Code review", "Discussions", "Project boards"],
      rating: "excellent",
    },
    gitlab: {
      features: ["Merge requests", "Code review", "Issue boards", "Wiki & snippets"],
      rating: "very-good",
    },
  },
  {
    category: "Deployment",
    github: {
      features: ["GitHub Pages", "Marketplace integrations", "Deployment protection", "Environments"],
      rating: "very-good",
    },
    gitlab: {
      features: ["GitLab Pages", "Built-in registry", "Feature flags", "Progressive delivery"],
      rating: "excellent",
    },
  },
  {
    category: "Pricing",
    github: {
      features: ["Free tier generous", "Pro: $4/user/month", "Team: $4/user/month", "Enterprise: Custom"],
      rating: "competitive",
    },
    gitlab: {
      features: ["Free tier comprehensive", "Premium: $29/user/month", "Ultimate: $99/user/month", "Self-hosted available"],
      rating: "competitive",
    },
  },
];

const keyDifferences = [
  {
    icon: GitBranch,
    title: "CI/CD Integration",
    github: "Relies on GitHub Actions, requires configuration but highly flexible with marketplace actions",
    gitlab: "Built-in CI/CD from the start, more comprehensive DevOps toolchain out of the box",
  },
  {
    icon: Users,
    title: "Community & Ecosystem",
    github: "Largest developer community, extensive marketplace, dominant in open source",
    gitlab: "Smaller but growing community, strong in enterprise DevOps, self-hosted options",
  },
  {
    icon: Shield,
    title: "Security Features",
    github: "Dependabot, code scanning, secret scanning (mostly in paid tiers for private repos)",
    gitlab: "Comprehensive security scanning (SAST, DAST, container) available in free tier",
  },
  {
    icon: Package,
    title: "Package Management",
    github: "GitHub Packages with support for npm, Docker, Maven, NuGet, RubyGems",
    gitlab: "Built-in Package Registry with similar support, integrated with CI/CD pipelines",
  },
  {
    icon: Zap,
    title: "Performance & Speed",
    github: "Fast interface, occasional slowdowns during peak times, reliable uptime",
    gitlab: "Can be resource-intensive when self-hosted, SaaS version performs well",
  },
  {
    icon: Code,
    title: "Development Philosophy",
    github: "Best-of-breed integrations, open ecosystem, minimal built-in tools",
    gitlab: "All-in-one platform, complete DevOps lifecycle, reduced tool sprawl",
  },
];

const alternatives = [
  {
    name: "Bitbucket",
    logo: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=200&h=200&fit=crop",
    description: "Atlassian's Git solution with deep Jira integration, ideal for teams already in the Atlassian ecosystem.",
    strengths: ["Jira integration", "Bitbucket Pipelines", "Competitive pricing", "Code insights"],
    bestFor: "Teams using Atlassian products",
    url: "https://bitbucket.org",
  },
  {
    name: "Azure DevOps",
    logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&h=200&fit=crop",
    description: "Microsoft's comprehensive DevOps platform offering repos, pipelines, boards, and artifacts in one place.",
    strengths: ["Microsoft integration", "Azure Pipelines", "Test Plans", "Artifact management"],
    bestFor: "Microsoft-centric organizations",
    url: "https://azure.microsoft.com/en-us/products/devops",
  },
  {
    name: "Gitea",
    logo: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=200&h=200&fit=crop",
    description: "Lightweight, self-hosted Git service written in Go, offering simplicity and minimal resource requirements.",
    strengths: ["Self-hosted", "Lightweight", "Easy setup", "Open source"],
    bestFor: "Small teams wanting simple self-hosting",
    url: "https://gitea.io",
  },
  {
    name: "AWS CodeCommit",
    logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=200&h=200&fit=crop",
    description: "Fully managed Git service by AWS, seamlessly integrated with AWS services and IAM permissions.",
    strengths: ["AWS integration", "Scalable", "Secure", "IAM integration"],
    bestFor: "AWS-native applications",
    url: "https://aws.amazon.com/codecommit",
  },
  {
    name: "SourceForge",
    logo: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&h=200&fit=crop",
    description: "One of the oldest code hosting platforms, supporting Git, SVN, and Mercurial with project management tools.",
    strengths: ["Multi-VCS support", "Project hosting", "Download statistics", "Long history"],
    bestFor: "Open source projects needing downloads",
    url: "https://sourceforge.net",
  },
  {
    name: "Gitness",
    logo: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=200&h=200&fit=crop",
    description: "Harness's open-source DevOps platform combining code hosting with pipelines in a lightweight package.",
    strengths: ["Open source", "Built-in CI/CD", "Lightweight", "Modern interface"],
    bestFor: "Teams seeking modern open-source solutions",
    url: "https://gitness.com",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <Badge className={styles.heroBadge}>Platform Comparison</Badge>
          <h1 className={styles.heroTitle}>GitHub vs GitLab</h1>
          <p className={styles.heroDescription}>
            An objective, comprehensive comparison of the two leading code hosting and collaboration platforms.
            Discover key differences, strengths, and which platform best fits your team's needs.
          </p>
          <div className={styles.heroActions}>
            <Button asChild size="lg">
              <a href="#comparison">View Comparison</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#alternatives">Explore Alternatives</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Overview Cards */}
      <section className={styles.overview}>
        <div className={styles.overviewGrid}>
          <Card className={styles.platformCard}>
            <CardHeader>
              <div className={styles.platformLogo} style={{ backgroundColor: 'var(--slate-12)' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ color: 'white', width: '40px', height: '40px' }}>
                  <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </div>
              <CardTitle>GitHub</CardTitle>
              <CardDescription>The world's largest code hosting platform</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className={styles.featureList}>
                <li><Check className={styles.checkIcon} /> 100M+ developers</li>
                <li><Check className={styles.checkIcon} /> Dominant in open source</li>
                <li><Check className={styles.checkIcon} /> Extensive marketplace</li>
                <li><Check className={styles.checkIcon} /> GitHub Actions for CI/CD</li>
              </ul>
            </CardContent>
          </Card>

          <Card className={styles.platformCard}>
            <CardHeader>
              <div className={styles.platformLogo} style={{ backgroundColor: 'var(--orange-9)' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ color: 'white', width: '40px', height: '40px' }}>
                  <path d="M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 0 0-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 0 0-.867 0L1.387 9.452.045 13.587a.924.924 0 0 0 .331 1.023L12 23.054l11.624-8.443a.92.92 0 0 0 .331-1.024"/>
                </svg>
              </div>
              <CardTitle>GitLab</CardTitle>
              <CardDescription>Complete DevOps platform in one application</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className={styles.featureList}>
                <li><Check className={styles.checkIcon} /> Built-in CI/CD pipelines</li>
                <li><Check className={styles.checkIcon} /> All-in-one DevOps</li>
                <li><Check className={styles.checkIcon} /> Self-hosted option</li>
                <li><Check className={styles.checkIcon} /> Comprehensive security</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Differences */}
      <section className={styles.differences} id="comparison">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Key Differences</h2>
          <p className={styles.sectionDescription}>
            Understanding the fundamental distinctions between GitHub and GitLab
          </p>
        </div>

        <div className={styles.differencesGrid}>
          {keyDifferences.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <Card key={index} className={styles.differenceCard}>
                <CardHeader>
                  <div className={styles.differenceIcon}>
                    <Icon />
                  </div>
                  <CardTitle>{diff.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={styles.comparisonRow}>
                    <div className={styles.comparisonItem}>
                      <span className={styles.platformLabel}>GitHub</span>
                      <p>{diff.github}</p>
                    </div>
                    <div className={styles.comparisonItem}>
                      <span className={styles.platformLabel}>GitLab</span>
                      <p>{diff.gitlab}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className={styles.comparisonTable}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Feature-by-Feature Comparison</h2>
          <p className={styles.sectionDescription}>
            A detailed breakdown of capabilities across key categories
          </p>
        </div>

        <div className={styles.tableWrapper}>
          {comparisonFeatures.map((category, index) => (
            <Card key={index} className={styles.categoryCard}>
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className={styles.categoryComparison}>
                  <div className={styles.platformColumn}>
                    <h4 className={styles.platformColumnTitle}>GitHub</h4>
                    <ul className={styles.featureDetailList}>
                      {category.github.features.map((feature, idx) => (
                        <li key={idx}>
                          <Check className={styles.featureIcon} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Badge variant={category.github.rating === 'excellent' ? 'default' : 'secondary'}>
                      {category.github.rating}
                    </Badge>
                  </div>
                  <div className={styles.platformColumn}>
                    <h4 className={styles.platformColumnTitle}>GitLab</h4>
                    <ul className={styles.featureDetailList}>
                      {category.gitlab.features.map((feature, idx) => (
                        <li key={idx}>
                          <Check className={styles.featureIcon} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Badge variant={category.gitlab.rating === 'excellent' ? 'default' : 'secondary'}>
                      {category.gitlab.rating}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Alternative Platforms */}
      <section className={styles.alternatives} id="alternatives">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Alternative Platforms</h2>
          <p className={styles.sectionDescription}>
            Other code hosting and collaboration platforms worth considering for your team
          </p>
        </div>

        <div className={styles.alternativesGrid}>
          {alternatives.map((platform, index) => (
            <Card key={index} className={styles.alternativeCard}>
              <CardHeader>
                <div className={styles.alternativeLogo}>
                  <img src={platform.logo} alt={`${platform.name} logo`} />
                </div>
                <CardTitle>{platform.name}</CardTitle>
                <CardDescription>{platform.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className={styles.alternativeContent}>
                  <div className={styles.strengths}>
                    <h5>Key Strengths</h5>
                    <ul>
                      {platform.strengths.map((strength, idx) => (
                        <li key={idx}>
                          <Check className={styles.strengthIcon} />
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.bestFor}>
                    <span className={styles.bestForLabel}>Best for:</span>
                    <span className={styles.bestForValue}>{platform.bestFor}</span>
                  </div>
                  <Button asChild variant="outline" className={styles.learnMoreButton}>
                    <a href={platform.url} target="_blank" rel="noopener noreferrer">
                      Learn More
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>GitHub vs GitLab</h3>
            <p className={styles.footerDescription}>
              An objective resource for comparing code hosting platforms. Information is regularly updated
              to reflect the latest features and pricing.
            </p>
          </div>
          <div className={styles.footerSection}>
            <h4 className={styles.footerSectionTitle}>Resources</h4>
            <ul className={styles.footerLinks}>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://gitlab.com" target="_blank" rel="noopener noreferrer">GitLab</a></li>
              <li><a href="#comparison">Comparison</a></li>
              <li><a href="#alternatives">Alternatives</a></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4 className={styles.footerSectionTitle}>Information</h4>
            <p className={styles.footerNote}>
              This is an independent comparison resource. We are not affiliated with GitHub, GitLab,
              or any other platforms mentioned. All trademarks belong to their respective owners.
            </p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Platform Comparison. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
