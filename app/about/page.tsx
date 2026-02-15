import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';

const AboutMePage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Dhia Neji</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          More than just a title—let’s dive deeper!
        </PageHeaderHeading>
        <PageHeaderDescription>
          I am a passionate Software Engineer and Java Developer with a strong focus on building scalable, full-stack web applications using Java, JavaScript, and TypeScript, along with frameworks such as Angular, Vue.js and Extjs. I enjoy transforming complex business needs into clean, efficient, and user-friendly solutions.
        </PageHeaderDescription>

        <PageHeaderDescription>
          With solid experience across modern frontend frameworks and enterprise backend systems, I specialize in delivering performant, maintainable applications with strong attention to usability and architecture. I continue to deepen my backend expertise in Java to design robust, secure, and scalable server-side solutions.        </PageHeaderDescription>

        <PageHeaderDescription>
          Beyond coding, I thrive in collaborative environments and enjoy solving challenging problems with creative and pragmatic approaches. My goal is to contribute to impactful projects that create real value for users and organizations.
        </PageHeaderDescription>
      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/projects"
        prevTitle="Introduction"
        nextTitle="Projects"
      />
    </>
  );
};
export default AboutMePage;
