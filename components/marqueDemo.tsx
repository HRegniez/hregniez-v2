import { cn } from "@/lib/utils";
import Marquee from "@/components/magic-ui/marquee";
import Card_01  from "./hero-components/Card01";
import Card_02  from "./hero-components/Card02";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 h-[400px] bg-secondary cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-primary  hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] bg-primary dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const MarqueeDemo = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background my-20 md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review, index) => (
          index % 2 === 0 ? <Card_02 key={review.username} /> : <Card_01 key={review.username} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review, index) => (
          index % 2 === 0 ? <Card_02 key={review.username} /> : <Card_01 key={review.username} />
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review, index) => (
          index % 2 === 0 ? <Card_02 key={review.username} /> : <Card_01 key={review.username} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review, index) => (
          index % 2 === 0 ? <Card_02 key={review.username} /> : <Card_01 key={review.username} />
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review, index) => (
          index % 2 === 0 ? <Card_02 key={review.username} /> : <Card_01 key={review.username} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review, index) => (
          index % 2 === 0 ? <Card_02 key={review.username} /> : <Card_01 key={review.username} />
        ))}
      </Marquee>

    </div>
  );
};

export default MarqueeDemo;
