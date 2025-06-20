import { Metadata } from "next";

import Container from "@/common/components/elements/Container";
import Home from "@/modules/home";
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
  const parentMetadata = await parent;

  return {
    ...parentMetadata,
    title: `${METADATA.creator} | Personal Website`,
    alternates: {
      canonical: `${process.env.DOMAIN}`,
    },
    openGraph: {
      locale,
    },
  };
}

export default async function HomePage({ params }: PageProps) {
  return (
    <Container data-aos="fade-up">
      <Home />
    </Container>
  );
}
