/** Os três reels fecham o ciclo no mesmo instante e na mesma velocidade. */
export const REEL_SECONDS = 2.06
export const REEL_RATE = 1

export function syncReel(video: { currentTime: number; playbackRate: number }) {
  if (video.playbackRate !== REEL_RATE) video.playbackRate = REEL_RATE
  if (video.currentTime >= REEL_SECONDS) video.currentTime = 0
}
