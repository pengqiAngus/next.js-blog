"use client";

import { useState } from "react";
import { algoliasearch } from "algoliasearch";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AlgoliaPost } from "@/data/posts";
const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || "",
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY || ""
);

const Hit = ({ hit }: { hit: AlgoliaPost }) => (
  <Link href={hit.type + "/" + hit.slug || "/"} className="block">
    <div className="hit-item p-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 cursor-pointer">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {hit.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        {hit.description}
      </p>
    </div>
  </Link>
);

export function AlgoliaSearch() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        {t("header.search")}
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-96 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-50 border border-gray-200 dark:border-gray-700">
          <InstantSearch 
            searchClient={searchClient} 
            indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || "posts"}
          >
            <SearchBox
              placeholder={t("header.searchPlaceholder")}
              className="mb-4 [&_.ais-SearchBox-form]:relative [&_.ais-SearchBox-input]:w-full [&_.ais-SearchBox-input]:px-4 [&_.ais-SearchBox-input]:py-2 [&_.ais-SearchBox-input]:rounded-lg [&_.ais-SearchBox-input]:border [&_.ais-SearchBox-input]:border-gray-300 [&_.ais-SearchBox-input]:dark:border-gray-600 [&_.ais-SearchBox-input]:bg-white [&_.ais-SearchBox-input]:dark:bg-gray-700 [&_.ais-SearchBox-input]:text-gray-900 [&_.ais-SearchBox-input]:dark:text-white [&_.ais-SearchBox-input]:focus:outline-none [&_.ais-SearchBox-input]:focus:ring-2 [&_.ais-SearchBox-input]:focus:ring-blue-500 [&_.ais-SearchBox-input]:dark:focus:ring-blue-400"
            />
            <div className="max-h-[400px] overflow-y-auto">
              <Hits hitComponent={Hit} />
            </div>
          </InstantSearch>
        </div>
      )}
    </div>
  );
} 