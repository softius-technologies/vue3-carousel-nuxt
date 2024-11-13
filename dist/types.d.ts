import type { NuxtModule } from '@nuxt/schema'

import type { default as Module } from './module'

export type ModuleOptions = typeof Module extends NuxtModule<infer O> ? Partial<O> : Record<string, any>

export { type CarouselOptions, default } from './module'
