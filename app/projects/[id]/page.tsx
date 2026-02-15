import { projects } from '@/constants/projects';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { Badge } from '@/components/ui/badge';

import { siteConfig } from '@/config/site';
import { ArrowLeftIcon, ExternalLinkIcon } from 'lucide-react';
import Link from 'next/link';
import Image from "next/image";

const getProject = async (slug: string) => {
  return projects.find((project) => project.slug === slug);
};

const ProjectDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const project = await getProject(id);

  // await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!project) {
    return (
      <>
        <h2 className="text-destructive">Project not found</h2>
        <Link
          href="/projects"
          className="text-muted-foreground flex items-center gap-2"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to projects
        </Link>
      </>
    );
  }

  return (
    <div>
      <div className="navigation">
        <Link
          href="/projects"
          className="flex items-center gap-2 mb-4 text-muted-foreground cursor-pointer w-fit"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to projects
        </Link>
      </div>

      <PageHeader>
        <PageHeaderHeading>{project.title}</PageHeaderHeading>
        <PageHeaderDescription>{project.tagline}</PageHeaderDescription>
        <PageHeaderDescription>{project.overview}</PageHeaderDescription>
      </PageHeader>

      <div id="badges" className="my-4">
        <h2 className="text-lg font-semibold">Tech Stack</h2>
        <div className="flex flex-wrap items-center gap-2">
          {project.techStack?.map((tech) => (
            <Badge
              variant="outline"
              className="px-4 text-base shadow-md"
              key={tech}
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 font-light">
        <div id="features" className="my-4">
          <h2 className="text-lg font-semibold">Features</h2>
          <ul className="list-disc list-outside">
            {project.features?.map((feature) => (
              <li className="ml-4 pl-2" key={feature}>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div id="challenges" className="my-4">
          <h2 className="text-lg font-semibold">Challenges</h2>
          <ul className="list-disc list-outside">
            {project.challenges?.map((challenge) => (
              <li className="ml-4 pl-2" key={challenge}>
                {challenge}
              </li>
            ))}
          </ul>
        </div>

        <div id="learnings" className="my-4">
          <h2 className="text-lg font-semibold">Learnings</h2>
          <ul className="list-disc list-outside ">
            {project.learnings?.map((learning) => (
              <li className="ml-4 pl-2" key={learning}>
                {learning}
              </li>
            ))}
          </ul>
        </div>

        {project.links && (
          <div id="links" className="my-4">
            <h2 className="text-lg font-semibold">
              {project.links.live && project.links.github ? 'Links' : 'Link'}
            </h2>

            <div className="flex flex-wrap items-center gap-2">
              {project.links.live && (
                <Link href={project.links.live} target="_blank">
                  <Badge variant="default" className="px-4 text-base">
                    Live <ExternalLinkIcon className="w-4 h-4 -mt-2" />
                  </Badge>
                </Link>
              )}

              {project.links.github && (
                <Link href={project.links.github} target="_blank">
                  <Badge variant="outline" className="px-4 text-base">
                    Github <ExternalLinkIcon className="w-4 h-4 -mt-2" />
                  </Badge>
                </Link>
              )}
              {project.links.report && (
                <Link href={project.links.report} target="_blank">
                  <Badge variant="outline" className="px-4 text-base">
                    Report [French version] <ExternalLinkIcon className="w-4 h-4 -mt-2" />
                  </Badge>
                </Link>
              )}
              {project.links.profile && (
                <Link href={project.links.profile} target="_blank">
                  <Badge variant="outline" className="px-4 text-base">
                    Freelance Profile <ExternalLinkIcon className="w-4 h-4 -mt-2" />
                  </Badge>
                </Link>
              )}
            </div>
          </div>
        )}
        {project.images && project.images.length > 0 && (
        <div id="gallery" className="my-1">
          <h2 className="text-lg font-semibold mb-4">Project Gallery</h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="relative w-full h-64 rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        )}
        {project.testimonials && project.testimonials.length > 0 && (
        <div id="gallery" className="my-6">
          <h2 className="text-lg font-semibold mb-4">What people say about me</h2>

          <div className="flex flex-col gap-6">
            {project.testimonials.map((image, index) => (
              <div
                key={index}
                className="relative w-full rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  width={1200}
                  height={700}
                  className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-300"
                />
        </div>
      ))}
    </div>
  </div>
)}

      </div>
    </div>
  );
};

export default ProjectDetails;
