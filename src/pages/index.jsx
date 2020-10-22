import { Container } from "react-bootstrap"
import classNames from "classnames"
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
      <Container fluid>
        <main className={classNames("my-4", "py-5")}>
          <PreviewList />
        </main>
      </Container>
    </Layout>
  )
}
