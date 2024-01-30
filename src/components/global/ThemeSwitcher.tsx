"use client"

import { DarkMoon, LightSun } from "@/components/icon/ThemeIcons"
import { cn } from "@/lib"
import { useTheme } from "next-themes"
import Image from "next/image"
import { HTMLAttributes, useEffect, useState } from "react"
interface ThemeSwitcherProps extends React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string
}

export function ThemeSwitch(props: ThemeSwitcherProps) {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()
  useEffect(() => setMounted(true), [])

  // if (!mounted)
  //   return (
  //     <Image
  //       src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
  //       width={36}
  //       height={36}
  //       sizes="36x36"
  //       alt="Loading Light/Dark Toggle"
  //       priority={false}
  //       title="Loading Light/Dark Toggle"
  //     />
  //   )

  // if (resolvedTheme === "dark") {
  //   return <LightSun onClick={() => setTheme("light")} {...props} />
  // }

  // if (resolvedTheme === "light") {
  //   return <DarkMoon onClick={() => setTheme("dark")} {...props} />
  // }
  return (
    <div {...props} className={cn(props.className)}>
      {!mounted && (
        <Image
          src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
          width={36}
          height={36}
          sizes="36x36"
          alt="Loading Light/Dark Toggle"
          priority={false}
          title="Loading Light/Dark Toggle"
        />
      )}
      {resolvedTheme === "light" ? (
        <LightSun onClick={() => setTheme("dark")} />
      ) : (
        <DarkMoon onClick={() => setTheme("light")} />
      )}
    </div>
  )
}

export const ThemeSwitcher = ({ ...rest }: ThemeSwitcherProps) => {
  return (
    <div
      {...rest}
      className="flex size-10  items-start justify-center rounded-full bg-slate-950 p-2 dark:bg-slate-50  ">
      <ThemeSwitch />
    </div>
  )
}
