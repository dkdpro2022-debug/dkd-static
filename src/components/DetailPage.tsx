import { ArrowLeft, ArrowUpRight, BookOpen, Film, Layers3 } from "lucide-react";
import { motion } from "motion/react";
import type { ContentDetail, HomepageItem, HomepageSection } from "../types";

type DetailPageProps = {
  item: HomepageItem;
  section: HomepageSection;
  detail: ContentDetail;
  relatedItems: HomepageItem[];
  blogItems: HomepageItem[];
};

function SmallContentLink({ item }: { item: HomepageItem }) {
  return (
    <a
      href={item.href}
      className="group grid grid-cols-[4.5rem_1fr_auto] gap-3 border-b border-slate-200 py-4 transition-colors hover:border-slate-400"
    >
      <div className="h-14 overflow-hidden bg-slate-100">
        {item.image ? <img className="h-full w-full object-cover" src={item.image} alt="" loading="lazy" /> : null}
      </div>
      <div className="min-w-0">
        <h3 className="text-sm font-semibold leading-6 text-slate-900 group-hover:text-slate-600">{item.title}</h3>
      </div>
      <ArrowUpRight className="mt-1 h-4 w-4 text-slate-300 group-hover:text-slate-900" />
    </a>
  );
}

export default function DetailPage({ item, section, detail, relatedItems, blogItems }: DetailPageProps) {
  const isBlog = section.id === "blog";
  const sourceHref = new URL(item.href, "https://dieukydieu.tv").href;
  const hasVideo = Boolean(detail.videoUrl || detail.videoEmbedUrl);

  return (
    <main className="bg-white pt-20">
      <section className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
          <a href={section.sourceUrl ?? "/"} className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-950">
            <ArrowLeft className="h-4 w-4" />
            Quay lại chuyên mục
          </a>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="max-w-5xl">
            <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
              {isBlog ? <BookOpen className="h-4 w-4" /> : <Film className="h-4 w-4" />}
              <span>{section.title}</span>
            </div>
            <h1 className="font-display text-3xl font-black leading-tight tracking-normal text-[#102A43] sm:text-5xl">
              {item.title}
            </h1>
            {!hasVideo ? <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">{detail.description}</p> : null}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:px-8 lg:py-14">
        <div>
          {detail.videoEmbedUrl ? (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="overflow-hidden border border-slate-200 bg-slate-950">
              <iframe
                className="aspect-video w-full bg-slate-950"
                src={detail.videoEmbedUrl}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          ) : detail.videoUrl ? (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="overflow-hidden border border-slate-200 bg-slate-950">
              <video className="aspect-video w-full bg-slate-950 object-contain" controls playsInline preload="metadata" poster={item.image} src={detail.videoUrl} />
            </motion.div>
          ) : (
            <motion.article initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="border border-slate-200 bg-white">
              {item.image ? (
                <div className="aspect-video overflow-hidden bg-slate-100">
                  <img className="h-full w-full object-cover" src={item.image} alt="" />
                </div>
              ) : null}
              <div className="p-6 sm:p-8">
                <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                  {isBlog ? "Bài đọc" : "Tóm lược nội dung"}
                </div>
                <div className="space-y-5 text-base leading-8 text-slate-700">
                  {detail.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                <a href={sourceHref} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-slate-950">
                  Mở bài gốc
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          )}

          {hasVideo ? (
            <article className="mt-8 border border-slate-200 bg-white p-6 sm:p-8">
              <div className="space-y-5 text-base leading-8 text-slate-700">
                <p>{detail.description}</p>
              </div>
            </article>
          ) : null}
        </div>

        <aside className="space-y-8">
          <div className="border border-slate-200 bg-white p-5">
            <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
              <Layers3 className="h-4 w-4" />
              <span>Thông tin</span>
            </div>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-slate-400">Chuyên mục</dt>
                <dd className="mt-1 font-semibold text-slate-900">{section.title}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-400">Định dạng</dt>
                <dd className="mt-1 font-semibold text-slate-900">{hasVideo ? "Video + mô tả" : isBlog ? "Bài viết" : "Nội dung đọc"}</dd>
              </div>
            </dl>
          </div>

          <div>
            <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">Cùng chuyên mục</div>
            {relatedItems.slice(0, 4).map((related) => (
              <div key={related.href}>
                <SmallContentLink item={related} />
              </div>
            ))}
          </div>

          <div>
            <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">Đọc thêm blog</div>
            {blogItems.slice(0, 4).map((blog) => (
              <div key={blog.href}>
                <SmallContentLink item={blog} />
              </div>
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}
