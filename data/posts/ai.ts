import { Post } from "./index";
const aiPosts: Post[] = [
  {
  slug: "non-human-identity-security-in-the-age-of-ai-5dh5",
  image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ftyfbz1qoojksqanq24kh.png",
  type: "ai", // 根据标签 #ai 确定
  title: "Non-Human Identity Security in the Age of AI",
  description: "Exploring the security challenges and risks of non-human identities (NHIs) in an AI-driven enterprise environment.",
  popular: false, // 未明确标示为热门，假设为 false
  createdTime: "2025-02-24T18:29:46Z",
  author: "Dwayne McDaniel",
  content: `
    <div class="prose max-w-none text-gray-900 dark:text-gray-100">
      <p>It is not a coincidence that non-human identities (NHIs) have come into focus recently while AI-powered tools and autonomous agents are rapidly being adopted. In fact, this is partially what is driving the explosion of NHIs in the enterprise. This has sparked a lot of <a href="https://www.cyberark.com/resources/blog/why-machine-identities-are-essential-strands-in-your-zero-trust-strategy?ref=blog.gitguardian.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">research and conversations</a> about <a href="https://blog.gitguardian.com/identities-do-not-exist-in-a-vacuum/" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">machine identity and governance</a>.</p>

      <p>Like human users of systems, NHIs, such as AI agents, bots, scripts, and cloud workloads, operate using secrets. These credentials grant access to sensitive systems and data. They can take many forms and must always be accounted for, from creation to offboarding. Unlike humans, machines can't use multifactor authentication or passkeys, and developers can generate hundreds of these credentials through their work deploying applications.</p>

      <p>The adoption rate for AI in the enterprise has been staggering, driving developers to roll out NHIs faster than ever. AI brings with it an opportunity to help us get a lot more done more efficiently, but it also brings some real risks around privacy, secrets exposure, and insecure code. There are some amazing use cases for LLMs, but we need to remember that, like any technology, the more you add to your environment, the larger the attack surface grows. This is especially true when we give agency to these AI agents.</p>

      <p>The time to tackle NHI security in your increasingly AI-powered organization is now. Let's take a look at some of the risks associated with AI agents NHI's.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4 text-gray-900 dark:text-gray-100">
        <a name="the-nhi-risks-from-ai" href="#the-nhi-risks-from-ai"></a>
        The NHI Risks From AI
      </h2>

      <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">
        <a name="ai-agents-and-secrets-sprawl" href="#ai-agents-and-secrets-sprawl"></a>
        AI Agents and Secrets Sprawl
      </h3>

      <p>"AI agents" are LLM-based systems that decide independently how to accomplish a specified task. These are not the deterministic bots we have been using with many workflows for years, which can only perform the specific instructions the developer laid out step by step. These AI agents can access internal data sources to look up information, search the internet, and interact with other applications on behalf of the user.</p>

      <p>For example, an AI-powered procurement agent could analyze purchasing needs, compare vendors through online shopping sites, negotiate prices with AI chatbots, and even autonomously place orders if allowed. Every secure communication requires access credentials. This new agent is produced through a DevOps process, requiring even more authentication across the pipeline. Credentials commonly, accidentally, get scattered across systems, logs, and repositories along the way.</p>

      <p>It is very common to grant AI agents wider read, write, and even creation and deletion permissions than we would for deterministic bots. For traditional machine workers, we define what systems they can and can not access as part of the work we assign them to accomplish. Since AI agents are left to determine the best path for completing the job without direct supervision, we block the requested work if we scope our access too tightly. What read and write permissions will be required might not be clear from the beginning, and many teams are erroring on the side of being too permissive.</p>

      <p>A leak of any one of the many keys involved could lead to a data breach or unauthorized purchases, among other risks. Strong Non-Human Identity governance is essential to secure these AI agents. For all known and properly stored credentials in your vaults, enforce least privilege access, API key protection, and audit logging to prevent exploitation. Your strategy also needs to account for secrets that will undoubtedly be found outside of your vaults as well.</p>

      <h4 class="text-lg font-medium mt-3 mb-1 text-gray-700 dark:text-gray-300">
        <a name="orphaned-api-keys" href="#orphaned-api-keys"></a>
        Orphaned API keys
      </h4>

      <p>An orphaned API key is an API key that is no longer associated with a user account. This happens when a user leaves a company or deletes their account. Any API keys they made stay valid, but now, no one owns them, and unless properly accounted for, they are likely to never get rotated or deleted.</p>

      <p>In the world of machine identities, the question of who owns an NHI is a tricky one. Is it the person who created it? A dedicated DevOps team? Without clear ownership, the likelihood of a credential becoming orphaned and forgotten yet still allowing access is very high.</p>

      <p>A better question would be, who owns the risk associated with a breach caused or aided by these API keys?</p>

      <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">
        <a name="promptbased-architecture-and-sensitive-data-exposure" href="#promptbased-architecture-and-sensitive-data-exposure"></a>
        Prompt-Based Architecture and Sensitive Data Exposure
      </h3>

      <p>When we think of an AI assistant, we immediately think of players like ChatGPT, Gemini, and Claude, all of which use prompt-based architectures. So does GitHub Copilot. The AI models process, store, and transmit sensitive information through prompts, sending context, commands, and data to a large language model (LLM) provider. This approach makes these tools exceptionally easy to interact with, leading to rapid prototyping and tool development.</p>

      <p>This is not isolated to your development teams. In fact, as we see shadow IT become the majority of the IT spend in many organizations, the real risks of data exposure, proprietary business data, and credential leakage spread throughout the whole of the enterprise.</p>

      <p>For example, if a finance team uses an AI-powered chatbot to automate invoice processing, and their prompt contains <code class="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">Find all invoices over $100,000 in the past 6 months using API key ABC123</code>, that API key will most likely now be logged. If those logs are left in plaintext, they would allow an attacker unauthorized access to that invoicing system. Hopefully, that key is properly scoped.</p>

      <p>Safeguards need to be put in place to prevent developers and all users from embedding sensitive data in prompts and logs. Ideally, each LLM output can be scanned for information that should not be there. While defining what returned data is sensitive can be tricky, finding and eliminating secrets should be straightforward and prioritized.</p>

      <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">
        <a name="ai-agents-and-data-collection-risks" href="#ai-agents-and-data-collection-risks"></a>
        AI Agents and Data Collection Risks
      </h3>

      <p>AI agents often ingest, process, and store data from various sources, including:</p>

      <ul class="list-disc pl-6">
        <li>Cloud storage such as AWS S3 and Google Drive.</li>
        <li>Enterprise applications like Jira, Confluence, and Salesforce.</li>
        <li>Messaging systems, including Slack and Microsoft Teams.</li>
      </ul>

      <p>We need to work to keep all sensitive information, such as credentials, PII, or other private data, out of these systems. If your AI agent can access any data in these systems, then the path for an attacker to abuse this NHI also exists.</p>

      <p>The only sure way to eliminate this attack vector is to find and rotate any and all keys found throughout all internal systems around any AI agents. This includes version control systems, ticketing systems, and messaging platforms. Combined with good log sanitation, this can go a long way to keeping your secrets secret.</p>

      <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">
        <a name="aigenerated-code-and-embedded-secrets" href="#aigenerated-code-and-embedded-secrets"></a>
        AI-Generated Code and Embedded Secrets
      </h3>

      <p>AI-powered development tools like GitHub Copilot, Amazon CodeWhisperer, and Tabnine, have seen a rapid rate of adoption. Today, over 50% of developers use AI copilots to assist with coding. These tools auto-generate code snippets based on vast amounts of training data. However, this introduces a major security risk, as AI-generated code may mislead a busy developer to hardcode secrets, such as API keys, database credentials, and even OAuth tokens.</p>

      <p>For an example of an AI-generated risk, imagine a developer asks Copilot to generate an API call to a cloud service, and it produces:</p>

      <div class="highlight js-code-highlight bg-gray-100 dark:bg-gray-900 p-4 rounded">
        <pre class="highlight plaintext"><code>import requests
API_KEY = "sk_live_ABC123XYZ"
response = requests.get("https://api.example.com/data", headers={"Authorization": f"Bearer {API_KEY}"})</code></pre>
      </div>

      <p>That example code was produced by ChatGPT.</p>

      <p>While that is not a real key, a developer under a time crunch or who is not familiar with secrets security might just swap a real key for the generated one. If left unchecked, such code may get committed to version control systems, exposing credentials to attackers who gain access or anyone if the repo becomes public.</p>

      <p>This pattern is part of how <a href="https://www.gitguardian.com/state-of-secrets-sprawl-report-2024?ref=blog.gitguardian.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">secrets sprawl has continued to get worse over time</a>. We need to help developers with guardrails that help speed them along while scanning all code before committing it, as you can do with <a href="https://www.gitguardian.com/ggshield?ref=blog.gitguardian.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">GitGuardian's ggshield</a> and pre-commit hooks. Ideally, they can catch the secret before they even perform a <code class="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">git add</code> using our <a href="https://blog.gitguardian.com/visual-studio-code-extension/" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">VSCode extension</a>, which finds secrets when the file is saved.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4 text-gray-900 dark:text-gray-100">
        <a name="the-path-forward-securing-nonhuman-identities" href="#the-path-forward-securing-nonhuman-identities"></a>
        The Path Forward: Securing Non-Human Identities
      </h2>

      <p>The first step toward getting a handle on the NHIs in your organization is finding out which secrets you have. The <a href="https://www.gitguardian.com/nhi-security?ref=blog.gitguardian.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">GitGuardian Non-Human Identity Security</a> platform can automatically discover AI-agent credentials across enterprise environments. Partnering with enterprise secrets management platforms like <a href="https://blog.gitguardian.com/protect-secrets-with-cyberark-and-gitguardian-integration/" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">CyberArk's Conjur</a>, we can find all secrets inside and outside your vaults, accounting for them wherever they are and helping you properly move them to the right place.</p>

      <p><a href="https://lh7-rt.googleusercontent.com/docsz/AD_4nXfHRAvyGaUcQV_M8el2f3-RkRz0rPb-pk94z6aHnO1PI0BmrRE7gWbnPwi1M5eZRyVloBGjlfiL8vngPhjLCocjiZVTh_bgQ-GVM9YSt0YrzxIYuNG060jRx75Jcu1ogniXVA?key=1Vip9IYg-MtUUd54SvgXLLMy" target="_blank" rel="noopener noreferrer"><img src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Flh7-rt.googleusercontent.com%2Fdocsz%2FAD_4nXfHRAvyGaUcQV_M8el2f3-RkRz0rPb-pk94z6aHnO1PI0BmrRE7gWbnPwi1M5eZRyVloBGjlfiL8vngPhjLCocjiZVTh_bgQ-GVM9YSt0YrzxIYuNG060jRx75Jcu1ogniXVA%3Fkey%3D1Vip9IYg-MtUUd54SvgXLLMy" alt="GitGuardian's NHI Security" loading="lazy" width="800" height="463" class="rounded"></a></p>

      <p>Getting an accounting of these NHI credentials is the first step, but just finding a plaintext key does not tell you much about what is at risk. You still need to figure out where it goes, how it can be used, and what critical systems are accessible. This is why we introduced <a href="https://blog.gitguardian.com/secrets-analyzer/" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">GitGuardian's Secret Analyzer</a>, which automatically shows the assigned permissions of key, helping you remediate over-permissioned secrets quickly.</p>

      <p>Understanding the secrets and mapping how they interconnect will give you the insights you need to understand what each secret connects to and help you understand what is at risk if exposure does occur.</p>

      <p>GitGuardian can also prevent sensitive data from being embedded in prompts or logs. Finding these incidents in real-time can help you ensure sanitation is happening and logs are not as helpful to an attacker.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4 text-gray-900 dark:text-gray-100">
        <a name="getting-your-nhi-governance-strategy-ready-for-the-speed-of-ai" href="#getting-your-nhi-governance-strategy-ready-for-the-speed-of-ai"></a>
        Getting your NHI governance strategy ready for the speed of AI
      </h2>

      <p>There are no guarantees about what AI agents will ultimately deliver, but it is clear it is going to happen at a very accelerated pace. The complexity we are introducing now to deploy self-guiding AI agents to interact with other systems and agents brings with it a number of perils and a lot of promise for working more efficiently. We are here to help you navigate forward securely as you add more NHIs faster than ever. From automated secrets scanning to giving you insights into what your NHIs can access and with which privileges, GitGuardian is helping enterprises manage and secure non-human identities at scale.</p>

      <p>As AI adoption grows, securing machine identities is no longer optional—it’s essential. We would <a href="https://www.gitguardian.com/book-a-demo?ref=blog.gitguardian.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">love to talk about securing the AI-driven future of your organization</a>.</p>
    </div>
  `
}
];
export default aiPosts;
