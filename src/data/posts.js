// WOLFSE blog overrides and expanded long-form technical content.
// The base array is mutated so home, sitemap and llms generators all use the same updated post.

import { posts as basePosts } from "./site.js";
import { materialGuidePart1 } from "./material-guide/part1.js";
import { materialGuidePart2 } from "./material-guide/part2.js";
import { materialGuidePart3 } from "./material-guide/part3.js";
import { materialGuidePart4 } from "./material-guide/part4.js";

export const materialGuidePost = {
  slug: "malzeme-kalinlik-rehberi",
  title: "Yapısal Çelik ve Malzeme Kalınlık Rehberi: S235’ten S960’a",
  date: "2026-07-12",
  category: "Malzeme Rehberi",
  excerpt:
    "S235, S355, S460, S500, S600/S620, S700/S690, S900/S890 ve S960 yapısal çeliklerin kesilebilirlik, bükülebilirlik, kaynaklanabilirlik ve sektörlere göre kullanım rehberi.",
  seoTitle: "Yapısal Çelik Rehberi: S235, S355, S700, S900 | WOLFSE",
  metaDescription:
    "S235, S355, S460, S500, S600/S620, S700/S690, S900/S890 ve S960 yapısal çelikler: kesim, büküm, kaynak ve sektörlere göre seçim rehberi.",
  body: [
    ...materialGuidePart1,
    ...materialGuidePart2,
    ...materialGuidePart3,
    ...materialGuidePart4,
  ],
};

const postIndex = basePosts.findIndex((post) => post.slug === materialGuidePost.slug);

if (postIndex >= 0) {
  basePosts[postIndex] = materialGuidePost;
} else {
  basePosts.push(materialGuidePost);
}

export const posts = basePosts;
