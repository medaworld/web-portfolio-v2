import {
  Content,
  ContentText,
  ContentParagraph,
  ContentImage,
} from './AboutStyles';
import Image from 'next/image';
import { roboto } from '@/styles/fonts';

export default function AboutContent() {
  return (
    <Content>
      <ContentText>
        <ContentParagraph className={roboto.className}>
          <p>
            Hey there, I&apos;m Brian. Even as a kid, I was reshaping the
            digital landscapes of MySpace and Tumblr with my custom themes. This
            intrinsic fascination was the starting point of my web development
            journey, sowing the seeds for my future career.
          </p>
          <p>
            Fast forward to 2020, my innate curiosity transformed into a
            professional pursuit. I mastered the essentials:{' '}
            <strong>HTML</strong>, <strong>CSS</strong>, and{' '}
            <strong>JavaScript</strong>, with a particular focus on{' '}
            <strong>React</strong> and <strong>NextJS</strong>. These skills
            fast-tracked my way into a Software Engineer role at Blockchain.com.
          </p>
          <p>
            At Blockchain.com, I played a crucial role in sculpting the frontend
            of their explorer. Beyond frontend, I expanded my horizons into
            backend with <strong>Node.js</strong> and <strong>Express</strong>,
            mobile development via <strong>React Native</strong>, and database
            management with <strong>MySQL</strong> and{' '}
            <strong>PostgreSQL</strong>. My broad skill set ensures I deliver
            comprehensive and cutting-edge solutions in today&apos;s rapidly
            evolving tech world.
          </p>
        </ContentParagraph>
      </ContentText>
      <ContentImage>
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={200}
          height={200}
          priority
        />
      </ContentImage>
    </Content>
  );
}