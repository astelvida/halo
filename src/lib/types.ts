import * as React from 'react'

export interface ReactProps {
  children?: React.ReactNode // best, accepts everything (see edge case below)
  functionChildren?: (name: string) => React.ReactNode // recommended function as a child render prop type
  style?: React.CSSProperties // to pass through style props
  onChange?: React.FormEventHandler<HTMLInputElement> // form events! the generic parameter is the type of event.target
  //  more info: https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/#wrappingmirroring
  // props: Props & React.ComponentPropsWithoutRef<"button">; // to impersonate all the props of a button element and explicitly not forwarding its ref
  // props2: Props & React.ComponentPropsWithRef<MyButtonWithForwardRef>; // to impersonate all the props of MyButtonForwardedRef and explicitly forwarding its ref
}
