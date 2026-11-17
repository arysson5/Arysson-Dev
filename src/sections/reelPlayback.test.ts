import { describe, expect, it } from 'vitest'
import { REEL_RATE, REEL_SECONDS, syncReel } from './reelPlayback'

describe('reprodução dos reels', () => {
  it('mantém a mesma velocidade e reinicia todos no mesmo segundo', () => {
    const video = { currentTime: 0, playbackRate: 4 }
    syncReel(video)
    expect(video.playbackRate).toBe(REEL_RATE)
    expect(video.currentTime).toBe(0)

    video.currentTime = REEL_SECONDS
    syncReel(video)
    expect(video.currentTime).toBe(0)
    expect(video.playbackRate).toBe(1)
  })
})