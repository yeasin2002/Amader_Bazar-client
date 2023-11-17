import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import App from "./App.tsx"
import { AuthProvider } from "./context"
import "./index.css"
const queryClient = new QueryClient()

//? clerk Authentication
import { clerkPubKey } from "$lib"
import { ClerkProvider } from "@clerk/clerk-react"
import { toast } from "sonner"
if (!clerkPubKey) {
  console.log("Missing Publishable Key")
  toast.error("Missing Publishable Key")
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
)
