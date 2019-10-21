declare module 'easing-utils' {
    export function linear(t: number): number
    export function easeInSine(t: number): number
    export function easeOutSine(t: number): number
    export function easeInOutSine(t: number): number
    export function easeInQuad(t: number): number
    export function easeOutQuad(t: number): number
    export function easeInOutQuad(t: number): number
    export function easeInCubic(t: number): number
    export function easeOutCubic(t: number): number
    export function easeInOutCubic(t: number): number
    export function easeInQuart(t: number): number
    export function easeOutQuart(t: number): number
    export function easeInOutQuart(t: number): number
    export function easeInQuint(t: number): number
    export function easeOutQuint(t: number): number
    export function easeInOutQuint(t: number): number 
    export function easeInExpo(t: number): number
    export function easeOutExpo(t: number): number
    export function easeInOutExpo(t: number): number
    export function easeInCirc(t: number): number
    export function easeOutCirc(t: number): number
    export function easeInOutCirc(t: number): number
    export function easeInBack(t: number, magnitude?: number): number
    export function easeOutBack(t: number, magnitude?: number): number
    export function easeInOutBack(t: number, magnitude?: number): number
    export function easeInElastic(t: number, magnitude?: number): number
    export function easeOutElastic(t: number, magnitude?: number): number
    export function easeInOutElastic(t: number, magnitude?: number): number
    export function easeOutBounce(t: number): number
    export function easeInBounce(t: number): number
    export function easeInOutBounce(t: number): number
}