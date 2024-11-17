import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Satellite empowers your security team to work on the most urgent and critical threats without being overwhelmed by noisy, low-priority alerts. We provide real-time, verifiable threat intelligence powered by a global network of proprietary sensors.
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect duration={2} filter={false} words={words} />;
}
