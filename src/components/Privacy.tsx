import React from "react";

export default function Privacy() {
  return (
    <main id="top" className="relative mx-auto max-w-3xl px-6 pb-24 pt-28 text-brand-slate md:pt-32">
      <header className="mb-10">
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-brand-slate/50">
          Legal · Privacy
        </p>
        <h1 className="mb-3 font-display text-4xl font-bold tracking-tight text-brand-slate sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-brand-slate/70">
          This page explains what information RyOS receives, how it's used, and how the
          third-party providers RyOS connects to — like OpenAI and Runway — fit into that picture.
          Plain language, no filler.
        </p>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-brand-slate/50">
          <span>Last Updated: July 2026</span>
          <span>Version: 1.0</span>
          <span>Applies to: RyOS only</span>
        </div>
      </header>

      <nav
        className="mb-11 rounded-lg border border-brand-slate/10 bg-white/75 p-5 premium-shadow"
        aria-label="Table of contents"
      >
        <p className="mb-3 font-mono text-xs uppercase tracking-wider text-brand-slate/45">
          On this page
        </p>
        <ol className="columns-1 pl-5 text-sm leading-relaxed text-brand-slate/75 sm:columns-2">
          <li className="mb-1 break-inside-avoid"><a className="hover:text-brand-slate hover:underline" href="#introduction">1. Introduction</a></li>
          <li className="mb-1 break-inside-avoid"><a className="hover:text-brand-slate hover:underline" href="#information-we-receive">2. Information We Receive</a></li>
          <li className="mb-1 break-inside-avoid"><a className="hover:text-brand-slate hover:underline" href="#how-used">3. How Information Is Used</a></li>
          <li className="mb-1 break-inside-avoid"><a className="hover:text-brand-slate hover:underline" href="#third-party">4. Third-Party Services</a></li>
          <li className="mb-1 break-inside-avoid"><a className="hover:text-brand-slate hover:underline" href="#ai-processing">5. AI Processing</a></li>
          <li className="mb-1 break-inside-avoid"><a className="hover:text-brand-slate hover:underline" href="#retention">6. Data Retention</a></li>
          <li className="mb-1 break-inside-avoid"><a className="hover:text-brand-slate hover:underline" href="#security">7. Security</a></li>
          <li className="mb-1 break-inside-avoid"><a className="hover:text-brand-slate hover:underline" href="#responsibilities">8. User Responsibilities</a></li>
          <li className="mb-1 break-inside-avoid"><a className="hover:text-brand-slate hover:underline" href="#rights">9. Your Rights</a></li>
          <li className="mb-1 break-inside-avoid"><a className="hover:text-brand-slate hover:underline" href="#children">10. Children's Privacy</a></li>
          <li className="mb-1 break-inside-avoid"><a className="hover:text-brand-slate hover:underline" href="#changes">11. Changes to This Policy</a></li>
          <li className="mb-1 break-inside-avoid"><a className="hover:text-brand-slate hover:underline" href="#contact">12. Contact Information</a></li>
        </ol>
      </nav>

      <div className="space-y-9 text-[15px] leading-relaxed text-brand-slate/85">
        <section id="introduction" className="scroll-mt-24 border-t border-transparent">
          <h2 className="mb-4 flex items-baseline gap-3 font-display text-2xl font-bold tracking-tight text-brand-slate">
            <span className="font-mono text-sm font-medium text-brand-slate/40">01</span> Introduction
          </h2>
          <p className="mb-4">
            RyOS is an orchestration layer built on OpenAI's Custom GPT platform. It runs as a
            configured GPT that can, when a request calls for it, use GPT Actions to reach trusted
            third-party services to complete a task — for example, generating an image or video.
          </p>
          <p className="mb-4">
            This policy describes RyOS's own practices. It does not describe, and cannot override,
            the privacy practices of OpenAI, Runway, or any other platform or provider you interact
            with alongside RyOS. Each of those has its own privacy policy, linked where relevant below.
          </p>
          <p>
            By using RyOS, you agree to the practices described here. If you don't agree, the
            simplest option is to stop using RyOS — there's no account to delete or subscription to
            cancel on our end beyond whatever access you granted through OpenAI's platform.
          </p>
        </section>

        <section id="information-we-receive" className="scroll-mt-24 border-t border-brand-slate/10 pt-9">
          <h2 className="mb-4 flex items-baseline gap-3 font-display text-2xl font-bold tracking-tight text-brand-slate">
            <span className="font-mono text-sm font-medium text-brand-slate/40">02</span> Information We Receive
          </h2>
          <p className="mb-4">RyOS receives information in a few distinct ways:</p>

          <h3 className="mb-2 mt-5 font-display text-base font-bold text-brand-slate">What you send in conversation</h3>
          <p className="mb-4">
            Messages, instructions, files, images, or other content you submit to RyOS while using
            it, for the purpose of getting a response or completing a task.
          </p>

          <h3 className="mb-2 mt-5 font-display text-base font-bold text-brand-slate">What's needed to fulfill a request via Actions</h3>
          <p className="mb-4">
            When a request requires an external provider — for instance, asking RyOS to generate a
            video — the relevant portion of your request (a prompt, an uploaded file reference, or
            similar) is passed to that provider through a GPT Action, solely to carry out the task.
          </p>

          <h3 className="mb-2 mt-5 font-display text-base font-bold text-brand-slate">Basic website data</h3>
          <p className="mb-4">
            If you visit the RyOS website, standard technical information may be logged by our
            hosting provider — things like IP address, browser type, and page requests. This is
            common web server behavior, not something RyOS actively collects or analyzes for
            profiling.
          </p>

          <div className="my-4 rounded-lg border border-brand-slate/10 border-l-4 border-l-brand-slate bg-brand-slate/5 p-4 text-sm">
            <strong className="text-brand-slate">What RyOS does not do:</strong> RyOS does not run its own account system,
            payment processor, or advertising network, and does not knowingly collect information
            beyond what's described above.
          </div>
        </section>

        <section id="how-used" className="scroll-mt-24 border-t border-brand-slate/10 pt-9">
          <h2 className="mb-4 flex items-baseline gap-3 font-display text-2xl font-bold tracking-tight text-brand-slate">
            <span className="font-mono text-sm font-medium text-brand-slate/40">03</span> How Information Is Used
          </h2>
          <p className="mb-4">Information RyOS receives is used only to:</p>
          <ul className="mb-4 list-disc space-y-1 pl-6">
            <li>Understand and respond to your request</li>
            <li>Route the relevant part of a task to a third-party provider when one is needed to fulfill it</li>
            <li>Maintain and improve the reliability of RyOS's own behavior and instructions</li>
            <li>Diagnose problems if something breaks and you report it</li>
          </ul>
          <p className="text-sm text-brand-slate/60">
            RyOS does not use your information for advertising, does not build behavioral profiles
            to sell, and does not sell personal information — to third parties or anyone else.
          </p>
        </section>

        <section id="third-party" className="scroll-mt-24 border-t border-brand-slate/10 pt-9">
          <h2 className="mb-4 flex items-baseline gap-3 font-display text-2xl font-bold tracking-tight text-brand-slate">
            <span className="font-mono text-sm font-medium text-brand-slate/40">04</span> Third-Party Services
          </h2>
          <p className="mb-4">
            RyOS is built to connect with a small set of trusted providers through GPT Actions. As of
            this version, that includes:
          </p>
          <div className="mb-5 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-brand-slate/10">
                  <th className="py-3 pr-4 text-left font-mono text-xs font-medium uppercase tracking-wider text-brand-slate/45">Provider</th>
                  <th className="px-4 py-3 text-left font-mono text-xs font-medium uppercase tracking-wider text-brand-slate/45">Role</th>
                  <th className="py-3 pl-4 text-left font-mono text-xs font-medium uppercase tracking-wider text-brand-slate/45">Their policy</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-slate/10">
                  <td className="py-3 pr-4 align-top font-medium text-brand-slate">OpenAI</td>
                  <td className="px-4 py-3 align-top">Hosts the Custom GPT platform RyOS runs on, and processes conversation content as part of that platform</td>
                  <td className="py-3 pl-4 align-top"><a className="text-brand-slate underline underline-offset-2 hover:text-brand-slate/70" href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener">openai.com/policies/privacy-policy</a></td>
                </tr>
                <tr className="border-b border-brand-slate/10">
                  <td className="py-3 pr-4 align-top font-medium text-brand-slate">Runway</td>
                  <td className="px-4 py-3 align-top">Generates images or video when a request calls for it, via its API</td>
                  <td className="py-3 pl-4 align-top"><a className="text-brand-slate underline underline-offset-2 hover:text-brand-slate/70" href="https://runwayml.com/privacy-policy" target="_blank" rel="noopener">runwayml.com/privacy-policy</a></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-4">
            This list is expected to change over time as providers are added, replaced, or removed.
            We'll keep this section current rather than rewriting the rest of the policy each time —
            check the "Last Updated" date at the top and bottom of this page for the latest version.
          </p>
          <p>
            Once information is sent to a third-party provider to fulfill your request, that
            provider's own privacy policy and data practices govern how they handle it. RyOS doesn't
            control, and isn't responsible for, what happens to data after it leaves our layer and
            reaches theirs.
          </p>
        </section>

        <section id="ai-processing" className="scroll-mt-24 border-t border-brand-slate/10 pt-9">
          <h2 className="mb-4 flex items-baseline gap-3 font-display text-2xl font-bold tracking-tight text-brand-slate">
            <span className="font-mono text-sm font-medium text-brand-slate/40">05</span> AI Processing
          </h2>
          <p className="mb-4">
            RyOS is an AI system. Your requests are processed using OpenAI's underlying models as
            part of the Custom GPT platform, and, when applicable, by third-party generative AI
            providers such as Runway.
          </p>
          <p className="mb-4">
            Outputs — text, images, video, or otherwise — are AI-generated and can be inaccurate,
            incomplete, or unexpected. Review anything RyOS produces before relying on it or sharing
            it further, especially for decisions that matter.
          </p>
          <p>
            RyOS does not use your conversations to train its own separate models — RyOS doesn't
            operate model training infrastructure. Whether OpenAI or a connected provider uses
            interactions for their own model training is governed by their respective policies and
            settings, not by RyOS.
          </p>
        </section>

        <section id="retention" className="scroll-mt-24 border-t border-brand-slate/10 pt-9">
          <h2 className="mb-4 flex items-baseline gap-3 font-display text-2xl font-bold tracking-tight text-brand-slate">
            <span className="font-mono text-sm font-medium text-brand-slate/40">06</span> Data Retention
          </h2>
          <p className="mb-4">
            RyOS does not operate its own database of your conversations. As an orchestration layer
            running on top of OpenAI's platform, conversation history and retention are primarily
            governed by OpenAI's own retention settings and policies for the Custom GPT platform.
          </p>
          <p className="mb-4">
            Information passed to a third-party provider through a GPT Action — for example, a
            prompt sent to Runway to generate a video — is retained according to that provider's own
            retention policy, not RyOS's.
          </p>
          <p>
            Any website server logs are retained only as long as reasonably needed for security and
            operational purposes, and are not treated as a long-term record of individual activity.
          </p>
        </section>

        <section id="security" className="scroll-mt-24 border-t border-brand-slate/10 pt-9">
          <h2 className="mb-4 flex items-baseline gap-3 font-display text-2xl font-bold tracking-tight text-brand-slate">
            <span className="font-mono text-sm font-medium text-brand-slate/40">07</span> Security
          </h2>
          <p className="mb-4">
            RyOS relies on the security infrastructure of the platforms it's built on — primarily
            OpenAI's platform, and, for Actions calls, the connected provider's own API security
            (such as encrypted transport and authenticated requests).
          </p>
          <p className="mb-4">
            We take reasonable, good-faith steps to avoid introducing unnecessary risk in how RyOS is
            configured and how it routes requests. That said, no system is perfectly secure, and we
            can't guarantee absolute protection against every possible risk.
          </p>
          <div className="my-4 rounded-lg border border-brand-slate/10 border-l-4 border-l-brand-slate bg-brand-slate/5 p-4 text-sm">
            <strong className="text-brand-slate">We do not claim compliance with any specific security or privacy certification
            or framework</strong> (such as SOC 2, ISO 27001, HIPAA, or similar) unless a future
            version of this policy states otherwise explicitly.
          </div>
        </section>

        <section id="responsibilities" className="scroll-mt-24 border-t border-brand-slate/10 pt-9">
          <h2 className="mb-4 flex items-baseline gap-3 font-display text-2xl font-bold tracking-tight text-brand-slate">
            <span className="font-mono text-sm font-medium text-brand-slate/40">08</span> User Responsibilities
          </h2>
          <p className="mb-4">Using RyOS responsibly means:</p>
          <ul className="mb-4 list-disc space-y-1 pl-6">
            <li>Avoiding submission of sensitive personal information (financial account numbers, government IDs, health records, and similar) unless it's genuinely necessary for the task at hand</li>
            <li>Understanding that anything you submit may be routed to a third-party provider to complete your request, and reviewing their policies if that matters to you</li>
            <li>Complying with OpenAI's usage policies and any connected provider's terms of service when using RyOS</li>
            <li>Not using RyOS to generate content that violates the law or the terms of the platforms involved</li>
          </ul>
          <p className="text-sm text-brand-slate/60">
            You're free to stop using RyOS at any time, for any reason, with no process required on
            our end.
          </p>
        </section>

        <section id="rights" className="scroll-mt-24 border-t border-brand-slate/10 pt-9">
          <h2 className="mb-4 flex items-baseline gap-3 font-display text-2xl font-bold tracking-tight text-brand-slate">
            <span className="font-mono text-sm font-medium text-brand-slate/40">09</span> Your Rights
          </h2>
          <p className="mb-4">
            Depending on where you're located, you may have rights around information collected
            about you — for example, the right to know what's held, request deletion, or object to
            certain processing. This policy doesn't assert a specific set of rights under any
            particular law, since RyOS is used across many jurisdictions.
          </p>
          <p className="mb-4">
            For information processed by RyOS's own website (such as server logs), contact us using
            the details in <a className="text-brand-slate underline underline-offset-2 hover:text-brand-slate/70" href="#contact">Section 12</a>.
          </p>
          <p>
            For information processed by OpenAI or a connected provider like Runway once it's been
            sent to them, you'll need to use their own tools and channels — RyOS doesn't have access
            to, or control over, data once it's in their systems.
          </p>
        </section>

        <section id="children" className="scroll-mt-24 border-t border-brand-slate/10 pt-9">
          <h2 className="mb-4 flex items-baseline gap-3 font-display text-2xl font-bold tracking-tight text-brand-slate">
            <span className="font-mono text-sm font-medium text-brand-slate/40">10</span> Children's Privacy
          </h2>
          <p>
            RyOS is not directed at children and is not intended for use by anyone under the age of
            13 (or the minimum age required by your local law to use OpenAI's platform, if higher).
            We don't knowingly collect information from children. If you believe a child has used
            RyOS and provided information as a result, contact us and we'll take reasonable steps to
            address it within the scope of what RyOS controls.
          </p>
        </section>

        <section id="changes" className="scroll-mt-24 border-t border-brand-slate/10 pt-9">
          <h2 className="mb-4 flex items-baseline gap-3 font-display text-2xl font-bold tracking-tight text-brand-slate">
            <span className="font-mono text-sm font-medium text-brand-slate/40">11</span> Changes to This Policy
          </h2>
          <p className="mb-4">
            We may update this policy as RyOS changes — for example, when a new third-party provider
            is added. When we do, we'll update the "Last Updated" date and version number at the top
            and bottom of this page. Material changes will be reflected clearly in the document
            itself rather than buried in fine print.
          </p>
          <p>
            Continuing to use RyOS after an update means you accept the revised policy. If you don't
            agree with a change, stop using RyOS.
          </p>
        </section>

        <section id="contact" className="scroll-mt-24 border-t border-brand-slate/10 pt-9">
          <h2 className="mb-4 flex items-baseline gap-3 font-display text-2xl font-bold tracking-tight text-brand-slate">
            <span className="font-mono text-sm font-medium text-brand-slate/40">12</span> Contact Information
          </h2>
          <p className="mb-4">
            Questions about this policy, or about how RyOS handles information, can be sent to:
          </p>
          <p className="mb-4">
            <code className="rounded bg-brand-slate/8 px-1.5 py-0.5 font-mono text-sm">ricryan2023@gmaiil.com</code>
          </p>
          <p className="text-sm text-brand-slate/60">
            Replace this address with your actual contact channel before publishing — it's a
            placeholder.
          </p>
        </section>
      </div>

      <a className="mt-10 inline-flex text-sm text-brand-slate/55 hover:text-brand-slate" href="#top">
        ↑ Back to top
      </a>

      <footer className="mt-14 flex flex-wrap gap-x-5 gap-y-2 border-t border-brand-slate/10 pt-6 font-mono text-xs text-brand-slate/45">
        <span>Last Updated: July 2026</span>
        <span>Version: 1.0</span>
        <span>© RyOS</span>
      </footer>
    </main>
  );
}
