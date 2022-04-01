const statusTypes = ['EM DESENVOLVIMENTO', 'CONCLUÍDA', 'EM ATRASO','CANCELADA'] as const

type StatusTypes = typeof statusTypes[number]

export { statusTypes, StatusTypes }
