"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(5, "Assunto deve ter pelo menos 5 caracteres"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Aqui você pode integrar com um serviço de email como EmailJS, SendGrid, etc.
      // Por enquanto, vamos simular um envio
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("Dados do formulário:", data);
      
      // Simular sucesso
      setSubmitStatus('success');
      reset();
      
      // Reset status após 5 segundos
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      setSubmitStatus('error');
      
      // Reset status após 5 segundos
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="contact-form"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form-group">
          <label htmlFor="name">Nome *</label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className={errors.name ? "error" : ""}
            placeholder="Seu nome completo"
          />
          {errors.name && (
            <span className="error-message">{errors.name.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={errors.email ? "error" : ""}
            placeholder="seu@email.com"
          />
          {errors.email && (
            <span className="error-message">{errors.email.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="subject">Assunto *</label>
          <input
            id="subject"
            type="text"
            {...register("subject")}
            className={errors.subject ? "error" : ""}
            placeholder="Assunto da mensagem"
          />
          {errors.subject && (
            <span className="error-message">{errors.subject.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensagem *</label>
          <textarea
            id="message"
            {...register("message")}
            className={errors.message ? "error" : ""}
            placeholder="Sua mensagem..."
            rows={5}
          />
          {errors.message && (
            <span className="error-message">{errors.message.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div className="spinner"></div>
              Enviando...
            </>
          ) : (
            <>
              <Send size={16} />
              Enviar Mensagem
            </>
          )}
        </button>

        {submitStatus === 'success' && (
          <motion.div
            className="alert alert-success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <CheckCircle size={20} />
            Mensagem enviada com sucesso! Entrarei em contato em breve.
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            className="alert alert-error"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <AlertCircle size={20} />
            Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.
          </motion.div>
        )}
      </form>
    </motion.div>
  );
} 