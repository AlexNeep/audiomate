import { useState } from "react";
import { Link } from "@remix-run/react";
import Button from "~/components/core/Buttons";
import Header from "~/components/Header";
import IconWrapper from "~/components/landing-page/IconWrapper";
import BulletPoint from "~/components/landing-page/SubBulletPoint";
import { plans, Prices } from "~/utils/payment";

type Answer =
  | {
      type: "p";
      content: string;
    }
  | {
      type: "a";
      content: string;
      to: string;
    };

type Faq = {
  question: string;
  answer: Answer[];
};

const FAQs: Faq[] = [
  {
    question: "How do I learn a language using LanguageMate?",
    answer: [
      {
        type: "p",
        content:
          "LanguageMate offers both guided and unguided scenarios to help you internalize a wide range of vocabulary and grammar.",
      },
      {
        type: "p",
        content:
          "Whether you prefer a structured approach with step-by-step guidance or a more flexible learning experience where you can explore at your own pace, LanguageMate has something for you.",
      },
      {
        type: "p",
        content:
          "Through conversations with the chatbot, you'll be able to practice speaking, listening, and comprehension skills in the language you're trying to learn, making the learning process engaging and effective.",
      },
    ],
  },
  {
    question: "Is LanguageMate free?",
    answer: [
      {
        type: "p",
        content: "Yes, you can start using LanguageMate for free!",
      },
      {
        type: "p",
        content:
          "Our free plan offers limited access, allowing you to send a certain number of messages per day.",
      },
      {
        type: "p",
        content:
          "If you want to perfect your pronunciation, dramatically improve your grammar, or send more messages, you can sign up for one of our paid plans. Our paid plans offer flexible subscription options to fit your budget and learning needs, and provide additional benefits to enhance your language learning experience.",
      },
      {
        type: "a",
        content: "See pricing",
        to: "/pricing",
      },
    ],
  },
  {
    question: "How do I get started?",
    answer: [
      {
        type: "p",
        content: "Getting started with LanguageMate is quick and easy!",
      },
      {
        type: "a",
        to: "/dashboard",
        content: "Start for free",
      },
      {
        type: "p",
        content:
          "If you want to perfect your pronunciation, dramatically improve your grammar, or send more messages, you can sign up for one of our paid plans. Our paid plans offer flexible subscription options to fit your budget and learning needs, and provide additional benefits to enhance your language learing experience.",
      },
      {
        type: "a",
        content: "See pricing",
        to: "/pricing",
      },
      {
        type: "p",
        content:
          "No matter which plan you choose, LanguageMate is designed to help you achieve your language learning goals quickly and effectively.",
      },
      {
        type: "p",
        content:
          "So why wait? Sign up today and start improving your language skills!",
      },
    ],
  },
  {
    question: "How accurate are the corrections provided by LanguageMate?",
    answer: [
      {
        type: "p",
        content:
          "LanguageMate uses advanced natural language processing algorithms to provide accurate corrections and feedback on your language skills. Our technology is constantly improving, thanks to our team of engineers who work tirelessly to enhance the accuracy and effectiveness of our platform.",
      },
      {
        type: "p",
        content:
          "While our rate of correctness is very high, it's important to note that no language learning tool can provide 100% accurate corrections all the time. That's why we encourage our users to think critically about the feedback they receive and to use it as a learning opportunity to improve their language skills.",
      },
      {
        type: "p",
        content:
          "Our top-tier Accelerated Plan also offers in-depth explanations of why your messages were corrected, giving you a deeper understanding of the language rules and helping you to avoid making the same mistakes in the future.",
      },
      {
        type: "p",
        content:
          "With LanguageMate, you can be confident that you're receiving high-quality feedback that will help you progress in your language learning journey.",
      },
    ],
  },
];

const StartTrialButton = () => {
  return (
    <Link to="/pricing?trial=true" className="m-auto w-full max-w-lg">
      <Button>Start your free trial</Button>
    </Link>
  );
};

const StartFreeButton = () => {
  return (
    <Link to="/dashboard" className="m-auto w-full max-w-lg">
      <Button>Start for free</Button>
    </Link>
  );
};

const Index = () => {
  const [optionIndex, setOptionIndex] = useState(0);
  const options = [
    "text",
    // "emails",
    //   // "messages",
    //   "texts",
    //   "notes",
    //   // "social media posts",
  ];

  // setTimeout(() => {
  //   setOptionIndex((currIndex) =>
  //     currIndex + 1 >= options.length ? 0 : currIndex + 1
  //   );
  // }, 2000);

  return (
    <div>
      <Header />

      <div className="mx-auto flex max-w-5xl flex-col gap-10 scroll-smooth pb-10">
        <section className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-8 px-4 lg:flex-row">
          <div className="flex grow flex-col gap-4 lg:gap-12">
            <h1 className="shrink-0 text-center text-3xl font-bold text-orange-500">
              Turn your rambling thoughts into journal entries
            </h1>
            <h2 className="text-center text-xl font-semibold text-slate-800">
              Effortlessly create and edit journal entries using your voice &
              discover your own mind
            </h2>

            {/* <Link
              to={`/pricing?plan=${plans[0].id}&login=true`}
              className="mx-auto w-fit text-lg"
            >
              <Button>{`Start now for £${plans[0].price}`}</Button>
            </Link> */}
            <Link to={`/app`} className="mx-auto w-fit text-lg">
              <Button>{`Start now for free`}</Button>
            </Link>
          </div>

          <img
            className="mx-auto block rounded-xl shadow-inner lg:w-1/2"
            src="https://storage.cloud.google.com/audiomate-public/demo.png"
          />
        </section>

        <div className="mx-2 flex flex-col gap-12">
          <Section
            title="Easy to use interface"
            paragrapgh="Write messages with your voice on the move"
            bullets={["Edit on mobile without using the keyboard"]}
            imageSource="/interface.png"
          />
          {/* <Section
            title="Convert rambling speech into text"
            paragrapgh="Understands whatever you are saying"
            imageSource="/interface.png"
            right
          /> */}
          <Section
            title="Create edits without touching your keyboard"
            paragrapgh="Use natural language as your interface"
            imageSource="/edits.png"
            right
          />
          <Link to={`/app`} className="mx-auto w-fit text-lg">
            <Button>{`Start now for free`}</Button>
          </Link>
        </div>
        {/* <Hero trial={trial} />
      <div className="flex flex-col gap-16 py-10 lg:gap-40" id="features">
        <div className="m-auto flex max-w-xl flex-col gap-8 text-center">
          <div className="flex flex-col gap-4">
            <p className="text-lg font-bold uppercase">
              A complete learning tool
            </p>
            <h2 className="text-3xl font-bold text-blue-800">
              Learn from the comfort of your own home
            </h2>
          </div>

          <p className="flex flex-col gap-4 text-lg">
            <span className="text-left lg:text-center">
              <span className="font-semibold text-red-600">
                Before LanguageMate:{" "}
              </span>
              Practising speaking your target language with other people
              triggers anxiety.{" "}
            </span>
            <span className="text-left lg:text-center">
              <span className="font-semibold text-blue-800">
                After LanguageMate:{" "}
              </span>
              You feel calm speaking to LanguageMate knowing there is no
              judgment whilst you progress towards fluency.
            </span>
          </p>
        </div>

        <Section
          Icon={() => <BsTranslate size={30} className="fill-blue-800" />}
          video="https://storage.googleapis.com/languagemate-public/traslation.mp4"
          title="Learn from the translations"
          paragrapgh="Translate messages quickly."
          bullets={["Learn meanings of words in context"]}
        />

        <Section
          Icon={() => <MdQuiz size={30} className="fill-blue-800" />}
          video="https://storage.googleapis.com/languagemate-public/Improvement%20demo.mp4"
          title="Improve your grammar"
          right
          paragrapgh="Generate corrections on the fly"
          bullets={["Understand the grammar rule", "Learn from your mistakes"]}
        />

        <Section
          Icon={() => <MdQuiz size={30} className="fill-blue-800" />}
          video="https://storage.googleapis.com/languagemate-public/speech-to-text.mp4"
          title="Perfect your pronunciation"
          paragrapgh="Speak as you would in real life."
          bullets={[
            "Advanced speech recognition technology",
            "Lightning fast conversations",
          ]}
        />

        <Section
          Icon={() => <BiWorld size={30} className="fill-blue-800" />}
          video="https://storage.googleapis.com/languagemate-public/native.mp4"
          title="Speak with a polyglot"
          right
          paragrapgh="LanguageMate will understand you even if you speak in your native language."
          bullets={[
            "Expand your active vocabulary through conversations",
            "Grow your passive vocabulary through reading",
            "Maintain streaks by completing conversations",
          ]}
        />

        <Section
          Icon={() => <IoReader size={30} className="fill-blue-800" />}
          title="Go to definitions"
          imageSource="https://storage.googleapis.com/languagemate-public/definitions.png"
          paragrapgh="Easily find the meaning of words."
          bullets={[
            "Learn the meaning of words in context",
            "Expand your active vocabulary",
          ]}
        />
      </div>
      <section className="flex flex-col gap-8">
        <div className="mb-8 flex flex-col gap-4">
          <h2 className="m-auto max-w-xl text-center text-3xl font-bold sm:mb-16 lg:text-5xl">
            Everything you need to become fluent
          </h2>
          <p className="text-center text-lg">
            LanguageMate is a simple but powerful tool that supercharges you
            towards fluency!
          </p>
        </div>

        <MainFeatureBulletPoints />

        {trial ? <StartTrialButton /> : <StartFreeButton />}
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-blue-800">FAQs</h2>

        <div className="mx-auto flex flex-col flex-wrap gap-4 lg:grid lg:grid-cols-2">
          {FAQs.map(({ question, answer }, index) => (
            <Card width="full" key={index}>
              <details>
                <summary className="text-lg font-bold text-blue-800">
                  {question}
                </summary>

                <div className="mt-4 flex flex-col gap-6">
                  {answer.map((answerBlock, index) => {
                    const { type, content } = answerBlock;

                    if (type === "p") return <p key={index}>{content}</p>;
                    if (type === "a")
                      return (
                        <div className="m-auto w-1/2" key={index}>
                          <Button>
                            <Link to={answerBlock.to}>{content}</Link>
                          </Button>
                        </div>
                      );
                    return "";
                  })}
                </div>
              </details>
            </Card>
          ))}
        </div>
      </section>
      <div className="flex flex-col items-center justify-center gap-4 py-10 ">
        {trial ? (
          <StartTrialButton />
        ) : (
          <Link to="/dashboard" className="m-auto w-full max-w-lg">
            <Button>Get started now for free</Button>
          </Link>
        )}

        <span className="text-lg">Or</span>
        <Link to="/pricing" className="m-auto w-full max-w-lg">
          <Button variant="transparent">See our plans</Button>
        </Link>
      </div> */}
      </div>
    </div>
  );
};
type SectionProps = {
  imageSource?: string;
  title: string;
  paragrapgh: string;
  right?: boolean;
  Icon?: React.ElementType;
  bullets?: string[];
  video?: string;
};

const Section = ({
  video,
  imageSource,
  title,
  paragrapgh,
  right,
  Icon,
  bullets,
}: SectionProps) => {
  return (
    <section className="flex flex-col items-center justify-center gap-2 lg:grid lg:grid-cols-2">
      <div className="flex w-full flex-col gap-4 text-left">
        {Icon && <IconWrapper Icon={() => <Icon />} />}
        <h1 className="text-xl font-bold text-blue-800">{title}</h1>
        <p className="text-lg text-slate-700">{paragrapgh}</p>
        <div className="mt-4 flex flex-col gap-4">
          {bullets?.map((point, index) => (
            <BulletPoint point={point} key={index} />
          ))}
        </div>
      </div>
      {imageSource && (
        <img
          className={`block h-auto w-full max-w-xl rounded-xl shadow-inner ${
            right ? "lg:order-last" : "lg:order-first"
          }`}
          src={imageSource}
          loading="lazy"
        />
      )}
      {video && (
        <video
          className={`block h-auto w-full max-w-xl rounded-xl shadow-inner ${
            right ? "lg:order-last" : "lg:order-first"
          }`}
          src={video}
          loop
          muted
          playsInline
          autoPlay
          preload="none"
          poster={imageSource}
        />
      )}
    </section>
  );
};

const Hero = ({ trial }: { trial: boolean }) => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center gap-8 text-center"
    >
      <h1 className="text-2xl font-semibold tracking-tight text-blue-700">
        Is{" "}
        <span className="text-bold  tracking-tighter text-red-600">
          anxiety
        </span>{" "}
        holding you back from mastering foreign languages?
      </h1>

      <h2 className="max-w-xl text-xl tracking-wide">
        Unleash your potential with{" "}
        <span className="font-semibold text-blue-700">LanguageMate</span>
      </h2>

      <h3 className="text-lg">
        Become fluent in any target language by speaking{" "}
        <span className="font-semibold text-blue-700">anxiety-free</span> to the{" "}
        <span className="font-semibold text-blue-700">
          world's best language-learning chatbot{" "}
        </span>
      </h3>

      <div className="m-auto flex w-full max-w-3xl flex-col gap-6 md:flex-row md:justify-center [&>button]:h-full">
        {trial ? <StartTrialButton /> : <StartFreeButton />}

        <Link to="#features" className="w-full font-semibold">
          <Button variant="transparent">Learn more</Button>
        </Link>
      </div>

      <img
        src="https://storage.googleapis.com/languagemate-public/branded-screenshot.png"
        className="w-4/5 max-w-md"
      />
      <div className="[&>button]:font-semibold">
        {trial ? <StartTrialButton /> : <StartFreeButton />}
      </div>
    </section>
  );
};

export default Index;
