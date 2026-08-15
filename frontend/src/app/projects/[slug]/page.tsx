import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProjectBySlug, projects } from '@/lib/projects-data';
import ProjectDetailClient from '@/components/ProjectDetailClient';

// Pre-render a route for every project at build time.
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

// NOTE: if your Next.js version treats `params` as async (Next 15+ App Router
// convention for server components), change the signature to:
//   export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
//     const { slug } = await params;
type Props = { params: { slug: string } };

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: 'Project not found' };
  return {
    title: `${project.title} · Iqra Hussain`,
    description: project.tagline,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
