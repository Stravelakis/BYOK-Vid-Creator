export type AspectRatio = "9:16" | "16:9";
export type Engine = "remotion" | "ffmpeg";
export type Fps = 10 | 24 | 30;

export interface RenderSettings {
  format: AspectRatio;
  width: number;
  height: number;
  durationSec: number; // max 600 (10 min)
  engine: Engine;
}

export interface WaveformConfig {
  position: "circular" | "top" | "bottom" | "left" | "right";
  behavior: "single" | "single-colorshift" | "dual" | "dual-plus-music" | "triple";
  style: "bars" | "lines" | "wave" | "mirror" | "dots";
  colorA: string;
  colorB: string;
  colorMusic: string;
}

export interface SpeakerConfig {
  id: string;
  label: string;
  sheetUrl: string;
  bgOpacity: number;
  borderOpacity: number;
  bgColor: string;
  borderColor: string;
  x: number;
  y: number;
  size: number;
}

export interface ProjectState {
  render: RenderSettings;
  waveform: WaveformConfig;
  bgRelevancy: number;
  fps: Fps;
  speakers: SpeakerConfig[];
}
