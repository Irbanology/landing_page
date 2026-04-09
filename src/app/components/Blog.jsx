import Image from "next/image";
import Link from "next/link";
import Container from "@/app/components/Container";

const blogs = [
  {
    id: 1,
    image: "/blog-1.png",
    tag: "Encryption",
    title: "The Best Encrypted Messaging App for Privacy in 2026",
    link: 'https://medium.com/@wibeIT/the-best-encrypted-messaging-app-for-privacy-in-2026-e8a3b1b2f85e'
  },
  {
    id: 2,
    image: "/blog-2.jpeg",
    tag: "Messaging Apps",
    title: "Meet WibeIT the New Privacy First Messaging App",
    link: "https://medium.com/@wibeIT/meet-wibeit-the-new-privacy-first-messaging-app-60b7aa581d6d"
  },
  {
    id: 3,
    image: "/blog-3.jpg",
    tag: "Digital Life",
    title: "How WibeIT Protects Your Privacy Inside the Secure Messaging Technology",
    link: "https://medium.com/@wibeIT/how-wibeit-protects-your-privacy-inside-the-secure-messaging-technology-5e19b38ac4d6"
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="w-full bg-white py-24 blog">
      <Container>

        {/* TITLE */}
        <h2 className="text-center font-inter text-[32px] sm:text-[40px] font-semibold text-black mb-16">
          Recent Blogs
        </h2>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div key={blog.id} className="group">

              {/* IMAGE */}
              {/* <div className="relative w-full aspect-[405/267] rounded-[20px] overflow-hidden mb-6"> */}
              <div
                className="
    relative
    w-full
    aspect-[405/267]
    overflow-hidden
    mb-6
    rounded-tr-[48px]
  "
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* TAG */}
              <span className="inline-block mb-3 px-4 py-1 text-[12px] rounded-full border border-black/10 text-black/70">
                {blog.tag}
              </span>

              {/* TITLE */}
              <h3 className="font-inter text-[18px] leading-[26px] text-black mb-3">
                {blog.title}
              </h3>

              {/* READ */}
              <Link rel="stylesheet" href={blog.link} target="_blank">
                <span className="text-[#FE5800] text-[14px] font-medium cursor-pointer hover:underline">
                  Read
                </span>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <Link href="https://medium.com/@wibeIT" target="_blank" rel="noopener noreferrer">
            <button className="cursor-pointer rounded-full bg-[#FE5800] text-white text-[14px] font-medium px-8 py-3 hover:bg-[#ff6a1a] transition">
              Read the blog
            </button>
          </Link>
        </div>

      </Container>
    </section>
  );
}
