import { loremIpsum } from "lorem-ipsum";

// fake timer for simulating network call
const timeoutAfter = async (ms) => {
    return new Promise((resolve) => {
      const timeout = setTimeout(() => {
        clearTimeout(timeout);
        resolve(true);
      }, ms);
    });
};

// fake API response to return tab content
export const getTabs = async () => {
  await (timeoutAfter(1200));
  const tabs = [
    {
      id: 'Thank',
      content: loremIpsum({ count: 100, format: "plain", units: "word" })
    },
    {
      id: 'You',
      content: loremIpsum({ count: 100, format: "plain", units: "word" })
    },
    {
      id: 'For',
      content: loremIpsum({ count: 100, format: "plain", units: "word" })
    },
    {
      id: 'Understanding!',
      content: loremIpsum({ count: 100, format: "plain", units: "word" })
    }
  ];

  return tabs;
};