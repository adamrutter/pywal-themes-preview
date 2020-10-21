import classNames from "classnames"
import Grid from "../components/Grid"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import React from "react"
import PreviewList from "../components/PreviewList"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO />
      <Hero />
      <Grid>
        <main className={classNames("my-4", "py-5")}>
          <PreviewList />
        </main>
      </Grid>
    </Layout>
  )
}
