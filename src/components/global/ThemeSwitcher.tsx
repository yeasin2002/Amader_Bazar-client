"use client"
import { useTheme } from "next-themes"
import { Fragment, type HTMLAttributes } from "react"

import { DarkMoon, LightSun } from "@/components/icon/ThemeIcons"
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
        <LightSun className={cn("text-white", iconsStyle)} />
      ) : (
        <DarkMoon className={cn("text-white", iconsStyle)} />
      )}
    </div>
  )
}

export const ThemeSwitcher = ({ children, ...rest }: { children?: React.ReactNode }) => {
  const { setTheme, resolvedTheme } = useTheme()
  return (
    <Popover>
      <PopoverTrigger {...rest}>
        {children ||
          (resolvedTheme === "light" ? <LightSun className="navIcons" /> : <DarkMoon className="navIcons " />)}
      </PopoverTrigger>
      <PopoverContent className="w-36  p-0">
        <button
          type="button"
          className=" flex  h-full w-full cursor-pointer items-center gap-x-1 px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-800 "
          aria-label="Switch to light theme"
          onClick={() => setTheme("light")}>
          <LightSun className=" navIcons" />
          <p>Light</p>
        </button>

        <button
          type="button"
          className=" flex  h-full w-full cursor-pointer items-center gap-x-1 px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-800 "
          aria-label="Switch to dark theme"
          onClick={() => setTheme("dark")}>
          <DarkMoon className=" navIcons" />
          <p>Dark</p>
        </button>
      </PopoverContent>
    </Popover>
  )
}
