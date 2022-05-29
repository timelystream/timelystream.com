import type { Content, FrontMatter, Metadata } from "@theme/BlogPostPage"

export enum FeatureType {
  RESOURCE = "resource",
  COMPARISON = "comparison",
}

type FlatTutorial = FrontMatter &
  Readonly<{
    content: string
    date: string
    link: string
    featureType?: FeatureType
  }>

const tutorials: FlatTutorial[] = [
  {
    author: "xnge",
    date: "2020-04-20",
    content:
      "In May 2022, Blazar 0.8 was released, which is based on our product design and focuses on functionality and connectivity to external data sources.",
    link: "http://localhost:3000/blog/2022/05/20/blazar-release-0-8",
    title: "Blazar 0.8 Release Highlights",
  },
]

export type Tutorial = Readonly<{
  content: Readonly<{
    frontMatter: Omit<FlatTutorial, "link" | "date"> & { description?: string }
    metadata: Omit<Metadata, "title" | "tags"> & { truncated?: string }
    toc?: Content["toc"]
  }>
  external: true
}>

const normalize = (data: FlatTutorial[]): Tutorial[] =>
  data.map(({ author, content, date, featureType, image, link, title }) => ({
    content: {
      frontMatter: {
        author,
        content,
        featureType,
        image,
        title,
      },
      metadata: {
        date,
        formattedDate: date.toString(), // TODO format date
        permalink: link,
        truncated: "true",
      },
    },
    external: true,
  }))

export default normalize(tutorials)
