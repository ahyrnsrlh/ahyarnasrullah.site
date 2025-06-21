import { Metadata } from "next";

import BackButton from "@/common/components/elements/BackButton";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import ProjectDetail from "@/modules/projects/components/ProjectDetail";
import { ProjectItem } from "@/common/types/projects";
import { METADATA } from "@/common/constants/metadata";
import { loadMdxFiles } from "@/common/libs/mdx";
import { getProjectsDataBySlug } from "@/services/projects";

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string; slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  if (!resolvedParams?.slug) {
    return {};
  }

  const project = await getProjectDetail(resolvedParams.slug);

  return {
    title: `${project.title} ${METADATA.exTitle}`,
    description: project.description,
    openGraph: {
      images: project.image,
      url: `${METADATA.openGraph.url}/${project.slug}`,
      siteName: METADATA.openGraph.siteName,
      locale: METADATA.openGraph.locale,
      type: "article",
      authors: METADATA.creator,
    },
    keywords: project.title,
    alternates: {
      canonical: `${process.env.DOMAIN}/projects/${resolvedParams.slug}`,
    },
  };
}

const getProjectDetail = async (slug: string): Promise<ProjectItem> => {
  const projects = await getProjectsDataBySlug(slug);
  const contents = loadMdxFiles();
  const content = contents.find((item) => item.slug === slug);
  const response = { ...projects, content: content?.content };
  const data = JSON.parse(JSON.stringify(response));
  return data;
};

export default async function ProjectDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string; slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await params;
  if (!resolvedParams?.slug) {
    return null;
  }

  const data = await getProjectDetail(resolvedParams.slug);

  const PAGE_TITLE = data?.title;
  const PAGE_DESCRIPTION = data?.description;

  return (
    <Container data-aos="fade-up">
      <BackButton url="/projects" />
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <ProjectDetail {...data} />
    </Container>
  );
}
