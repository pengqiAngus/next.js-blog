"use client";

import { useState } from "react";
import { algoliasearch } from "algoliasearch";
import { InstantSearch, SearchBox, Hits, useSearchBox } from "react-instantsearch";
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

const CustomSearchBox = ({ onFocus, onBlur }: { onFocus: () => void; onBlur: () => void }) => {
  const { t } = useTranslation();
  const { query, isSearchStalled } = useSearchBox();

  return (
    <SearchBox
      placeholder={t("header.search")}
      onFocus={onFocus}
      onBlur={onBlur}
      className={`[&_.ais-SearchBox-submit]:absolute [&_.ais-SearchBox-submit]:right-3 [&_.ais-SearchBox-submit]:top-1/2
         [&_.ais-SearchBox-submit]:-translate-y-1/2 [&_.ais-SearchBox-submit]:text-gray-700
         [&_.ais-SearchBox-submit]:dark:text-white [&_.ais-SearchBox-submit_svg]:w-4 [&_.ais-SearchBox-submit_svg]:h-5
         [&_.ais-SearchBox-reset]:absolute [&_.ais-SearchBox-reset]:right-3
         [&_.ais-SearchBox-reset]:top-1/2 [&_.ais-SearchBox-reset]:-translate-y-1/2 [&_.ais-SearchBox-reset]:text-gray-700
         [&_.ais-SearchBox-reset]:dark:text-white [&_.ais-SearchBox-loadingIndicator]:absolute [&_.ais-SearchBox-loadingIndicator]:right-3
         [&_.ais-SearchBox-loadingIndicator]:top-1/2 [&_.ais-SearchBox-loadingIndicator]:-translate-y-1/2 [&_.ais-SearchBox-loadingIndicator]:text-gray-700
         [&_.ais-SearchBox-loadingIndicator]:dark:text-white [&_.ais-SearchBox-form]:relative [&_.ais-SearchBox-input]:w-full
         [&_.ais-SearchBox-input]:px-4 [&_.ais-SearchBox-input]:py-2 [&_.ais-SearchBox-input]:rounded-lg
         [&_.ais-SearchBox-input]:bg-gray-100 [&_.ais-SearchBox-input]:dark:bg-gray-800 [&_.ais-SearchBox-input]:text-gray-700
         [&_.ais-SearchBox-input]:dark:text-gray-200 [&_.ais-SearchBox-input]:focus-visible:outline-none [&_.ais-SearchBox-input]: border-none
         hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 [&_.ais-SearchBox-input::-webkit-search-cancel-button]:hidden
         ${isSearchStalled ? '[&_.ais-SearchBox-submit]:hidden [&_.ais-SearchBox-reset]:hidden' :
           query ? '[&_.ais-SearchBox-submit]:hidden [&_.ais-SearchBox-loadingIndicator]:hidden' : 
           '[&_.ais-SearchBox-reset]:hidden [&_.ais-SearchBox-loadingIndicator]:hidden'}`}
    />
  );
};

export function AlgoliaSearch() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <InstantSearch
        searchClient={searchClient}
        indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || "posts"}
      >
        <CustomSearchBox onFocus={() => setIsOpen(true)} onBlur={() => setTimeout(() => setIsOpen(false), 200)} />
        {isOpen && (
          <div className="absolute left-0 mt-2 w-96 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-50 border border-gray-200 dark:border-gray-700">
            <div className="max-h-[400px] overflow-y-auto">
              <Hits hitComponent={Hit} />
            </div>
          </div>
        )}
      </InstantSearch>
    </div>
  );
} 