export type AspectRatio = "9:16" | "16:9";
export type Fps = 10 | 24 | 30;

export interface RenderSettings {
  aspect: AspectRatio;
  fps: Fps;               // 10 | 24 | 30, default 30
  storage: "local" | "gdrive"; // gdrive = UI-present, day-1 disabled
}

export type Viseme =
  | "neutral" | "ah" | "ee" | "oh" | "oo"
  | "mbp" | "fv" | "l" | "chsh";

export interface Speaker {
  id: string;
  name: string;
  gender: "male" | "female";
  visemeSet: Partial<Record<Viseme, string>>; // path -> 1024x1024 PNG
  disk: { x: number; y: number; size: number };
  bgOpacity: number;      // 0..1  (0 = invisible disk)
  borderOpacity: number;  // 0..1
}

export type WaveformShape = "bars" | "line" | "wave" | "blocks" | "mirror";
export type WaveformPos = "circular" | "top" | "bottom" | "left" | "right";
export type WaveformMode =
  | "single-all" | "single-colorshift"
  | "two-speakers" | "two-speakers-music" | "three-track";

export interface WaveformConfig {
  shape: WaveformShape;
  position: WaveformPos;
  mode: WaveformMode;
  colors: string[];       // per-track colors
}

export interface ProjectState {
  render: RenderSettings;
  speakers: Speaker[];
  waveform: WaveformConfig;
  bgRelevancy: number;    // 0=fewer/longer, 1=many/faster
  minClipDuration: number;// strobe guard (seconds)
  logo?: { src: string; corner: "tl" | "tr" | "bl" | "br"; watermark: boolean };
}
