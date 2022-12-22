export default function bionicConverter() {
  const bionic = document.querySelectorAll('.bionic');
  bionic.forEach((paragraph) => {
    addEventListener('click', () => {
      const eachWord = (paragraph as HTMLElement).innerText.split(' ');
      const bionicWord = eachWord?.map((word) => {
        let boldPart;
        if (word.length % 2 === 0) {
          boldPart = word.slice(0, Math.floor(word.length / 2));
        } else {
          boldPart = word.slice(0, Math.floor((word.length + 1) / 2));
        }
        return `<span class="font-semibold bionic">${boldPart}</span>${word.slice(
          boldPart.length
        )}`;
      });
      paragraph.innerHTML = bionicWord?.join(' ');
    });
  });

}