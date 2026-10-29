export interface Publication {
  slug: string;
  authors: string;
  title: string;
  /** Conference name exactly as published (the BibTeX booktitle). */
  venue: string;
  year: number;
  pages: string;
  doi: string;
  note: string;
  /** The BibTeX entry, copied by the "Copy BibTeX" button. */
  bibtex: string;
  link: string; // a [PLACEHOLDER ...] string renders as plain text, not a link
}

export const publications: Publication[] = [
  {
    slug: "icera-2026",
    authors: "M. F. Editya, D. Richasdy and P. H. Gani",
    title: "Feature Extraction Analysis for Indonesian Cross-Domain Sentiment Analysis",
    venue: "2026 5th International Conference on Electronics Representation and Algorithm (ICERA)",
    year: 2026,
    pages: "211–216",
    doi: "10.1109/ICERA72709.2026.11666735",
    note: "First author",
    link: "https://ieeexplore.ieee.org/document/11666735",
    bibtex: `@INPROCEEDINGS{11666735,
  author={Editya, Muhammad Farhan and Richasdy, Donni and Gani, Prati Hutari},
  booktitle={2026 5th International Conference on Electronics Representation and Algorithm (ICERA)},
  title={Feature Extraction Analysis for Indonesian Cross-Domain Sentiment Analysis},
  year={2026},
  volume={},
  number={},
  pages={211-216},
  keywords={Vocabulary;Modeling;Support vector machines;Testing;Training;Printing;Transformers;Registers;Feature extraction;Social networking (online);cross-domain sentiment analysis;IndoBERT;vocabulary extension;Indonesian NLP;fastText},
  doi={10.1109/ICERA72709.2026.11666735}}`,
  },
];
