import type { BearerTokenDriverConfig } from './drivers/bearerToken/types'
import type { FastifyRequest } from 'fastify'

export type DriverConfig = BearerTokenDriverConfig
export interface AuthDriver {
	isAuthorized(request: FastifyRequest): Promise<boolean>
	authorize(request: FastifyRequest): Promise<void> // Throws an error if fails
}

export type Driver = 'BearerToken'
