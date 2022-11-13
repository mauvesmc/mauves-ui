import { Component, mergeProps, splitProps } from "solid-js"
import { ThemeTypographyVariant } from "../../types/theme"
import { Box, BoxProps } from "../Box"

export type TypographyProps = BoxProps & {
  variant?: ThemeTypographyVariant
}

export const Typography: Component<TypographyProps> = (rawProps) => {
  const mergedProps = mergeProps({ as: "p", variant: "bodyLarge" }, rawProps)
  const [props, rest] = splitProps(mergedProps, ["variant"])

  return (
    <Box
      {...rest}
      sx={(theme) => ({
        fontFamily: theme.typography[props.variant].family,
        fontSize: `${theme.typography[props.variant].fontSize}px`,
        lineHeight: `${theme.typography[props.variant].lineHeight}px`,
        letterSpacing: `${theme.typography[props.variant].letterSpacing}px`,
        fontWeight: theme.typography[props.variant].weight,
      })}
    />
  )
}
