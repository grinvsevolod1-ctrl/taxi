"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
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
        onClose()
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Оставить заявку</DialogTitle>
          <DialogDescription>Мы свяжемся с вами в течение часа</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="modal-name" className="text-sm font-medium text-foreground">
              Ваше имя *
            </label>
            <Input
              id="modal-name"
              type="text"
              placeholder="Иван Иванов"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="h-11"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="modal-phone" className="text-sm font-medium text-foreground">
              Номер телефона *
            </label>
            <Input
              id="modal-phone"
              type="tel"
              placeholder="+375 (25) 607-32-17"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="h-11"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="modal-message" className="text-sm font-medium text-foreground">
              Сообщение (необязательно)
            </label>
            <Textarea
              id="modal-message"
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
            className="h-12 w-full bg-yellow-300 text-base font-bold text-gray-800 hover:bg-yellow-400"
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
      </DialogContent>
    </Dialog>
  )
}
