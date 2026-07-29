import { useState } from "react"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { BrainCircuit, Loader2, MailCheck } from "lucide-react"

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
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const forgotSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
})

export function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const form = useForm<z.infer<typeof forgotSchema>>({
    resolver: zodResolver(forgotSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit() {
    setIsLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    setIsLoading(false)
    setIsSent(true)
  }

  return (
    <Card className="w-full max-w-md border-border/50 shadow-xl bg-card/80 backdrop-blur-xl animate-in zoom-in-95 duration-500">
      <CardHeader className="space-y-2 text-center pb-6">
        <div className="flex justify-center mb-4 md:hidden">
          <div className="p-3 bg-primary/10 rounded-full">
            <BrainCircuit className="h-8 w-8 text-primary" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold tracking-tight">
          {isSent ? "Check your email" : "Forgot Password"}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {isSent
            ? "We have sent a password reset link to your email."
            : "Enter your email address and we will send you a reset link."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isSent ? (
          <div className="flex flex-col items-center justify-center space-y-4 py-4">
            <div className="h-20 w-20 bg-emerald-500/10 rounded-full flex items-center justify-center">
              <MailCheck className="h-10 w-10 text-emerald-500" />
            </div>
            <Link to="/login" className="w-full">
              <Button className="w-full" variant="outline">Return to login</Button>
            </Link>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="admin@Self_Healing_Cloud.com" {...field} className="bg-secondary/50" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full mt-2" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Send Reset Link
              </Button>
            </form>
          </Form>
        )}
      </CardContent>
      {!isSent && (
        <CardFooter className="flex justify-center border-t p-6">
          <p className="text-sm text-muted-foreground">
            Remember your password?{" "}
            <Link to="/login" className="font-semibold text-primary hover:underline">
              Sign In
            </Link>
          </p>
        </CardFooter>
      )}
    </Card>
  )
}
