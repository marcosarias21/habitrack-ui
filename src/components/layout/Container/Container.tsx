import React from 'react'

const Container = ({ children }: React.PropsWithChildren) => {
  return <section className="grid h-dvh grid-cols-12 gap-4">{children}</section>
}

export default Container
