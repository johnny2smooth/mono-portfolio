export default function bionicConverter(bodyTextContent: string) {
  const eachWord = bodyTextContent.split(" ");
  const bionicWord = eachWord?.map((word) => {
    let boldPart;
    if (word.length % 2 === 0) {
      boldPart = word.slice(0, Math.floor(word.length / 2));
    } else {
      boldPart = word.slice(0, Math.floor((word.length + 1) / 2));
    }
    return `<span class="font-bold">${boldPart}</span>${word.slice(boldPart.length)}`;
  });
  return bionicWord?.join(" ");
}

console.log(bionicConverter("Hello World I think that the universe is a simulation"));