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
            Hello, I&apos;m Brian. My passion for digital creation sparked in
            childhood, fueled by a curiosity to build and design. From
            experimenting with Photoshop, crafting music in Ableton, to
            constructing maps for PC games, I&apos;ve always been captivated by
            the art of creation. This drive naturally evolved into learning the
            craft of web design.
          </p>
          <p>
            By the year 2020, my initial curiosities had evolved into a
            deep-rooted passion and proficiency. I picked up foundational web
            technologies such as <strong>HTML</strong>, <strong>CSS</strong>,
            and <strong>JavaScript</strong>, with a specialized focus on modern
            frameworks like <strong>React</strong> and <strong>NextJS</strong>.
            This rigorous skill set facilitated my entry into a strategic
            Software Engineer role at the renowned Blockchain.com.
          </p>
          <p>
            During my tenure at Blockchain.com, I was instrumental in leading
            frontend developments for their explorer platform. However, my
            expertise isn&apos;t just confined to frontend development. I
            ventured into backend architecture with <strong>Node.js</strong> and{' '}
            <strong>Express</strong>, mobile application development using{' '}
            <strong>React Native</strong>, and mastered database systems such as{' '}
            <strong>MySQL</strong> and <strong>PostgreSQL</strong>. My broad
            skill set ensures I deliver comprehensive and cutting-edge solutions
            in today&apos;s rapidly evolving tech world.
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
