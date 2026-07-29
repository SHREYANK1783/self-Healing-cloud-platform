import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { ArrowRight, BrainCircuit, Eye, EyeOff, Globe, Loader2, ShieldCheck, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const loginSchema = z.object({
  email: z.string().trim().email({ message: "Please enter a valid email address." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
})

export function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isGoogleLoading, setIsGoogleLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    window.localStorage.setItem("isAuthenticated", "true")
    console.log(values)
    navigate("/dashboard")
  }

  async function onGoogleSignIn() {
    setIsGoogleLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 900))
    setIsGoogleLoading(false)
    window.localStorage.setItem("isAuthenticated", "true")
    navigate("/dashboard")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="w-full max-w-md"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.08 }}
        className="relative overflow-hidden rounded-[28px] border border-white/60 bg-card/80 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.16)] backdrop-blur-xl sm:p-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.18),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.18),_transparent_38%)]" />
        <div className="relative">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                <BrainCircuit className="h-7 w-7" />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">Secure sign-in</p>
                <p className="text-xs text-muted-foreground">AI-assisted cloud monitoring</p>
              </div>
            </div>
            <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600">
              <span className="mr-1">●</span> Online
            </div>
          </div>

          <div className="mb-6 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-foreground">Welcome back</h1>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Sign in to manage healing workflows, monitor anomalies, and recover faster.
            </p>
          </div>

          <div className="mb-5 rounded-2xl border border-primary/10 bg-primary/5 p-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 font-medium text-foreground">
              <ShieldCheck className="mr-1 h-4 w-4 text-primary" />
              MFA-ready access with encrypted sessions and instant insights.
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            className="mb-4 w-full justify-center border-border/70 bg-background/80 hover:bg-accent"
            onClick={onGoogleSignIn}
            disabled={isGoogleLoading}
          >
            {isGoogleLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Globe className="mr-2 h-4 w-4" />}
            Continue with Google
          </Button>

          <div className="mb-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <span className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">or sign in with email</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="admin@self-healing-cloud.com" {...field} className="bg-secondary/50 h-11" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel>Password</FormLabel>
                      <Link to="/forgot-password" className="text-xs font-medium text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <FormControl>
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          {...field}
                          className="h-11 bg-secondary/50 pr-12"
                        />
                      </FormControl>
                      <button
                        type="button"
                        onClick={() => setShowPassword((value) => !value)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-foreground"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center justify-between rounded-2xl bg-secondary/60 px-3 py-2 text-sm text-muted-foreground">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-border text-primary focus:ring-primary" />
                  <span>Keep me signed in</span>
                </label>
                <div className="flex items-center gap-1 font-medium text-primary">
                  <Sparkles className="h-4 w-4" />
                  Fast access
                </div>
              </div>

              <Button type="submit" className="mt-2 w-full rounded-2xl bg-primary py-3 text-base font-semibold shadow-lg shadow-primary/20 transition hover:-translate-y-0.5" disabled={isLoading}>
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <ArrowRight className="mr-2 h-4 w-4" />}
                Sign In
              </Button>
            </form>
          </Form>

          <div className="mt-6 flex items-center justify-center">
            <p className="text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="font-semibold text-primary hover:underline">
                Request access
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
