import type { ReactNode } from 'react'

export interface ButtonProps {
  /**
   * If `true`, the button will replace text content with a spinner.
   */
  isLoading?: boolean

  /**
   * If `true`, the button will become disabled.
   */
  isDisabled?: boolean

  /**
   * HTML Button type.
   */
  type?: 'button' | 'reset' | 'submit'

  /**
   * Button text.
   */
  children: ReactNode

  /**
   * Extra class names.
   */
  className?: string

  /**
   * Event handler to execute when button is clicked.
   */
  onClick?: () => void
}

export const Button = ({
  isLoading = false,
  isDisabled = false,
  type = 'button',
  children,
  className,
  onClick,
  ...props
}: ButtonProps) => {
  const buttonContent: ReactNode = isLoading ? (
    <span className="flex space-x-2">
      <span>Loading...</span>
    </span>
  ) : (
    children
  )

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`${className} inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400 disabled:cursor-not-allowed`}
      onClick={onClick}
      {...props}
    >
      {buttonContent}
    </button>
  )
}
