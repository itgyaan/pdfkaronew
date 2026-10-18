'use client';

import { useTranslations } from 'next-intl';
import { Cookie, Shield, HardDrive, CheckCircle2 } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { type Locale } from '@/lib/i18n/config';

interface CookiesPageClientProps {
  locale: Locale;
}

export default function CookiesPageClient({ locale }: CookiesPageClientProps) {
  const t = useTranslations();

  const cookieHighlights = [
    {
      icon: Shield,
      title: 'Zero Tracking Cookies',
      description: 'We do not use advertising, marketing, or cross-site tracking cookies.',
    },
    {
      icon: HardDrive,
      title: 'Local Storage Only',
      description: 'Preferences like theme and language are saved locally in your browser, never sent to a server.',
    },
    {
      icon: CheckCircle2,
      title: 'Full User Control',
      description: 'You can clear your cookies and local storage anytime directly from your browser settings.',
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-950 mb-6">
                <Cookie className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--color-foreground))] mb-6">
                Cookie Policy
              </h1>
              <p className="text-lg text-[hsl(var(--color-muted-foreground))]">
                Learn how {t('common.brand')} uses cookies and local storage to provide a fast, secure, and private experience.
              </p>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-12 bg-[hsl(var(--color-muted)/0.3)]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {cookieHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="p-6 text-center" hover>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-950/60 mb-4">
                      <Icon className="h-6 w-6 text-amber-600 dark:text-amber-400" />
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

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-8">
                Last updated: October 2026
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                1. What Are Cookies?
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                Cookies are small text files stored on your computer or mobile device by websites that you visit. They are commonly used to remember preferences, enhance website functionality, and improve user experience.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                2. How We Use Cookies & Local Storage
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                {t('common.brand')} strictly adheres to privacy-by-design principles:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--color-muted-foreground))] mb-4">
                <li><strong>Essential Preferences:</strong> We use minimal storage to remember your chosen language and display theme (light/dark mode).</li>
                <li><strong>Recent Tools History:</strong> For your convenience, your browser may save the list of tools you recently used in your browser&apos;s local storage. This data is never sent to our servers.</li>
                <li><strong>No Advertising Cookies:</strong> We do not deploy third-party advertising networks, marketing pixels, or tracking cookies that monitor your browsing habits across different websites.</li>
              </ul>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                3. Managing and Disabling Cookies
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                Most web browsers allow you to manage your cookie preferences through their settings. You can choose to block all cookies, delete existing cookies, or receive a notification whenever a cookie is set.
              </p>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                Please note that because {t('common.brand')} processes files entirely in your browser using WebAssembly and client-side memory, blocking cookies will not affect your ability to convert, merge, or edit your PDF files.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                4. Contact Us
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                If you have questions regarding our Cookie Policy, please reach out through our Contact page.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  );
}
