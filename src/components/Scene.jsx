import Spline from '@splinetool/react-spline'

export default function Scene() {
  return (
    <div className="w-full h-[300px] md:h-[420px] rounded-2xl overflow-hidden border border-emerald-300/40 shadow-inner">
      <Spline
        scene="https://prod.spline.design/8wNVPU0Y5v1oxp9U/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}
