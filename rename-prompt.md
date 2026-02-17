You are a naming assistant. Given a list of file paths and minimal context from a static website, suggest a new filename (basename only, same extension) for each file. Rules:
- Lowercase, kebab-case, no spaces. SEO-friendly and human-readable.
- For HTML: use page purpose (e.g. about-us.html, contact.html). Keep index.html as index.html.
- For CSS/JS: use purpose (e.g. main-styles.css, analytics.js).
- For images: use content (e.g. logo-infygate.webp, hero-banner.webp). Use alt/title when provided.
- Return a JSON object: keys = exact original path strings, values = new basename only (e.g. "main.css"). Preserve extension.
- Do not change path prefix (e.g. css/ stays css/ by returning "name.css" not "css/name.css").

Files and context:
[
  {
    "path": "404.html",
    "context": {
      "title": "",
      "first_heading": "404"
    }
  },
  {
    "path": "about.html",
    "context": {
      "title": "Straight to Source (StoS) | About Us",
      "first_heading": "ABOUT US"
    }
  },
  {
    "path": "accessories.html",
    "context": {
      "title": "Straight to Source (StoS) | ACCESSORIES",
      "first_heading": "ACCESSORIES"
    }
  },
  {
    "path": "bags.html",
    "context": {
      "title": "Straight to Source (StoS) | BAGS",
      "first_heading": "BAGS"
    }
  },
  {
    "path": "contact-us.html",
    "context": {
      "title": "Straight to Source (StoS) | CONTACT US",
      "first_heading": "CONTACT US"
    }
  },
  {
    "path": "css/559e64bf161e61fa0aca6e864c78191d.css",
    "context": {
      "path": "css/559e64bf161e61fa0aca6e864c78191d.css"
    }
  },
  {
    "path": "css/5e3a198b9f557dce8bcf744d800929a9.css",
    "context": {
      "path": "css/5e3a198b9f557dce8bcf744d800929a9.css"
    }
  },
  {
    "path": "css/923d7a12989d8629b2276bcb808c92b9.css",
    "context": {
      "path": "css/923d7a12989d8629b2276bcb808c92b9.css"
    }
  },
  {
    "path": "css/99c4e6f40ee9111eea53b6472f3e60f9.css",
    "context": {
      "path": "css/99c4e6f40ee9111eea53b6472f3e60f9.css"
    }
  },
  {
    "path": "css/c363a15baf9b3719c1570c22b012b369.css",
    "context": {
      "path": "css/c363a15baf9b3719c1570c22b012b369.css"
    }
  },
  {
    "path": "css/d09d646f062b67daeff66ff1410b63fc.css",
    "context": {
      "path": "css/d09d646f062b67daeff66ff1410b63fc.css"
    }
  },
  {
    "path": "css/internal-styles.css",
    "context": {
      "path": "css/internal-styles.css"
    }
  },
  {
    "path": "fashion-accessories.html",
    "context": {
      "title": "Straight to Source (StoS) | FASHION ACCESSORIES",
      "first_heading": "FASHION ACCESSORIES"
    }
  },
  {
    "path": "floor-covering.html",
    "context": {
      "title": "Straight to Source (StoS) | FLOOR COVERING",
      "first_heading": "FLOOR COVERING"
    }
  },
  {
    "path": "furniture.html",
    "context": {
      "title": "Straight to Source (StoS) | FURNITURE",
      "first_heading": "FURNITURE"
    }
  },
  {
    "path": "glassware.html",
    "context": {
      "title": "Straight to Source (StoS) | GLASSWARE",
      "first_heading": "GLASSWARE"
    }
  },
  {
    "path": "hard-line-product.html",
    "context": {
      "title": "Straight to Source (StoS) | HARD LINE PRODUCT",
      "first_heading": "HARD LINE PRODUCT INSPECTION"
    }
  },
  {
    "path": "home-accents.html",
    "context": {
      "title": "Straight to Source (StoS) | HOME ACCENTS",
      "first_heading": "HOME ACCENTS"
    }
  },
  {
    "path": "imgs/000deb1372e2cd5cb79d416d6c7ec71c.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/001a0c0e62e71199b2dd57c0ac7ad517.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/002e3e95f85c35db3c5ee88a9cebb883.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/0077e6aec75feab4f1533b7c35d9fdc3.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/00fdafb3e0d5bb18f545b27a5d539813.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/01548651b6010b9bcc44cae789f7e8c4.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/0175bbc4d79cb6db541166aa55ce594d.webp",
    "context": {
      "refs": [
        {
          "alt": "SOURCING",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/01c7426729a4d41e9d90f23bb3c783b4.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/0207e5fb6a69d17b6a11e11f496751a7.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/02210e81adbc7bafc75694c00f6eadaa.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/03d048598e93e32e72548bb88317270b.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/03ee0ecd49e4712df60bb894d44afb5b.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/050c482e26c0ef4f6a0eba254d66490f.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/053c5fc31726f990b06f1119a837e139.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/05a2fcaff1cba134e71cead328860416.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/071f94e5369c0f2f1709ef822ed90e01.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/075e6954f5d6f099f59e2261c4310230.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/07dad2a9999767352dfb555e3b3c81c2.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/08890c5ded1a64e05f094624d1074053.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/093ae3bac6583fd3386872a58e5a21e5.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/09435fb9af152b851767fc73eab59df6.webp",
    "context": {
      "refs": [
        {
          "alt": "21821263Converted01",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/0a39f0c47329be838edd431c654dbc36.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/0be8cb275f3db1d19f85409e641c0359.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/0c54e0fc0d96cbbd0be53f9e5edc4e12.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/0c60808ed1e9c975708402b9a343f407.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/0d512fde67891b0094c3e91b18ec7bf9.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/0da277f823c67fe863da2eb427e3d101.webp",
    "context": {
      "refs": [
        {
          "alt": "21821263ml",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/0e41bae98b0c0f8d9bb339df68e66167.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/0f484f6ccf43d9a2d98aec2cdcd22365.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/0f5c1ff0e3161b046816c257d6bbe36f.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/0fe55f7ae9fad27601d2d7c070a61cf3.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/11d41e896557c10c2605119622a3de47.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/11de997e10fa01afb001ff0b1bdd5e76.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/120450e91088acbc1389ee74213cd02f.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/121be19b3b23d370c7d55e7e3baa9b51.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/134febfd6cdcf0f62a6bbfc68071cc8d.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/144c9f52f8b9a2c31186c029fbb06eaa.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/1527c454f3b71dfbc78d56168332158d.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/15fc2ea3ecaeca863684ee9b56551432.webp",
    "context": {
      "refs": [
        {
          "alt": "21821263ml",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/16701b05cc727e99f1a20c6ef3b4c503.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/1685dcb48c02385b07132b2970b7bd80.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/16e0a2537cc86e98d7e5d57d79574cf8.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/1768fe58ab7982f18884d9933c81ae91.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/17b71b0d38879bba2ff2c9d91967d8bb.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/180dfa184d666324a6e5843d26a7161b.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/182eaf42d15ac37ca020f7af9b074e65.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/186b8f2d48aae0418af8a2ade91ff972.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/191b34f22c4d9a9d5be3f3f55bd718a4.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/19c3526ea186d93f92e20548e74e3f0f.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/1aa31fda2ddbdbaa28535855d07321db.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/1ab127b09d1ade1df07be9a2d942c835.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/1bc866dba8225244ea91715df4681787.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/1c46802d0e6465c2aa44dfd9972217dc.webp",
    "context": {
      "refs": [
        {
          "alt": "cutlery377700640",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/1ce446703ab6e2e5b39de7bf57e4fe90.webp",
    "context": {
      "refs": [
        {
          "alt": "SOFT LINE PRODUCT INSPECTION",
          "title": ""
        },
        {
          "alt": "SOFT LINE PRODUCT INSPECTION",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/1cfb9b52b85fc38e1ac0cc01b992b408.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/1d726817128e07e248ae7c0771fb236e.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/1e9d1c10a8a33833ef05fece5cf7219f.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/1fcc4702396750143212ec81fa880ba7.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/2025fb9f8231e85bf5cf2ae3f4b3a832.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/20a2b80a39aeccd1287a776be1c70b8b.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/213d62c667cee366ed879d79490a06b3.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/2156a40bc55bb92d8cdd93e5fa3f571a.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/21c877f386f32d899ac5ffbd217c512c.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/22d8ef45971893ee04a96e523e3d59e4.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/24f7d389320bdb7fc107003674d64787.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/25dc8d3a65cd2451e6dcc3fb755c8474.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/27007f2b010ab28d8c7a6b0e39fb31bd.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/27c187ce42dc1355ebfde44d01adff67.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/28af389f48b2dc62393677ad3be14a67.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/2a21b4def5548d12b98f963c282f557b.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/2a4386162d005631fff6f98d700af260.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/2a4e5f80230d5dec84ce9d780a91e1d0.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/2b96c1cb5e51f953be92f05a584a5801.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/2bd1eadcb4b8cde65ebdb9d41861801f.gif",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/2c2854223f0e51ed38250b3385382fba.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/2ce08542a0a1c22d9845807e3c183fb5.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/2e2a3893fec2c555a9cbe465ffda1c25.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/2f560e619f17f7e612f4ad5ab9a76ea5.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/2f5b80371a308ef6ceacb4bdb94270a5.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/3296e2002601827c28536ae1f8223fe7.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/33751f09e2ce18bb129d0fda5b66b0e9.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/33842b8dc401c09f4edd3590a8d96dfb.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/347f696448bdd70c214a34963a5d536c.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/348350cfd8a353b373ab438561ca9cee.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/350518608a101974cebe7554c4174c6f.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/350ba248a67da92c04cccfb6e9a1b046.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/35a6f9cb339ed2bd3eb5ba9f6b20e6fe.webp",
    "context": {
      "refs": [
        {
          "alt": "21821263ml",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/37087d47b5740377990ccc0189930fa2.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/3749e89553799aba549f0db6e0a8e2e7.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/3796713d2831561c68c66572e31b4027.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/37c1880f6c566334f9646f82afa002a3.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/38aefca1749175cecde79fa9ed95ec36.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/397b98250896753b12860140ac497fc0.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/39a17a040e5f3ccb2910dbaa70bae342.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/3a63c14018d45f77a47942e214641afd.webp",
    "context": {
      "refs": [
        {
          "alt": "21821263ml",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/3aa9084386f9e02f89476ad1282c96e8.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/3b57eca601cda9d63a67c59585259bae.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/3c4e2fb01927a08202a405938314c252.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/3cb7cc35a27cf2f9e79970468728d9a7.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/3cf51760f02ec8472eb4d5490255a839.webp",
    "context": {
      "refs": [
        {
          "alt": "21821263ml",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/3cfefda6b494f3a8d5cad6d5e1147339.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/3d1e9eedd069bf4c517d245adb16c571.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/3eecc25bcbdc4d429e3b45155d25d9e3.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/3f768172106a4bbd952b8cfd9c9f339a.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/3f7ae3d064b500b13b194b6912865ec3.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/402a0547e7760d7690b4de3de154e34e.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/4075ca4b4cc0714be085256fda2f2429.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/40f0b1d86c65db3cd15eaee725e34374.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/42c9d33aa1e8cdf3268c9db9107cb12f.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/455c9defe77ec57446dd98ec26a2460d.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/45fed1de8aaa64a66f92c4c4653aef78.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/463987fc777b0ce158d775ac62887230.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/47455b09362dd87622fc64141fe30bfd.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/47d42c20b4e7fc01c6992dd0eb931487.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/49b869d7629ddd22c707496bbe1a66ab.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/49d9023578e72f4c69c9c8ffe8188ea7.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/4ad15685602ffdd057e53121d09a7d9d.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/4b13784dde3b8d6024601d339968f3a5.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/4b8f8842781de6590652de33cd7ba626.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/4bba28a04422e075f99bf03c9b39ded4.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/4bc8134291103514754e9ac37031522c.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/4ca62a75aa4703f2314c1c5642545f81.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/4cbaa34f2c3a1bf6bcb92f1ce9c1f29b.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/4cf9d972ad78659c3ae5efd95aab4b36.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/4da066879eee50919f1675c00d5e9f3e.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/4e088f2c7dca0522e52ed0856a5300cd.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/4efb9c83a47248b04ad4a529c81a7a85.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/501a1502c9a318c47236932da61d4faa.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/50c8292d4f8dc344cf9b0b7a03199ac1.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/51327d8b5819bc51690b333116e2c749.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/51d2e440f786377f8ec9a755b84a81e8.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/520128dab2126d171bfeecc9b28300fa.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/5248068f9a629188285b93d19ec9767b.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/52f8daa5cb42c580376f23304bd6d1b6.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/53b9d8734d4b9601ac2af709a1d3d340.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/54a2700ae1d1a6a4e04bce5e6effe8cf.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/55918792a4e77533941e37f169f9a445.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/56413fd1d397d11e3f5e6ea62cb72187.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/56e354f5081b61bf8b725f6cb3397a80.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/585ce79535e40ba95c1de574bad43da8.gif",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/588dab63aea2fda5a1a95cdffcd5ac3b.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/59e4d77e73165cda5e7fd9efc16dfd5e.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/5aab3907efc246750970789eab7b3749.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/5b94f9a1ca0fcc840df98fdd05f143b5.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/5bcbe8874c1a0289b3058e94c7956419.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/5c56918140a01e2fec868650eae0d26d.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/5d3793c5e6a4f8d0599d473077d1628a.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/5e9097d7d262045b1f3cc6d09c17f58b.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/60169ccc86ef4ee730e02d4e34b4bee5.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/60695df591f2b3e9d55476042f620b5c.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/6294aaf380276976c908ad21dbd7450e.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/62a6a92b8c9a13b5d8b85ac262d156f7.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/62ae239c39982d1cab4cf8faebfb4742.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/62ee53a33b0b9bb058fae91601a7f24c.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/63edf232211a85d0e74fd4fb897cc1de.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/642a80ae68b967e27460d6352fffda5e.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/64c8f47a9dcf28ab9b1aa0eb3e97afe3.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/65442735f57d96bb8775fa768cdb701d.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/655ffaafa4874b52f31c267473ace7ed.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/657818dd4228ea9a2ba465d1907e32d1.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/65c18665d0b727109371a4dbf0f7a1bf.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/65f1d18f2b8dd72a27b65ef04e54f8d4.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/65fb7f80bed819840c1c420e08c8be5b.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/669a4eacac0ad57264b584e3ba799eb5.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/67f4a36bda0f82553aa865c5a5ffb39e.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/687feb4586828092ce361149bcc9c4d0.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/68c43e2ef393d769562f341d0ac6ad8c.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/68ded8f4fa4bd2432d7e4639a76fdc97.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/69a8ef31e15aee631dea82bf95c88417.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/69d7b974f5c2a04fdb993840d3ac42a7.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/6af05e7acfdd3404332039f09a957916.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/6b2fa89bf05728379e52a56ef30cd705.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/6b6923316ed2ec56080603124a556d44.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/6da8d2b3ca191f974290f0721bcddaaa.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/6f43191c57bf97f406d709ec2e670258.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/6fac7059871b1ffb5bfeffdf95ac646a.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/713d59e52949a8c10be504c7ecc90c62.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/71612f85231b569156034792c38c1a70.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/71b22c0681d05b52a36f3e7c9bbd0d63.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/723901cef0d43a7bf28cec20f529d6f1.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/7247e5f343bfe229f0d2fe9b93c06554.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/72e308375b271f81d8a55178b9a0aae0.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/73c876743e148dd9c524c69ca56eb319.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/743ce202856e3fe85a2fd7432a0f3589.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/75a1da708fbc2223bdb40aeea37b2a6d.webp",
    "context": {
      "refs": [
        {
          "alt": "21821263ml",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/7623faa2fa253427990e6d119644039d.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/76a5d504629e327b83ec221780f215e9.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/76bd24ace8db4fa3ddac64c06cc14eb5.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/7708e3523fee44f6207a2fac5807e298.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/788e2442fb1e0d3997ec76f980b62474.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/78a8ab94d35eedbd488926121c067e38.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/78c18c539a33ff457c2504c1d7533945.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/7902a87888b08a6d89d8ed9b48a97fe7.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/79939aff33cad7477585a4fa9796fa10.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/7a796edb11f788d4038f4ac6a3e7697a.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/7afa4fdc4d63bb824a7e8993b533a112.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/7c52f50aac91ba037b98564fb0902d1e.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/7c5c0dfbbd4ff43d59d92591fdc2296a.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/7df102e18b5dfacc844f784a78b073f7.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/7e251416a11cfb0cb5f240407f0efd95.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/7fa54021c086014be1c0aa134c5e2b51.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/808aa00b84dca3d398fc2a7e7a845ad8.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/80ca9da9b00b41138159b6cbb7da9181.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/80ce4925dbf9fb52c273e220dcf5bcd4.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/80dad6b1f860a5df910b0dae0b000fa0.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/828fb94b21463a1732d972927c741735.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/83aabc36b19af55108539d24e090a0f5.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/841e6e7f4dc194284ddf096aafda0c46.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/84ab09a2b545ffe6ac3db9c9c1396ec4.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/84be0ac8b1686fdd002e4b23aa0ddf3d.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/85a377377a03d341fa207a115728ef51.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/85cafc6fc7cf8bbd4582f4117275cb3d.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/868899d65c512396e20bffa56a78c378.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/86b55854b57d4d882cac30ec605dc8bc.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/8807ecccf3dfd87b992bd5f52d6f6228.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/881944d40e6842cd67acf33ec7981548.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/891be94d7e1d5fb132c5c1e796437239.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/893ac416b1cb3ad0b2b113a4cb0d1c37.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/89a3922c8c5ed5a01f75652dbb4c4234.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/8b0cdf4ef8f3d60b8a6b187b14bfd35b.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/8b111225796f0e49a448e0c72f0eef75.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/8b1977258d6bd5f5b5f269fa647c8807.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/8c3433c1899583ce24226c19f9dd2f9d.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/8cfe71e447952c724fe522cb127a3404.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/8d5d6cde6f1a982cab035470b2d06814.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/8db6ba4e585905c7d0ac47ae65168601.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/8e798bafc15548d7e08d06d3972732eb.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/8f10cd0e87a95f8c05cd3063091aa58b.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/90afa045d5eb114078ae3bc5d3aefcb7.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/90d0b2c0a9cdb23987881938c0c27215.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/919457cea810cf1f89aac572afd4109c.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/91ec493b55fecb64aa7334d6916ac0bf.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "21821263ml",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/924f21305da0b2e2224e3b8c9b1f4eea.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/9370db7dc542ef470658f5ddbd168860.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/942d1bf236b2e4d8107fe6665956802a.webp",
    "context": {
      "refs": [
        {
          "alt": "HARD LINE PRODUCT INSPECTION",
          "title": ""
        },
        {
          "alt": "HARD LINE PRODUCT INSPECTION",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/9485f42a47e29f9d9c7efeb0cccbd9fd.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/95ad331ccedfdee2f76fb93603752d99.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/95b12228af9999a5585ae8c6c813b0ea.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/96372a0feaaeb487543b892c4f6fbe91.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/9782f632a8378504568f30441c97ce64.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/99818ea35c580f768c8d4d64de7b6354.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/9a065f6c0107135f6a7898c1aa624219.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/9abbdea238c96ff095d5a03381494580.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/9b27ebca94d1a53159275e0f8c333146.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/9bfca8ee78698bcc3f6a6596dac9852f.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/9bfeb78ada600cfe002ed8a6d743e577.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/9c10f3541cf5d9e3b723a5de70165687.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/9c2acd2ba79e8215fd86c67222744b2f.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/9c5bc4b7fa06f5fea4f1254656e7a778.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/9c728630115c1daf64b343b103ea09a3.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/9d3995bb2994c06ab265ec7ba19b1b05.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/9d9d7f756ea938ff220b5deba44511c1.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/9df010a0c914147ecdcee4e6ea6e3cc6.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/9df916b68743b674b1585e5032c5c3e1.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/9f349bf54fbc74740ccc282bbb098c22.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/9f4fa4072c4590dfaaec1855487236af.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/9ff11caf4fa9f25f10506b590622918a.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/a01376fb190f1d7b49d69da34edc017f.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/a0299088b3567c6b61b6331e4b9baf8f.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/a0a93e8d1aaa9969cc31f872b1026466.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/a0e87a82fd71b81cefdcb675ca70a416.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/a1b7e9572d584f39a7c25d389bd4c4ad.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/a22a446bcf38f955d7d227af8effe849.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/a2daf8d55539e02ac0276592b5a0b34d.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/a3614e69512b26e278714ff9ea547512.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/a46495e1ede7565430a7445919b7be28.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/a467e35af88189ad6b82b4239c03b9d5.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/a50f0b289400976c4fcb56052d2c3bfb.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/a63e388f7cf7b3050fb42145d31af238.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/a70e524f26e6cf0a9c71739983752d1e.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/a72d282fba7b0fcf052d77065772f4c6.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/a7443a1dee876104f0c7b1defaded6ed.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/a7b11365bfd36db34e6d8d018817ccee.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/a81e94431666650caae9b446736b0c91.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/a8c35921ec9ac7631605aac9374f17eb.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/a8e01ffab41f830da5583c52baa422f8.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/a917a1f69e7cfe8a082405342e87fbf1.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/a9c8be63ae48f8c1b36622b5703c7f37.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/aa0b474d92b9d2e580c42bdd09bb6047.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/aa13c21bd8476310af533394b57eae00.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/aa41d2d7cebab12591f0bdedca2a2918.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/aa4fe1681a8ee4b22b5849ad1c21e3a1.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/aaa84f1c2dee292c48fcece59ac32b32.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/ab06f712cca116c3106d80ec8599a9d6.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/abb73fadd295a97627e58e27f2b26ef4.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/abe3269c4f44cababc5d6f070ab385d9.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/ac6ab5f82f43d00dc442dab8124517da.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/ad5cc83e16bb832b27b2b118e10e9f0f.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/ada345c23758ad8422d9d0bad663d4e1.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/ada61f68a430b3f0e69b766e35ccd09e.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/ae0887298066161aa66bbbc877f80baa.webp",
    "context": {
      "refs": [
        {
          "alt": "21821263ml",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/ae665128146fa9b0fc206bd491983715.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/af318067811a5b0ae47cff9c8ba3695b.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/af43f563621471d2b65e46fc0097f4da.webp",
    "context": {
      "refs": [
        {
          "alt": "21821263ml",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/afb0add12cdf5fac16c8a8a86703903f.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/afb686c4cdeffec4f5187e07072e854d.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/b027aa19a87b3932bb37b5b9266395bf.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/b098a4f5146aff714ccc99576fd38829.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/b125aa79f5f794bbb7ff45b7709ade0f.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/b1bce734ce273e932a31a38bfcb98376.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/b2a760980ae4c801a3c794b6fb9a58e9.gif",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/b2cd9452ce33f78efd0a4b1aa25f643e.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/b2d55b9bf183392f71f9b4df42899e5b.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/b2df28e1a3f0cc1efbdf5988c392cfcd.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/b33ec280f1e06a0c45d551e0c3f34211.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/b37cdf1202ab38286d81c796a49c7162.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/b3c06e58105dfa520a9a927beb08a51e.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/b4a5a83f0dabe6f69e88c1d3c4a6893c.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/b4f102fc524ea5778edb547e36e56ba7.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/b53791dadb2b9a0cf18102aaa79c95ca.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/b64fc624306098ee1fe4c55eb9dcfb7a.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/b94ba2595c154c0d9bc9ca5196bd19c8.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/ba91b02f05dc86d68bfc21366f26cd6b.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/bbc3e262659c31df182b032822d6fe99.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/bc32790989a881e65a021482599c1da9.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/bd405ef326b5ebb8a96f259d20734cd8.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/bea198a0bbfc51e3a43e6cea9412f7be.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/bf94efe35edf5fa6ed11cdda962d9467.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/bfa8c708053e2fb1a820c254b8dde808.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/c090ad6751042f672d2f637bbd65c52c.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/c0bc95cc7e7558fa63ae864a8efc31e0.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/c0bf7ba443a19d3d8dbf7e8f1e666096.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/c1d4e6276f95d3a3b45394fe293ae3d0.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/c224dec9351622e1edbcded6f4152b45.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/c29a7d47e0fe4e952dcea022c0c49da9.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/c2aad64cb9cff71509fc78f4438370c6.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/c3133c8e4f600c7f2938ddd6af94a332.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/c47f90a68dc5bb7583aa0e12f4af1aa1.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/c4a9949f0eb1caa39e2d29999a083cc6.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/c4b7105ec2275d329e74e08dbede0633.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/c71a10ddeccabd28c1dda52188c5f138.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/c739b6b6853b6d815c4ef78b2ff44e12.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/c80f3fccceeeb274604ab1d31ab9a47f.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/c85b0fd6445fda2978d3dcf879a9b889.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/c877113fbaef7365df7cd3a4dd6a3337.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/c8df9ff48d9152534d92ca15fd556ec8.webp",
    "context": {
      "refs": [
        {
          "alt": "logo",
          "title": ""
        },
        {
          "alt": "logo",
          "title": ""
        },
        {
          "alt": "logo",
          "title": ""
        },
        {
          "alt": "logo",
          "title": ""
        },
        {
          "alt": "logo",
          "title": ""
        },
        {
          "alt": "logo",
          "title": ""
        },
        {
          "alt": "logo",
          "title": ""
        },
        {
          "alt": "logo",
          "title": ""
        },
        {
          "alt": "logo",
          "title": ""
        },
        {
          "alt": "logo",
          "title": ""
        },
        {
          "alt": "logo",
          "title": ""
        },
        {
          "alt": "logo",
          "title": ""
        },
        {
          "alt": "logo",
          "title": ""
        },
        {
          "alt": "logo",
          "title": ""
        },
        {
          "alt": "logo",
          "title": ""
        },
        {
          "alt": "logo",
          "title": ""
        },
        {
          "alt": "logo",
          "title": ""
        },
        {
          "alt": "logo",
          "title": ""
        },
        {
          "alt": "logo",
          "title": ""
        },
        {
          "alt": "logo",
          "title": ""
        },
        {
          "alt": "logo",
          "title": ""
        },
        {
          "alt": "logo",
          "title": ""
        },
        {
          "alt": "logo",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/c909ff26cf45e9f518edb92d0fb079d2.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/c9fcc73f96a0e68cc6dcda07bc1975d1.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/cb87c93102fac774013ea34b0efad5a4.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/cbbb0f7c906da748873bedac3a573329.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/cc89f26783b6bebc0bb5f757b3d910a6.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/cd354f58162c55f40b0a81e38850e5ad.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/cd9020d54c3b4d84c3ff85298539eefd.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/ce26bfc7cdc23b0500028b8c8b1039e5.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/ce7eb27c1121435b0267254767679b4c.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/cf8db9a949172d1fdc4b2d48f2e41093.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/d0c7e0612dcdad2a873bd35bc26e8ab0.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/d0d4148a9f161c76e85f117b6216a91f.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/d17b9c16ad5ba3078c73fcfe68e5ac77.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/d17c3e8a634316df1052f890a92ebb16.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/d1b74ed96b4a515f8a03855baddf4c02.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/d21cdaa83d6f3baaa3f75e4982017e55.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/d27fa076368cc6b160162bfd46f5aa4e.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/d2b586176a040eda0ccfb4ef836ad82a.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/d3c9f6e84a1a175c8863b86aee8a42e6.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/d3e163bd0f9c822fb44faf0c2d0e8cb8.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/d4126b9a243295836a12256eea602bcb.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/d41b2d6ebbb1696ff0128d68726992c0.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/d4a387789ac04c06271fd9a74387fdbf.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/d5450a2d5ee56b6a201fe7332d7fc36e.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/d568180415bf53a19a7da7e829099ff7.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/d5bbe34cd4bcbdd8a2cb40bf7ef28f27.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/d5c984eaa90cba828f329bcf765b3f67.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/d820ac5a0357e68c9a26b47b1b59ad5f.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/d90229eb49a3057bce02ce4ad0288e6c.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/d9747e213327e9eef7db9b8089cd1f3e.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/da955c830e4c2ef90d6e564c4c9f8ea4.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/db7a131e8190259badac56ad5a37bfd2.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/db8de19cd386276ddd88ef8beaca77a4.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/dc99f78e2b47975af8e2d73d968d7ee4.webp",
    "context": {
      "refs": [
        {
          "alt": "21821263ml",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/dcb58192fa0748f7e30827e4254d6522.webp",
    "context": {
      "refs": [
        {
          "alt": "LOGISTICS",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/dcc13f7f01ef67f528af2b1ab27567ce.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/dcd09791aa97d874991aaaf954c8a022.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/dcfc61a2222cb28d599d5bc04cc2944a.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/dd2cb157a3c2c384659462623332c5cb.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/de08dec022af41b0c3dcacfe390258ec.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/de3875c8f05425767bfd117e8f4c5c30.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/de3a1658d7d6a803d29a83071bc23e17.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/de875af527a3e251d967b887cae9cf24.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/df53988637d2bb4edb184c90a8723b7c.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/df855bed428c5a901dc9696901d71242.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/dff902cddf56b0ee65b123db838c9a48.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/e088332b67f8e3c6b081af14c0785294.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/e10520899c64ffa86b4af32dbfdb4b37.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/e1207dfc3ce4bbfe1b6feba120af5880.webp",
    "context": {
      "refs": [
        {
          "alt": "21821263ml",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/e16d34981094ebe37e854540026d59a6.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/e186fcfa2a72bf674e8ff89929294133.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/e1d40e1149febd02494d2e2fef1da750.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/e26c96e28768b76bc7dc042ded76b8f6.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/e28db95284bdf33d089462f185e883f7.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/e2e50812005715f016a7da8972414cd3.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/e2f12f89c3644679ef4f13d8cd963a58.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/e45bbd05a69898062012955a505ea8eb.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/e4b09ce65c4f5af7550103056ed099e6.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/e4f2fe7ca89fdb3ba7f9cfdcbea4a6cd.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/e617f51b4d397b3b5b425c91d10db96f.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/e695552aa4dfe6adedb843d5e459f974.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/e7a87f3fdbeb93933bcb0f346a55152e.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/e7c7b8fd281cf77c947a8c2f240ab323.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/e854a89ca03cb74a7ee6470f9ac03bd7.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/e86c86a8c7fea6cfc38e5e725fa7acf4.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/e87c558918b46f61368c5a7773b2885e.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/e89c912ccb58785a805126be3a7b128a.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/e89e9f3e5ca6cf02ccc906cce97fa0da.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/e9019b8613f1f4f242665103a82e7753.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/e97ebf302a1c944d49550267ee97fbd6.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/ea18e81f4660ea3e534743aa2f27fc05.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/ea496b90da579580ac6651a667c4c3fd.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/ea6658c2345a07a0e4594d900f3a6fb2.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/eb999009ff5b545c06f63818f728e5df.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/ebc862a3f26ae4ae5c9aed780ba5b71e.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/ecd5743d30360763c102c89c5c3a3ea7.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/ecedfe7981c17e1c1026738509c35411.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/f1c98f0cdf5b9407422f8f1e79265b79.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/f2b13b1b78af417d01c10d4840098d11.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/f2d93f150d6274c7a7fcd0f05ce455ec.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/f2e3be70d66e5f932cd36fc20aca833b.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/f4e32ac399f7a10be053e60b4a6ffd1b.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/f585437684a8f8b241b3407bc1d8e383.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/f621d9e0a4bafba0688e6748b4b5e2c8.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/f656106bc247548dc90366b1008e21c9.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/f6c25877a5583563e9567ee1a3bda720.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/f783f6d6c9b61604d64b01fe71bfdd05.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/f7a885c9b5d6748cd4a394a4fd17e6e6.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/f86312552029650f06935c4164ecd0c5.webp",
    "context": {
      "refs": [
        {
          "alt": "21821263ml",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/f8e8f099c8a1f1589e0f4060b9868ee8.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/f93f59d8a9d60cfb3b1e1bb7d65c4122.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/f97ccf255271d32a0f57909df0c1a157.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/f9ba773e9df86fc5803ecfb9c090dd22.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/fa88e76f71ca1beea12997964f8e576c.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/fb5297bb7e719f7867bd2d5ecaccc311.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/fd540d120131a8070991ca750ffa4220.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/fed61a9aa530f61293341fc350c3aa0e.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/ffab967bdbf0527a304a697bf9a5ad57.webp",
    "context": {
      "refs": [
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "index.html",
    "context": {
      "title": "STRAIGHT TO SOURCE(StoS) | HOME",
      "first_heading": "STRAIGHT TO SOURCE(StoS)"
    }
  },
  {
    "path": "inspection-services.html",
    "context": {
      "title": "Straight to Source (StoS) | INSPECTION SERVICES",
      "first_heading": "INSPECTION SERVICES"
    }
  },
  {
    "path": "jewellery-boxes.html",
    "context": {
      "title": "Straight to Source (StoS) | JEWELLERY BOXES",
      "first_heading": "JEWELLERY BOXES"
    }
  },
  {
    "path": "jewellery.html",
    "context": {
      "title": "Straight to Source (StoS) | JEWELLERY",
      "first_heading": "JEWELLERY"
    }
  },
  {
    "path": "js/03feef94baf395456a6160bd9a5bd087.js",
    "context": {
      "path": "js/03feef94baf395456a6160bd9a5bd087.js"
    }
  },
  {
    "path": "js/12231e99bcf6904a2ff4af59318f377d.js",
    "context": {
      "path": "js/12231e99bcf6904a2ff4af59318f377d.js"
    }
  },
  {
    "path": "js/1ea7c0a1aa07772cce6701986d53d860.js",
    "context": {
      "path": "js/1ea7c0a1aa07772cce6701986d53d860.js"
    }
  },
  {
    "path": "js/335d647698f05a4e55ce71bcee9e0ecb.js",
    "context": {
      "path": "js/335d647698f05a4e55ce71bcee9e0ecb.js"
    }
  },
  {
    "path": "js/3748e85b3bcf6f02d3c77bf66633ced6.js",
    "context": {
      "path": "js/3748e85b3bcf6f02d3c77bf66633ced6.js"
    }
  },
  {
    "path": "js/39f89be46e7261e1a734261757d61872.js",
    "context": {
      "path": "js/39f89be46e7261e1a734261757d61872.js"
    }
  },
  {
    "path": "js/3e734a79111d3ae5022fadd97f4b4570.js",
    "context": {
      "path": "js/3e734a79111d3ae5022fadd97f4b4570.js"
    }
  },
  {
    "path": "js/3e78394b23248e8ded41af6ef0e3b144.js",
    "context": {
      "path": "js/3e78394b23248e8ded41af6ef0e3b144.js"
    }
  },
  {
    "path": "js/3f5da4ecc7840ea61b09e604966b1f3d.js",
    "context": {
      "path": "js/3f5da4ecc7840ea61b09e604966b1f3d.js"
    }
  },
  {
    "path": "js/3f81e3d103df1e3f2ea94f2d33595c2f.js",
    "context": {
      "path": "js/3f81e3d103df1e3f2ea94f2d33595c2f.js"
    }
  },
  {
    "path": "js/42caf217fea09775f73f4e91f3a18405.js",
    "context": {
      "path": "js/42caf217fea09775f73f4e91f3a18405.js"
    }
  },
  {
    "path": "js/4c3a5548858a33f34c7af224fac322f1.js",
    "context": {
      "path": "js/4c3a5548858a33f34c7af224fac322f1.js"
    }
  },
  {
    "path": "js/53322dc509e78c0f6cbb914c8fb3ff61.js",
    "context": {
      "path": "js/53322dc509e78c0f6cbb914c8fb3ff61.js"
    }
  },
  {
    "path": "js/64e329b0ada22ea59525293f72b9145b.js",
    "context": {
      "path": "js/64e329b0ada22ea59525293f72b9145b.js"
    }
  },
  {
    "path": "js/8c6ca0317856477438eaae5a24fdc585.js",
    "context": {
      "path": "js/8c6ca0317856477438eaae5a24fdc585.js"
    }
  },
  {
    "path": "js/9f9b6e54f82a6bbc8bac9b89327024bc.js",
    "context": {
      "path": "js/9f9b6e54f82a6bbc8bac9b89327024bc.js"
    }
  },
  {
    "path": "js/a36bbbb0bf3306a65d7424e68bd91e6f.js",
    "context": {
      "path": "js/a36bbbb0bf3306a65d7424e68bd91e6f.js"
    }
  },
  {
    "path": "js/a4d072ea63e3061dc92b47e48870e50d.js",
    "context": {
      "path": "js/a4d072ea63e3061dc92b47e48870e50d.js"
    }
  },
  {
    "path": "js/a626b42d5e9f3bebfd9624955f0d721b.js",
    "context": {
      "path": "js/a626b42d5e9f3bebfd9624955f0d721b.js"
    }
  },
  {
    "path": "js/b71cd1aac395895910ce3e565b6115d3.js",
    "context": {
      "path": "js/b71cd1aac395895910ce3e565b6115d3.js"
    }
  },
  {
    "path": "js/c0a1fdde13d2dfd43bb0f3bb7bd22643.js",
    "context": {
      "path": "js/c0a1fdde13d2dfd43bb0f3bb7bd22643.js"
    }
  },
  {
    "path": "js/c536c70c31d4339bd51f667908d47b13.js",
    "context": {
      "path": "js/c536c70c31d4339bd51f667908d47b13.js"
    }
  },
  {
    "path": "js/d75e33a92953e60d06e6e70c6d28be7f.js",
    "context": {
      "path": "js/d75e33a92953e60d06e6e70c6d28be7f.js"
    }
  },
  {
    "path": "js/d8352ae23015f572ec8cff0c97bbd7bd.js",
    "context": {
      "path": "js/d8352ae23015f572ec8cff0c97bbd7bd.js"
    }
  },
  {
    "path": "js/d8d707879b540850307fa064d120dee9.js",
    "context": {
      "path": "js/d8d707879b540850307fa064d120dee9.js"
    }
  },
  {
    "path": "js/e7611068e8c8d20ae27ca942c0a3ba16.js",
    "context": {
      "path": "js/e7611068e8c8d20ae27ca942c0a3ba16.js"
    }
  },
  {
    "path": "js/f0ff27b35a831d9b15771d8834535c75.js",
    "context": {
      "path": "js/f0ff27b35a831d9b15771d8834535c75.js"
    }
  },
  {
    "path": "js/f3fb50b0a99a262069a51156885bd5aa.js",
    "context": {
      "path": "js/f3fb50b0a99a262069a51156885bd5aa.js"
    }
  },
  {
    "path": "kantha-items.html",
    "context": {
      "title": "Straight to Source (StoS) | KANTHA ITEMS",
      "first_heading": "KANTHA ITEMS"
    }
  },
  {
    "path": "lighting.html",
    "context": {
      "title": "Straight to Source (StoS) | LIGHTING",
      "first_heading": "LIGHTING"
    }
  },
  {
    "path": "logistics.html",
    "context": {
      "title": "Straight to Source (StoS) | LOGISTICS",
      "first_heading": "LOGISTICS"
    }
  },
  {
    "path": "marble-boards.html",
    "context": {
      "title": "Straight to Source (StoS) | MARBLE BOARDS",
      "first_heading": "MARBLE BOARDS"
    }
  },
  {
    "path": "product-categories.html",
    "context": {
      "title": "Straight to Source (StoS) | PRODUCT CATEGORIES",
      "first_heading": "PRODUCT CATEGORIES"
    }
  },
  {
    "path": "soft-line-product.html",
    "context": {
      "title": "Straight to Source (StoS) | SOFT LINE PRODUCT",
      "first_heading": "SOFT LINE PRODUCT INSPECTION"
    }
  },
  {
    "path": "sourcing.html",
    "context": {
      "title": "Straight to Source (StoS) | SOURCING",
      "first_heading": "SOURCING"
    }
  },
  {
    "path": "tables.html",
    "context": {
      "title": "Straight to Source (StoS) | TABLES",
      "first_heading": "TABLES"
    }
  },
  {
    "path": "wall-mirrors.html",
    "context": {
      "title": "Straight to Source (StoS) | WALL MIRRORS",
      "first_heading": "WALL MIRRORS"
    }
  }
]

Return only a JSON object mapping each path to its new basename (same extension). No other text.