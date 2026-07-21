import { useProjectStore } from "./store/useProjectStore";
import { PlasticButton } from "./components/ui/PlasticButton";
import BackendPanel from "./components/settings/BackendPanel";
import { Fps } from "./store/types";

const FPS_OPTIONS: Fps[] = [10, 24, 30];

export default function App() {
  const fps = useProjectStore((s) => s.fps);
  const setFps = useProjectStore((s) => s.setFps);
  const render = useProjectStore((s) => s.render);
  const setRender = useProjectStore((s) => s.setRender);

  const isPortrait = render.format === "9:16";

  return (
    <div className="h-full w-full flex gap-3 p-3 bg-metal-900">
      {/* LEFT RAIL */}
      <aside className="panel-metal w-72 p-5 flex flex-col gap-7 overflow-y-auto">
        <h1 className="label-lit font-display uppercase tracking-[0.2em] text-sm">
          BYOK · Vid Creator
        </h1>

        <div>
          <div className="label-etched mb-2">Frame Rate</div>
          <div className="flex gap-2">
            {FPS_OPTIONS.map((f) => (
              <PlasticButton key={f} active={fps === f} onClick={() => setFps(f)}>
                {f}
              </PlasticButton>
            ))}
          </div>
        </div>

        <div>
          <div className="label-etched mb-2">Aspect Ratio</div>
          <div className="flex gap-2">
            <PlasticButton
              active={render.format === "9:16"}
              onClick={() => setRender({ format: "9:16", width: 1080, height: 1920 })}
            >
              9:16
            </PlasticButton>
            <PlasticButton
              active={render.format === "16:9"}
              onClick={() => setRender({ format: "16:9", width: 1920, height: 1080 })}
            >
              16:9
            </PlasticButton>
          </div>
        </div>
      </aside>

      {/* CENTER PREVIEW */}
      <main className="panel-metal flex-1 grid place-items-center p-6">
        <div
          className="slot-recessed grid place-items-center"
          style={{
            aspectRatio: isPortrait ? "9 / 16" : "16 / 9",
            height: isPortrait ? "80%" : "auto",
            width: isPortrait ? "auto" : "80%",
          }}
        >
          <span className="label-etched text-center leading-relaxed">
            {render.format} · {fps} FPS
            <br />
            {render.width}×{render.height}
          </span>
        </div>
      </main>

      {/* RIGHT PANEL — API keys */}
      <aside className="panel-metal w-96 overflow-y-auto">
        <BackendPanel />
      </aside>
    </div>
  );
}
