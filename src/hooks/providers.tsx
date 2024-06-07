"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { type PropsWithChildren } from "react";
import { QuestionContextProvider } from "./question-context";
import { ThemeProvider } from "next-themes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  },
});

export const Providers = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class">
      <QuestionContextProvider>{children}</QuestionContextProvider>
    </ThemeProvider>
  </QueryClientProvider>
);
