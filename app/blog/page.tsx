import { PageIntro } from "@/components/Chrome";
import { BlogExplorer } from "@/components/InteractiveSections";
import { blogCategories, blogPosts } from "@/lib/site";

export const metadata = {
  title: "Blog & Actualités | L&R SOLUTIONS",
  description: "Conseils, actualités et analyses L&R SOLUTIONS sur le digital, l'innovation, la croissance et la transformation numérique.",
  alternates: { canonical: "/blog" },
  openGraph: { url: "https://letrsolutions.fr/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageIntro label="Blog" title="Blog & Actualités|Nos conseils pour vous aider à réussir" text="Retrouvez nos articles, analyses et conseils sur le digital, l'innovation, la croissance d'entreprise et la transformation numérique." />
      <section className="white-page"><div className="shell"><BlogExplorer posts={blogPosts} categories={blogCategories} /></div></section>
    </>
  );
}
