import { NextSeo } from "next-seo";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS_CARD } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Projects() {
  return (
    <>
      <NextSeo
        title="Projects by Nilesh Vilas Tale - Software Engineer Portfolio"
        description="Explore a collection of my projects. From innovative Flutter and Web Applications to Machine Learning Projects, discover the depth and diversity of my work."
        canonical={`${siteMetadata.siteUrl}/projects`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/projects`,
          title:
            "Discover Projects by Nilesh Vilas Tale - Software Engineer",
          description:
            "Explore a showcase of projects crafted by Nilesh Vilas Tale, a Software Engineer. Witness the fusion of creativity and technology in web development.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Nilesh Vilas Tale - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Projects, Portfolio, React Developer, Frontend Developer, Web Development, JavaScript, HTML, CSS, UI/UX, Web Applications, Responsive Design",
          },
        ]}
      />
      <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold md:text-4xl">Projects</h1>
          <div className="my-2">
            <span className="text-sm">
              Here are some of the projects I&apos;d like to share
            </span>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
            {PROJECTS_CARD.map((card, index) => (
              <ProjectCard key={index} {...card} />
            ))}
          </div>
          <div className="mx-auto mt-16 max-w-5xl text-center md:mt-28">
            <span className="text-xl font-bold md:text-2xl">
              I am currently building new projects based on Machine Learning Applications to expand my skill set and gain practical experience.
            </span>
            <p className="mt-10 text-base md:text-xl">
              Visit my github to see some of the latest projects{" "}
              <a
                href={`${siteMetadata.github}?tab=repositories`}
                target="_blank"
                className="font-medium text-tera-500 underline underline-offset-2 hover:text-teal-600 dark:text-teal-400"
              >
                Github
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
