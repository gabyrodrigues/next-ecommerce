"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search as SearchIcon } from "@styled-icons/material-outlined";

import { TextField, TextFieldProps } from "@/components/TextField";
import { useDebounce } from "@/utils/useDebounce";

export interface SearchProps extends TextFieldProps {}
const Search = React.forwardRef<HTMLInputElement, SearchProps>((props, ref) => {
  const searchParams = useSearchParams();
  const pathname = "/search";
  const router = useRouter();

  const handleSearch = useDebounce((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    router.replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <TextField
      className="w-full"
      placeholder="Busque um produto"
      icon={<SearchIcon />}
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      ref={ref}
      defaultValue={searchParams.get("query")?.toString()}
      {...props}
    />
  );
});
Search.displayName = "Search";

export { Search };
