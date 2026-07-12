import React from "react";
import { motion } from "motion/react";
import { FolderOpen, FileText, Code, MessageSquare, GitBranch, Bot } from "lucide-react";

export default function AdvancedUsage() {
  const useCases = [
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Previous chat sessions",
      description: "Paste Ryos at the start of a continuing conversation. The AI picks up your preferences without re-explaining context."
    },
    {
      icon: <FolderOpen className="w-5 h-5" />,
      title: "Project folders",
      description: "Include Ryos in your project documentation alongside README files, design docs, and contribution guides."
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Documents & writing",
      description: "Use Ryos when drafting reports, proposals, or technical documentation. It keeps tone and structure consistent."
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "Codebases",
      description: "Add Ryos to your repository's AI context file. Consistent code review style, commit conventions, and architectural decisions."
    },
    {
      icon: <Bot className="w-5 h-5" />,
      title: "Coding assistants",
      description: "Works with GitHub Copilot, Cursor, and other AI coding tools that accept custom instructions or system prompts."
    },
    {
      icon: <GitBranch className="w-5 h-5" />,
      title: "AI project workspaces",
      description: "Use Ryos in Claude Projects, Custom GPTs, or Gemini Gems. One configuration across all your AI workspaces."
    }
  ];

  return (
    <section id="advanced" className="py-32 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-slate/8 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-18">
          <motion.span 
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-wider text-brand-slate/40 font-semibold inline-block mb-4"
          >
            Going Further
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-slate mb-5 leading-[1.1]"
          >
            Ryos works wherever<br />
            <span className="text-brand-slate/50">you work.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-brand-slate/50 text-base leading-relaxed max-w-lg mx-auto"
          >
            Once you're comfortable with the basics, Ryos integrates into every part of your workflow. Here are the most common patterns.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((useCase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: 0.1 + idx * 0.06 }}
              className="p-6 rounded-2xl border border-brand-slate/5 bg-[#FAF9F6] hover:border-brand-slate/12 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-brand-slate/8 flex items-center justify-center mb-4 text-brand-slate/45">
                {useCase.icon}
              </div>
              <h3 className="font-display font-bold text-brand-slate text-sm mb-2">
                {useCase.title}
              </h3>
              <p className="text-brand-slate/50 text-xs leading-relaxed font-sans">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Optional note about depth */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12 text-xs text-brand-slate/35 font-sans"
        >
          Ryos is designed to scale with you. Start simple. Add complexity when you need it.
        </motion.p>
      </div>
    </section>
  );
}
