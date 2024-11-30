import React from 'react'
import { StyledLoader } from './styledComponents/StyledLoader'

export type LoaderVariant = 'circle' | 'bar'

export interface LoaderProps {
  color?: string
  variant: LoaderVariant
  loadingSpeed?: number
}

export const Loader = ({ color, variant, loadingSpeed }: LoaderProps) => {
  const bar = variant === 'bar'
  const circle = variant === 'circle'

  return <StyledLoader color={color} bar={bar} circle={circle} loadingSpeed={loadingSpeed} />
}

export default Loader
