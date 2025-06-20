import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import About from "@/modules/about";
import { METADATA } from "@/common/constants/metadata";

interface PageProps {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata(
  { params }: PageProps,
  parent: Promise<Metadata>,
): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "AboutPage",
  });

  return {
    title: `About ${METADATA.exTitle}`,
    description: `A short story of ${METADATA.creator}`,
    alternates: {
      canonical: `${process.env.DOMAIN}/about`,
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale,
    },
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "AboutPage",
  });

  return (
    <Container data-aos="fade-up">
      <PageHeading title={t("title")} description={t("description")} />
      <About />
    </Container>
  );
}
