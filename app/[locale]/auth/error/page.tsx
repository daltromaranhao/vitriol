"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { VitriolLogo } from "@/components/vitriol-logo";
import { AlertTriangle, ArrowLeft, RefreshCcw } from "lucide-react";

const errorMessages: Record<string, { title: string; description: string }> = {
  Configuration: {
    title: "Configuration Error",
    description: "There is a problem with the server configuration. Please contact support.",
  },
  AccessDenied: {
    title: "Access Denied",
    description: "You do not have permission to sign in.",
  },
  Verification: {
    title: "Verification Error",
    description: "The verification token has expired or has already been used.",
  },
  OAuthSignin: {
    title: "OAuth Sign In Error",
    description: "Error occurred during OAuth sign in process.",
  },
  OAuthCallback: {
    title: "OAuth Callback Error",
    description: "Error occurred during OAuth callback.",
  },
  OAuthCreateAccount: {
    title: "OAuth Account Creation Error",
    description: "Could not create OAuth account. The email may already be in use.",
  },
  EmailCreateAccount: {
    title: "Email Account Creation Error",
    description: "Could not create email account.",
  },
  Callback: {
    title: "Callback Error",
    description: "Error occurred during callback.",
  },
  OAuthAccountNotLinked: {
    title: "Account Not Linked",
    description: "This email is already associated with another account. Please sign in with your original provider.",
  },
  EmailSignin: {
    title: "Email Sign In Error",
    description: "Could not send sign in email. Please try again.",
  },
  CredentialsSignin: {
    title: "Sign In Error",
    description: "Invalid credentials. Please check your email and password.",
  },
  SessionRequired: {
    title: "Authentication Required",
    description: "Please sign in to access this page.",
  },
  Default: {
    title: "Authentication Error",
    description: "An error occurred during authentication. Please try again.",
  },
};

export default function AuthErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error") || "Default";
  const locale = useLocale();
  const t = useTranslations('auth');

  const errorInfo = errorMessages[error] || errorMessages.Default;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 px-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <VitriolLogo size={60} className="text-accent" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">Vitriol</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Global Brotherhood
          </p>
        </div>

        <Card className="border-destructive/50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-destructive/10 p-3">
                <AlertTriangle className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <CardTitle className="text-destructive">{errorInfo.title}</CardTitle>
                <CardDescription className="mt-1">
                  Error code: {error}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="rounded-md bg-muted p-4">
              <p className="text-sm text-muted-foreground">
                {errorInfo.description}
              </p>
            </div>

            {/* Specific instructions based on error */}
            {error === "Configuration" && (
              <div className="rounded-md border border-amber-500/20 bg-amber-500/10 p-4">
                <p className="text-sm text-amber-700 dark:text-amber-400">
                  <strong>Possible causes:</strong>
                  <ul className="mt-2 list-disc list-inside space-y-1">
                    <li>NEXTAUTH_URL is not configured correctly</li>
                    <li>NEXTAUTH_SECRET is missing or invalid</li>
                    <li>OAuth credentials are incorrect</li>
                  </ul>
                </p>
              </div>
            )}

            {error === "OAuthAccountNotLinked" && (
              <div className="rounded-md border border-blue-500/20 bg-blue-500/10 p-4">
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  <strong>What to do:</strong> Sign in with the method you originally used to create your account.
                </p>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex flex-col gap-3">
              <Button
                variant="accent"
                className="w-full gap-2"
                asChild
              >
                <Link href={`/${locale}/auth/login`}>
                  <RefreshCcw className="w-4 h-4" />
                  Try Again
                </Link>
              </Button>

              <Button
                variant="outline"
                className="w-full gap-2"
                asChild
              >
                <Link href={`/${locale}`}>
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Link>
              </Button>
            </div>

            {/* Support info */}
            <div className="text-center pt-4 border-t">
              <p className="text-xs text-muted-foreground">
                Need help?{" "}
                <Link 
                  href={`/${locale}/help`} 
                  className="text-accent hover:underline"
                >
                  Contact Support
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
