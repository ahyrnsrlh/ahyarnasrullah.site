import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Dashboard from "@/modules/dashboard/components/Dashboard";
import { METADATA } from "@/common/constants/metadata";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata(
  { params }: PageProps,
  parent: Promise<Metadata>,
): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: `Dashboard ${METADATA.exTitle}`,
    description: `My activity dashboard as software engineer`,
    alternates: {
      canonical: `${process.env.DOMAIN}/dashboard`,
    },
    openGraph: {
      locale,
    },
  };
}

const DashboardPage = async ({ params }: PageProps) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "DashboardPage" });

  return (
    <Container data-aos="fade-up">
      <PageHeading title={t("title")} description={t("description")} />
      <Dashboard />
    </Container>
  );
};

export default DashboardPage;
