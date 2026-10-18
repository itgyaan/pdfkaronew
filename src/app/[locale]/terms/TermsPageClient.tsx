'use client';

import { useTranslations } from 'next-intl';
import { Scale, ShieldCheck, Cpu, HardDrive, CheckCircle2, AlertTriangle, FileText, Lock } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { type Locale } from '@/lib/i18n/config';

interface TermsPageClientProps {
  locale: Locale;
}

export default function TermsPageClient({ locale }: TermsPageClientProps) {
  const t = useTranslations();

  const termsHighlights = [
    {
      icon: Cpu,
      title: 'Browser-Based Execution',
      description: 'All document conversion, editing, and compression run locally inside your browser via WebAssembly.',
    },
    {
      icon: HardDrive,
      title: 'Zero File Storage',
      description: 'Your files are never uploaded to or stored on our servers. Your documents remain entirely in your control.',
    },
    {
      icon: ShieldCheck,
      title: '100% Document Ownership',
      description: 'You retain full intellectual property ownership of all files you process using our tools.',
    },
    {
      icon: Scale,
      title: 'Free & Transparent',
      description: 'No hidden paywalls, no forced account creation, and completely transparent terms of usage.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[hsl(var(--color-primary)/0.1)] via-[hsl(var(--color-background))] to-[hsl(var(--color-secondary)/0.1)] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-950 mb-6">
                <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--color-foreground))] mb-6">
                Terms of Service
              </h1>
              <p className="text-lg text-[hsl(var(--color-muted-foreground))]">
                Please read these Terms of Service carefully before using {t('common.brand')}. 
                By using our platform, you agree to these terms.
              </p>
            </div>
          </div>
        </section>

        {/* Terms Highlights */}
        <section className="py-12 bg-[hsl(var(--color-muted)/0.3)]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {termsHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="p-6 text-center" hover>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-950/60 mb-4">
                      <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="font-semibold text-[hsl(var(--color-foreground))] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                      {item.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-8">
                Last updated: October 2026
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                By accessing, browsing, or using {t('common.brand')} (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;, or the &quot;Service&quot;), available at https://www.pdfkaro.in, you acknowledge that you have read, understood, and agree to be legally bound by these Terms of Service (&quot;Terms&quot;) and our Privacy Policy. If you do not agree to these Terms, please discontinue using the Service immediately.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                2. Nature of the Service & Client-Side Architecture
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                {t('common.brand')} provides an extensive suite of browser-based PDF utilities (such as merging, splitting, compressing, converting, editing, OCR, and securing PDF files).
              </p>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                Our technology utilizes client-side WebAssembly (Wasm) and JavaScript. This means:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--color-muted-foreground))] mb-4">
                <li>Your documents are processed locally on your computing device.</li>
                <li>Your files are never transmitted to, uploaded to, or stored on our servers.</li>
                <li>We do not monitor, read, alter, or retain any copies of the documents you process.</li>
                <li>Processing performance depends directly on the computational capabilities of your device and browser.</li>
              </ul>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                3. User Content & Intellectual Property Ownership
              </h2>
              <h3 className="text-xl font-semibold text-[hsl(var(--color-foreground))] mt-6 mb-3">
                3.1 Your Files
              </h3>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                You retain all right, title, and interest (including any intellectual property rights) in and to any files, documents, text, images, or content that you process using {t('common.brand')}. We claim zero ownership or rights over your files.
              </p>

              <h3 className="text-xl font-semibold text-[hsl(var(--color-foreground))] mt-6 mb-3">
                3.2 Platform Intellectual Property
              </h3>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                All software, user interface design, logos, brand names, visual styling, source code, and website assets of {t('common.brand')} are the exclusive property of {t('common.brand')} and are protected by applicable intellectual property, copyright, and trademark laws.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                4. Permitted & Acceptable Use
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                You may use {t('common.brand')} for personal, academic, professional, or commercial purposes, subject to the following rules:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--color-muted-foreground))] mb-4">
                <li>You must have the legal right, authorization, and ownership to process any files you use with the Service.</li>
                <li>You must not use the Service for any unlawful, infringing, fraudulent, or harmful purpose.</li>
                <li>You must not attempt to reverse engineer, disassemble, or tamper with the website or distribute malware through the platform.</li>
                <li>You must not deploy automated bots, scrapers, or overload attacks that disrupt or degrade service availability for other users.</li>
              </ul>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                5. Disclaimer of Warranties
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT ANY WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, {t('common.brand')} EXPRESSLY DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                We make no warranty that the tools will meet all your requirements, that processed documents will be free of formatting inconsistencies, or that operations will be uninterrupted or error-free. We strongly advise users to maintain backup copies of original documents before processing.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL {t('common.brand')}, ITS CREATORS, OPERATORS, OR AFFILIATES BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES (INCLUDING LOSS OF DATA, LOSS OF PROFITS, BUSINESS INTERRUPTION, OR FILE CORRUPTION) ARISING OUT OF OR IN CONNECTION WITH YOUR ACCESS TO OR USE OF (OR INABILITY TO USE) THE SERVICE.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                7. Third-Party Links & Services
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                The Service may contain links or references to third-party websites or services. We do not endorse, control, or assume any responsibility for the content, privacy policies, or practices of any third-party websites.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                8. Modifications to the Service and Terms
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                We reserve the right to modify, suspend, or discontinue any feature or aspect of {t('common.brand')} at any time without prior notice. We may also revise these Terms periodically. Any updates will take effect immediately upon being posted on this page. Your continued use of the Service following any revisions constitutes your acceptance of the updated Terms.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                9. Governing Law
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Any legal disputes arising in relation to these Terms shall be subject to the exclusive jurisdiction of the competent courts in India.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                10. Contact Us
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                If you have any questions, feedback, or concerns regarding these Terms of Service, please reach out to us via our Contact page.
              </p>
            </div>
          </div>
        </section>

        {/* Security / Privacy Trust Banner */}
        <section className="py-12 bg-[hsl(var(--color-muted)/0.3)]">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 rounded-lg">
                <Lock className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <div className="text-left">
                  <p className="font-semibold text-blue-900 dark:text-blue-200">
                    Client-Side Security Guaranteed
                  </p>
                  <p className="text-sm text-blue-700 dark:text-blue-400">
                    Your files never leave your device. Complete privacy and zero data harvesting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  );
}
