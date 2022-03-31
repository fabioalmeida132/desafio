const statusTypes = ['EM DESENVOLVIMENTO', 'CONCLUÍDO', 'EM ATRASO','CANCELADO'] as const

type StatusTypes = typeof statusTypes[number]

export { statusTypes, StatusTypes }
