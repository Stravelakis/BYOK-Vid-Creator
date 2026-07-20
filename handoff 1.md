📄 HANDOFF DOC (paste this into your new clean chat)
PROJECT: BYOK-Vid-Creator — Handoff v1 URL: https://BYOK-Vid-Creator.stravelakis.com · GitHub live · README live. What it is: Desktop app (Electron) that turns a script into a polished 8–10 min video with TTS narration, lip-synced avatar disks, glowing waveforms, highlighted subtitles, and auto-fetched stock backgrounds. Deterministic (Remotion render), NOT generative video.
Target machine (RECOMMENDED spec): 8GB NVIDIA GPU, 32GB RAM, AMD CPU. ~1hr render for 10min acceptable. Render at 10fps.
LOCKED STACK:
Electron + React + Vite + TypeScript + Tailwind (dark only)
Zustand sliced store (src/store/slices/*) = source of truth
framer-motion for canvas drag/resize
Remotion (native, GPU) = video renderer (deterministic)
FFmpeg (native bundled binary) = audio mix + ducking + final mux
TTS: Coqui XTTS v2 (MAIN, Python sidecar, GPU, Greek+English, voice cloning) · Azure Neural (quality fallback, SSML prosody only) · Piper (test fallback). Edge/ElevenLabs/Voxtral = DROPPED.
Chunking/scene AI: GLM-5.2 via NVIDIA provider (BYOK)
Media: Pixabay + Pexels (video, music, SFX)
Alignment: whisperX (word timestamps) + G2P → 9-viseme map
Audio FX: pedalboard (Python) for character voices + warmth
KEY DECISIONS:
Accents come from XTTS reference clips + audio post-FX (pitch/formant), NOT SSML. Azure uses SSML prosody/break only, never per-phoneme surgery.
Visemes: 9 slots (neutral, ah, ee, oh, oo, mbp, fv, l, chsh). PNG 1024×1024, transparent, head LOCKED position across all frames. Named char_<viseme>.png.
Avatar = round disk, face fills 90%, independent bg-opacity + border-opacity sliders (0 = invisible disk).
UI theme: charcoal-metal panels + clear-plastic amber-glow controls, pure CSS (tokens in tailwind.config). Stability > wow, but wow is the goal.
PRIORITY ORDER: Stability > Functionality > Output quality > UI wow.
UI FUTURE-STUB (must appear in UI Day 1, disabled): Google Drive export. Local disk export = active.
PHASE PLAN:
✅ Phase 1: scaffold (package.json, tailwind theme, store index + speaker slice, electron main) — DONE / committing.
⬜ Phase 1b: remaining 6 store slices + App shell (left accordion rail, center canvas, bottom timeline) + tactile components (PlasticButton, MetalSlider, Panel).
⬜ Phase 2: script→SSML maker + TTS sidecar + XTTS integration + audio FX chain.
⬜ Phase 3: alignment → viseme + subtitle word-highlight timing.
⬜ Phase 4: waveform engine (5 styles, positional configs, behavioral modes).
⬜ Phase 5: Pixabay/Pexels background automation + relevancy/frequency slider (min-duration constraint).
⬜ Phase 6: Remotion composition + FFmpeg mux + ducking + export (local + GDrive stub).
⬜ Phase 7: presets, sample "Dogs & Butterflies" project, polish.
CREDITS (in README): You.com, Claude Opus 4.8, Hermes agent, Google Flow.
