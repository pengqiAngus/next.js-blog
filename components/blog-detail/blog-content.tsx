import { CodeBlock } from "@/components/blog-detail/code-block"

export function BlogContent() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <p className="lead">
        Implementing smooth scrolling in Next.js can greatly enhance the user experience of your web application. In
        this tutorial, we'll explore how to use Lenis and GSAP to create buttery-smooth scrolling effects.
      </p>

      <h2>Why Smooth Scrolling?</h2>
      <p>
        Smooth scrolling provides a more polished and professional feel to your website. Instead of the default jumping
        behavior, content glides into view, creating a more engaging experience for your users.
      </p>

      <div className="aspect-video w-full my-8">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Video tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <h2>Setting Up Lenis</h2>
      <p>First, let's install the required dependencies:</p>

      <CodeBlock code={`npm install @studio-freight/lenis gsap`} language="bash" />

      <p>Then, create a smooth scroll component:</p>

      <CodeBlock
        code={`import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    gsap.registerPlugin(ScrollTrigger)
    
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    
    return () => {
      lenis.destroy()
    }
  }, [])
}`}
        language="typescript"
      />

      <h2>Implementation Steps</h2>
      <ol>
        <li>Install the required packages</li>
        <li>Create a smooth scroll hook</li>
        <li>Configure Lenis options</li>
        <li>Integrate with GSAP</li>
        <li>Add to your layout</li>
      </ol>

      <p>
        Once you've set up the smooth scroll component, you can start adding scroll-triggered animations using GSAP's
        ScrollTrigger plugin.
      </p>
    </div>
  )
}

