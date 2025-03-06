import { Post } from "./index";
const reactPosts: Post[] = [
  {
    slug: "adaptive-ui-in-react-constructing-self-configuring-and-context-aware-components-1e7n",
    originalURL:
      "https://dev.to/raajaryan/adaptive-ui-in-react-constructing-self-configuring-and-context-aware-components-1e7n",
    image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fsstlqmn41ro9i6tksp9j.png",
    type: "react",
    title:
      "Adaptive UI in React: Constructing Self-Configuring and Context-Aware Components",
    description:
      "Learn how to build adaptive, self-configuring React components that respond to user behavior, device constraints, and context for an enhanced user experience.",
    popular: false,
    createdTime: "2025-02-25",
    author: "Deepak Kumar",
    content: `
      <div class="prose dark:prose-invert max-w-none text-gray-900 dark:text-white tracking-wide leading-relaxed">
        <h2 class="text-2xl font-bold mt-8 mb-4">Introduction</h2>
        <p class="mb-6">The contemporary web landscape necessitates interfaces that seamlessly adapt to varying user behaviors, device constraints, and environmental conditions. <strong class="font-bold">Adaptive User Interfaces (UIs)</strong> are pivotal in ensuring a dynamic, personalized, and context-aware user experience. This article delves into methodologies for architecting <strong class="font-bold">self-configuring React components</strong>, leveraging state management, contextual awareness, and user interaction patterns to dynamically modify UI behavior in real-time.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">The Imperative for Adaptive UIs</h2>
        <h3 class="text-xl font-semibold mt-6 mb-2">1. <strong>Enhanced User Experience Through Personalization</strong></h3>
        <p class="mb-6">A user interface that dynamically tailors itself to individual preferences and past interactions fosters a more intuitive and engaging experience. Leveraging adaptive mechanisms, applications can adjust layouts, content structures, and interaction models for optimal usability.</p>

        <h3 class="text-xl font-semibold mt-6 mb-2">2. <strong>Inclusivity and Accessibility Compliance</strong></h3>
        <p class="mb-6">Adaptive UIs promote accessibility by accommodating diverse user needs, including varying screen sizes, input modalities, and assistive technology requirements. Features such as <strong class="font-bold">high-contrast themes, text magnification, and keyboard navigation enhancements</strong> can be automatically enabled based on user settings.</p>

        <h3 class="text-xl font-semibold mt-6 mb-2">3. <strong>Performance Efficiency and Load Optimization</strong></h3>
        <p class="mb-6">By rendering only essential elements in response to real-time conditions, adaptive UIs mitigate unnecessary computational overhead and bandwidth consumption, enhancing performance across devices.</p>

        <h3 class="text-xl font-semibold mt-6 mb-2">4. <strong>Multi-Device Cohesion and Seamless Transitioning</strong></h3>
        <p class="mb-6">Given the prevalence of cross-device interactions, adaptive UIs facilitate a <strong class="font-bold">fluid transition between desktop, tablet, and mobile interfaces</strong>, preserving state consistency and usability.</p>

        <h3 class="text-xl font-semibold mt-6 mb-2">5. <strong>Context-Aware Adaptations</strong></h3>
        <p class="mb-6">By leveraging <strong class="font-bold">media queries, system preferences, and environmental parameters</strong>, adaptive components can respond dynamically to factors such as dark/light mode, reduced motion settings, and network bandwidth constraints.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Foundational Principles of Adaptive UI Design</h2>
        <h3 class="text-xl font-semibold mt-6 mb-2">1. <strong>Dynamic State Management</strong></h3>
        <p class="mb-6">Utilizing React’s <code class="bg-gray-200 dark:text-black px-1 py-0.5 rounded font-mono text-sm">useState</code> and <code class="bg-gray-200 dark:text-black px-1 py-0.5 rounded font-mono text-sm">useEffect</code> hooks enables real-time UI adjustments based on user interactions, fostering a responsive and dynamic experience.</p>

        <h3 class="text-xl font-semibold mt-6 mb-2">2. <strong>Global Context Awareness via Context API</strong></h3>
        <p class="mb-6">Employing the <strong class="font-bold">Context API</strong> allows for centralized state management, ensuring seamless UI adaptations across multiple components while circumventing prop drilling.</p>

        <h3 class="text-xl font-semibold mt-6 mb-2">3. <strong>Screen and Device Responsiveness</strong></h3>
        <p class="mb-6">Through <strong class="font-bold">media queries, viewport detection, and external libraries (e.g., <code class="bg-gray-200 dark:text-black px-1 py-0.5 rounded font-mono text-sm">react-device-detect</code>)</strong>, components can intelligently restructure content presentation based on screen resolution and device type.</p>

        <h3 class="text-xl font-semibold mt-6 mb-2">4. <strong>User Interaction-Driven Adaptation</strong></h3>
        <p class="mb-6">By analyzing user behaviors such as <strong class="font-bold">scrolling patterns, click frequency, and input device usage</strong>, UIs can evolve dynamically, refining interactivity and usability over time.</p>

        <h3 class="text-xl font-semibold mt-6 mb-2">5. <strong>Thematic and Visual Customization</strong></h3>
        <p class="mb-6">Adaptive components can respect system-wide or user-defined preferences, modifying themes, layouts, and accessibility settings accordingly.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Practical Implementation of Adaptive Components</h2>
        <h3 class="text-xl font-semibold mt-6 mb-2"><strong>1. Real-Time Screen Size Detection</strong></h3>
        <p class="mb-6">Leverage React hooks to dynamically adjust UI components based on viewport dimensions.</p>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto"><code class="text-sm text-gray-800 dark:text-gray-200 font-mono">import React, { useState, useEffect } from 'react';

const AdaptiveComponent = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    &lt;div style={{ padding: '20px', textAlign: 'center' }}&gt;
      {screenSize > 768 ? (
        &lt;h1&gt;Welcome to the Desktop Interface&lt;/h1&gt;
      ) : (
        &lt;h2&gt;Optimized for Mobile Viewing&lt;/h2&gt;
      )}
    &lt;/div&gt;
  );
};

export default AdaptiveComponent;</code></pre>

        <h3 class="text-xl font-semibold mt-6 mb-2"><strong>2. Behavioral Adaptation via User Interaction</strong></h3>
        <p class="mb-6">Modify UI elements based on user engagement patterns.</p>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto"><code class="text-sm text-gray-800 dark:text-gray-200 font-mono">const AdaptiveButton = () => {
  const [clickCount, setClickCount] = useState(0);

  return (
    &lt;button
      onClick={() => setClickCount(clickCount + 1)}
      style={{
        backgroundColor: clickCount > 5 ? 'red' : 'blue',
        color: 'white',
        padding: '10px',
        fontSize: '16px',
      }}
    &gt;
      {clickCount > 5 ? 'Limit Reached' : 'Click Me'}
    &lt;/button&gt;
  );
};</code></pre>

        <h3 class="text-xl font-semibold mt-6 mb-2"><strong>3. Context-Driven UI Personalization</strong></h3>
        <p class="mb-6">Employ <strong class="font-bold">React Context API</strong> for persistent global state management.</p>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto"><code class="text-sm text-gray-800 dark:text-gray-200 font-mono">import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    &lt;ThemeContext.Provider value={{ theme, setTheme }}&gt;
      {children}
    &lt;/ThemeContext.Provider&gt;
  );
};

const ThemedComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    &lt;div style={{
      backgroundColor: theme === 'light' ? 'white' : 'black',
      color: theme === 'light' ? 'black' : 'white',
      padding: '20px',
    }}&gt;
      &lt;p&gt;Active Theme: {theme}&lt;/p&gt;
      &lt;button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}&gt;
        Toggle Theme
      &lt;/button&gt;
    &lt;/div&gt;
  );
};

const App = () => (
  &lt;ThemeProvider&gt;
    &lt;ThemedComponent /&gt;
  &lt;/ThemeProvider&gt;
);

export default App;</code></pre>

        <h3 class="text-xl font-semibold mt-6 mb-2"><strong>4. Performance Optimization via Lazy Loading</strong></h3>
        <p class="mb-6">Efficiently manage resource allocation by dynamically loading components only when required.</p>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto"><code class="text-sm text-gray-800 dark:text-gray-200 font-mono">import React, { Suspense, lazy } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

const App = () => {
  return (
    &lt;Suspense fallback=&lt;p&gt;Loading...&lt;/p&gt;&gt;
      &lt;HeavyComponent /&gt;
    &lt;/Suspense&gt;
  );
};

export default App;</code></pre>

        <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
        <p class="mb-6">By synthesizing <strong class="font-bold">screen responsiveness, interaction-driven adaptations, context-aware theming, and performance optimizations</strong>, developers can construct React applications that dynamically self-configure to enhance user experience.</p>

        <h3 class="text-xl font-semibold mt-6 mb-2">🔥 Key Considerations:</h3>
        <p class="mb-6">
          ✅ <strong class="font-bold">Leverage hooks (<code class="bg-gray-200 dark:text-black px-1 py-0.5 rounded font-mono text-sm">useState</code>, <code class="bg-gray-200 dark:text-black px-1 py-0.5 rounded font-mono text-sm">useEffect</code>)</strong> to monitor UI states dynamically.<br>
          ✅ <strong class="font-bold">Implement Context API</strong> for global adaptability.<br>
          ✅ <strong class="font-bold">Utilize system preferences</strong> for accessibility and theming adjustments.<br>
          ✅ <strong class="font-bold">Enhance efficiency with lazy loading techniques.</strong><br>
          ✅ <strong class="font-bold">Adopt a holistic strategy</strong> combining multiple adaptation mechanisms.
        </p>
        <p class="mb-6">Through these advanced methodologies, React developers can craft <strong class="font-bold">highly intelligent, resilient, and user-centric adaptive UIs</strong> that significantly elevate the digital experience. 🚀</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">📚 Explore More at TheCampusCoders</h2>
        <p class="mb-6">
          🔥 <strong><a href="https://www.thecampuscoders.com/blogs/ultimate-js-project-500-ideas" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">The Ultimate JavaScript Project Repository: 500+ Ideas for Developers</a></strong> – <strong class="font-bold">61,932 views</strong><br><br>
          🔥 <strong><a href="https://www.thecampuscoders.com/blogs/10-best-node-js-applications" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">10 Best Practices for Writing Scalable Node.js Applications</a></strong> – <strong class="font-bold">6,398 views</strong><br><br>
          🔥 <strong><a href="https://www.thecampuscoders.com/blogs/web-development-in-2025" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">Web Development in 2025: Are You Ready for the Future?</a></strong><br><br>
          🔥 <strong><a href="https://www.thecampuscoders.com/blogs/faang-interview-in-90-days" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">FAANG Interview Roadmap: How to Prepare in 90 Days</a></strong><br><br>
          🔥 <strong><a href="https://www.thecampuscoders.com/blogs/mastering-react-beginners-guide" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">Mastering React: A Beginner’s Guide</a></strong>
        </p>
        <p class="mb-6">For more in-depth content, visit <strong><a href="https://www.thecampuscoders.com/blogs/" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">The Campus Coders Blog</a>!</strong></p>
      </div>
    `,
  },
  {
    slug: "nextjs-can-we-make-an-intercepting-route-behave-like-isr-3e35",
    originalURL:
      "https://dev.to/mariahello/nextjs-can-we-make-an-intercepting-route-behave-like-isr-3e35",
    image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fh71gdxju441ph52aevjf.png",
    type: "react",
    title: "Next.js — Can we make an Intercepting Route behave like ISR?",
    description:
      "Explore whether Next.js Intercepting Routes can mimic Incremental Static Regeneration (ISR) behavior using caching strategies.",
    popular: false,
    createdTime: "2025-02-25",
    author: "Maria Kim",
    content: `
      <div class="prose dark:prose-invert max-w-none text-gray-900 dark:text-white tracking-wide leading-relaxed">
        <p class="mb-6"><img src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Frpq2s8mgjtcdguhrt1gf.png" alt="Next.js" class="w-full max-w-md mx-auto rounded-lg" loading="lazy" /></p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Definitions</h2>
        
        <h3 class="text-xl font-semibold mt-6 mb-2">What is Incremental Static Regeneration</h3>
        <p class="mb-6">
          • Closely related to <strong class="font-bold">SSG</strong> and pages that are revalidated either at build time or at runtime.<br>
          • Lets you update static content without having to rebuild your entire site.<br>
          • Reduces server load by serving most requests with pre-rendered static pages.<br>
          • Automatically applies proper cache-control headers to pages.<br>
          • The value specified in revalidate will automatically be applied to any fetch calls in the page as the cache-control revalidate value.<br>
          • ⚠️ <strong class="font-bold">However, if you set fetch to use the force-cache option, the automatic setting is ignored.</strong> In that case, you need to manually specify the revalidate option.<br>
          • Lets you handle large numbers of pages without incurring a long next build time.<br>
          • If you add generateStaticParams, then dynamicParams is automatically set to true.<br>
          • During the build, only the pages for parameters defined in generateStaticParams are generated.<br>
          • If a request comes in at runtime with a parameter that wasn't included in generateStaticParams, the page will be generated at that time and revalidation will be applied.
        </p>
        <p class="mb-6">🔗 <strong class="font-bold">References:</strong></p>
        <ul class="list-disc pl-6 mb-6">
          <li><a href="https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">Next.js Docs - ISR</a></li>
          <li><a href="https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">Next.js Docs - revalidate</a></li>
          <li><a href="https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamicparams" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">Next.js Docs - dynamicParams</a></li>
        </ul>

        <h3 class="text-xl font-semibold mt-6 mb-2">What are Intercepting Routes?</h3>
        <p class="mb-6">
          • Designed to dynamically load content.<br>
          • Allows you to show new content without leaving the current layout or navigating to a different route.<br>
          • Because of that, <strong class="font-bold">Intercepting Routes cannot be used with ISR</strong>.
        </p>
        <p class="mb-6">🔗 <strong class="font-bold">Reference:</strong></p>
        <ul class="list-disc pl-6 mb-6">
          <li><a href="https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">Next.js Docs - Intercepting Routes</a></li>
        </ul>

        <hr class="my-8 border-gray-300 dark:border-gray-700" />

        <h2 class="text-2xl font-bold mt-8 mb-4">How Does Next.js Handle Caching?</h2>
        <h3 class="text-xl font-semibold mt-6 mb-2">Caching Types</h3>
        <p class="mb-6"><img src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Faeqsnwczwufyjpn1dxie.png" alt="Next.js cache" class="w-full max-w-2xl mx-auto rounded-lg" loading="lazy" /></p>
        <p class="mb-6"><img src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ffcxgrb6mbidcus9touz7.png" alt="Next.js cache" class="w-full max-w-2xl mx-auto rounded-lg" loading="lazy" /></p>
        <p class="mb-6">Next.js has different caching layers:</p>
        <p class="mb-6">
          • Persistent (but revalidatable) server-based caches include the <strong class="font-bold">Full Route Cache</strong> and the <strong class="font-bold">Data Cache</strong>.<br>
          • However, the <strong class="font-bold">Full Route Cache</strong> requires storing HTML and RSC payloads. That means it is generally used when an actual route can be cached, like with SSG or ISR.<br>
          • So if you want to cache responses in a way similar to SSG/ISR (for incoming requests), your only option is the <strong class="font-bold">Data Cache</strong>.
        </p>
        <p class="mb-6">🔗 <strong class="font-bold">Reference:</strong></p>
        <ul class="list-disc pl-6 mb-6">
          <li><a href="https://nextjs.org/docs/app/building-your-application/caching#data-cache" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">Next.js Docs - Caching</a></li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">The Question</h2>
        <p class="mb-6">
          <strong class="font-bold">Can we make an Intercepting Route behave like ISR?</strong><br>
          • <strong class="font-bold">Is it possible to use ISR for Intercepting Routes?</strong><br>
          As noted above, Intercepting Routes only alter the address within the current layout rather than serving an entirely separate page route. Therefore, they <strong class="font-bold">cannot</strong> be cached as an ISR page.
        </p>
        <p class="mb-6">
          <strong class="font-bold">• What does "behave like ISR" really mean?<br>In many cases, it means:</strong>
        </p>
        <ol class="list-decimal pl-6 mb-6">
          <li>Caching data as much as possible.</li>
          <li>Using the latest data after a specified interval.<br>Let's look into how we can address these requirements.</li>
        </ol>

        <h3 class="text-xl font-semibold mt-6 mb-2">The Core Issues to Solve</h3>
        <h4 class="text-lg font-semibold mt-4 mb-2">1. Caching data as much as possible</h4>
        <p class="mb-6">Revisiting the available caches in Next.js, we can categorize them by storage location and lifespan:</p>
        <p class="mb-6">
          <strong class="font-bold">1. Server + Persistent (revalidatable)</strong><br>
          • Full Route Cache<br>
          • Data Cache
        </p>
        <p class="mb-6">
          <strong class="font-bold">2. Server + Within a single request</strong><br>
          • Request Memoization
        </p>
        <p class="mb-6">
          <strong class="font-bold">3. Client-Side</strong><br>
          • Router Cache
        </p>
        <p class="mb-6">The caches that live on the server and can persist across multiple requests are <strong class="font-bold">Full Route Cache and Data Cache</strong>. However, because Full Route Cache stores the HTML/RSC for entire pages (as with SSG/ISR), that option isn't suitable for Intercepting Routes.</p>
        <p class="mb-6">That leaves the <strong class="font-bold">Data Cache</strong> as our tool of choice.</p>

        <h4 class="text-lg font-semibold mt-4 mb-2">2. Using fresh data at a specified interval</h4>
        <p class="mb-6">To leverage Data Cache, you can use the fetch option in Next.js:</p>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto"><code class="text-sm text-gray-800 dark:text-gray-200 font-mono">fetch('url', {
  cache: 'force-cache',
  next: {
    revalidate: 86400, // 1 day in seconds
  },
});</code></pre>
        <p class="mb-6">Here, you set the cache behavior to force-cache, and specify a revalidate interval (in seconds) within the next property. This allows Next.js to revalidate your data cache at the given interval, effectively mimicking the "ISR-like" behavior of periodically refreshing your data - without actually using a separate ISR route.</p>
        <p class="mb-6">🔗 <strong class="font-bold">Reference:</strong></p>
        <ul class="list-disc pl-6 mb-6">
          <li><a href="https://nextjs.org/docs/app/building-your-application/caching#data-cache" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">Next.js Docs - Caching</a></li>
        </ul>

        <hr class="my-8 border-gray-300 dark:border-gray-700" />

        <p class="mb-6">That's how you can approximate ISR-like caching and revalidation for Intercepting Routes. While you can't truly make them into ISR pages, you can still benefit from Next.js's Data Cache to cache and periodically refresh the data used within those routes.</p>
      </div>
    `,
  },
  {
    slug: "using-emotion-in-a-new-project-component-inheritance-vs-single-styled-component-with-props-2o1l",
    originalURL:
      "https://dev.to/mariahello/using-emotion-in-a-new-project-component-inheritance-vs-single-styled-component-with-props-2o1l",
    image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F3da5pmwrzy4ocofgxv7j.png",
    type: "react",
    title:
      "Using Emotion in a New Project: Component Inheritance vs. Single Styled Component with Props",
    description:
      "A comparison of using Emotion for shared React components via inheritance versus props-based styling, highlighting a focus-related bug and recommendations.",
    popular: false,
    createdTime: "2025-02-25",
    author: "Maria Kim",
    content: `
      <div class="prose dark:prose-invert max-w-none text-gray-900 dark:text-white tracking-wide leading-relaxed">
        <p class="mb-6">I was creating shared (common) components using <strong class="font-bold">Emotion</strong> in a new project. As I was considering how best to structure things for cleanliness and scalability, I happened to watch a YouTube video about the <strong class="font-bold">SOLD principle</strong>. That video led me to think that <strong class="font-bold">developing shared components using style inheritance</strong> could be advantageous for future expansion.</p>

        <p class="mb-6">So I changed all my shared components to use <strong class="font-bold">extension (inheritance)</strong>. However, I encountered an unexpected bug in the process. Through this bug, I learned the difference between:</p>

        <ol class="list-decimal pl-6 mb-6">
          <li>Extending (inheriting) components</li>
          <li>Using props-based branching within a single styled component</li>
        </ol>

        <p class="mb-6">And I'd like to share that experience here.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Two Ways to Handle Variations in Components</h2>

        <h3 class="text-xl font-semibold mt-6 mb-2">1. Using Inheritance (Extend)</h3>
        <ol class="list-decimal pl-6 mb-6">
          <li>Create a base styled component.</li>
          <li>For each needed variant, extend that base component and apply different styles.</li>
          <li>If you have many variants, adding new ones is straightforward since it simply involves creating more extended components.</li>
        </ol>

        <h3 class="text-xl font-semibold mt-6 mb-2">2. Using Props-Based Branching in a Single Styled Component</h3>
        <ol class="list-decimal pl-6 mb-6">
          <li>Pass a value like variant as a prop.</li>
          <li>In a single styled component, use conditionals such as switch or ternary operators to apply different styles.</li>
          <li>This approach handles frequently changing props dynamically and immediately.</li>
        </ol>

        <h2 class="text-2xl font-bold mt-8 mb-4">Simple Example Code Comparison</h2>

        <h3 class="text-xl font-semibold mt-6 mb-2">1. Handling Variants with Inheritance</h3>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto"><code class="text-sm text-gray-800 dark:text-gray-200 font-mono">function Button({ variant = "primary", disabled, children }: ButtonProps) {
  const Component = ButtonComponent[variant];
  return <Component disabled={disabled}>{children}</Component>;
}

const StyledButtonBase = styled.button\`
  /* Common styles */
\`;

const PrimaryButton = styled(StyledButtonBase)\`
  background-color: black;
  color: white;
\`;

const DangerButton = styled(StyledButtonBase)\`
  background-color: red;
  color: white;
\`;

const ButtonComponent = {
  primary: PrimaryButton,
  danger: DangerButton
};</code></pre>
        <p class="mb-6">• When a new variant is added, you extend StyledButtonBase again (for example, DangerButton) and can easily keep expanding.</p>

        <h3 class="text-xl font-semibold mt-6 mb-2">2. Handling Variants with Props</h3>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto"><code class="text-sm text-gray-800 dark:text-gray-200 font-mono">function Button({ variant = "primary", disabled, children }: ButtonProps) {
  return (
    <StyledButton variant={variant} disabled={disabled}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<ButtonProps>\`
  /* Common styles */
  background-color: \${(props) => getBackgroundColor(props)};
  color: \${(props) => getColor(props)};
\`;

function getBackgroundColor({ variant, disabled, theme }: ButtonProps & { theme: Theme }) {
  switch (variant) {
    case "primary":
      return blue;
    case "danger":
      return red;
    default:
      return gray;
  }
}

function getColor({ variant, disabled, theme }: ButtonProps & { theme: Theme }) {
  switch (variant) {
    case "primary":
      return white;
    case "danger":
      return white;
    default:
      return black;
  }
}</code></pre>

        <h2 class="text-2xl font-bold mt-8 mb-4">The Problem Scenario</h2>
        <p class="mb-6">Let's say we have an InputContainer component that wraps an input. When the input's value changes (onChange), we perform a validation check. If there's an error, we pass variant='error' to change the border color to red.</p>

        <h3 class="text-xl font-semibold mt-6 mb-2">Inheritance-Based InputContainer</h3>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto"><code class="text-sm text-gray-800 dark:text-gray-200 font-mono">function InputContainer({ variant = "default", children }: InputContainerProps) {
  const Component = InputContainerComponent[variant];
  return <Component>{children}</Component>;
}

const BaseInputContainer = styled.div\`
  border: 1px solid black;
\`;

const ErrorInputContainer = styled(BaseInputContainer)\`
  border-color: red;
\`;

const InputContainerComponent = {
  default: BaseInputContainer,
  error: ErrorInputContainer,
};</code></pre>
        <p class="mb-6">Consider that a re-render takes place. What potential issue could arise here?</p>

        <h3 class="text-xl font-semibold mt-6 mb-2">Props-Based InputContainer</h3>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto"><code class="text-sm text-gray-800 dark:text-gray-200 font-mono">function InputContainer({ variant = "default", children }: InputContainerProps) {
  return (
    <StyledInputContainer variant={variant}>
      {children}
    </StyledInputContainer>
  );
}

const StyledInputContainer = styled.div<{ variant: "default" | "error" }>\`
  border: 1px solid
    \${({ theme, variant }) =>
      variant === "error" ? theme.colors.variants.negative : theme.colors.neutral.gray300};
  /* ... */
\`;</code></pre>
        <p class="mb-6">What differences do you see in how the component is re-rendered?</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">The Bug I Encountered</h2>
        <p class="mb-6">I experienced a bug where <strong class="font-bold">the input's focus would disappear</strong> every time the border color changed.</p>

        <h3 class="text-xl font-semibold mt-6 mb-2">Why Did This Happen?</h3>
        <p class="mb-6">In the inheritance-based approach, changing the variant <strong class="font-bold">creates what is effectively a new component</strong> each time. So when variant changes from "default" to "error", React sees the old component unmount and a new one mount. As a result, the original input element is removed, and a new one is created, causing the <em>loss of focus</em>.</p>
        <p class="mb-6">What about the props-based approach?</p>
        <p class="mb-6">With props, you're still dealing with the <strong class="font-bold">same component</strong>. Only the class or inline styles change. Because the same DOM node persists, the focus doesn't get lost when the border color changes.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Summary</h2>

        <h3 class="text-xl font-semibold mt-6 mb-2">Inheritance-Based InputContainer</h3>
        <p class="mb-6">
          • When the variant changes, a <em>different component</em> is rendered.<br>
          • React may treat it as a completely separate DOM element and re-mount it, depending on the complexity of the structure.<br>
          • If you had an input focused inside, it can lose focus due to re-mount.
        </p>

        <h3 class="text-xl font-semibold mt-6 mb-2">Props-Based InputContainer</h3>
        <p class="mb-6">
          • When the variant changes, the <strong class="font-bold">same component</strong> remains; only the styling changes.<br>
          • The focused input remains intact, preserving the focus.
        </p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion & Recommendations</h2>

        <h3 class="text-xl font-semibold mt-6 mb-2">When Should You Use Inheritance?</h3>
        <p class="mb-6">
          • <strong class="font-bold">When you have many variants</strong> to extend, but <strong class="font-bold">not much dynamic UI change</strong>.<br>
          • For example, a Button component that has many "types" (Primary, Danger, etc.) but not frequent state changes.<br>
          • Inheritance adheres well to the <strong class="font-bold">Open-Closed Principle</strong>, making it easy to add new variants without modifying existing code.
        </p>

        <h3 class="text-xl font-semibold mt-6 mb-2">When Should You Use Props-Based Branching?</h3>
        <p class="mb-6">
          • <strong class="font-bold">When there's a lot of user interaction</strong> and the variant or disabled states change frequently.<br>
          • For example, form inputs that can switch to an error state in real-time.<br>
          • Because the component doesn't unmount and remount, states like focus are maintained.
        </p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Final Summary</h2>
        <p class="mb-6">
          • If the UI changes frequently in real-time, <strong class="font-bold">use a single component and branch styles via props.</strong><br>
          • If dynamic changes are rare but <strong class="font-bold">you need many variations, use inheritance.</strong><br>
          • You can also <strong class="font-bold">mix both approaches:</strong> for example, separate large categories (Primary, Danger, etc.) via inheritance, then handle smaller state changes (hover, disabled) via props.
        </p>
        <p class="mb-6">Ultimately, it's crucial to understand "when the UI changes". I hope this post helps you design shared components with Emotion more effectively!</p>
        <p class="mb-6">Thank you!</p>
      </div>
    `,
  },
  {
    slug: "why-zustand-state-reset-works-instantly-but-react-query-cache-clearing-can-be-tricky",
    originalURL:
      "https://dev.to/mariahello/why-zustand-state-reset-works-instantly-but-react-query-cache-clearing-can-be-tricky-1jf",
    image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fojqu2h3w8rtl3cl3lsdx.png",
    type: "react",
    title:
      "Why Zustand State Reset Works Instantly, But React Query Cache Clearing Can Be Tricky",
    description:
      "Exploring the differences between Zustand state management and React Query cache clearing in React applications",
    popular: true,
    createdTime: "2025-02-25",
    author: "Maria Kim",
    content: `
    <div class="max-w-3xl mx-auto space-y-6 tracking-normal text-gray-900 dark:text-white">
      <img src="https://media2.dev.to/dynamic/image/width=800,height=,fit=scale-down,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ffgljpl2y4j29z7y2x4ku.png" alt="react img" class="w-full rounded-lg" />

      <p class="leading-relaxed text-gray-700 dark:text-white">
        When working with state management and data-fetching libraries in React applications, you might encounter an interesting behavior difference during logout flows or similar global state resets. Specifically, if you use <strong>Zustand</strong> to manage user state and <strong>React Query</strong> to manage server-side data, you might notice that resetting Zustand's state works seamlessly, but clearing React Query's cache sometimes requires extra care. This blog will explain <strong>why this happens</strong> and <strong>how to handle it properly</strong>.
      </p>

      <h2 class="text-2xl font-bold mt-8">A Common Logout Example</h2>
      <p class="text-gray-700 dark:text-white">
        Imagine you have a logout function like this:
      </p>
      <pre class="rounded-lg p-4 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-x-auto">
        <code class="text-sm font-mono text-gray-800 dark:text-gray-200">
const onLogout = async () => {
  await logout(); // logout api
  resetUser(); // Zustand code to clear user state
  queryClient.clear(); // React Query code to clear cache
  router.push('/home'); // Navigate away
};
        </code>
      </pre>
      <p class="text-gray-700 dark:text-white">
        At first glance, this looks fine. However, in practice, you might encounter <strong>inconsistent behavior</strong> with React Query's cache clearing, especially when navigating away (<code>router.push()</code>).
      </p>
      <p class="text-gray-700 dark:text-white">
        You might end up doing something like this instead:
      </p>
      <pre class="rounded-lg p-4 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-x-auto">
        <code class="text-sm font-mono text-gray-800 dark:text-gray-200">
const onLogout = async () => {
  await logout();
  resetUser(); // Zustand state reset
  Promise.resolve().then(() => queryClient.clear()); // React Query cache clear
  router.push('/home');
};
        </code>
      </pre>
      <p class="text-gray-700 dark:text-white">
        Why does deferring the <code>queryClient.clear()</code> call with <code>Promise.resolve()</code> sometimes work better? And why is Zustand's <code>resetUser()</code> always fine?
      </p>

      <h2 class="text-2xl font-bold mt-8">Key Difference: Zustand vs. React Query</h2>
      
      <h3 class="text-xl font-semibold mt-6">🐻 Zustand - Simple Synchronous State Update</h3>
      <p class="text-gray-700 dark:text-white">
        When you call <code>resetUser()</code> in Zustand, it:
      </p>
      <ol class="list-decimal pl-6 text-gray-700 dark:text-white">
        <li>Mutates the store state synchronously.</li>
        <li>Notifies all subscribed components to re-render if necessary.</li>
        <li>Ignores unmounted components since they are no longer subscribed.</li>
      </ol>

      <h3 class="text-xl font-semibold mt-6">🔥 React Query - Cache, Observers, and Side Effects</h3>
      <p class="text-gray-700 dark:text-white">
        When you call <code>queryClient.clear()</code>, it:
      </p>
      <ol class="list-decimal pl-6 text-gray-700 dark:text-white">
        <li>Invalidates and removes query data from the cache.</li>
        <li>Notifies active subscriptions (e.g. components using <code>useQuery()</code> hooks).</li>
        <li>Handles ongoing network requests, retries, and refetches (if applicable).</li>
      </ol>
      <p class="text-gray-700 dark:text-white">
        The key problem is that <strong>if components are in the process of unmounting (e.g., due to <code>router.push()</code>) while <code>queryClient.clear()</code> is running</strong>, you can get into a race condition:
      </p>
      <ul class="list-disc pl-6 text-gray-700 dark:text-white">
        <li>Components might unsubscribe while React Query is still notifying them.</li>
        <li>Ongoing network requests might still resolve after you clear the cache.</li>
        <li>React Query hooks might still trigger updates for unmounted components.</li>
      </ul>

      <h4 class="text-lg font-semibold mt-4">What is a Race Condition?</h4>
      <p class="text-gray-700 dark:text-white">
        A race condition happens when two or more operations happen at the same time, and the final outcome depends on the timing or order of those operations. In this case, clearing the React Query cache and unmounting components due to routing can overlap, leading to unexpected behavior or errors.
      </p>

      <h3 class="text-xl font-semibold mt-6">Why Deferring Works</h3>
      <pre class="rounded-lg p-4 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-x-auto">
        <code class="text-sm font-mono text-gray-800 dark:text-gray-200">
Promise.resolve().then(() => queryClient.clear());
        </code>
      </pre>
      <p class="text-gray-700 dark:text-white">
        You defer the cache clearing to the next microtask. This allows React to:
      </p>
      <ol class="list-decimal pl-6 text-gray-700 dark:text-white">
        <li>Finish unmounting components triggered by <code>router.push()</code>.</li>
        <li>Unsubscribe any React Query observers tied to those components.</li>
        <li>Safely clear the cache afterward, without interfering with ongoing React lifecycle processes.</li>
      </ol>

      <h3 class="text-xl font-semibold mt-6">Why Zustand Is Always Safe</h3>
      <p class="text-gray-700 dark:text-white">
        Zustand's state update is <strong>synchronous</strong> and <strong>not lifecycle-sensitive</strong>:
      </p>
      <ul class="list-disc pl-6 text-gray-700 dark:text-white">
        <li>If you call <code>resetUser()</code> and a component is still mounted, it re-renders.</li>
        <li>If the component is unmounted, it has already unsubscribed, and nothing happens.</li>
        <li>There's <strong>no async behavior or network lifecycle management</strong> to interfere.</li>
      </ul>
      <p class="text-gray-700 dark:text-white">
        Because of this simplicity, you can <strong>reset Zustand state at any time</strong> without worrying about navigation or component lifecycles.
      </p>

      <h2 class="text-2xl font-bold mt-8">Summary Table</h2>
      <img src="https://media2.dev.to/dynamic/image/width=800,height=,fit=scale-down,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Feltwnfzf20wu29k2yrzi.png" alt="summary" class="w-full rounded-lg" />

      <h2 class="text-2xl font-bold mt-8">Final Thoughts</h2>
      <p class="text-gray-700 dark:text-white">
        Understanding <strong>the difference between local synchronous state (Zustand) and asynchronous data-fetching state (React Query)</strong> is crucial when designing logout flows or global state resets. Zustand's simplicity allows for carefree state updates, while React Query requires <strong>more attention to lifecycle timing.</strong>
      </p>
      <p class="text-gray-700 dark:text-white">
        When in doubt, <strong>defer cache clearing</strong> to ensure <strong>it runs after routing</strong> transitions complete. This small adjustment can <strong>save you from subtle race conditions and improve your app's stability.</strong>
      </p>
      <p class="text-gray-700 dark:text-white">
        Happy coding! 🚀
      </p>
    </div>
  `,
  },
  {
    slug: "optimizing-react-native-for-enterprise-the-definitive-guide",
    originalURL:
      "https://dev.to/sankalan47/optimizing-react-native-for-enterprise-the-definitive-guide-o37",
    image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F1eunpg0fu0meoh02klv8.png",
    type: "react",
    title: "Optimizing React Native for Enterprise: The Definitive Guide",
    description:
      "Strategies and best practices for optimizing enterprise-scale React Native applications",
    popular: true,
    createdTime: "2025-02-25",
    author: "Sankalan Dasgupta",
    content: `
    <div class="max-w-3xl mx-auto space-y-6 tracking-normal text-gray-900 dark:text-white">
      <p class="leading-relaxed text-gray-700 dark:text-white">
        React Native has established itself as a powerful framework for building cross-platform mobile applications, allowing organizations to maintain a single codebase while targeting multiple platforms. However, as enterprise applications grow in complexity, performance optimization becomes critical for user experience and business success.
      </p>
      <p class="text-gray-700 dark:text-white">
        In this guide, I'll share strategies and best practices for optimizing enterprise-scale React Native applications, based on experiences implementing these techniques at scale.
      </p>

      <h2 class="text-2xl font-bold mt-8">Performance Metrics That Matter</h2>
      <p class="text-gray-700 dark:text-white">
        Before diving into optimization techniques, it's important to establish which metrics matter most:
      </p>
      <ul class="list-disc pl-6 text-gray-700 dark:text-white">
        <li><strong>Time to Interactive (TTI)</strong>: How quickly users can interact with your app after launch</li>
        <li><strong>Frame Rate</strong>: Maintaining a smooth 60fps for animations and scrolling</li>
        <li><strong>Memory Usage</strong>: Preventing crashes and slowdowns from excessive memory consumption</li>
        <li><strong>Bundle Size</strong>: Affecting download times and update adoption rates</li>
        <li><strong>Battery Consumption</strong>: Critical for all-day usage scenarios</li>
      </ul>

      <h2 class="text-2xl font-bold mt-8">Architecture Optimization</h2>
      <h3 class="text-xl font-semibold mt-6">Implement a Strong Component Architecture</h3>
      <p class="text-gray-700 dark:text-white">
        Large enterprise apps benefit from a thoughtful component architecture:
      </p>
      <pre class="rounded-lg p-4 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-x-auto">
        <code class="text-sm font-mono text-gray-800 dark:text-gray-200">
// A well-structured component with clear separation of concerns
const ProductCard = ({ product, onAddToCart }) => {
  const { isLoading, error, data } = useProductDetails(product.id);

  // Error and loading states handled locally
  if (isLoading) return <LoadingPlaceholder />;
  if (error) return <ErrorComponent message={error.message} />;

  return (
    <Pressable onPress={() => onAddToCart(product.id)}>
      <ProductImage source={data.imageUri} />
      <ProductInfo 
        name={data.name}
        price={data.price}
        availability={data.stock > 0 ? 'In Stock' : 'Out of Stock'}
      />
    </Pressable>
  );
};
        </code>
      </pre>

      <h3 class="text-xl font-semibold mt-6">State Management Patterns</h3>
      <p class="text-gray-700 dark:text-white">
        Choose the right state management approach based on your app's complexity:
      </p>
      <ul class="list-disc pl-6 text-gray-700 dark:text-white">
        <li><strong>Context API</strong>: For simpler state needs with moderate component nesting</li>
        <li><strong>Redux</strong>: For complex state with many interactions and middleware requirements</li>
        <li><strong>MobX</strong>: For reactive applications with complex derived state</li>
        <li><strong>Recoil</strong>: For state that depends on other state with fine-grained updates</li>
      </ul>

      <h2 class="text-2xl font-bold mt-8">Rendering Optimization</h2>
      <h3 class="text-xl font-semibold mt-6">Upgrade to FlashList for Superior List Performance</h3>
      <p class="text-gray-700 dark:text-white">
        While FlatList is React Native's standard list component, FlashList by Shopify offers significant performance improvements for enterprise applications:
      </p>
      <pre class="rounded-lg p-4 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-x-auto">
        <code class="text-sm font-mono text-gray-800 dark:text-gray-200">
import { FlashList } from '@shopify/flash-list';

// FlashList implementation
const ProductListScreen = () => {
  return (
    <FlashList
      data={products}
      renderItem={({ item }) => <ProductCard product={item} />}
      estimatedItemSize={200} // Key for performance
      keyExtractor={item => item.id}
      onEndReachedThreshold={0.5}
      onEndReached={loadMoreProducts}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={refreshData} />
      }
    />
  );
};
        </code>
      </pre>
      <p class="text-gray-700 dark:text-white"><strong>Why FlashList outperforms FlatList:</strong></p>
      <ul class="list-disc pl-6 text-gray-700 dark:text-white">
        <li>Uses cell recycling to minimize memory usage and reduce garbage collection</li>
        <li>Requires <code>estimatedItemSize</code> to pre-allocate memory more efficiently</li>
        <li>Renders off-screen items much more efficiently</li>
        <li>Maintains better scroll performance with complex list items</li>
        <li>Can improve performance by up to 10x on large lists with complex items</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6">Implement Fast Image Loading with react-native-fast-image</h3>
      <p class="text-gray-700 dark:text-white">
        Replace standard Image components with FastImage for better performance:
      </p>
      <pre class="rounded-lg p-4 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-x-auto">
        <code class="text-sm font-mono text-gray-800 dark:text-gray-200">
import FastImage from 'react-native-fast-image';

const ProductImage = ({ uri, priority = 'normal' }) => {
  return (
    <FastImage
      style={{ width: 200, height: 200 }}
      source={{
        uri: uri,
        priority: FastImage.priority[priority],
        cache: FastImage.cacheControl.immutable
      }}
      resizeMode={FastImage.resizeMode.cover}
    />
  );
};
        </code>
      </pre>
      <p class="text-gray-700 dark:text-white"><strong>Why FastImage outperforms standard Image component:</strong></p>
      <ul class="list-disc pl-6 text-gray-700 dark:text-white">
        <li>Uses native image caching libraries (SDWebImage on iOS, Glide on Android)</li>
        <li>Provides priority settings for critical images</li>
        <li>Handles image caching more efficiently</li>
        <li>Reduces memory footprint for image-heavy applications</li>
        <li>Supports progressive JPEG loading</li>
      </ul>

      <h2 class="text-2xl font-bold mt-8">Conclusion</h2>
      <p class="text-gray-700 dark:text-white">
        Optimizing enterprise React Native applications requires a systematic approach addressing architecture, rendering, networking, and build processes. By implementing these strategies—especially upgrading to high-performance libraries like FlashList and FastImage, leveraging rasterization techniques, and adopting Turbo Modules—you can deliver a premium experience to your users while maintaining developer productivity and code maintainability.
      </p>
      <p class="text-gray-700 dark:text-white">
        Optimization is an never ending process that should be guided by data. Establish performance baselines, continuously monitor real-world metrics, and focus your efforts where they'll have the greatest impact on user experience.
      </p>
    </div>
  `,
  },
];
export default reactPosts;
