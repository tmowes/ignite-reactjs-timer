export type StatusProps = {
  statusColor: keyof typeof STATUS_COLORS
}

export const STATUS_COLORS = {
  green: 'green-500',
  yellow: 'yellow-500',
  red: 'red-500',
} as const
