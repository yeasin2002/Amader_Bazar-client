"use client"

import { AuthProvider } from "@/context"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "sonner"

interface Props {
  children: React.ReactNode
}

export const Provider = ({ children }: Props) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {children}
        <Toaster richColors />
      </AuthProvider>
    </QueryClientProvider>
  )
}
