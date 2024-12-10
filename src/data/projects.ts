import { Cloud, Container, GitBranch, Server, Shield, Terminal } from 'lucide-react';

export const projects = [
  {
    title: 'Yahoo Sports Infrastructure',
    company: 'Yahoo',
    period: '2023 - Present',
    description: 'Led architecture and deployment of 35+ production Kubernetes clusters across AWS and GCP for Sports, Fantasy, and Finance divisions',
    icon: Cloud,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000',
    tech: ['AWS EKS', 'GCP GKE', 'Terraform', 'OpenTelemetry'],
    achievements: [
      'Managed infrastructure for 2500+ applications',
      'Achieved 99.99% uptime SLA',
      'Handled 2M+ requests/second at peak',
      'Reduced deployment time by 60%'
    ]
  },
  {
    title: 'Enterprise Observability Platform',
    company: 'Yahoo',
    period: '2023 - Present',
    description: 'Architected comprehensive observability solution using OpenTelemetry across 200+ AWS services',
    icon: Server,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    tech: ['OpenTelemetry', 'AWS CloudWatch', 'Grafana', 'Prometheus'],
    achievements: [
      'Implemented distributed tracing across services',
      'Reduced MTTR by 60%',
      'Achieved 100% trace sampling for critical paths',
      'Created unified visualization dashboards'
    ]
  },
  {
    title: 'ATMOS Energy Cloud Migration',
    company: 'TechMahindra',
    period: '2022 - 2023',
    description: 'Led large-scale cloud infrastructure implementation with 250+ servers using AWS services',
    icon: Cloud,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
    tech: ['AWS', 'Terraform', 'Docker', 'Kubernetes'],
    achievements: [
      'Migrated 100+ applications to AWS',
      'Implemented auto-scaling for 50% cost savings',
      'Achieved zero-downtime deployments',
      'Reduced deployment time from 60 to 15 minutes'
    ]
  },
  {
    title: 'DevOps Automation Framework',
    company: 'TechMahindra',
    period: '2022 - 2023',
    description: 'Developed comprehensive CI/CD framework using GitLab and AWS services',
    icon: GitBranch,
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1000',
    tech: ['GitLab CI', 'AWS CodePipeline', 'Docker', 'ECS'],
    achievements: [
      'Automated deployment for 100+ microservices',
      'Implemented infrastructure as code',
      'Reduced release cycle time by 70%',
      'Enhanced security with automated scanning'
    ]
  },
  {
    title: 'Cloud Security Framework',
    company: 'Yahoo',
    period: '2023 - Present',
    description: 'Implemented enterprise-wide security framework across multi-cloud infrastructure',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000',
    tech: ['AWS Security Hub', 'IAM', 'GuardDuty', 'CloudTrail'],
    achievements: [
      'Reduced security incidents by 45%',
      'Implemented zero-trust architecture',
      'Automated security responses',
      'Enhanced compliance reporting'
    ]
  },
  {
    title: 'Kubernetes Platform Enhancement',
    company: 'TechMahindra',
    period: '2022 - 2023',
    description: 'Upgraded and optimized Kubernetes infrastructure for enterprise applications',
    icon: Container,
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=1000',
    tech: ['Kubernetes', 'Helm', 'ArgoCD', 'Prometheus'],
    achievements: [
      'Upgraded clusters with zero downtime',
      'Implemented GitOps workflow',
      'Reduced resource utilization by 30%',
      'Enhanced monitoring and alerting'
    ]
  }
];