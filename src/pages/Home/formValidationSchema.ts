import * as zod from 'zod'

export const newCycleFormSchema = zod.object({
  task: zod.string().min(1, 'Informe uma tarefa'),
  minutesAmount: zod.number().min(5).max(60, 'Informe um valor entre 5 e 60 minutos'),
})

export type NewCycleFormData = zod.infer<typeof newCycleFormSchema>
