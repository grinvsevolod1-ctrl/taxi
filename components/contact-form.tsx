"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Заявка отправлена!",
          description: "Мы свяжемся с вами в ближайшее время.",
        })
        setFormData({ name: "", phone: "", message: "" })
      } else {
        throw new Error("Failed to send")
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact-form" className="bg-muted px-4 py-12 sm:py-16">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Оставить заявку</h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">Мы свяжемся с вами в течение часа</p>
        </div>

        <Card className="border-2 border-secondary/30 p-5 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Ваше имя *
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Иван Иванов"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="h-11"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-foreground">
                Номер телефона *
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="+375 (25) 607-32-17"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="h-11"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Сообщение (необязательно)
              </label>
              <Textarea
                id="message"
                placeholder="Расскажите о своем опыте работы..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-12 w-full bg-secondary text-base font-bold text-primary hover:bg-secondary/90"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Отправка...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Отправить заявку
                </>
              )}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  )
}
