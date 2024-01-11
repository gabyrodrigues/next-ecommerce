"use client";
import React, { KeyboardEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search as SearchIcon } from "@styled-icons/material-outlined";

import { TextField, TextFieldProps } from "@/components/TextField";

export interface SearchProps extends TextFieldProps {}
const Search = React.forwardRef<HTMLInputElement, SearchProps>((props, ref) => {
  const searchParams = useSearchParams();
  const pathname = "/search";
  const router = useRouter();

  const [term, setTerm] = useState("");

  function handleSearch() {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    router.replace(`${pathname}?${params.toString()}`);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  }

  return (
    <TextField
      className="w-full"
      placeholder="Busque um produto"
      icon={<SearchIcon />}
      onChange={(event) => setTerm(event.target.value)}
      onKeyDown={handleKeyDown}
      ref={ref}
      defaultValue={searchParams.get("query")?.toString()}
      {...props}
    />
  );
});
Search.displayName = "Search";

export { Search };
