# 🎬 BYOK-Vid-Creator

**Bring Your Own Keys. Build cinematic, talking-avatar videos — locally, deterministically, beautifully.**

<p align="center">
  <a href="https://BYOK-Vid-Creator.stravelakis.com">Live Site</a> ·
  <a href="#features">Features</a> ·
  <a href="#quick-start">Quick Start</a> ·
  <a href="#roadmap">Roadmap</a>
</p>

---

## What is this?

BYOK-Vid-Creator is a **desktop studio** for producing narrated, subtitled,
avatar-driven videos with animated audio waveforms — in Greek and English.

It is **not** a generative-video toy. Every frame is **deterministic**:
what you arrange on the canvas is exactly what renders. You bring your own
API keys for TTS and stock media; everything runs and renders **on your
machine** via a bundled Remotion + FFmpeg pipeline.

> Designed for creators who want **repeatable, polished output** — not
> a slot machine.

## ✨ Features

- 🎙️ **Multi-provider TTS** (BYOK): Azure Speech, Google Chirp 3 HD, Edge TTS
- 👄 **Viseme lip-sync** — 9-shape mouth animation driven directly from TTS timing
- 🧑‍🤝‍🧑 **Two-speaker avatars** — round disks, transparent backgrounds, drag/resize/snap
- 📝 **Subtitle engine** — active-word glow + crisp stroke, full styling, SRT export
- 🌊 **5 waveform styles** × 5 positions × 6 behavior modes (only active speakers animate)
- 🎼 **Smart audio** — auto-ducking, Freesound/Pixabay library, pinned custom uploads
- 🎞️ **AI background automation** — contextual stock clips with a Relevancy↔Frequency dial
- 🖥️ **Local rendering** — Remotion + FFmpeg, up to 10-min videos, 9:16 & 16:9
- 🎛️ **Tactile UI** — charcoal-metal chassis, chunky clear-plastic controls, amber glow

## 🚀 Quick Start

```bash
git clone https://github.com/stravelakis/byok-vid-creator.git
cd byok-vid-creator
npm install
npm run dev

Open the Backend Panel → paste your API keys → load the “Dogs & Butterflies” sample project → hit Render.
Recommended specs: NVIDIA 8GB GPU · 32GB RAM · ~1 hr render / 10 min video.
🗺️ Roadmap
 Google Drive export
 ElevenLabs voices
 Local neural voices (Piper / Coqui XTTS-v2, incl. voice cloning)
 Expanded transition library
🤖 Built With AI
This project was designed and engineered in collaboration with AI systems:
You.com — orchestration & research
Anthropic Claude Opus 4.8 — architecture, code generation, lip-sync design
Hermes Agent — automation
Google Flow — media workflow support
Human direction & product vision: Stravelakis.
📄 License
MIT — see LICENSE.



git clone https://github.com/stravelakis/byok-vid-creator.git
cd byok-vid-creator
npm install
npm run dev
