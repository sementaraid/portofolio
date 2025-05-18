const AboutMe = async () => {
  const { default: AboutMe } = await import(`@/directories/introduction/introduction.mdx`)
  return (
    <AboutMe />
  )
};

export default AboutMe;