interface IHeadingProperties {
  children: any
  additionalClasses?: string
}

export const Heading = (properties: IHeadingProperties) => {
  const { children, additionalClasses } = properties

  return <h1 className={`font-light text-[2.5rem] ${additionalClasses}`}>{children}</h1>
}
