"use client";
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { type Post } from "@/data/posts/index";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function TrendingPostCard({ slug, image, type, title, description = "点击查看更多内容" }: Post & { description?: string }) {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(false));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(false)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-zinc-800/90 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${id}`} className="relative h-80">
                <Image
                  priority
                  src={image || "/placeholder.svg"}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="p-6 space-y-4">
                <motion.div layoutId={`badge-${id}`}>
                  <Badge
                    variant="secondary"
                    className="bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300"
                  >
                    {type}
                  </Badge>
                </motion.div>
                <motion.h3
                  layoutId={`title-${id}`}
                  className="text-xl font-bold text-gray-900 dark:text-white"
                >
                  {title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-gray-600 dark:text-gray-300"
                >
                  {description}
                </motion.p>
                <Link
                  href={`/blog/${slug}`}
                  className="inline-block px-6 py-3 bg-purple-500 text-white rounded-full font-semibold hover:bg-purple-600 transition-colors"
                >
                  read more
                </Link>
              </div>
            </motion.div>
          </div>
        ) : (
          <motion.div
            layoutId={`card-${id}`}
            onClick={() => setActive(true)}
            className="group relative block w-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
          >
            <div className="flex gap-4 rounded-lg bg-white/95 p-3 dark:bg-zinc-800/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-zinc-800/90">
              <motion.div
                layoutId={`image-${id}`}
                className="relative w-24 h-24 overflow-hidden rounded-lg"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </motion.div>
              <div className="flex-1 space-y-2">
                <motion.div layoutId={`badge-${id}`}>
                  <Badge
                    variant="secondary"
                    className="bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300"
                  >
                    {type}
                  </Badge>
                </motion.div>
                <motion.h3
                  layoutId={`title-${id}`}
                  className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-500 transition-colors line-clamp-2"
                >
                  {title}
                </motion.h3>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

