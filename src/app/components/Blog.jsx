import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    image: "/blog-1.png",
    tag: "Inspiration",
    title: "8 Creative Ways to Repurpose Your Webinar Content",
  },
  {
    id: 2,
    image: "/blog-2.png",
    tag: "Inspiration",
    title:
      "Why Webinars Are the #1 Lead Generation Marketing Strategy, You May Not Be Thinking About",
  },
  {
    id: 3,
    image: "/blog-3.png",
    tag: "Inspiration",
    title:
      "How to Drive Qualified Pipeline and Enable Sales After Your Webinar Wraps",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="w-full bg-white py-24 blog">
      <div className="max-w-[1280px] mx-auto px-6">

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
              <span className="text-[#FE5800] text-[14px] font-medium cursor-pointer hover:underline">
                Read
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <button className="cursor-pointer rounded-full bg-[#FE5800] text-white text-[14px] font-medium px-8 py-3 hover:bg-[#ff6a1a] transition">
            Read the blog
          </button>
        </div>

      </div>
    </section>
  );
}
