import { TypingTest } from "./TypingTest";
import OpenAI from "openai";

let lastFetchedTextTimeStamp: number | null = null;
let lastFetchedText: string | null = null;

export default async function TypingTestPage() {
  if (
    lastFetchedTextTimeStamp === null ||
    Date.now() - lastFetchedTextTimeStamp > 1000 * 60 * 60 * 24
  ) {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      fetch: fetch,
    });

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "Generate a short story about Harry Potter. 300 words max, no dialogue.",
        },
      ],
      temperature: 0.8,
      max_tokens: 256,
    });

    lastFetchedTextTimeStamp = Date.now();
    lastFetchedText = response.choices[0]?.message.content ?? "Nop";
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <TypingTest text={lastFetchedText ?? "Nop"} />
    </div>
  );
}

const text = `The cobblestone streets of Hogsmeade were lively as usual, with students from Hogwarts exploring the various magical shops and eateries. Warm light spilled from the windows of Honeydukes, where enchanted candies danced playfully on the shelves.

Eleanor, a third-year Ravenclaw, strolled through the bustling streets with her friends. But today, something was different. Just past the Three Broomsticks, where previously there had been an empty lot, stood a quaint little shop with a sign reading: "Magical Miscellanea".

Curious, Eleanor entered the shop. The interior was dim, filled with rows of peculiar objects; some floating, others glowing, and a few that seemed to vanish and reappear. An elderly witch with silver hair and twinkling blue eyes stood behind the counter.

"New in town?" she asked, a warm smile stretching across her face.

"We've never seen this shop before," Eleanor replied.

"It only appears when someone truly needs it," the witch explained, her voice soft and melodic.

Eleanor looked around and was drawn to a small, shimmering vial. It was filled with a liquid that constantly changed color, reminding her of a northern lights' display.

"What's this?" she asked.

"That, my dear, is the Essence of True Sight. It helps one see the world as it truly is, beyond the veil of deception," the witch replied.

Eleanor felt a strong urge to possess it. "How much?"

The witch smiled. "It's not about galleons here. What you desire requires a memory. A happy one."

Eleanor hesitated but then recalled a moment when she felt truly alive, her first time on a broomstick. She described the feeling, the freedom, and the joy. The vial glowed even brighter.

"An excellent exchange," the witch said, handing her the vial.

As Eleanor left the shop, she felt a lightness in her heart. The Magical Miscellanea had given her more than just an object; it had reminded her of the magic within herself.

And as mysteriously as it had appeared, by the next Hogsmeade visit, the shop was gone, leaving behind only memories and tales of enchantment.
`;
