"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Code2, Play, Download, Copy, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const codeSnippets = [
  {
    title: "Initialize SDK",
    code: `import { Lumien } from '@lumien/sdk';

const client = new Lumien({
  apiKey: process.env.LUMIEN_API_KEY,
  environment: 'sandbox'
});`,
  },
  {
    title: "Create Transaction",
    code: `const transaction = await client.transactions.create({
  amount: 50000,
  currency: 'INR',
  sourceAccount: 'acc_123',
  destinationAccount: 'acc_456',
  description: 'Fund transfer'
});

console.log(transaction.id);`,
  },
  {
    title: "Compliance Check",
    code: `const compliance = await client.compliance.verify({
  transactionId: transaction.id,
  checkTypes: ['kyc', 'aml', 'sanctions']
});

if (compliance.status === 'approved') {
  await client.transactions.process(transaction.id);
}`,
  },
];

export default function DevelopersStudioPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-gradient-to-br from-black to-slate-900 border-b border-white/5">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="bg-primary/20 p-2 rounded-lg">
              <Code2 className="text-primary w-6 h-6" />
            </div>
            <span className="text-primary font-mono text-sm tracking-tighter">
              /developers/studio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Developer Studio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mb-8"
          >
            Interactive code playground for Lumien API. Test integrations, 
            explore SDK methods, and generate compliant banking code snippets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4"
          >
            <Button variant="outline" className="border-white/20 hover:bg-white/5 text-white">
              <Play className="mr-2 w-4 h-4" />
              Launch Studio
            </Button>
            <Button variant="outline" className="border-white/10 text-white">
              <Download className="mr-2 w-4 h-4" />
              Download SDK
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* Code Playground */}
      <Section className="py-20">
        <div className="container px-4">
          <h2 className="text-2xl font-bold text-white mb-8">Code Snippets</h2>
          
          <div className="grid gap-6">
            {codeSnippets.map((snippet, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-black/50 border border-white/10 rounded-xl overflow-hidden"
              >
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
                  <span className="text-white font-medium">{snippet.title}</span>
                  <button
                    onClick={() => copyCode(snippet.code, i)}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {copiedIndex === i ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-green-500">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 overflow-x-auto">
                  <code className="text-sm font-mono text-muted-foreground">
                    {snippet.code}
                  </code>
                </pre>
              </motion.div>
            ))}
          </div>

          {/* Coming Soon Banner */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-2xl text-center"
          >
            <h3 className="text-xl font-bold text-white mb-2">
              Interactive Playground Coming Soon
            </h3>
            <p className="text-muted-foreground">
              Test API calls in real-time with our sandbox environment.
            </p>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
