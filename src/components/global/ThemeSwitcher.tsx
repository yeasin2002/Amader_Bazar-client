"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import type { HTMLAttributes } from "react"

import { cn } from "@/lib"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui"

interface ThemeSwitcherProps extends React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string
  iconsStyle?: string
}

export const ThemeSwitcherLegacy = ({ className, iconsStyle, ...rest }: ThemeSwitcherProps) => {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    <div
      {...rest}
      className={cn("flex    cursor-pointer items-start justify-center rounded-full bg-blue-950     ", className)}
      onClick={() => {
        resolvedTheme === "light" ? setTheme("dark") : setTheme("light")
      }}>
      {resolvedTheme === "light" ? (
        <Sun className={cn("navIcons text-white", iconsStyle)} />
      ) : (
        <Moon className={cn("navIcons text-white", iconsStyle)} />
      )}
    </div>
  )
}

export const ThemeSwitcher = ({ children, ...rest }: { children?: React.ReactNode }) => {
  const { setTheme, resolvedTheme } = useTheme()
  return (
    <Popover>
      <PopoverTrigger {...rest}>
        {children || (resolvedTheme === "light" ? <Sun className="navIcons" /> : <Moon className="navIcons " />)}
      </PopoverTrigger>
      <PopoverContent className="w-36  p-0">
        <button
          type="button"
          className=" flex  h-full w-full cursor-pointer items-center gap-x-1 px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-800 "
          aria-label="Switch to light theme"
          onClick={() => setTheme("light")}>
          <Sun className=" navIcons" />
          <p>Light</p>
        </button>

        <button
          type="button"
          className=" flex  h-full w-full cursor-pointer items-center gap-x-1 px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-800 "
          aria-label="Switch to dark theme"
          onClick={() => setTheme("dark")}>
          <Moon className=" navIcons" />
          <p>Dark</p>
        </button>
      </PopoverContent>
    </Popover>
  )
}
