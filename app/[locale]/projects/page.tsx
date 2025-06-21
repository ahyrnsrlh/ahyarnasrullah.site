import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Projects from "@/modules/projects";
import { METADATA } from "@/common/constants/metadata";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: `Projects ${METADATA.exTitle}`,
    description: "Software Engineer portfolio ideas",
    keywords: "portfolio frontend developer",
    alternates: {
      canonical: `${process.env.DOMAIN}/projects`,
    },
    openGraph: {
      locale,
    },
  };
}

const ProjectsPage = async ({ params }: PageProps) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ProjectsPage" });

  return (
    <Container data-aos="fade-up">
      <PageHeading title={t("title")} description={t("description")} />
      <Projects />
    </Container>
  );
};

export default ProjectsPage;
