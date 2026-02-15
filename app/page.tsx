import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { ExternalLink, Mail } from 'lucide-react';
import Link from 'next/link';

const IntroductionPage = async () => {
  return (
    <>
      <PageHeader>
        <div className="flex items-center gap-4">
          <img
            src="me.png"
            alt="Dhia Neji"
            className="w-16 h-16 rounded-full object-cover border-2 border-primary shadow-md"
          />
          <PageHeaderHeading>Dhia Neji</PageHeaderHeading>
        </div>        
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          A coder by day, problem-solver by night!
        </PageHeaderHeading>
        <PageHeaderDescription>
          I am a dedicated Java developer specializing in building scalable enterprise applications using Java, JEE, and Spring Boot, with strong experience in frontend technologies including Angular, Vue.js, and ExtJS. I focus on delivering high-quality, maintainable, and user-centric software solutions while collaborating effectively in agile teams.
        </PageHeaderDescription>
        
        <PageHeaderHeading className="mt-2 text-muted-foreground">
        What my freelance clients say about my work
        </PageHeaderHeading>
          <div className="mt-4 flex justify-center">
            <img
              src="/reviews.jpg" 
              alt="Dhia Neji"
            />
          </div>

        <PageActions>
          <Button asChild size="sm" className="rounded-md">
            <Link href={siteConfig.links.resume} target="_blank">
              Get Resume
              <ExternalLink className="size-3" strokeWidth={2} />
            </Link>
          </Button>
          <Button asChild size="sm" variant="ghost" className="rounded-md">
            <Link href={siteConfig.links.email}>
              <Mail className="size-4" />
              Send Mail
            </Link>
          </Button>
        </PageActions>
      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/about"
        prevTitle="Previous"
        nextTitle="About Me"
      />
    </>
  );
};
export default IntroductionPage;
