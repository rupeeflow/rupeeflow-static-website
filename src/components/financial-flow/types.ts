import type * as THREE from 'three'
import type { ModuleFlowType } from '@/data/financialFlowNetwork'

export type NodeKind = 'center' | 'main' | 'sub'

export interface FlowNode {
  mesh: THREE.Mesh
  glowMesh: THREE.Mesh
  id: string
  label: string
  color: string
  flowType: ModuleFlowType | 'center'
  kind: NodeKind
  parentId?: string
  basePos: THREE.Vector3
  targetPos: THREE.Vector3
  currentPos: THREE.Vector3
  targetScale: number
  currentScale: number
  targetOpacity: number
  currentOpacity: number
  isHovered: boolean
  floatPhase: number
}

export interface FlowLine {
  line: THREE.Line
  fromId: string
  toId: string
  color: string
  targetOpacity: number
  currentOpacity: number
  flowDirection: FlowDirection
}

export interface FlowStreak {
  mesh: THREE.Mesh
  fromId: string
  toId: string
  t: number
  speed: number
  direction: 1 | -1
}

export type FlowDirection = 'in' | 'out' | 'both'

export interface EngineRefs {
  wrap: HTMLDivElement
  canvas: HTMLCanvasElement
  labelsDiv: HTMLDivElement
}
