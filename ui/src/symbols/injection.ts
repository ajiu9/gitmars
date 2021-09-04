import { InjectionKey, Ref } from 'vue'

export interface TerminalInjection {
	getTerminal?(id: string, cwd: string): any
	fitAddon?: any
}

export interface SocketInjection {
	socket?: any
	socketGitmars?: any
}

export const TerminalInjectionKey: InjectionKey<TerminalInjection> = Symbol('Terminal')
export const SocketInjectionKey: InjectionKey<SocketInjection> = Symbol('Socket')