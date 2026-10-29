export interface About {
  /** One-sentence declaration shown under the name in the hero. */
  headline: string;
  /** Drafted only from facts in the other /content files. Edit freely. */
  body: string;
  /** Your own lines. Stays a visible [PLACEHOLDER] until you write it. */
  personal: string;
}

export const about: About = {
  headline: "I like the parts of software you don’t see: APIs, schemas, the plumbing that has to just work.",
  body: "Informatics graduate from Telkom University, GPA 3.82 / 4.00. I write REST APIs in Go, Java (Spring Boot) and PHP (Laravel). My thesis became a first-author paper at ICERA 2026, and for five semesters I taught Go, C++ and Java to classes of 38-40 students.",
  personal:
    "What keeps me interested is understanding how something works all the way down, i’ll spend a weekend cloning an API just to see how it’s built. Five semesters of teaching left me patient, and a little obsessive about explaining things simply. Away from the screen I run & do gym most mornings; it’s where I end up solving half my problems.",
};
